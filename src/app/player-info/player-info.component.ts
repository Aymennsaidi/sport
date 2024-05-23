import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})

export class PlayerInfoComponent implements OnInit {
  id!: number; // Change Number to number
  player: any;
  // playersTab: any = [];

  constructor(private activatedRoute: ActivatedRoute , private playersService:PlayersService) { }

  ngOnInit(): void {
    // this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    // this.id = this.activatedRoute.snapshot.params['id']; // Convert to number explicitly
    // this.player = this.playersTab.find((m: any) => m.id == this.id);
    // console.log("here player", this.player);
      this.id = this.activatedRoute.snapshot.params['id'];
      this.playersService.getPlayerById(this.id).subscribe(
        (res) => {
          this.player = res.player;
        }
      );
  }
}
