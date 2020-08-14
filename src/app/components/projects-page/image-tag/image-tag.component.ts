import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
@Component({
        selector: 'app-image-tag',
        templateUrl: 'image-tag.component.html',
        styleUrls: ["image-tag.component.css"]
})
export class ImageTagComponent implements AfterViewInit {
        @Input() text: string
        @Input() imageUrl: string
        @ViewChild('container') container: ElementRef
        
        ngAfterViewInit() {
                if (this.container !== undefined && this.container !== null && this.imageUrl !== undefined && this.imageUrl !== null) {
                        this.container.nativeElement.style.backgroundImage = "url(" + this.imageUrl + ')'
                }
        }
}
