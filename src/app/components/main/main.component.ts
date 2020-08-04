import { Component, OnInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { PageService } from "../../services/page.service"
import { Subscription } from 'rxjs'

@Component({
        selector: 'app-main',
        animations: [
                trigger("expansionPanel", [
                        state("open", style({
                                width: "100%",
                                visibility: "visible",
                                height: "100%",
                                opacity: "1"
                        })),
                        state("closed", style({
                                width: "0%",
                                visibility: "hidden",
                                height: "0%",
                                opacity: "0"
                        })),
                        transition("open => closed", [
                                animate("0.2s")
                        ]),
                        transition("closed => open", [
                                animate("0.2s")
                        ])
                ])
        ],
        templateUrl: 'main.component.html',
        styleUrls: ["main.component.css"],
        providers: [PageService]
})

export class MainComponent implements OnInit { 
        leftExpanded: boolean = false
        rightExpanded: boolean = false
        leftExpandedSub: Subscription
        rightExpandedSub: Subscription

        constructor(private pageService: PageService) {}
        ngOnInit() {
                this.leftExpandedSub = this.pageService.getLeftExpandedUpdated()
                .subscribe(leftExpanded => {
                        this.leftExpanded = leftExpanded
                })

                this.rightExpandedSub = this.pageService.getRightExpandedUpdated()
                .subscribe(rightExpanded => {
                        this.rightExpanded = rightExpanded
                })
                this.pageService.updateLeftExpanded()
                this.pageService.updateRightExpanded()
        }
}
