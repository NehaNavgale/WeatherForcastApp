// import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) {}
  currentWeatherData;
  currentDate;
  forecastData;
  cityName;
  forecastFlag = 0;
  public loadMessage = true;
  errorMessageText = 'The state code or the city name you have entered is incorrect. Please add valid state code and city name.';
  submitWeatherParameters(data) {
    this.http.get('https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?' +
      'username=f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text=Chicken').
    subscribe(respDataCondition => {
      this.loadMessage = false;
      this.currentWeatherData = respDataCondition;
      this.cityName = 'Current Weather Report in ' + respDataCondition['current_observation']['display_location']['city'];
      this.currentDate = Date.now();
      this.http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/' + data.state + '/' + data.city + '.json').
      subscribe((respData) => { this.forecastFlag = 1;
        this.forecastData = respData['hourly_forecast'];
      }, error => {});
    }, error => {});
  }
  ngOnInit() {
  }

}
