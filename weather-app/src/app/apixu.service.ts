import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string) {
    console.log(location + 'hh')
    const url = 'http://api.weatherstack.com/current?access_key=6d0e1a108ad59d4c564722373844cf20&query=';
    return this.http.get(
      url + location
    );
  }
}
