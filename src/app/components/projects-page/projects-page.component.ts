import { Component } from '@angular/core'
import { PageService } from "../../services/page.service"

@Component({
  selector: 'app-projects-page',
  templateUrl: 'projects-page.component.html',
  styleUrls: ['projects-page.component.css']
})
export class ProjectsPageComponent {
        constructor(public pageService: PageService) {}
}
