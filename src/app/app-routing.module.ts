import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sets',
    pathMatch: 'full'
  },
  {
    path: 'sets',
    loadChildren: () => import('./pages/sets/sets/sets.module').then( m => m.SetsPageModule)
  },
  {
    path: 'card-list',
    loadChildren: () => import('./pages/cardList/card-list/card-list.module').then( m => m.CardListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
