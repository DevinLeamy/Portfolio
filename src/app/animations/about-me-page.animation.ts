import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"


let schoolAnimation = group([
        query(".school-text, .school-icon", animate(400), {optional: true})      
])

let iconAnimation = group([
        animate(400, keyframes([
                style({width: "10px", height: "10px", opacity: 0, margin: 'auto'}),
                style({width: '100px', height: "100px", opacity: 1}),
                style({width: '60px', height: "60px", opacity: 1})
        ])) 
])

let traitsAnimation = group([
        query(".trait-text", 
                stagger(400, animate(200, 
                        style({opacity: 1, transform: "translateY(0px)"})
                ))
        , {optional: true}),
        query(".trait-container", stagger(400, animate(800, keyframes([
                style({borderBottom: '4px solid hotpink'}),
                style({borderBottom: '4px solid rgb(85, 84, 84)'})
        ]))), {optional: true}),
        query(".trait-icon", stagger(400, iconAnimation), {optional: true}),
])

let initialPositions = group([
        query(".left-container, .right-container", [
                style({
                        transform: "translateY(-800px)",
                        opacity: 0,
                        width: 0,
                        height: 0
                })
        ], {optional: true}),
        query(".trait-icon, .link, .middle-top-header, .interest-header, .interest-body", style({ opacity: 0 }), {optional: true}),
        query(".school-icon", style({opacity:0, transform: "translateX(-200px)"}), {optional: true}),
        query(".school-text", style({opacity:0, transform: "translateX(200px)"}), {optional: true}),
        query(".trait-container", style({ borderBottom: "4px solid transparent" }), {optional: true}),
        query(".trait-text", style({ opacity: 0, transform: "translateY(100px)" }), {optional: true}),
        query(".header", style({ opacity: 0 }), {optional: true}),
        query(".bottom-container", [
                style({ transform: "translateX(800px)", opacity: 0 })
        ], {optional: true}),
        query(".interest-container", style({ borderRight: '1px solid transparent', borderLeft: "1px solid transparent"}), {optional: true})
])

let containerAnimation = group([
        query(".right-container, .left-container, .bottom-container", [
                stagger("100ms", animate("500ms ease"))
        ], {optional: true})
])
let headerAnimation = group([
        query(".header", animate("200ms ease", style({
                opacity: 1
        })), {optional: true})
])
let linkAnimation = group([
        query(".link, .link-text",
                group([
                        animate(1000, keyframes([
                                style({opacity: 0.5, filter: "blur(9px)"}),
                                style({opacity: 1, filter: "blur(0px)"})
                        ])),
                        // animate(700, keyframes([
                        //         style({fontSize: "60px", color: "rgb(56, 55, 54)"}),
                        //         style({fontSize: "70px", color: "rgb(162, 186, 250)"}),
                        //         style({fontSize: "50px", color: "rgb(56, 55, 54)"})
                        // ]))
                ])
        , {optional: true})
])
// let currentEventsAnimation = query(".middle-container", animate(1000))

let eventsAnimation = group([
        query(".interest-container", stagger(200, animate(400, keyframes([
                style({opacity: 1, borderRight: '3px solid hotpink'}),
                style({opacity: 1, borderRight: '1px solid rgb(231, 231, 204)', borderLeft: '1px solid rgb(231, 231, 204)'})
        ]))), {optional: true}),
        query(".interest-body, .interest-header", stagger(200, animate(200, keyframes([
                style({opacity: 1}),
        ]))), {optional: true}),
        query(".middle-top-header", animate(2000, style({opacity: 1})), {optional: true})
])

let aboutMeSetInitialPositions = [
        initialPositions
]

let aboutMeAnimateElements = [
        containerAnimation,
        headerAnimation,
        schoolAnimation,
        linkAnimation,
        traitsAnimation,
        eventsAnimation
]

let pageSlide = trigger("aboutMePageAnimation", [
        transition(":enter", aboutMeSetInitialPositions.concat(aboutMeAnimateElements))
])
export { pageSlide, aboutMeSetInitialPositions, aboutMeAnimateElements }
