import { Component, inject, OnInit, signal } from '@angular/core';
import { PaintingModel } from '../../models/painting.model';
import { ActivatedRoute } from '@angular/router';
import { PaintingsService } from '../../services/paintings.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Header } from '../../../../core/header/header';
import { Footer } from '../../../../core/footer/footer';

@Component({
  selector: 'app-painting-details-page',
  imports: [MatExpansionModule, Header, Footer],
  templateUrl: './painting-details-page.html',
  styleUrl: './painting-details-page.css',
})
export class PaintingDetailsPage implements OnInit {
  private id!: number;
  protected painting = signal<PaintingModel | undefined>(undefined);

  private route: ActivatedRoute = inject(ActivatedRoute);
  private paintingService: PaintingsService = inject(PaintingsService);

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.painting.set(this.paintingService.getPaintingById(this.id));
  }
}
