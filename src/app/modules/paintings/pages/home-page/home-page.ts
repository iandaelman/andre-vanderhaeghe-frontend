import { Component, inject, OnInit } from '@angular/core';
import { PaintingsService } from '../../services/paintings.service';
import { PaintingModel } from './../../models/painting.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private paintingService = inject(PaintingsService);

  public paintings = this.paintingService.paintings;

  ngOnInit(): void {
    this.paintingService.loadPaintings();
  }
}
