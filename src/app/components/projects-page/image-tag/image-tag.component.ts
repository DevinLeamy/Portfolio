import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { projectsAnimation } from "../../../animations/projects-page.animation"
@Component({
        selector: 'app-image-tag',
        templateUrl: 'image-tag.component.html',
        styleUrls: ["image-tag.component.css"],
        animations: [projectsAnimation]
})
export class ImageTagComponent implements AfterViewInit {
        @Input() text: string
        @Input() imageUrl: string
        hovering: boolean = false
        @ViewChild('container') container: ElementRef
        ngAfterViewInit() {
                if (this.container !== undefined && this.container !== null && this.imageUrl !== undefined && this.imageUrl !== null) {
                        this.container.nativeElement.style.backgroundImage = "url(" + this.imageUrl + ')'
                }
        }
}
