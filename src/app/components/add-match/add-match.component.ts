import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchesService } from 'src/app/services/matches.service';
import { generateId } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //match : objet initialement vide
  match: any = {};
  message: any = "";
  //Form ID
  matchForm!: FormGroup;
  constructor(private matchService: MatchesService) { }

  ngOnInit(): void {
  }
  //Methode
  addMatches() {
    this.matchService.addMatches(this.match).subscribe((result) => {
      console.log(result.message);
      if (result.message === "o") {
        //navigate to matches table
      } else {
        //message error
      }
      this.message = result.message;
    });
  };
};
