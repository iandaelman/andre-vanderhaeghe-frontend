import { Component, input } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting',
  imports: [],
  templateUrl: './painting.html',
  styleUrl: './painting.css',
})
export class Painting {
  painting = input.required<PaintingModel>();

  constructor(private router: Router) {}

  onClickToDetailPage(paitingId: number) {
    this.router.navigate(['/painting-details', paitingId]);
  }
}
