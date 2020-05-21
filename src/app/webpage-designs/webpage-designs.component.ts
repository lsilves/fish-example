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
      description: "Softchoice events section that I designed during my co-op using Adobe XD, and built using HTML, vanilla JavaScript, and SCSS.",
      siteURL: "https://www.softchoice.com/research-studio/events",
      alt: "Softchoice events",
      enlargeImage: false
    },
    {
      image: "https://i.imgur.com/XF9FHIZ.png",
      description: "A layout I designed and built for fun, on my local system - designed with paper prototypes and built using HTML and CSS.",
      siteURL: "",
      alt: "fun design",
      enlargeImage: false
    },
    {
      image:"https://i.imgur.com/NZeOGHz.gif",
      description:"Customer sales web app - built using React and Bootstrap design elements.",
      siteURL: "https://enigmatic-sierra-63091.herokuapp.com/",
      alt: "customer sales app",
      enlargeImage: false
    },
    {
      image:"https://i.imgur.com/bF5epbB.gif",
      description:"Blog web app - built using Angular and Bootstrap's blog design template. Includes a Content Management System section for site administrators; ",
      siteURL: "https://dreamy-yonath-9e7f5b.netlify.app/home",
      alt: "blog web app",
      enlargeImage: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
