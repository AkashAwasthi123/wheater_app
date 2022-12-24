import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data_come:any
  constructor(private http: HttpClient) { }

  getData(){
    if(this.data_come){
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.data_come}&unit=metric&appid=f63890d13f3b491f31e14ab8d24cfc2c`)
    }else{
      return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=delhi&unit=metric&appid=f63890d13f3b491f31e14ab8d24cfc2c")
    }
    
  }
}
