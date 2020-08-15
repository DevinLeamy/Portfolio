import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component'
import { SplashPageComponent } from './components/splash-page/splash-page.component'
import { JourneyPageComponent } from './components/journey-page/journey-page.component'
import { FooterPageComponent } from './components/footer-page/footer-page.component'
import { ProjectsPageComponent } from './components/projects-page/projects-page.component'
import { ArrowButtonComponent } from "./components/arrow-button/arrow-button.component"
import { ProjectComponent } from "./components/projects-page/project/project.component"
import { TagComponent } from "./components/projects-page/project/tag/tag.component"
import { ProjectDisplayComponent } from "./components/projects-page/project-display/project-display.component"
import { ImageTagComponent } from './components/projects-page/image-tag/image-tag.component'

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    JourneyPageComponent,
    FooterPageComponent,
    ProjectsPageComponent,
    ArrowButtonComponent,
    ProjectComponent,
    TagComponent,
    ProjectDisplayComponent,
    ImageTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
