import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamForm!:FormGroup;
  team: any={};
  id!: Number;
  teamsTab: any =[
    { id: 1, name : 'FC Bayern Munich', owner : 'Thomas Tuchel', founder : 'Franz John' },
    { id: 2, name : 'Real Madrid CF', owner : 'Carlo Ancelotti', founder: 'Adolfo Meléndez...' },
    { id: 3, name : 'Chelsea F.C.', owner : 'Mauricio Pochettino', founder : 'Henry Augustus Mears' },
    { id: 4, name : 'Arsenal F.C.', owner : 'Kroenke Sports & Entertainment', founder : 'Scotsman David Danskin' },
];
  constructor(private activatedRoute:ActivatedRoute,private TeamsService: TeamsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.team = this.teamsTab.find((m: any) => m.id == this.id);
  }
  getTeamById() {
    this.TeamsService.getTeamById(this.id).subscribe((result) => {
      this.team = result.team
    })
  }
  editTeam() {
    this.TeamsService.updateTeams(this.team).subscribe((result) => {
      console.log(result.message);

    })
    console.log('here match', this.team);
  }
}
