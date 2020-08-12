import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"


let projectsAnimation = [
        trigger('projectsAnimation', [
                transition(":enter", [
                        query(".project-container", 
                                style({
                                        opacity: 0,
                                        transform: 'translateY(-200px)'
                                }),
                                { optional: true}  
                        ),
                        query(".project-container", stagger(150, [
                                        animate("750ms cubic-bezier(0.35, 0, 0.25, 1)", keyframes([
                                                // style({opacity: 0.3}),
                                                // style({opacity: 0.5, transform: 'rotate(-2deg)'}),
                                                // style({opacity: 0.7, transform: 'rotate(3deg)'}),
                                                style({opacity: 1, transform: 'rotate(0deg)'})
                                        ]))
                                ])
                        ),
                ])
        ])
]

export { projectsAnimation }
