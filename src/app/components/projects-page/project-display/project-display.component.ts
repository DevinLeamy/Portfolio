import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from "@angular/core"
import { Project } from "../../../models/project.model"
import { ProjectsService } from "../../../services/projects.service"
import { Subscription } from 'rxjs'

@Component({
        selector: "app-project-display",
        templateUrl: "project-display.component.html",
        styleUrls: ["project-display.component.css"]
})
export class ProjectDisplayComponent implements OnInit, OnDestroy, AfterViewInit {
        @ViewChild("iconContainer") iconContainer: ElementRef
        @ViewChild("imageContainer") imageContainer: ElementRef
        selectedProject: Project
        selectedProjectIdSub: Subscription
        constructor(public projectsService: ProjectsService) {}
        
        ngOnInit() {
                this.selectedProjectIdSub = this.projectsService.getSelectedIdUpdated()
                        .subscribe(selectedProjectId => {
                                this.selectedProject = this.projectsService.getSelectedProject()
                                if (this.selectedProject !== null && this.selectedProject !== undefined && this.iconContainer !== undefined && this.iconContainer !== null) {
                                        this.iconContainer.nativeElement.style.backgroundImage = 'url(' + this.selectedProject.iconUrl + ')'
                                }
                                if (this.selectedProject !== null && this.selectedProject !== undefined && this.imageContainer !== undefined && this.imageContainer !== null) {
                                        this.imageContainer.nativeElement.style.backgroundImage = 'url(' + this.selectedProject.imageUrl + ')'
                                }
                        })
                this.projectsService.updateSelectedProjectId()
        }

        ngAfterViewInit() {
                this.ngOnInit()
        }

        //Travel to left project
        goToLeftProject() {
                const currentId = this.selectedProject._id
                const numberOfProject = this.projectsService.projects.length
                var newProjectId = currentId - 1
                newProjectId = newProjectId == -1? numberOfProject-1 : newProjectId
                this.projectsService.selectProject(newProjectId)
        }
        
        //Travel to right project
        goToRightProject() {
                const currentId = this.selectedProject._id
                const numberOfProjects = this.projectsService.projects.length
                const newProjectId = (currentId + 1) % numberOfProjects
                this.projectsService.selectProject(newProjectId)
        }

        //Exit projects display
        exitProjectsDisplay() {
                this.projectsService.selectProject(-1)
        }

        ngOnDestroy() {
                this.selectedProjectIdSub.unsubscribe()
        }
}
