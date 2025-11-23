import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private paintingService = inject(PaintingsService);

  public paintings = this.paintingService.paintings;
  onAction1: any;

  ngOnInit(): void {
    this.paintingService.loadPaintings();
  }
}
