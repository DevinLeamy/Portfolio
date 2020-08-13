import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnInit } from "@angular/core"
import { Project } from 'src/app/models/project.model'
import { fadeInFromLeft } from "src/app/animations/global.animation"
import { ProjectsService } from "../../../services/projects.service"

@Component({
        selector: "app-project",
        templateUrl: "project.component.html",
        styleUrls: ["project.component.css"],
        animations: [fadeInFromLeft]
})
export class ProjectComponent implements OnInit, AfterViewInit {
        @Input() project: Project
        @ViewChild("imageContainer") imageContainer: ElementRef
        constructor(public projectsService: ProjectsService) {}

        ngOnInit() {
                if (this.project !== null && this.project !== undefined && this.imageContainer !== undefined && this.imageContainer !== null) {
                        this.imageContainer.nativeElement.style.backgroundImage = 'url(' + this.project.imageUrl + ')'
                }
        }

        ngAfterViewInit() {
                this.ngOnInit()
        }
}
