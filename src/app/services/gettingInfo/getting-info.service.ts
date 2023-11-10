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
      const response = this._http.get(this.urlApi + this.key+ '&q='+location);
      const data = await lastValueFrom(response);
      let dataTemp=JSON.parse(JSON.stringify(data));


      console.log(JSON.stringify(dataTemp.location.name));

      let locationLocal= (dataTemp.location.name+","+dataTemp.location.region+","+dataTemp.location.country).toUpperCase();
      let locationUpper=location.toUpperCase();
      console.log(locationUpper);
      console.log(locationLocal);


      if(locationLocal!=locationUpper){
        return JSON.parse(JSON.stringify({}));
      }


      return dataTemp.current;
  }}
