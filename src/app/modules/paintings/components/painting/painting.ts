import { Component, input } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';

@Component({
  selector: 'app-painting',
  imports: [],
  templateUrl: './painting.html',
  styleUrl: './painting.css',
})
export class Painting {
  painting = input.required<PaintingModel>();

  onClickToDetailPage() {
    throw new Error('Method not implemented.');
  }
}
