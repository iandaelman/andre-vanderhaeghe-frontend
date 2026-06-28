import { Component } from '@angular/core';
import { Footer } from '../../../../core/footer/footer';
import { Header } from '../../../../core/header/header';

@Component({
  selector: 'app-biography-page',
  imports: [Footer, Header],
  templateUrl: './biography-page.html',
  styleUrl: './biography-page.css',
})
export class BiographyPage {}
