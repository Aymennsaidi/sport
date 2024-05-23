import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = {};
  id!: Number;
  // matchesTab: any = [
  //   { id: 1, scoreOne: 0, scoreTwo: 2, teamOne: 'RMD', teamTwo: 'FCB' },
  //   { id: 2, scoreOne: 2, scoreTwo: 4, teamOne: 'PSG', teamTwo: 'ATM' },
  //   { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: 'SEV', teamTwo: 'ARS' },
  //   { id: 4, scoreOne: 3, scoreTwo: 3, teamOne: 'CIT', teamTwo: 'MBV' },
  //   { id: 5, scoreOne: 3, scoreTwo: 0, teamOne: 'JUV', teamTwo: 'PSG' }
  // ];
  constructor(private activatedRoute: ActivatedRoute, private MatchesService: MatchesService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.match = this.matchesTab.find((m: any) => m.id == this.id);
    this.getMatchById()
  }
  getMatchById() {
    this.MatchesService.getMatchById(this.id).subscribe((result) => {
      this.match = result.match
    })
  }
  editMatch() {
    console.log('here object',this.match);
    this.MatchesService.updateMatches(this.match).subscribe((result) => {
      console.log('Here response after edit',result.message);
      this.router.navigate(['Admin']);
    })
    console.log('here match', this.match);
  }
}
