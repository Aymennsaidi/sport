import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from '../shared/genericFunctions';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.css']
})
export class MatchTableComponent implements OnInit {
  maatchesNbr: number = 10;
  matchesTab: any = [];
  constructor(private router: Router, private MatchService: MatchesService) { }
  ngOnInit(): void {
    // this.matchesTab = JSON.parse(localStorage.getItem('matches') || '[]');
    this.getAllMatches();
  };
  discriptions(a: number, b: number) {
    if (a > b) {
      return ['green', 'winner congrats'];
    } else if (a < b) {
      return ['red', 'loser ,hard luck next time'];
    } else {
      return ['blue', 'Null better next time'];
    }
  };
  getAllMatches() {
    this.MatchService.getAllMatches().subscribe((result) => {
      this.matchesTab = result.matches
    })
  };
  display(id: Number) {
    this.router.navigate([`matchInfo/${id}`]);
  };
  editMatch(id: Number) {
    this.router.navigate([`editmatch/${id}`]);
  };
  // deleteMatch(id: Number) {
  //   let i = this.matchesTab.findIndex((m: any) => m.id == id);
  //   this.matchesTab.splice(i, 1);
  //   localStorage.setItem('matches', JSON.stringify(this.matchesTab));
  // }
  deleteMatch(id: number) {
    // deleteObject(this.matchesTab,'teams',id);
    this.MatchService.deleteMatche(id).subscribe((result) => {
      this.getAllMatches();
      // this.message=result.message
    });
  };
};
