import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"


let iconAnimation = animate(400, keyframes([
        style({width: "10px", height: "10px", opacity: 0, margin: 'auto'}),
        style({width: '100px', height: "100px", opacity: 1}),
        style({})
]))

let traitsAnimation = query(".traits-container, .traits-text, .traits-icon",  
        group([
                query(".trait-text", 
                        stagger(400, animate(200, 
                                style({opacity: 1, transform: "translateY(0px)"})
                        ))
                ),
                query(".trait-container", stagger(400, animate(400, keyframes([
                        style({borderBottom: '4px solid hotpink'}),
                        style({borderBottom: '4px solid rgb(85, 84, 84)'})
                ])))),
                query(".trait-icon", stagger(400, iconAnimation)),
        ])
)

let initialPositions = [
        query(".left-container, .right-container", [
                style({
                        transform: "translateY(-800px)",
                        opacity: 0,
                        width: 0,
                        height: 0
                })
        ]),
        query(".school-icon, .school-text-container, .trait-icon, .link, .middle-top-header, .interest-header, .interest-body", style({
                opacity: 0
        })),
        query(".trait-container", style({
                borderBottom: "4px solid transparent"
        })),
        query(".trait-text", style({
                opacity: 0,
                transform: "translateY(100px)"
        })),
        query(".header", style({
                opacity: 0
        })),
        query(".middle-container", [
                style({
                        transform: "translateX(1600px)",
                        opacity: 0
                })
        ])
]

let containerAnimation = query(".right-container, .left-container, .middle-container", [
                stagger("100ms", animate("500ms ease"))
        ])

let headerAnimation = query(".header", animate("200ms ease", style({
                opacity: 1
        })))
let pageSlide = trigger("aboutMePageAnimation", [
        transition(":enter", [
                initialPositions[0],
                initialPositions[1],
                initialPositions[2],
                initialPositions[3],
                containerAnimation,
                headerAnimation,
                traitsAnimation
        ])
])
export { pageSlide }
