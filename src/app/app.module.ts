import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    WorkComponent,
    ContactComponent,
    HeadComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
RouterModule.forRoot([
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'work',component:WorkComponent},
  {path:'',component:HomeComponent},
])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
