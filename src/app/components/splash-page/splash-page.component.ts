import { Component } from '@angular/core'
import { PageService } from "../../services/page.service"
import { MediaObserver } from "@angular/flex-layout"
import { contactMeAnimation } from 'src/app/animations/splash-page.animation'

@Component({
  selector: 'app-splash-page',
  templateUrl: 'splash-page.component.html',
  styleUrls: ['splash-page.component.css'],
  animations: [contactMeAnimation]
})
export class SplashPageComponent {
        selected: boolean = false
        constructor(public pageService: PageService, public media: MediaObserver) {}

        contactMeCallback(event) {
                if (event !== undefined && event !== null) {
                        this.selected = event
                }
        }
}
