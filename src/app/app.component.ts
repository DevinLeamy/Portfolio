import { Component, OnInit, OnDestroy } from '@angular/core'
import { RouterOutlet, ActivatedRoute } from '@angular/router'
import { pageSlide } from "./animations/global.animation"
import { PageService } from "./services/page.service"
import { Subscription } from "rxjs"
import { contactMeAnimation } from './animations/splash-page.animation'
import { MediaObserver } from '@angular/flex-layout'
import { projectsAnimation } from './animations/projects-page.animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [pageSlide, contactMeAnimation, projectsAnimation],
  providers: [PageService]
})
export class AppComponent implements OnInit, OnDestroy {
        leftExpandedSub: Subscription
        rightExpandedSub: Subscription
        leftExpanded: boolean = false
        rightExpanded: boolean = false
        title: string = 'devinleamy'
        selected: boolean = false
        hovering: boolean = false
        constructor(public pageService: PageService, public media: MediaObserver, private route: ActivatedRoute) {}
        
        ngOnInit() {
                this.leftExpandedSub = this.pageService.getLeftExpandedUpdated()
                        .subscribe(leftExpanded => this.leftExpanded = leftExpanded)
                this.pageService.updateLeftExpanded()
                this.rightExpandedSub = this.pageService.getRightExpandedUpdated()
                        .subscribe(rightExpanded => this.rightExpanded = rightExpanded)
                this.pageService.updateRightExpanded()
                const route = window.location.pathname
                if (route === '/' || route === "/Portfolio-Website/splash") this.pageService.goToHomePage()
                else if (route === '/Portfolio-Website/projects') this.pageService.goToProjectsPage()
                else if (route === '/Portfolio-Website/about') this.pageService.goToAboutPage()
                else this.pageService.goToHomePage()
                console.log(route)
        }

        // Returns the color of the nav elements
        getColor(page: number) {
                // Green rgb(88, 218, 88) Blue rgb(0, 140, 255) Light Blue rgb(153,207,224)
                if (page == 0 && this.pageService.onProjectsPage()) return 'rgb(153,207,224)'
                else if (page == 1 && this.pageService.onHomePage()) return 'rgb(153,207,224)'
                else if (page == 2 && this.pageService.onAboutPage()) return 'rgb(153,207,224)'
                else return 'white'
        }

        // Updates page service in response to navigation through nav
        goToPage(page: number) {
                if (page == 0) this.pageService.goToProjectsPage()
                else if (page == 1) this.pageService.goToHomePage()
                else this.pageService.goToAboutPage()
        }

        prepareRoute(outlet: RouterOutlet) {
                return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
        }

        contactMeCallback(event) {
                if (event !== undefined && event !== null) {
                        this.selected = event
                }
        }

        ngOnDestroy() {
                this.rightExpandedSub.unsubscribe()
                this.leftExpandedSub.unsubscribe()
        }
}
