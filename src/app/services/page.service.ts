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

        //Changes expanded panels when the left button is clicked
        leftButtonClicked() {
                if (this.rightExpanded) {
                        this.rightExpanded = false
                } else {
                        this.leftExpanded = true
                }
                this.updateRightExpanded()
                this.updateLeftExpanded()
        }

        //Changes expanded panels when the right button is clicked
        rightButtonClicked() {
                if (this.leftExpanded) {
                        this.leftExpanded = false
                } else {
                        this.rightExpanded = true
                }
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
