import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';
import { ActivatedRoute } from '@angular/router';
import { PaintingsService } from '../../services/paintings.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Header } from '../../../../core/header/header';

@Component({
  selector: 'app-painting-details-page',
  imports: [MatExpansionModule, Header],
  templateUrl: './painting-details-page.html',
  styleUrl: './painting-details-page.css',
})
export class PaintingDetailsPage implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private paintingService: PaintingsService = inject(PaintingsService);

  private id = signal<number | undefined>(undefined);

  protected painting = computed(() => {
    const paintingId = this.id();
    if (!paintingId) return undefined;

    try {
      return this.paintingService.getPaintingById(paintingId);
    } catch (err) {
      return undefined;
    }
  });

  ngOnInit(): void {
    this.id.set(+this.route.snapshot.paramMap.get('id')!);
  }
}
