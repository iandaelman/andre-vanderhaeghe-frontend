import { Component, inject } from '@angular/core';
import { PaintingsService } from '../../services/paintings.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { PaintingModel } from '../../models/painting.model';
import { from } from 'rxjs/internal/observable/from';
import { PaintingComponent } from '../../components/painting/painting';

@Component({
  selector: 'app-gallery-page',
  imports: [PaintingComponent],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage {
  private paintingService = inject(PaintingsService);

  public paintings = this.paintingService.paintings;

  protected paintingsResource = rxResource<PaintingModel[], void>({
    stream: () => from(this.paintingService.loadPaintings()),
  });
}
