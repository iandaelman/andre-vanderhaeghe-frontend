import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { PaintingModel } from '../../models/painting.model';

@Component({
  selector: 'app-painting',
  imports: [],
  templateUrl: './painting.html',
  styleUrl: './painting.css',
})
export class Painting {
  painting = input.required<PaintingModel>();

  private router: Router = inject(Router);

  onClickToDetailPage(paitingId: number) {
    this.router.navigate(['/painting-details', paitingId]);
  }
}
