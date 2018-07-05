import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    const Url =
    'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/def742e9cffcb6a5d9770b4ebcd0b468/61.777086,9.163728';

   return this.http.get<any>(Url);
}
}
