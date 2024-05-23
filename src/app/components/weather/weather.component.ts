import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  searchForm!: FormGroup;
  apiResult: any = {};
  constructor(private fbuilder: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.searchForm = this.fbuilder.group({
      city: ["", [Validators.required]],
    });
  }

  search() {
    console.log("here obj", this.searchForm.value);
    this.weatherService.search(this.searchForm.value).subscribe((result)=>{
      console.log('here response from api',result.apiRes);
      this.apiResult=result.apiRes;
    });
  }
}
