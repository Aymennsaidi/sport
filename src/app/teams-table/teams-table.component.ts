import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from '../shared/genericFunctions';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any = [
  ];

  constructor(private router: Router, private TeamsService: TeamsService) { }

  ngOnInit(): void {
    // this.teamsTab=JSON.parse(localStorage.getItem('teams')||'[]');
    // this.getAllTeams();
    this.TeamsService.getAllTeamsWithPlayers().subscribe(
      (result) => {
        console.log('here all teams', result.teams);
        this.teamsTab = result.teams;
      })
  };
  getAllTeams() {
    this.TeamsService.getAllTeams().subscribe((result) => {
      this.teamsTab = result.teams
    })
  };
  displayteam(id: Number) {
    this.router.navigate([`teamInfo/${id}`]);
    console.log('here team', `teamInfo/${id}`);
  };
  editTeam(id: Number) {
    this.router.navigate([`editteam/${id}`]);
  };
  // deleteTeams(id:number){
  //   deleteObject(this.teamsTab,'teams',id);
  // }
  deleteTeams(id: number) {
    // deleteObject(this.matchesTab,'teams',id);
    this.TeamsService.deleteTeams(id).subscribe((result) => {
      this.getAllTeams();
    });
  };
};
