import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CommunityComponent } from './community/community.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { CommunityPipe } from './community.pipe';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommunityComponent,
    NavbarComponent,
    DetailsComponent,
    CommunityPipe,
    ServicesComponent,
    ServicesDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
