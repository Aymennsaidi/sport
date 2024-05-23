import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  id!: Number;
  team: any;
  // teamsTab: any = [
  //   { id: 1, name: 'FC Bayern Munich', owner: 'Thomas Tuchel', founder: 'Franz John' },
  //   { id: 2, name: 'Real Madrid CF', owner: 'Carlo Ancelotti', founder: 'Adolfo Meléndez...' },
  //   { id: 3, name: 'Chelsea F.C.', owner: 'Mauricio Pochettino', founder: 'Henry Augustus Mears' },
  //   { id: 4, name: 'Arsenal F.C.', owner: 'Kroenke Sports & Entertainment', founder: 'Scotsman David Danskin' },
  // ];
  constructor(private activatedRoute: ActivatedRoute , private TeamsService:TeamsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.TeamsService.getTeamById(this.id).subscribe(
      (res) => {
        this.team = res.team;
      }
    );
  }
}     
