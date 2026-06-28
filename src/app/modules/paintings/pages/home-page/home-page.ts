import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  protected navigationLinks = [
    { label: 'Gallerij', route: '/gallerij' },
    { label: 'Biografie', route: '/biografie' },
    { label: 'Contact', route: '/contact' },
  ];
}
