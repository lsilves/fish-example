import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SunflowerComponent } from './sunflower/sunflower.component';
import { WebpageDesignsComponent } from './webpage-designs/webpage-designs.component';
import { AssortedGraphicsComponent } from './assorted-graphics/assorted-graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    SunflowerComponent,
    WebpageDesignsComponent,
    AssortedGraphicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
