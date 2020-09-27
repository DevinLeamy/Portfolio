import { Component, Input, AfterViewInit, ElementRef, ViewChild } from "@angular/core"

@Component({
        selector: "app-language",
        templateUrl: "language.component.html",
        styleUrls: ["language.component.css"]
})
export class LanguageComponent implements AfterViewInit {
        @ViewChild("expBar") expBar: ElementRef
        @ViewChild("langIcon") langIcon: ElementRef
        @Input() experience: number
        @Input() name: string
        @Input() color: string
        @Input() iconUrl: string

        ngAfterViewInit() {
                if (this.expBar !== undefined && this.expBar !== null) {
                        this.expBar.nativeElement.style.backgroundColor = this.color
                        this.expBar.nativeElement.style.width = this.experience.toString() + '%'
                }
                if (this.langIcon !== undefined && this.langIcon !== null) {
                        this.langIcon.nativeElement.style.backgroundImage = 'url(' + this.iconUrl + ')'
                }
        }

}
