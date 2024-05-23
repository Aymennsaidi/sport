import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match: any = { scoreOne: 1, scoreTwo: 0, teamOne: 'PSG', teamTwo: 'ATM' };
  constructor() { }

  ngOnInit(): void {
  }

}
