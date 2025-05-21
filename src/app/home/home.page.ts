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
  iconPage:string="";

  lastUpgradeTime:string="10:10:10,1-1-2023"

  constructor(
    public myService:GettingInfoService,
    private readonly router: Router,
    public locationService:CurrentLocationService,
    private readonly alertController: AlertController
    ) {

  }

  ngOnInit(): void {
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
    this.locationPlace=this.city+","+this.state+","+this.country;
    let response=await this.myService.getAllData(this.locationPlace);
    console.log("received:"+JSON.stringify(response));
    console.log("size:"+Object.keys(response).length);
    if(Object.keys(response).length===0){
      this.temperature=0;
      this.humidity=0;
      this.pressure=0;
      this.feels_like=0;
      this.iconPage = '';
      this.presentAlert();
      return 0;
    }

    let receivedData=JSON.parse(JSON.stringify(response));

    console.log("temp received:"+receivedData.current.temp_c)
    console.log("feel received:"+receivedData.current.feelslike_c)
    this.temperature=receivedData.current.temp_c;
    let conditionLocal=JSON.parse(JSON.stringify(receivedData.current.condition));
    this.humidity=receivedData.current.humidity;
    this.pressure=receivedData.current.pressure_mb;
    this.feels_like=receivedData.current.feelslike_c;

    this.iconPage = conditionLocal.icon;


    this.city=receivedData.location.name;
    this.state=receivedData.location.region;
    this.country=receivedData.location.country;

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
