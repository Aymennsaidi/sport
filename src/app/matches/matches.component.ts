import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab: any = [
    { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: 'RMD', teamTwo: 'FCB' },
    { id: 2, scoreOne: 2, scoreTwo: 3, teamOne: 'PSG', teamTwo: 'ATM' },
    { id: 3, scoreOne: 1, scoreTwo: 3, teamOne: 'SEV', teamTwo: 'ARS' },
    { id: 4, scoreOne: 3, scoreTwo: 3, teamOne: 'CIT', teamTwo: 'MBV' },
    { id: 5, scoreOne: 2, scoreTwo: 1, teamOne: 'JUV', teamTwo: 'PSG' }
  ];
  constructor() { }

  ngOnInit(): void {
  
  }

}
