import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {
    this.weatherSearchForm = formBuilder.group({
      location: [""]
    })
  }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues: { location: string; }) {
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(
      (data: any) => {
        this.weatherData = data;
      },
      (err: any) => console.error(err),
      () => console.log("done")
    );
    console.log(this.weatherData + " weather data" + formValues.location);
  }
}
