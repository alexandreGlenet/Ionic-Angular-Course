import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';

import { PlaceDetailPage } from './place-detail.page';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetailPageRoutingModule
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent] // Un composant d'entrée est un composant que Angular charge impérativement (ce qui signifie que vous ne le référencez pas dans le modèle), par type. Vous spécifiez un composant d'entrée en l'amorçant dans un NgModule ou en l'incluant dans une définition de routage.
})
export class PlaceDetailPageModule {}
