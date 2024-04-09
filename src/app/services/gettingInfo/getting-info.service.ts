import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GettingInfoService {
  urlApi =environment.urlApi;
  key=environment.apiWeather;

  constructor(private _http: HttpClient) { }

  async getAllData(location:string): Promise<JSON[]> {
      let location_buff=location.split(',');

      let location_data=location_buff[0];
      if(location_buff[1]!=""){
        location_data=location_data+","+location_buff[1];
      }
      if(location_buff[2]!="") {
        location_data=location_data+","+location_buff[2];
      }

      const response = this._http.get(this.urlApi + this.key+ '&q='+location_data);
      const data = await lastValueFrom(response);
      let dataTemp=JSON.parse(JSON.stringify(data));


      console.log(JSON.stringify(dataTemp));


      let locationLocal= (dataTemp.location.name+","+dataTemp.location.region+","+dataTemp.location.country).toUpperCase();
      let locationUpper=location.toUpperCase();
      console.log(locationUpper);
      console.log(locationLocal);


     /* if(locationLocal!=locationUpper){
        return JSON.parse(JSON.stringify({}));
      }*/


      return dataTemp;
  }}
