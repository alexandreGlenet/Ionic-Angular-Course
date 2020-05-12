import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  // 2-Ici je vais ajouter mes Lieux chargés.
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];


  // 1-Je vais injecter mon service Places dans l'attribut de mon constructor ( grace notamment à l'injectable qui se trouve dans le places.service (qui est mis automatiquement))
  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    // 3 - je vais définir ce lieuchargé comme égal à ce service de lieux qui est une propriété de cette classe 
    // car j'ai ajouté private devant l'argument du constructeur qui lie automatiquement cet argument 
    // à une propriété privée de la classe portant le même nom et donc ici dans un service de lieux, 
    // Je peux accéder aux lieux qui utilisent ce lieu getter que j'ai défini.
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

}
