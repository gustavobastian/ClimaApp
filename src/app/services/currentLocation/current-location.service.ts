import { Injectable } from '@angular/core';
import { Location } from "../../models/location"

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {
  public currentLocation:Location = new Location("","","");
  constructor() {
    this.currentLocation.set_city("Santo Tome");
    this.currentLocation.set_country("Argentina");
    this.currentLocation.set_state("Santa Fe");
   }
}

