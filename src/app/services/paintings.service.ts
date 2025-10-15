import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PaintingModel } from '../models/painting.model';

@Injectable({
  providedIn: 'root',
})
export class PaintingsService {
  private dataUrl = 'assets/data/paintings.json';

  constructor(private http: HttpClient) {}

  getPaintings(): Observable<PaintingModel[]> {
    return this.http.get<PaintingModel[]>(this.dataUrl);
  }

  getPaintingById(id: number): Observable<PaintingModel | undefined> {
    return this.getPaintings().pipe(map((paintings) => paintings.find((p) => p.id === id)));
  }
}
