import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // Je précise que mes __places seront de types Place qui vient de mon modèle.
  private __places: Place[] = [
    // Je peux me créer des données fictives ici. 
    new Place (
      'P1',
      'Manhattan Square',
      'En plein coeur de New York City',
      'https://r-cf.bstatic.com/images/hotel/max1024x768/403/40322050.jpg',
      149.99
    ),
    new Place(
      'P2',
      'Suites Brando',
      'Nouvelles suites à Bora Bora',
      'https://pagtour.info/wp-content/uploads/2018/01/Capture-d%C2%B9%C3%A9cran-2018-01-09-%C3%A0-10.05.06.png',
      549.85
    ),
    new Place(
      'P3',
      "Château d'Eltz",
      "City-trip au chateau d'Eltz en Allemagne",
      'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
      549.85
    ),
    
  ]; 

  get places() {
    // Donc ici je retourne une copie de mon tableau __places 
    // afin de pouvoir modifier places mais pas __places.
    // On pourra le modifier à partir d'autre endroits où nous avons accès à ce tableau.
    // Après cela je vais ajouter un model.ts de place.
    return [...this.__places];
    
  }

  constructor() { }

  getPlace(id: string) {
    return {...this.__places.find(p => p.id === id)};
  }
}
