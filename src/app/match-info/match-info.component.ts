import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id!: Number;
  match: any;

  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchesService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe(
      (res) => {
        this.match = res.match;
      }
    );
    // for (let i = 0; i < this.matchesTab.length; i++) {
    //   if (this.id == this.matchesTab[i].id) {
    //     this.match = this.matchesTab[i];
    //     break;
    //   }
    // }
  }
}
