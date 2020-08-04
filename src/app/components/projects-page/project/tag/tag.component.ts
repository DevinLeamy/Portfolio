import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core"

@Component({
        selector: "app-tag",
        templateUrl: "tag.component.html",
        styleUrls: ["tag.component.css"]
})
export class TagComponent implements OnInit {
        @Input() text: string
        @ViewChild("tag") tag: ElementRef
        ngOnInit() {
                if (this.tag) {
                        this.setTagColor()
                }
        }

        //Sets the color of a given tag
        setTagColor() {
                const tagColor = this.getTagColor()
                this.tag.nativeElement.style.color = tagColor
        }

        //Gets the color for a given tag
        getTagColor() {
                return "#ffffff"
        }
}
