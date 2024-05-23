import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm!:FormGroup;
  player: any={};
  id!: Number;
  // playersTab: any = [
  //   { id: 1, name: 'cr7', position: 'Forward', number: 7, age: 37 },
  //   { id: 2, name: 'ramos', position: 'Defender', number: 4, age: 38 },
  //   { id: 3, name: 'lewandowski', position: 'Forward', number: 7, age: 37 },
  //   { id: 4, name: 'pepe', position: 'Defender', number: 9, age: 39 },
  // ];
  constructor(private activatedRoute:ActivatedRoute,private PlayerService: PlayersService) { }
 
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getplayerById()
  }
  getplayerById() {
    this.PlayerService.getPlayerById(this.id).subscribe((result) => {
      this.player = result.player
    })
  }
  updatePlayers() {
    this.PlayerService.updatePlayers(this.player).subscribe((result) => {
      console.log(result.message);

    })
    console.log('here player', this.player);
  }

};
