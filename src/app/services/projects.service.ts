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
                        title: "Pacman",
                        subtitle: "The 80's Classic 'Pacman'",
                        imageUrl: "../../../../assets/images/pacman-image2.png",
                        iconUrl: "../../../../assets/images/pacman-ghost.png",
                        link: "https://github.com/DevinLeamy/Pacman",
                        text: "I made an accurate recreation of the game that was once loved, is universally known and, that stands as a hallmark of the arcade-game era of the 80's. Pacman. This recreation is complete with a splash screen, four AI ghosts, animations, sounds, fruits and, progressively more challenging levels. Additionally, I logged it's development on Youtube @devinleamy.",
                        languages: ["Python"],
                        tech: ["Pygame"]
                },
                
                {
                        _id: 1,
                        title: "DDM - Rumble",
                        subtitle: "A Thread Based Messaging Platform",
                        imageUrl: "../../../../assets/images/ddm-rumble-image.png",
                        iconUrl: "../../../../assets/images/ddm-rumble.png",
                        link: "https://github.com/DevinLeamy/DDM",
                        text: "Rumble - My Dope Messenger, is a thread-based messenging platform that sits upon a responsive and intuitive Angular UI. Rumble helps break down the barriers to personal communitation built up throughout the COVID-19 pandemic by making discourse with others easier and more accessible. Create chats, make friends, Rumble.",
                        languages: ["Typescript", "Javascript", "HTML", "CSS"],
                        tech: ["Angular", "Node JS", "Express", "MongoDB", "Heroku"]
                },
                {
                        _id: 2,
                        title: "Algorithmic Tasks",
                        subtitle: "An Archive of Algorithms",
                        imageUrl: "../../../../assets/images/competitive-programming-image.png",
                        iconUrl: "../../../../assets/images/competitive-programming.png",
                        link: "https://github.com/DevinLeamy/Competitive-Programming",
                        text: "Months of solving coding problems on Codeforces, LeetCode, DMOJ and other platforms has culminated into a noteworthy archive of algorithms. This archive, and the algorithms therein, utilize a variety of data structures and approaches, from Union-Finds in Greedy algorithms to Sparse-Tables in Dynamic Programming algorithms.",
                        languages: ["C++", "Java", "C"],
                        tech: ["Codeforces", "LeetCode", "DMOJ"]
                },
                {
                        _id: 3,
                        title: "Chess.me",
                        subtitle: "A Mobile Chess App",
                        imageUrl: "../../../../assets/images/chess-image.png",
                        iconUrl: "../../../../assets/images/chess-me.png",
                        link: "https://github.com/DevinLeamy/Chess.me",
                        text: "I brought the offical game of coffee tables around the world to the iPhone with Chess.me. Chess.me is a unique mobile chess app that support three engaging game modes, namely, .COUPLE: pass-and-play chess, .BLUETOOTH: local wireless chess with friends and, .ME: a challenging gamemode that puts players up against an infinitly clever Chess AI.",
                        languages: ["Swift"],
                        tech: ["Xcode"]
                },
                {
                        _id: 4,
                        title: "Route",
                        subtitle: "A Path Finding Algorithm Visualizer",
                        imageUrl: "../../../../assets/images/route-image2.png",
                        iconUrl: "../../../../assets/images/route.png",
                        link: "https://github.com/DevinLeamy/Route",
                        text: "Route is a dynamic path finding algorithm visualization tool. Route allows users to compare and contrast two of the most popular algorithms for preforming searches on unweighted graphs, A* and Breadth-First-Search. In addition to displaying their behavior visually, Route records key information about each search, specifically, the number of nodes traversed and the computed shortest path. ",
                        languages: ["Javascript", "HTML", "CSS"],
                        tech: ["Github Pages"]
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
