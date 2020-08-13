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
                                                style({opacity: 1, transform: 'rotate(0deg)'})
                                        ]))
                                ])
                        ),
                ])
        ]),
        trigger('showProject', [
                state('hidden', style({
                        opacity: 0,
                        backgroundColor: 'transparent'
                })),
                state('visible', style({
                        opacity: 1,
                        backgroundColor: 'white',
                        zIndex: 1
                })),
                transition('hidden <=> visible', animate(0))
        ])
]

export { projectsAnimation }
