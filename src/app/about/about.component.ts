import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  who = false;
  how = false;
  interests = false;

  aboutTitle = true;
  aboutContent = false;
  aboutContact = false;

  constructor() { }


  // scrollToBottom(){
  //   if(this.who && this.how && this.interests){
  //     console.log("THIS IS EVENT.TARGET -> ", (event.target as Element).id);
  //     document.getElementById("#interestPar").animate({scrollTop:document.getElementById("#interestPar").scrollHeight}, 1000);
  //   }

  // }

  ngOnInit(): void {
  }

  openPar(par){
    setTimeout(() => this.switchPar(par), 150);
  }

  switchPar(par): void {
    switch(par){
      case 'how' :{
        this.how = !this.how;
        this.who = false;
        this.interests = false;
      }
      break;
      case 'who' :{
        this.who = !this.who;
        this.how = false;
        this.interests = false;
      }
      break;
      case 'interests' :{
        this.interests = !this.interests;
        this.who = false;
        this.how = false;
      }
      break;
      default: {
        this.who = false;
        this.how = false;
        this.interests = false;
      }
    }
  }

  toggleSection(sec){
    switch(sec){
      case "aboutContent": {
        this.aboutContent = true;
        this.aboutTitle = false;
        this.aboutContact = false;
      }
      break;
      case "aboutTitle": {
        this.aboutContent = false;
        this.aboutTitle = true;
        this.aboutContact = false;
        this.switchPar('');
      }
      break;
      case "aboutContact": {
        this.aboutContent = false;
        this.aboutTitle = false;
        this.aboutContact = true;
        this.switchPar('');
      }
      break;
    }
  }
}
