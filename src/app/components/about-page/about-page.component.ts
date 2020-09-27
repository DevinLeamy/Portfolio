import { Component } from "@angular/core"
import { PageService } from "../../services/page.service"
import { TagsService } from 'src/app/services/tags.service'
import { TechnologyTag } from 'src/app/models/technology-tag.model'
import { Visible } from "src/app/animations/about-page.animation"

@Component({
        selector: "app-about-page",
        templateUrl: "about-page.component.html",
        styleUrls: ["about-page.component.css"],
        animations: [Visible]
})
export class AboutPageComponent {
        educationVis: boolean = false
        passionVis: boolean = false
        hireVis: boolean = false 
        quoteVis: boolean = false
        pastimesVis: boolean = false
        constructor(public pageService: PageService, public tagsService: TagsService) {}

        // returns technologies in which I have experience
        getDefinedTechnologies() : TechnologyTag[] {
                const definedTags = this.tagsService.getTechTags()
                        .filter(tag => tag.color !== undefined)
                return definedTags
        }
}
