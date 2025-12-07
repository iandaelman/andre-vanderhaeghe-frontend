import { Component, OnInit } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';
import { ActivatedRoute } from '@angular/router';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-painting-details',
  imports: [],
  templateUrl: './painting-details.html',
  styleUrl: './painting-details.css',
})
export class PaintingDetails implements OnInit {
  painting!: PaintingModel;

  constructor(private route: ActivatedRoute, private paintingService: PaintingsService) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.painting = this.paintingService.getPaintingById(id);
  }
}
