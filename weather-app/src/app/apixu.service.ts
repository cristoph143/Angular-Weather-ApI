import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=6d0e1a108ad59d4c564722373844cf20&q=' + location
    );
}
}
