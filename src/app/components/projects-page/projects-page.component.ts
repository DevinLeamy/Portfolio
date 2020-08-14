import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core'
import { PageService } from "../../services/page.service"
import { projectsAnimation } from "../../animations/projects-page.animation"
import { ProjectsService } from "../../services/projects.service"
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-projects-page',
  templateUrl: 'projects-page.component.html',
  styleUrls: ['projects-page.component.css'],
  animations: [projectsAnimation],
  providers: [ProjectsService]
})
export class ProjectsPageComponent implements OnInit, OnDestroy {
        @ViewChild('container') container: ElementRef
        selected: boolean = false
        selectedId: number = -1
        selectedIdSub: Subscription
        visibleAgain = false
        constructor(public pageService: PageService, public projectsService: ProjectsService) {}

        ngOnInit() {
                this.selectedIdSub = this.projectsService.getSelectedIdUpdated()
                        .subscribe(selectedId => {
                                this.selectedId = selectedId
                                this.selected = this.selectedId !== -1
                                if (this.selected) this.visibleAgain = !this.visibleAgain
                                if (this.container !== undefined && this.container !== null) {
                                        if (this.selected) this.container.nativeElement.style.opacity = 0.5
                                        else this.container.nativeElement.style.opacity = 1
                                }
                        })
                this.projectsService.updateSelectedProjectId()
        }

        ngOnDestroy() {
                this.selectedIdSub.unsubscribe()
        }
}
