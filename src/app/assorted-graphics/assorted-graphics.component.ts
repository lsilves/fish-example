import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assorted-graphics',
  templateUrl: './assorted-graphics.component.html',
  styleUrls: ['./assorted-graphics.component.scss']
})
export class AssortedGraphicsComponent implements OnInit {
  graphics = [
    {
      image:"https://i.imgur.com/ZiqMpST.png",
      description:"Some vector-based graphics of fish inspired by a recent fishing trip - drawn in Illustrator.",
      bigImageURL:"https://i.imgur.com/3Uiudbg.png",
      alt: "fish vectors",
      enlargeImage: false
    },
    {
      image: "https://i.imgur.com/izmpT4D.png",
      description: "Strawberry and hearts; an example of a graphic I used for a web application - done in Illustrator and Photoshop.",
      bigImageURL:"",
      alt: "strawberry and hearts",
      enlargeImage: false
    },
    {
      image: "https://i.imgur.com/DIPIUk4.gif",
      description: "Various sketches of houses - done in Photoshop.",
      alt: "house sketches",
      bigImageURL:"",
      enlargeImage: false
    },
    {
      image:"https://i.imgur.com/cMgtNc2.jpg",
      description:"A self portrait sketch - drawn with pencil and paper.",
      alt: "self portrait",
      bigImageURL:"",
      enlargeImage: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
