import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'places/tabs/discover', pathMatch: 'full' }, // Ici redirection
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, )//{ preloadingStrategy: PreloadAllModules }) ICI j'ai enlever le preloadingStrategy: preloadAllModules pour avoir un chargement paresseux effectifs au changement d'onglets, exemple quand je clique sur  offers on voit bien que offers va charger dans source network.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
