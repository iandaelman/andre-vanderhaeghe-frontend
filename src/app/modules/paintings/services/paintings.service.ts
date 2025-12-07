import { PaintingModel } from './../models/painting.model';
import { HttpClient } from '@angular/common/http';
import { computed, Injectable, Signal, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  private dataUrl = 'assets/data/paintings.json';

  public paintings = signal<PaintingModel[]>([]);

  constructor(private http: HttpClient) {}

  loadPaintings(): void {
    if (this.paintings().length > 0) {
      return;
    }

    this.http.get<PaintingModel[]>(this.dataUrl).subscribe({
      next: (data) => {
        const sortedData = this.sortPaintings(data);
        this.paintings.set(sortedData);
      },
      error: (err) => {
        console.error('Not able to fetch the paintings', err);
      },
    });
  }

  sortPaintings(data: PaintingModel[]): PaintingModel[] {
    return data.sort((a, b) => {
      const categoryCompare = a.category.localeCompare(b.category);
      if (categoryCompare !== 0) return categoryCompare;

      const titleCompare = a.title.localeCompare(b.title);
      if (titleCompare !== 0) return titleCompare;

      return a.length * a.width - b.length * b.width;
    });
  }

  getPaintingById(id: number): Signal<PaintingModel | undefined> {
    return computed(() => {
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
    });
  }
}
