import { Component, Input } from "@angular/core"
import { Project } from 'src/app/models/project.model'
import { fadeInFromLeft } from "src/app/animations/global.animation"

@Component({
        selector: "app-project",
        templateUrl: "project.component.html",
        styleUrls: ["project.component.css"],
        animations: [fadeInFromLeft]
})
export class ProjectComponent {
        @Input() project: Project
}
