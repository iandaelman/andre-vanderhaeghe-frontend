import { PaintingModel } from './../../models/painting.model';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PaintingsService } from '../../services/paintings.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  readonly paintingList = signal<PaintingModel[]>([]);

  constructor(private paintingService: PaintingsService) {
    const paintingSignal = toSignal(this.paintingService.getPaintings(), { initialValue: [] });

    this.paintingList.set(paintingSignal());
  }
}
