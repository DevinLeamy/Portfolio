import { Component, Output, ViewChild, ElementRef } from "@angular/core"
import { EventEmitter } from '@angular/core'

@Component({
        selector: "app-contact-me",
        templateUrl: "contact-me.component.html",
        styleUrls: ["contact-me.component.css", "formspree.css"]
})
export class ContactMeComponent {
        @Output() getSelectedChange = new EventEmitter()
        // @ViewChild("name") nameInput: ElementRef
        // @ViewChild("email") emailInput: ElementRef
        // @ViewChild("body") bodyInput: ElementRef

        // //Tries to send email with informatin provided in inputs
        // sendEmail() {
        //         const name = this.getName()
        //         const email = this.getEmail()
        //         var body = this.getBody()
        //         if (name === undefined || email === undefined || body === undefined || !this.validEmail(email)) return false
                
        // }

        // //Gets email from email input
        // getEmail() {
        //         if (this.emailInput !== undefined && this.emailInput !== null) {
        //                 return this.emailInput.nativeElement.text
        //         }
        //         return undefined
        // }

        // //Gets name from name input
        // getName() {
        //         if (this.nameInput !== undefined && this.nameInput !== null) {
        //                 return this.nameInput.nativeElement.text
        //         }
        //         return undefined
        // }

        // //Gets email body from body input
        // getBody() {
        //         if (this.bodyInput !== undefined && this.bodyInput !== null) {
        //                 return this.bodyInput.nativeElement.text
        //         }
        //         return undefined
        // }

        // //Checks if the entered email is valid 
        // validEmail(email: string) {
        //         return true
        // }
}
 