import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { PaintingModel } from './../models/painting.model';
@Service()
export class PaintingsService {
  private dataUrl = 'assets/data/paintings.json';

  private httpClient = inject(HttpClient);

  // Cache van alle ongefilterde data
  private allPaintings = signal<PaintingModel[]>([]);
  public paintings = signal<PaintingModel[]>([]);

  public async loadPaintings(period?: string): Promise<PaintingModel[]> {
    try {
      // Alleen ophalen als we nog niets in cache hebben
      if (this.allPaintings().length === 0) {
        const response = await lastValueFrom(this.httpClient.get<PaintingModel[]>(this.dataUrl));
        const sortedData = this.sortPaintings(response);
        this.allPaintings.set(sortedData);
      }

      // Filter altijd toepassen op basis van de huidige period
      const filtered = period
        ? this.allPaintings().filter((painting) => painting.category === period)
        : this.allPaintings();

      this.paintings.set(filtered);
      return filtered;
    } catch (err) {
      console.error('Not able to fetch the paintings', err);
      this.paintings.set([]);
      return [];
    }
  }

  private sortPaintings(data: PaintingModel[]): PaintingModel[] {
    return data.sort((a, b) => {
      const titleCompare = a.titleNL.localeCompare(b.titleNL);
      if (titleCompare !== 0) return titleCompare;

      const categoryCompare = a.category.localeCompare(b.category);
      if (categoryCompare !== 0) return categoryCompare;

      return a.length * a.width - b.length * b.width;
    });
  }
  public getPaintingById(id: number): PaintingModel | undefined {
    const paintings = this.paintings();
    // Als paintings nog niet geladen zijn, return undefined
    if (paintings.length === 0) {
      return undefined;
    }
    // Als paintings wel geladen zijn maar painting niet gevonden
    const painting = paintings.find((p) => p.id === id);
    if (!painting) {
      throw new Error(`Painting met Id ${id} werd niet gevonden`);
    }
    return painting;
  }
}
