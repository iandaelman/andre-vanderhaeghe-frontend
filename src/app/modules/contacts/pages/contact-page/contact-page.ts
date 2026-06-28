import { Component } from '@angular/core';
import { Header } from '../../../../core/header/header';
import { Footer } from '../../../../core/footer/footer';

@Component({
  selector: 'app-contact-page',
  imports: [Header, Footer],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {}
