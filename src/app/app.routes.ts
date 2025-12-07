import { Routes } from '@angular/router';
import { HomePage } from './modules/paintings/pages/home-page/home-page';
import { PaintingDetailsPage } from './modules/paintings/pages/painting-details-page/painting-details-page';
import { BiographyPage } from './modules/biography/pages/biography-page/biography-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'painting-details/:id',
    component: PaintingDetailsPage,
  },
  {
    path: 'bio',
    component: BiographyPage,
  },
];
