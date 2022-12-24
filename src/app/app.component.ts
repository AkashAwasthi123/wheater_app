import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  WeatherData:any
  public search_data:any
  constructor(private service:ServiceService) { }
  ngOnInit():void {
    this.apicall()
  }

  apicall(){
    this.service.getData().subscribe((res)=>{
      try {
        if(res){
          this.WeatherData=res
        const sunsetTime=new Date(this.WeatherData.sys.sunset * 1000)
        this.WeatherData.sunnset_time=sunsetTime.toLocaleDateString()
        let currentDate=new Date()
        this.WeatherData.is_day=(currentDate.getTime() < sunsetTime.getTime())
        this.WeatherData.temp_celcius =(this.WeatherData.main.temp - 273.15).toFixed(0);            
        this.WeatherData.temp_min =(this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max =(this.WeatherData.main.temp_max - 273.15).toFixed(0);
        this.WeatherData.temp_feels_like =(this.WeatherData.main.feels_like - 273.15).toFixed(0);
        }  
      } catch (error) {
        console.log(error);
      }
    })
  }

  call(value:any){
    this.service.data_come=value
    this.apicall()
    this.search_data=''
  }
}
