
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject } from '../shared/genericFunctions';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab: any = [];
  teamstab: any = [];

  constructor(private router: Router, private PlayersService: PlayersService) { }

  ngOnInit(): void {
    // this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    // this.teamstab = JSON.parse(localStorage.getItem('teams') || '[]');
    // this.TeamDetails();
    // this.getAllPlayers();
    this.PlayersService.getAllPlayersWithTeams().subscribe(
      (result) => {
        console.log('here all teams', result.players);
        this.playersTab = result.players;
      })
  };
  getAllPlayers() {
    this.PlayersService.getAllPlayers().subscribe((result) => {
      this.playersTab = result.players
    });
  };

  displayplayer(id: number) {
    this.router.navigate([`playerinfo/${id}`]);
  };

  editPlayer(id: number) {
    this.router.navigate([`editplayer/${id}`]);
  };
  // deletePlayers(id:number){
  //   deleteObject(this.playersTab,'players',id);
  // }
  deletePlayers(id: number) {
    // deleteObject(this.matchesTab,'teams',id);
    this.PlayersService.deletePlayers(id).subscribe((result) => {
      this.getAllPlayers();
    });
  };
  TeamDetails() {
    this.playersTab.forEach((player: any) => {
      let team = this.teamstab.find((team: any) => team.id == player.teamId);
      if (team) {
        player.teamName = team.name;
        player.teamFounder = team.founder;
      }
    });
  };
  // searchTeamById(id:number){
  // return this.teamstab.find((t:any)=>t.id==id);
  // }
}




