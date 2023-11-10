export class Location{

  private _city: string;
  private _state: string;
  private _country: string;

  constructor(city:string,state:string,country:string){
    this._city=city;
    this._state=state;
    this._country=country;
  }
  public get_city():string{
    return this._city;
  }
  public get_country():string{
    return this._country;
  }
  public get_state():string{
    return this._state;
  }

  public set_city(city:string):void{
     this._city=city;
  }
  public set_country(country:string):void{
     this._country=country;
  }
  public set_state(state:string):void{
    this._state=state;
  }

}
