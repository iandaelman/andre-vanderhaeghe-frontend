import { PaintingModel } from './../models/painting.model';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  private dataUrl = 'assets/data/paintings.json';

  private httpClient = inject(HttpClient);

  public paintings = signal<PaintingModel[]>([]);

  public async loadPaintings(): Promise<PaintingModel[]> {
    if (this.paintings().length > 0) {
      return this.paintings();
    }
    try {
      const response = await lastValueFrom(this.httpClient.get<PaintingModel[]>(this.dataUrl));
      const sortedData = this.sortPaintings(response);
      this.paintings.set(sortedData);
    } catch (err) {
      console.error('Not able to fetch the paintings', err);
      this.paintings.set([]);
    } finally {
      return this.paintings();
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
