import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string) {
    const api_key = "1d096d0e3a10d49b2763b4ae2d0b0a3f";
    console.log(location + 'hh')
    const url = 'http://api.weatherstack.com/current?access_key='+api_key+'&query=';
    return this.http.get(
      url + location
    );
  }
}
