import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':lang',
    children: [],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sr',
  },
  {
    path: '**',
    redirectTo: 'sr',
  },
];
