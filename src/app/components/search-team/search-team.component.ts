import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  searchForm!: FormGroup;
  foundedPlayers: any = [];
  teamsTab: any = [];
  playersTab: any = [];
  team: any = {};
  constructor(private fbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.playersTab = JSON.parse(localStorage.getItem('players') || '[]');
    this.teamsTab = JSON.parse(localStorage.getItem('teams') || '[]');
    this.searchForm = this.fbuilder.group({
      teamName: ["", Validators.required],
    });
  }

  search() {
    this.team = this.teamsTab.find(
      (team: any) => team.name == this.searchForm.value.teamName
    );
    console.log('foundedPlayers',this.playersTab)
    this.foundedPlayers = this.playersTab.filter((player: any) => player.teamId == this.team.id);
  }
}
