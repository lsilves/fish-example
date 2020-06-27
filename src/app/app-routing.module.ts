import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebpageDesignsComponent } from './webpage-designs/webpage-designs.component';
import { AssortedGraphicsComponent } from './assorted-graphics/assorted-graphics.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { bodyClass: 'dark' } },
  { path: 'work', component: WebpageDesignsComponent },
  //{ path: 'graphics', component: AssortedGraphicsComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
