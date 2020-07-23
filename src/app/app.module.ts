import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { JourneyPageComponent } from './components/journey-page/journey-page.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    JourneyPageComponent,
    FooterPageComponent,
    NavbarComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
