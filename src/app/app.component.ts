import { Component, OnInit, OnDestroy } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { pageSlide } from "./animations/global.animation"
import { PageService } from "./services/page.service"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [pageSlide],
  providers: [PageService]
})
export class AppComponent implements OnInit, OnDestroy {
        leftExpandedSub: Subscription
        rightExpandedSub: Subscription
        leftExpanded: boolean = false
        rightExpanded: boolean = false
        title: string = 'devinleamy'
        constructor(public pageService: PageService) {}
        
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

        ngOnDestroy() {
                this.rightExpandedSub.unsubscribe()
                this.leftExpandedSub.unsubscribe()
        }
}
