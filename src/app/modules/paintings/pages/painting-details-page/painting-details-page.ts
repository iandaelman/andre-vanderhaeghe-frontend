import { Component, OnInit, Signal } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';
import { ActivatedRoute } from '@angular/router';
import { PaintingsService } from '../../services/paintings.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-painting-details-page',
  imports: [MatExpansionModule],
  templateUrl: './painting-details-page.html',
  styleUrl: './painting-details-page.css',
})
export class PaintingDetailsPage implements OnInit {
  private id!: number;
  painting!: Signal<PaintingModel | undefined>;

  constructor(private route: ActivatedRoute, private paintingService: PaintingsService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.painting = this.paintingService.getPaintingById(this.id);
    this.paintingService.loadPaintings();
  }
}
