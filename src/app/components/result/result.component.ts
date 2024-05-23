import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // obj==> Result Param
  @Input() obj: any;
  constructor() { }

  ngOnInit(): void {
  }
  scoreColor(s1: number, s2: number) {
    if (s1 > s2) {
      return ['green','win'];
    } else if (s1 < s2) {
      return ['purple','loss'];
    } else {
      return ['blue','draw'];
    }
  }

}
