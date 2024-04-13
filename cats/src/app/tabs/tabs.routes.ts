import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'supporters',
        loadComponent: () =>
          import('../supporters/supporters.page').then(
            (m) => m.SupportersPage
          ),
      },
      {
        path: 'cats',
        loadComponent: () =>
          import('../cats/cats.page').then((m) => m.CatsPage),
      },
      {
        path: 'informations',
        loadComponent: () =>
          import('../informations/informations.page').then(
            (m) => m.InformationsPage
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
