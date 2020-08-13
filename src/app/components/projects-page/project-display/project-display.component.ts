import { Component, Input } from "@angular/core"
import { Project } from "../../../models/project.model"
import { ProjectsService } from "../../../services/projects.service"

@Component({
        selector: "app-project-display",
        templateUrl: "project-display.component.html",
        styleUrls: ["project-display.component.css"]
})
export class ProjectDisplayComponent {
        @Input() project: Project
        constructor(public projectsService: ProjectsService) {}
}
