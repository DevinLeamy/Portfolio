import { Component } from '@angular/core'
import { PageService } from "../../services/page.service"

@Component({
  selector: 'app-journey-page',
  templateUrl: 'journey-page.component.html',
  styleUrls: ['journey-page.component.css']
})
export class JourneyPageComponent { 
        constructor(public pageService: PageService) {}
}
