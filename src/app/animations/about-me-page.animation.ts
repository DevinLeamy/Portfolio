import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"


let pageSlide = trigger("aboutMePageAnimation", [
        transition(":enter", [
                query(".left-container, .right-container", [
                        style({
                                transform: "translateY(-800px)",
                                opacity: "0"
                        })
                ]),
                query(".header", style({
                        opacity: 0
                })),
                query(".middle-container", [
                        style({
                                transform: "translateX(1600px)",
                                opacity: "0"
                        })
                ]),
                query(".right-container, .left-container, .middle-container", [
                        stagger("200ms", animate("500ms ease"))
                ]),
                query(".header", animate("200ms ease", style({
                        opacity: 1
                })))
        ])
])

export { pageSlide }
