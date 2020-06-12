import { Component, Inject, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
      @Inject(DOCUMENT) private document, 
      private renderer: Renderer2, 
      private router: Router, 
      private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .pipe(map(() => this.activatedRoute))
        .pipe(map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }))
        .pipe(filter((route) => route.outlet === 'primary'))
        .pipe(mergeMap((route) => route.data))
        .subscribe((event) => this.updateBodyClass(event.bodyClass));
    }
  
    private updateBodyClass(customBodyClass?: string) {
      this.renderer.setAttribute(this.document?.body, 'class', '');
      if (customBodyClass) {
        this.renderer.addClass(this.document?.body, customBodyClass);
      }
    }
  title = 'Laura Portfolio';
}
