import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ProjectsPageComponent } from "./components/projects-page/projects-page.component"
import { SplashPageComponent } from './components/splash-page/splash-page.component';
import { JourneyPageComponent } from './components/journey-page/journey-page.component';


const routes: Routes = [
        { path: 'projects', component: ProjectsPageComponent, data: { animation: 'ProjectPage'} },
        { path: 'splash', component: SplashPageComponent, data: { animation: 'SplashPage'} },
        { path: 'about', component: JourneyPageComponent, data: { animation: 'AboutPage'} },
        { path: '**', component: SplashPageComponent, data: { animation: 'SplashPage'} }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
