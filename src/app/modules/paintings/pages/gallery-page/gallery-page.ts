import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { from } from 'rxjs/internal/observable/from';
import { Header } from '../../../../core/header/header';
import { PaintingComponent } from '../../components/painting/painting';
import { PaintingModel } from '../../models/painting.model';
import { PaintingsService } from '../../services/paintings.service';

@Component({
  selector: 'app-gallery-page',
  imports: [PaintingComponent, Header],
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
