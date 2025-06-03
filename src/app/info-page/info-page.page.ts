import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLocationService } from '../services/currentLocation/current-location.service';
import { GettingInfoService } from '../services/gettingInfo/getting-info.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  constructor(
    public myService:GettingInfoService,
    private readonly router: Router,
    public locationService:CurrentLocationService
    ) {
      console.log("building")
    }

  ngOnInit() {
    console.log("on Info page")
  }
  goHome(){
    console.log(JSON.stringify(this.locationService.currentLocation))
    this.router.navigate(['/home']);
  }
}
