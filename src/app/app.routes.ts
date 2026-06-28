import { Routes } from '@angular/router';
import { HomePage } from './modules/paintings/pages/home-page/home-page';
import { PaintingDetailsPage } from './modules/paintings/pages/painting-details-page/painting-details-page';
import { BiographyPage } from './modules/biography/pages/biography-page/biography-page';
import { ContactPage } from './modules/contacts/pages/contact-page/contact-page';
import { GalleryPage } from './modules/paintings/pages/gallery-page/gallery-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'gallerij',
    component: GalleryPage,
  },
  {
    path: 'painting-details/:id',
    component: PaintingDetailsPage,
  },
  {
    path: 'biografie',
    component: BiographyPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
];
