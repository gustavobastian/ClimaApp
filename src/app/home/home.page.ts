import { Component, OnInit } from '@angular/core';
import { GettingInfoService } from '../services/gettingInfo/getting-info.service';

import { Router } from '@angular/router';
import { CurrentLocationService } from '../services/currentLocation/current-location.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  temperature:number=0;
  feels_like:number=0;
  pressure:number=0;
  humidity:number=0;
  locationPlace:string= "Santo Tome,Santa Fe,Argentina";
  city:string="";
  state:string="";
  country:string="";
  icon:string="";

  lastUpgradeTime:string="10:10:10,1-1-2023"

  constructor(
    public myService:GettingInfoService,
    private router: Router,
    public locationService:CurrentLocationService,
    private alertController: AlertController
    ) {

  }

  ngOnInit(): void {
    ///throw new Error('Method not implemented.');
    console.log("here");
    this.city=this.locationService.currentLocation.get_city();
    this.state=this.locationService.currentLocation.get_state();
    this.country=this.locationService.currentLocation.get_country();
    this.lastUpgradeTime= new Date().toISOString();
  }

  ionViewWillEnter(){
    this.city=this.locationService.currentLocation.get_city();
    this.state=this.locationService.currentLocation.get_state();
    this.country=this.locationService.currentLocation.get_country();
    this.lastUpgradeTime= new Date().toISOString();
    this.onClick();

  }

  async onClick():Promise<number>{
    console.log("clicked");
    this.locationPlace=this.city+","+this.state+","+this.country;
    let response=await this.myService.getAllData(this.locationPlace);
    console.log("received:"+JSON.stringify(response));
    console.log("size:"+Object.keys(response).length);
    if(Object.keys(response).length===0){
      this.temperature=0;
      this.humidity=0;
      this.pressure=0;
      this.feels_like=0;
      this.icon="";
      this.presentAlert();
      return 0;
    }

    let receivedData=JSON.parse(JSON.stringify(response));
    console.log("temp received:"+receivedData.temp_c)
    console.log("feel received:"+receivedData.feelslike_c)
    this.temperature=receivedData.temp_c;
    let conditionLocal=JSON.parse(JSON.stringify(receivedData.condition));
    this.humidity=receivedData.humidity;
    this.pressure=receivedData.pressure_mb;
    this.feels_like=receivedData.feelslike_c;

    this.icon=conditionLocal.icon;
    this.lastUpgradeTime= new Date().toISOString();
    return 1;
  }



  onEdit(){
    this.router.navigate(['/city-page']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ciudad No encontrada',
      subHeader: 'Chequear todos los campos',
      message: 'Corregir y volver a intentar.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  goInfo(){
    this.router.navigate(['/info-page']);
  }
}
