import { Component } from '@angular/core'
import { PageService } from "../../services/page.service"
import { Project } from "../../models/project.model"
import { projectsAnimation } from "../../animations/projects-page.animation"

@Component({
  selector: 'app-projects-page',
  templateUrl: 'projects-page.component.html',
  styleUrls: ['projects-page.component.css'],
  animations: [projectsAnimation]
})
export class ProjectsPageComponent {
        projects: Project[] = [
                {
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                },
                {
                        title: "Chess.me",
                        imageUrl: "random",
                        link: "random",
                        text: "missing",
                        languages: ["swift"],
                        tags: ["x-code"]
                }
        ]
        constructor(public pageService: PageService) {}
}