import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
@Injectable({
        providedIn: "root"
})
export class PageService {
        leftExpanded: boolean = false
        rightExpanded: boolean = false
        leftExpandedUpdated = new Subject<boolean>()
        rightExpandedUpdated = new Subject<boolean>()

        //Returns observable of rightExpanded
        getRightExpandedUpdated() {
                return this.rightExpandedUpdated.asObservable()
        }

        //Returns observable of rightExpanded
        getLeftExpandedUpdated() {
                return this.leftExpandedUpdated.asObservable()
        }

        // Sets current page to home page
        goToHomePage() {
                this.rightExpanded = false
                this.leftExpanded = false
                this.updateLeftExpanded()
                this.updateRightExpanded()
        }

        // Sets current page to about page
        goToAboutPage() {
                this.rightExpanded = true
                this.leftExpanded = false
                this.updateLeftExpanded()
                this.updateRightExpanded()
        }

        // Sets current page to projects page
        goToProjectsPage() {
                this.rightExpanded = false
                this.leftExpanded = true
                this.updateLeftExpanded()
                this.updateRightExpanded()
        }

        //True if home page is open
        onHomePage() {
                if (!this.rightExpanded && !this.leftExpanded) return true
                return false
        }

        //True if projects page is open
        onProjectsPage() {
                if (this.leftExpanded && !this.rightExpanded) return true
                return false
        }

        //True if about page is open
        onAboutPage() {
                if (this.rightExpanded && !this.leftExpanded) return true
                return false
        }

        //Changes expanded panels when the left button is clicked
        leftButtonClicked() {
                if (this.onAboutPage()) { this.goToHomePage() } 
                else if (this.onProjectsPage()) { this.goToAboutPage() }
                else if (this.onHomePage()) { this.goToProjectsPage() }
                this.updateRightExpanded()
                this.updateLeftExpanded()
        }

        //Changes expanded panels when the right button is clicked
        rightButtonClicked() {
                if (this.onAboutPage()) { this.goToProjectsPage() } 
                else if (this.onProjectsPage()) { this.goToHomePage() }
                else if (this.onHomePage()) { this.goToAboutPage() }
                this.updateRightExpanded()
                this.updateLeftExpanded()
        }

        //Get route of component to the left of the current component
        getRouteLeft() {
                if (this.rightExpanded) return '/splash'
                return '/projects'
        }

        //Get route of component to the right of the current component
        getRouteRight() {
                if (this.leftExpanded) return '/splash'
                return '/about'
        }

        //Updates rightExpanded value through observables
        updateRightExpanded() {
                this.rightExpandedUpdated.next(this.rightExpanded)
        }

        //Updates leftExpanded value through observables
        updateLeftExpanded() {
                this.leftExpandedUpdated.next(this.leftExpanded)
        }
}
