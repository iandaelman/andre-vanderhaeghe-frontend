import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PaintingsService } from '../../services/paintings.service';
import { Painting } from '../../components/painting/painting';
import { rxResource } from '@angular/core/rxjs-interop';
import { PaintingModel } from '../../models/painting.model';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, Painting],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private paintingService = inject(PaintingsService);

  public paintings = this.paintingService.paintings;

  protected paintingsResource = rxResource<PaintingModel[], void>({
    stream: () => from(this.paintingService.loadPaintings()),
  });
}
