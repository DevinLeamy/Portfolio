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
                        subtitle: "A Mobile Chess App",
                        imageUrl: "../../../../assets/images/chess-image.png",
                        iconUrl: "../../../../assets/images/chess-me.png",
                        link: "https://github.com/DevinLeamy/Chess.me",
                        text: "I brought the offical game of coffee-tables around the world to the iPhone with Chess.me. Chess.me is a unique mobile chess app that support three engaging game modes: '.COUPLE': pass-and-play chess, '.BLUETOOTH': bluetooth chess implemented using Xcode's Multipeer Connectivity framework and, '.ME': a challenging mode that puts players up against an infinitly clever Chess AI.",
                        languages: ["swift"],
                        tags: ["Xcode"]
                },
                {
                        _id: 1,
                        title: "DDM - Rumble",
                        subtitle: "A Thread Based Messaging Platform",
                        imageUrl: "../../../../assets/images/ddm-rumble-image.png",
                        iconUrl: "../../../../assets/images/ddm-rumble.png",
                        link: "https://github.com/DevinLeamy/DDM",
                        text: "Rumble - My Dope Messenger, is a thread-based messenging platform that sits upon a responsive and intuitive Angular UI. Rumble helps break down the barriers to personal communitation brought up by COVID-19 by making discourse with others easy and accessible. Create chats, make friends, Rumble.",
                        languages: ["typescript", "javascript", "html", "css"],
                        tags: ["Angular, Node, Express, MongoDB, Heroku"]
                },
                {
                        _id: 2,
                        title: "Algorithmic Tasks",
                        subtitle: "An Archive of Algorithms",
                        imageUrl: "../../../../assets/images/competitive-programming-image.png",
                        iconUrl: "../../../../assets/images/competitive-programming.png",
                        link: "https://github.com/DevinLeamy/Competitive-Programming",
                        text: "Months of solving coding problems on Codeforces, LeetCode, DMOJ and other platforms has culminated into a noteworthy archive of algorithms. This archive, and the algorithms therein, utilize a variety of data structures and approaches, from 2D-Matricies in Greedy algorithms to Sparse-Tables in Dynamic Programming algorithms.",
                        languages: ["c++", "java", "c"],
                        tags: ["Codeforces", "LeetCode", "DMOJ"]
                },
                {
                        _id: 3,
                        title: "Pacman",
                        subtitle: "The 80's Classic 'Pacman'",
                        imageUrl: "../../../../assets/images/pacman-image2.png",
                        iconUrl: "../../../../assets/images/pacman-ghost.png",
                        link: "https://github.com/DevinLeamy/Pacman",
                        text: "I made an accurate recreation of the game that was once loved, is univerally known and, stands as a hallmark of arcade-games era of the 80's, Pacman. This recreation is complete with a splash screen, four AI ghosts, animations, sounds, fruits and progressively more challenging levels. Additionally I logged it's development on Youtube @devinleamy.",
                        languages: ["python"],
                        tags: ["pygame"]
                },
                {
                        _id: 4,
                        title: "Route",
                        subtitle: "A Path Finding Algorithm Visualizer",
                        imageUrl: "../../../../assets/images/splash.png",
                        iconUrl: "../../../../assets/images/route.png",
                        link: "https://github.com/DevinLeamy/Route",
                        text: "missing",
                        languages: ["javascript", "html", "css"],
                        tags: ["Github Pages"]
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
