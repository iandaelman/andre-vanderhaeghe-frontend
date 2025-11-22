import { Routes } from '@angular/router';
import { HomePage } from './modules/paintings/pages/home-page/home-page';
import { PaintingDetailsPage } from './modules/paintings/pages/painting-details-page/painting-details-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'painting-details/:id',
    component: PaintingDetailsPage,
  },
];
