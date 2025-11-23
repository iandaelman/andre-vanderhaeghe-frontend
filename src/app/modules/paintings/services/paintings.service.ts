import { PaintingModel } from './../models/painting.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
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

  getPaintingById(id: number): PaintingModel | undefined {
    return this.paintings().find((p) => p.id === id);
  }
}
