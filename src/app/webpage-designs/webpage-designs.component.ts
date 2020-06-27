import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage-designs',
  templateUrl: './webpage-designs.component.html',
  styleUrls: ['./webpage-designs.component.scss']
})
export class WebpageDesignsComponent implements OnInit {

  workTitle  = true;
  workContent = false; 
  curSlide = 0;
  graphics = [
    {
      image: "https://i.imgur.com/a5Iv47T.gif",
      description: "Softchoice events section that I designed during my co-op.",
      tools: "Adobe XD, HTML, Vanilla JavaScript, SCSS",
      siteURL: "https://www.softchoice.com/research-studio/events",
      alt: "Softchoice events",
      enlargeImage: false,
      display:false
    },
    {
      image: "https://i.imgur.com/Zzm2pVQ.png",
      description: "A mock-up of a fabric store's catalogue with a filtering system.",
      tools: "Adobe XD",
      siteURL: "",
      alt: "fabric store catalogue",
      enlargeImage: false,
      display:false
    },
    {
      image: "https://i.imgur.com/Rky4G98.gif",
      description: "A psychiatric assessment facilitator in the process of being developed.",
      tools: "MongoDB, Bootstrap, Angular 8, SCSS, JavaScript, HTML, Heroku, Mongoose, NPM, Git",
      siteURL: "",
      alt: "psychiatric assessment facilitator",
      enlargeImage: false,
      display:false
    },
    {
      image:"https://i.imgur.com/NZeOGHz.gif",
      description:"Customer sales web app.",
      tools: "React, Bootstrap",
      siteURL: "https://enigmatic-sierra-63091.herokuapp.com/",
      alt: "customer sales app",
      enlargeImage: false,
      display:false
    },
    {
      image:"https://i.imgur.com/bF5epbB.gif",
      description:"Blog web app - includes a Content Management System section for site administrators.",
      tools: "Angular, Bootstrapious",
      siteURL: "https://dreamy-yonath-9e7f5b.netlify.app/home",
      alt: "blog web app",
      enlargeImage: false,
      display:false
    }

  ];

  prevSlide(){
    let oldSlide = this.curSlide;
    this.curSlide != 0 ? this.curSlide-- : this.curSlide = (this.graphics.length-1);
    this.graphics[oldSlide].display = false;
    this.graphics[this.curSlide].display = true;

    for(var i = 0; i < this.graphics.length; i++){
      this.graphics[i].enlargeImage = false;
    }

    document
      .getElementById('slide'+this.curSlide)
      .scrollIntoView({ behavior: 'smooth' });

  }

  nextSlide(){
    let oldSlide = this.curSlide;
    this.curSlide != (this.graphics.length-1) ? this.curSlide++ : this.curSlide = 0;
    this.graphics[oldSlide].display = false;
    this.graphics[this.curSlide].display = true;

    for(var i = 0; i < this.graphics.length; i++){
      this.graphics[i].enlargeImage = false;
    }
    document
      .getElementById('slide'+this.curSlide)
      .scrollIntoView({ behavior: 'smooth' });


  }

  // openPar(par){
  //   setTimeout(() => this.switchPar(par), 150);
  // }

  constructor() { }

  ngOnInit(): void {
    this.graphics[this.curSlide].display = true;
  }

}
