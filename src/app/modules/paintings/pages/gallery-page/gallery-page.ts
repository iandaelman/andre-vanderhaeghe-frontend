import { Component, inject, computed } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
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
  private route = inject(ActivatedRoute);

  public paintings = this.paintingService.paintings;

  // Signal that tracks the current query params
  private queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  // Derived signal for the `type` param specifically
  protected periode = computed(() => this.queryParams().get('periode') ?? undefined);

  // Resource reacts automatically when `type` changes
  protected paintingsResource = rxResource<PaintingModel[], string | undefined>({
    params: () => this.periode() ?? '',
    stream: ({ params }) => from(this.paintingService.loadPaintings(params)),
  });
}
