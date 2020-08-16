import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"

let projectsAnimation = [
        trigger('projectsAnimation', [
                transition(":enter", [
                        query(".project-container, .projects-header", 
                                style({
                                        opacity: 0,
                                        transform: 'translateY(-200px)'
                                }),
                                { optional: true}  
                        ),
                        query(".project-container, .projects-header", stagger(150, [
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
                state('visibleAgain', style({
                        opacity: 1,
                        backgroundColor: 'white',
                        zIndex: 1
                })),
                transition('hidden => visible, hidden => visibleAgain, visible <=> visibleAgain', [
                        query('.icon-container, .middle-left-container, .lang-tags-container', [
                                style({
                                        transform: 'translateX(-200px)',
                                        opacity: '0'
                                })
                        ]),
                        query('.title-container, .image-container, .link-text, .link, .tech-tags-container', [
                                style({
                                        transform: 'translateX(200px)',
                                        opacity: '0'
                                })
                        ]),
                        animate(200, style({
                                opacity: 1,
                                backgroundColor: 'white',
                                zIndex: 1
                        })),
                        query('.icon-container, .middle-left-container, .lang-tags-container, .tech-tags-container, .title-container, .image-container, .link-text, .link', [
                                stagger(100, animate(200, style({
                                        transform: 'translateX(0px)',
                                        opacity: '1'
                                })))
                        ])
                ]),
                transition('visible => hidden', animate(200)),
        ]),
        trigger('showTooltip', [
                state('hidden', style({
                        opacity: 0,
                        zIndex: -100
                })),
                state('visible', style({
                        opacity: 1,
                        zIndex: 100
                })),
                transition('hidden => visible', animate(50)),
                transition('visible => hidden', animate(0)),
        ])
]

export { projectsAnimation }
