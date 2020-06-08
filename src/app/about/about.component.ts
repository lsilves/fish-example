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

  constructor() { }


  scrollToBottom(){
    if(this.who && this.how && this.interests){
      console.log("THIS IS EVENT.TARGET -> ", (event.target as Element).id);
      document.getElementById("#interestPar").animate({scrollTop:document.getElementById("#interestPar").scrollHeight}, 1000);
    }

  }

  ngOnInit(): void {
  }

  openPar(par){
    switch(par){
      case 'how' :{
        this.how = !this.how;
        this.who = false;
        this.interests = false;
      }
      break;
      case 'who' :{
        console.log("who?")
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
    }
  }

}
