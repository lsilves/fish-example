import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage-designs',
  templateUrl: './webpage-designs.component.html',
  styleUrls: ['./webpage-designs.component.scss']
})
export class WebpageDesignsComponent implements OnInit {

  graphics = [
    {
      image: "https://i.imgur.com/a5Iv47T.gif",
      description: "Softchoice events section that I designed during my co-op.",
      tools: "Adobe XD, HTML, Vanilla JavaScript, SCSS",
      siteURL: "https://www.softchoice.com/research-studio/events",
      alt: "Softchoice events",
      enlargeImage: false
    },
    {
      image: "https://i.imgur.com/XF9FHIZ.png",
      description: "A child-friendly layout I designed and built for fun, on my local system.",
      tools: "Paper Prototyping, HTML, CSS",
      siteURL: "",
      alt: "fun design",
      enlargeImage: false
    },
    {
      image:"https://i.imgur.com/NZeOGHz.gif",
      description:"Customer sales web app.",
      tools: "React, Bootstrap, HTML",
      siteURL: "https://enigmatic-sierra-63091.herokuapp.com/",
      alt: "customer sales app",
      enlargeImage: false
    },
    {
      image:"https://i.imgur.com/bF5epbB.gif",
      description:"Blog web app - includes a Content Management System section for site administrators; ",
      tools: "Angular, ",
      siteURL: "https://dreamy-yonath-9e7f5b.netlify.app/home",
      alt: "blog web app",
      enlargeImage: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
