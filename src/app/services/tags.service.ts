import { Injectable } from "@angular/core"
import { LanguageTag } from "../models/language-tag.model"
import { TechnologyTag } from '../models/technology-tag.model'
@Injectable({
        providedIn: "root"
})
export class TagsService {
        private langTags: LanguageTag[] = [
                {
                        _id: 0,
                        text: 'JavaScript',
                        color: "#f1e05a",
                        imageUrl: 'assets/images/javascript.png',
                        experience: 90

                },
                {
                        _id: 1,
                        text: 'Java',
                        color: "#b07219",
                        imageUrl: 'assets/images/java.png',
                        experience: 70
                },
                {
                        _id: 2,
                        text: 'Swift',
                        color: "#ffac45",
                        imageUrl: 'assets/images/swift.png',
                        experience: 40
                },
                {
                        _id: 3,
                        text: 'C',
                        color: "#555555",
                        imageUrl: 'assets/images/c.png',
                        experience: 30
                },
                {
                        _id: 4,
                        text: 'C++',
                        color: "#f34b7d",
                        imageUrl: 'assets/images/cpp.png',
                        experience: 50
                },
                {
                        _id: 5,
                        text: 'CSS',
                        color: "#563d7c",
                        imageUrl: 'assets/images/css.png',
                        experience: 70
                },
                {
                        _id: 6,
                        text: 'HTML',
                        color: "#e44b23",
                        imageUrl: 'assets/images/html.png',
                        experience: 70
                },
                {
                        _id: 7,
                        text: 'Python',
                        color: "#3572A5",
                        imageUrl: 'assets/images/python.png',
                        experience: 80
                },
                {
                        _id: 8,
                        text: 'TypeScript',
                        color: "#2b7489",
                        imageUrl: 'assets/images/typescript.png',
                        experience: 90
                },
                {
                        _id: 9,
                        text: 'C#',
                        color: "#0e8a16",
                        imageUrl: 'assets/images/csharp2.png',
                        experience: 30
                }
        ]

        private techTags: TechnologyTag[] = [
                {
                        _id: 0,
                        text: 'Angular JS',
                        imageUrl: 'assets/images/angular.png',
                        experience: 70,
                        color: 'rgb(255, 59, 48)'
                },
                {
                        _id: 1,
                        text: 'Node JS',
                        imageUrl: 'assets/images/nodejs.png',
                        experience: 60,
                        color: 'rgb(255, 149, 0)'
                },
                {
                        _id: 2,
                        text: 'Express JS',
                        imageUrl: 'assets/images/expressjs.png',
                        experience: 60,
                        color: 'rgb(200, 145, 185)'
                },
                {
                        _id: 3,
                        text: 'MongoDB',
                        imageUrl: 'assets/images/mongodb.png',
                        experience: 60,
                        color: 'rgb(76, 217, 100)'
                },
                {
                        _id: 4,
                        text: 'Heroku',
                        imageUrl: 'assets/images/heroku.png',
                        experience: undefined,
                        color: undefined
                },
                {
                        _id: 5,
                        text: 'Codeforces',
                        imageUrl: 'assets/images/codeforces.png',
                        experience: undefined,
                        color: undefined
                },
                {
                        _id: 6,
                        text: 'Leetcode',
                        imageUrl: 'assets/images/leetcode.png',
                        experience: undefined,
                        color: undefined
                },
                {
                        _id: 7,
                        text: 'DMOJ',
                        imageUrl: 'assets/images/dmoj.png',
                        experience: undefined,
                        color: undefined
                },
                {
                        _id: 8,
                        text: 'Pygame',
                        imageUrl: 'assets/images/pygame2.png',
                        experience: 40,
                        color: 'rgb(255, 204, 0)'
                },
                {
                        _id: 9,
                        text: 'Github Pages',
                        imageUrl: 'assets/images/github-pages.png',
                        experience: undefined,
                        color: undefined
                },
                {
                        _id: 10,
                        text: "Xcode",
                        imageUrl: 'assets/images/xcode.png',
                        experience: 40,
                        color: 'rgb(0, 122, 255)'
                },
                {
                        _id: 11,
                        text: "Unity",
                        imageUrl: 'assets/images/unity.png',
                        experience: 30,
                        color: 'rgb(88, 86, 214)'
                },
        ]

        //Get tech tag
        getTechTag(name: string) {
                for (var i = 0; i < this.techTags.length; i++) {
                        const tag = this.techTags[i]
                        if (tag.text.toLowerCase() === name.toLowerCase()) {
                                return tag
                        }
                }
                return null
        }

        //Get language tag
        getLanguageTag(name: string) {
                for (var i = 0; i < this.langTags.length; i++) {
                        const tag = this.langTags[i]
                        if (tag.text.toLowerCase() === name.toLowerCase()) {
                                return tag
                        }
                }
                return null
        }

        // sorts the language tags by experience descending and returns them
        getLangTags() : LanguageTag[] {
                this.langTags.sort(
                        (langA, langB) => (langA.experience > langB.experience)? -1 : 1) 
                return this.langTags
        }

        // sort the technologies by experience descending and return them
        getTechTags() {
                return this.techTags
                // thisx/
        }
}
