import { Routes } from '@angular/router';
import { HomePage } from './modules/paintings/pages/home-page/home-page';
import { PaintingDetailsPage } from './modules/paintings/pages/painting-details-page/painting-details-page';
import { BiographyPage } from './modules/biography/pages/biography-page/biography-page';
import { ContactPage } from './modules/contacts/pages/contact-page/contact-page';
import { GalleryPage } from './modules/paintings/pages/gallery-page/gallery-page';
import { PeriodPage } from './modules/paintings/pages/period-page/period-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'André Vanderhaeghe | Belgisch surrealistisch kunstenaar',
  },
  {
    path: 'galerij',
    component: PeriodPage,
    title: 'Galerij | Schilderijen van André Vanderhaeghe',
  },
  {
    path: 'galerij/periode',
    component: GalleryPage,
    title: 'Oeuvre per periode | André Vanderhaeghe',
  },
  {
    path: 'schilderij/:id',
    component: PaintingDetailsPage,
    title: 'Schilderij | André Vanderhaeghe',
  },
  {
    path: 'biografie',
    component: BiographyPage,
    title: 'André Vanderhaeghe biografie | Surrealistisch kunstenaar',
  },
  {
    path: 'contact',
    component: ContactPage,
    title: 'Contact | André Vanderhaeghe',
  },
];
