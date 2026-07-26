import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../../../core/header/header';

@Component({
  selector: 'app-period-page',
  imports: [RouterLink, Header],
  templateUrl: './period-page.html',
  styleUrl: './period-page.css',
})
export class PeriodPage {
  protected periods = [
    {
      id: 'Rood-Blauw',
      label: 'Rood-Blauw',
      image: 'assets/images/Schilderijen/AndreVanderhaeghe-5.jpg',
    },
    {
      id: 'Sensualisme',
      label: 'Sensualisme',
      image: 'assets/images/Schilderijen/AndreVanderhaeghe-25.jpg',
    },
    {
      id: 'Het fantastische droomlandschap',
      label: 'Het fantastische droomlandschap',
      image: 'assets/images/Schilderijen/AndreVanderhaeghe-14.jpg',
    },
    {
      id: 'Design',
      label: 'Design',
      image: 'assets/images/Schilderijen/AndreVanderhaeghe-44.jpg',
    },
  ];
}
