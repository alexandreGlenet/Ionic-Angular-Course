import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private __places: Place[] = []; // Je précise que mes __places seront de types Place qui vient de mon modèle.

  get places() {
    // Donc ici je retourne une copie de mon tableau __places 
    // afin de pouvoir modifier places mais pas __places.
    // On pourra le modifier à partir d'autre endroits où nous avons accès à ce tableau.
    // Après cela je vais ajouter un model.ts de place.
    return [...this.__places]; 
  }

  constructor() { }
}
