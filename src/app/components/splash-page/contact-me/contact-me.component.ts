import { Component, Output } from "@angular/core"
import { EventEmitter } from '@angular/core'

@Component({
        selector: "app-contact-me",
        templateUrl: "contact-me.component.html",
        styleUrls: ["contact-me.component.css"]
})
export class ContactMeComponent {
        @Output() getSelectedChange = new EventEmitter()
}
 