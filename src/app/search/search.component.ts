import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  foundedMatches :any = [];
  matchesTab: any = [
    { id: 1, scoreOne: 0, scoreTwo: 2, teamOne: 'RMD', teamTwo: 'FCB' },
    { id: 2, scoreOne: 2, scoreTwo: 4, teamOne: 'PSG', teamTwo: 'ATM' },
    { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: 'SEV', teamTwo: 'ARS' },
    { id: 4, scoreOne: 3, scoreTwo: 3, teamOne: 'CIT', teamTwo: 'MBV' },
    { id: 5, scoreOne: 3, scoreTwo: 0, teamOne: 'JUV', teamTwo: 'PSG' }
  ];
  constructor(private fbuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.searchForm = this.fbuilder.group({
      score: ["", [Validators.required]],
    })
  }
  search() {
    let scoreValue = this.searchForm.value.score;
    this.foundedMatches=[];
    // for (let i = 0; i < this.matchesTab.length; i++) {
    //   if (
    //     this.matchesTab[i].scoreOne == scoreValue || 
    //     this.matchesTab[i].scoreTwo == scoreValue) {
    //       this.foundedMatches.push(this.matchesTab[i]);
    //   }
    // }
    this.foundedMatches=this.matchesTab.filter(
      (m:any) => m.scoreOne==scoreValue||m.scoreTwo==scoreValue);
  }
}