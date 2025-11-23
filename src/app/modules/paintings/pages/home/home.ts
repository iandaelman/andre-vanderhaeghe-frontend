import { PaintingsService } from './../../services/paintings.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Painting } from '../../components/painting/painting';
import { PaintingModel } from '../../models/painting.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Painting],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  private _destroy = new Subject<void>();
  paintingList: PaintingModel[] = [];
  constructor(private paintingService: PaintingsService) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.paintingService
      .getPaintings()
      .pipe(takeUntil(this._destroy))
      .subscribe((data: PaintingModel[]) => {
        this.paintingList = data;
      });
  }
}
