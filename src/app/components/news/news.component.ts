import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  infoTab: any = [
    {
      id: 1,
      title: 'player',
      name: "CR7",
      date: 'May 1, 2021',
      img: "assets/images/img_1.jpg",
      avatar: "assets/images/person_1.jpg"
    },
    {
      id: 2,
      title: 'player',
      name: "Neymar",
      date: 'May 9, 2025',
      img: "assets/images/img_2.jpg",
      avatar: "assets/images/person_2.jpg"
    },
    {
      id: 3,
      title: 'player',
      name: "Messi",
      date: 'May 5, 2010',
      img: "assets/images/img_3.jpg",
      avatar: "assets/images/person_3.jpg"
    },
    {
      id: 4,
      title: 'player',
      name: "Liva",
      date: 'May 2, 2014',
      img: "assets/images/img_1.jpg",
      avatar: "assets/images/person_1.jpg"
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
