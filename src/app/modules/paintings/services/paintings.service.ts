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
        this.paintings.set(data);
      },
      error: (err) => {
        console.error('Not able to fetch the paintings', err);
      },
    });
  }

  getPaintingById(id: number): PaintingModel | undefined {
    return this.paintings().find((p) => p.id === id);
  }
}
