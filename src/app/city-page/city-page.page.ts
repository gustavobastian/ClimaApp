import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLocationService } from '../services/currentLocation/current-location.service';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.page.html',
  styleUrls: ['./city-page.page.scss'],
})
export class CityPagePage implements OnInit {






  public cityForm = new FormGroup({
    cityValue: new FormControl("Santo Tome"),
    stateValue: new FormControl("Santa Fe"),
    countryValue: new FormControl("argentina")
  });

  constructor(private router: Router,public locationService:CurrentLocationService) {
    console.log("constructing")
  }

  ngOnInit() {
    console.log("on init")
  }

  return(){
    //this.locationService.currentLocation.set_city(this.cityForm.value.cityValue);
   /* console.log(this.cityForm.value.cityValue);
    console.log(this.cityForm.value.stateValue);
    console.log(this.cityForm.value.countryValue);*/
    let valueLocal=JSON.parse(JSON.stringify(this.cityForm.value));

    this.locationService.currentLocation.set_city(valueLocal.cityValue);
    this.locationService.currentLocation.set_state(valueLocal.stateValue);
    this.locationService.currentLocation.set_country(valueLocal.countryValue);
    console.log(JSON.stringify(this.locationService.currentLocation))
    this.router.navigate(['/home'])
  }
}
