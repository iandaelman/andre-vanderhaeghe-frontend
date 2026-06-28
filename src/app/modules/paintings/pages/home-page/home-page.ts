import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { from } from 'rxjs/internal/observable/from';
import { PaintingComponent } from '../../components/painting/painting';
import { PaintingModel } from '../../models/painting.model';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, PaintingComponent],
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
