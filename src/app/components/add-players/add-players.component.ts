import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { generateId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  //palyer : objet initialement vide
  player: any = {};
  teamsTab: any = [];
  teamId: any;
  message: any = "";
  //Form ID
  playerForm!: FormGroup
  constructor(private playerService: PlayersService, private teamsService: TeamsService) { }

  ngOnInit(): void {
    // this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
    this.teamsService.getAllTeams().subscribe((res) => {
      this.teamsTab = res.teams;
    })
  }
  //Methode
  addPlayers() {
    this.player.tId = this.teamId;
    this.playerService.addPlayers(this.player).subscribe((result) => {
      console.log(result.message);
      if (result.message === "o") {
        //navigate to matches table
      } else {
        //message error
      }
      this.message = result.message;
    })
  }
  // addPlayer() {
  //   let players = JSON.parse(localStorage.getItem('players') || '[]');
  //   this.player.id = generateId(players);
  //   this.player.teamId = this.teamId;
  //   players.push(this.player);
  //   localStorage.setItem('players', JSON.stringify(players));
  // }
  selectTeamId(evt: any) {
    console.log('here team ID', evt.target.value);
    this.teamId = evt.target.value;
  }
}
// addPlayer() {
//   let players = JSON.parse(localStorage.getItem('players') || '[]'); // Corrected typo in 'players'
//   this.player.id = generateId(players);
//   this.player.teamId = this.teamId; // Corrected typo in 'teamId'
//   players.push(this.player);
//   localStorage.setItem('players', JSON.stringify(players));
// }

// selectTeamId(evt: any) {
//   console.log('Selected team ID:', evt.target.value); // Improved logging message
//   this.teamId = evt.target.value;
// }}
