import { Component, OnInit, OnDestroy } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { pageSlide } from "./animations/global.animation"
import { PageService } from "./services/page.service"
import { Subscription } from "rxjs"
import { contactMeAnimation } from './animations/splash-page.animation'
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [pageSlide, contactMeAnimation],
  providers: [PageService]
})
export class AppComponent implements OnInit, OnDestroy {
        leftExpandedSub: Subscription
        rightExpandedSub: Subscription
        leftExpanded: boolean = false
        rightExpanded: boolean = false
        title: string = 'devinleamy'
        selected: boolean = false
        constructor(public pageService: PageService, public media: MediaObserver) {}
        
        ngOnInit() {
                this.leftExpandedSub = this.pageService.getLeftExpandedUpdated()
                        .subscribe(leftExpanded => this.leftExpanded = leftExpanded)
                this.pageService.updateLeftExpanded()
                this.rightExpandedSub = this.pageService.getRightExpandedUpdated()
                        .subscribe(rightExpanded => this.rightExpanded = rightExpanded)
                this.pageService.updateRightExpanded()
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
