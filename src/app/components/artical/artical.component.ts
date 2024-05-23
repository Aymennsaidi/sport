import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css']
})
export class ArticalComponent implements OnInit {
// obj==> artical Param
@Input()blog:any;
  constructor() { }

  ngOnInit(): void {
  }

}
