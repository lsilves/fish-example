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

  ngOnInit(): void {
  }

}
