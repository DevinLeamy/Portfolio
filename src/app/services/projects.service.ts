import { Injectable } from "@angular/core"
import { Subject } from 'rxjs'
import { Project } from '../models/project.model'
@Injectable({
        providedIn: "root"
})
export class ProjectsService {
        selectedId: number = -1
        selectedIdUpdated = new Subject<number>()
        projects: Project[] = [
                {
                        _id: 0,
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        _id: 1,
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        _id: 2,
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        _id: 3,
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        _id: 4,
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                }
        ]

        //Returns observable to selected project id
        getSelectedIdUpdated() {
                return this.selectedIdUpdated.asObservable()
        }

        //Returns the project that has been selected if a project has been selected
        getSelectedProject() {
                if (this.selectedId === -1) return null
                return this.projects[this.selectedId]
        }

        //Returns the selected project Id
        getSelectedProjectId() {
                return this.selectedId
        }

        //Sets selected project Id to selected project Id
        selectProject(_id: number) {
                this.selectedId = _id
                this.updateSelectedProjectId()
        }

        //Returns a list of all projects
        getProjects() {
                return this.projects
        }

        //Updates the selected project id
        updateSelectedProjectId() {
                this.selectedIdUpdated.next(this.selectedId)
        }
}
