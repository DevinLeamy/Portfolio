import { Component, OnInit } from '@angular/core'
import { PageService } from "../../services/page.service"
import { pageSlide } from "../../animations/about-me-page.animation"

@Component({
  selector: 'app-journey-page',
  templateUrl: 'journey-page.component.html',
  styleUrls: ['journey-page.component.css'],
  animations: [pageSlide]
})
export class JourneyPageComponent implements OnInit { 
        constructor(public pageService: PageService) {}

        ngOnInit() {
                this.loadAnimations()
        }

        loadAnimations() {
                return true
        }
}
