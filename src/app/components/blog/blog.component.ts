import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articalTab: any = [
    {
      id: 1,
      title: 'Player : CR7',
      dicription: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer",
      date: 'May 1, 2021',
      img: "assets/images/img_1.jpg",
    },
    {
      id: 2,
      title: 'Player : Neymar',
      dicription: "Regarded as one of the best players of his generation, he is renowned for his flamboyant style of play, passing abilities, and two-footedness",
      date: 'May 9, 2025',
      img: "assets/images/img_2.jpg",
    },
    {
      id: 3,
      title: 'Player : Messi',
      dicription: "Lionel Messi is a football player from Argentina who plays for Inter Miami",
      date: 'May 5, 2010',
      img: "assets/images/img_3.jpg",
    },
    {
      id: 4,
      title: 'Player : lewandowski',
      dicription: "Robert Lewandowski is a Polish professional footballer who plays as a striker for La Liga club Barcelona and captains the Poland national team",
      date: 'May 2, 2014',
      img: "assets/images/img_1.jpg",
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
