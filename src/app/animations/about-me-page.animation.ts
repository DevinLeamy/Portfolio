import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"


let schoolAnimation = query(".school-text, .school-icon", animate(400))

let iconAnimation = animate(400, keyframes([
        style({width: "10px", height: "10px", opacity: 0, margin: 'auto'}),
        style({width: '100px', height: "100px", opacity: 1}),
        style({width: '60px', height: "60px", opacity: 1})
]))

let traitsAnimation = query(".traits-container, .traits-text, .traits-icon",  
        group([
                query(".trait-text", 
                        stagger(400, animate(200, 
                                style({opacity: 1, transform: "translateY(0px)"})
                        ))
                ),
                query(".trait-container", stagger(400, animate(800, keyframes([
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
        query(".trait-icon, .link, .middle-top-header, .interest-header, .interest-body", style({ opacity: 0 })),
        query(".school-icon", style({opacity:0, transform: "translateX(-200px)"})),
        query(".school-text", style({opacity:0, transform: "translateX(200px)"})),
        query(".trait-container", style({ borderBottom: "4px solid transparent" })),
        query(".trait-text", style({ opacity: 0, transform: "translateY(100px)" })),
        query(".header", style({ opacity: 0 })),
        query(".middle-container", [
                style({ transform: "translateX(800px)", opacity: 0 })
        ])
]

let containerAnimation = query(".right-container, .left-container, .middle-container", [
                stagger("100ms", animate("500ms ease"))
        ])

let headerAnimation = query(".header", animate("200ms ease", style({
                opacity: 1
        })))
let linkAnimation = query(".link, .link-text",
        group([
                animate(1000, keyframes([
                        style({opacity: 1, filter: "blur(9px)"}),
                        style({filter: "blur(0px)"})
                ])),
                // animate(700, keyframes([
                //         style({fontSize: "60px", color: "rgb(56, 55, 54)"}),
                //         style({fontSize: "70px", color: "rgb(162, 186, 250)"}),
                //         style({fontSize: "50px", color: "rgb(56, 55, 54)"})
                // ]))
        ])
)
let pageSlide = trigger("aboutMePageAnimation", [
        transition(":enter", [
                initialPositions[0],
                initialPositions[1],
                initialPositions[2],
                initialPositions[3],
                initialPositions[4],
                initialPositions[5],
                initialPositions[6],
                initialPositions[7],
                containerAnimation,
                headerAnimation,
                linkAnimation,
                schoolAnimation,
                traitsAnimation
        ])
])
export { pageSlide }
