import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/shared/genericFunctions';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  //team : objet initialement vide
  team: any = {};
  message: any = "";
  //Form ID
  teamForm!: FormGroup;
  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
  }
  //Methode
  //  addTeams() {
  //   let teams = JSON.parse(localStorage.getItem('teams') || '[]');
  //   this.team.id=generateId(teams);
  //   teams.push(this.team);
  //   localStorage.setItem('teams', JSON.stringify(teams));
  // }
  addTeams() {
    this.teamService.addTeams(this.team).subscribe((result) => {
      console.log(result.message);
      if (result.message === "o") {
        //navigate to players table
      } else {
        //message error
      }
      this.message = result.message;
    });
  }
};
