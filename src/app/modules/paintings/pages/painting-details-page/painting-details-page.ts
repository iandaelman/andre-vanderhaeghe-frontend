import { Component } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';
import { ActivatedRoute } from '@angular/router';
import { PaintingsService } from '../../services/paintings.service';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-painting-details-page',
  imports: [MatExpansionModule],
  templateUrl: './painting-details-page.html',
  styleUrl: './painting-details-page.css',
})
export class PaintingDetailsPage {
  painting!: PaintingModel;

  constructor(private route: ActivatedRoute, private paintingService: PaintingsService) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.painting = this.paintingService.getPaintingById(id);
  }
}
