import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from "@angular/core"
import { Project } from "../../../models/project.model"
import { ProjectsService } from "../../../services/projects.service"
import { Subscription } from 'rxjs'
import { TagsService } from '../../../services/tags.service'
import { TechnologyTag } from 'src/app/models/technology-tag.model'
import { LanguageTag } from 'src/app/models/language-tag.model'

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
        constructor(public projectsService: ProjectsService, public tagsService: TagsService) {}
        
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

        //Gets tech tag objects from project tech tags
        getTechTags() {
                var techTags: TechnologyTag[] = []
                for (var i = 0; i < this.selectedProject.tech.length; i++) {
                        const tagName = this.selectedProject.tech[i]
                        const techTag = this.tagsService.getTechTag(tagName)
                        if (techTag !== null && techTag !== undefined) {
                                techTags.push(techTag)
                        }
                }
                return techTags
        }

        //Gets langauge tag objects from project language tags
        getLanguageTags() {
                var languageTags: LanguageTag[] = []
                for (var i = 0; i < this.selectedProject.languages.length; i++) {
                        const tagName = this.selectedProject.languages[i]
                        const langTag = this.tagsService.getLanguageTag(tagName)
                        if (langTag !== null && langTag !== undefined) {
                                languageTags.push(langTag)
                        }
                }
                return languageTags
        }


        ngOnDestroy() {
                this.selectedProjectIdSub.unsubscribe()
        }
}
