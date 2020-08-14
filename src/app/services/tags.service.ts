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
                        imageUrl: '../../../../assets/images/javascript.png'

                },
                {
                        _id: 1,
                        text: 'Java',
                        color: "#b07219",
                        imageUrl: '../../../../assets/images/java.png'
                },
                {
                        _id: 2,
                        text: 'Swift',
                        color: "#ffac45",
                        imageUrl: '../../../../assets/images/swift.png'
                },
                {
                        _id: 3,
                        text: 'C',
                        color: "#555555",
                        imageUrl: '../../../../assets/images/c.png'
                },
                {
                        _id: 4,
                        text: 'C++',
                        color: "#f34b7d",
                        imageUrl: '../../../../assets/images/cpp.png'
                },
                {
                        _id: 5,
                        text: 'CSS',
                        color: "#563d7c",
                        imageUrl: '../../../../assets/images/css.png'
                },
                {
                        _id: 6,
                        text: 'HTML',
                        color: "#e44b23",
                        imageUrl: '../../../../assets/images/html.png'
                },
                {
                        _id: 7,
                        text: 'Python',
                        color: "#3572A5",
                        imageUrl: '../../../../assets/images/python.png'
                },
                {
                        _id: 8,
                        text: 'TypeScript',
                        color: "#2b7489",
                        imageUrl: '../../../../assets/images/typescript.png'
                }
        ]

        private techTags: TechnologyTag[] = [
                {
                        _id: 0,
                        text: 'Angular',
                        imageUrl: '../../../../assets/images/angular.png'
                },
                {
                        _id: 1,
                        text: 'Node JS',
                        imageUrl: '../../../../assets/images/nodejs.png'
                },
                {
                        _id: 2,
                        text: 'Express',
                        imageUrl: '../../../../assets/images/expressjs.png'
                },
                {
                        _id: 3,
                        text: 'MongoDB',
                        imageUrl: '../../../../assets/images/mongodb.png'
                },
                {
                        _id: 4,
                        text: 'Heroku',
                        imageUrl: '../../../../assets/images/heroku.png'
                },
                {
                        _id: 5,
                        text: 'Codeforces',
                        imageUrl: '../../../../assets/images/codeforces.png'
                },
                {
                        _id: 6,
                        text: 'Leetcode',
                        imageUrl: '../../../../assets/images/leetcode.png'
                },
                {
                        _id: 7,
                        text: 'DMOJ',
                        imageUrl: '../../../../assets/images/dmoj.png'
                },
                {
                        _id: 8,
                        text: 'Pygame',
                        imageUrl: '../../../../assets/images/pygame.png'
                },
                {
                        _id: 9,
                        text: 'Github Pages',
                        imageUrl: '../../../../assets/images/github-pages.png'
                },
                {
                        _id: 10,
                        text: "Xcode",
                        imageUrl: '../../../../assets/images/xcode.png'
                }
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
}
