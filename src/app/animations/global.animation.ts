import { trigger, state, style, transition, animate, stagger, query, group, keyframes } from "@angular/animations"
import { aboutMeSetInitialPositions, aboutMeAnimateElements, aboutMeExitAnimation } from "../animations/about-me-page.animation"
let fadeInFromLeft = [
        trigger('fadeLeft', [
                state('void', style({
                        opacity: 0, 
                        transform: "translateX(400px)"
                })),
                transition(':enter', [
                        animate(1000)
                ])
        ])
]
let fadeInFromRight = [
        trigger('fadeRight', [
                state('void', style({
                        opacity: 0, 
                        transform: "translateX(-400px)"
                })),
                transition(':enter', [
                        animate(1000)
                ])
        ])
]

let pageSlide = [
        trigger("pageAnimation", [
                // transition('SplashPage => AboutPage, ProjectPage => SplashPage', [
                transition('x => y', [
                        aboutMeSetInitialPositions[0],
                        query(':enter', [
                                style({
                                        position: 'absolute',
                                        height: '500px',
                                        width: '500px',
                                        left: 'calc(150% - 250px)',
                                        top: 'calc(50% - 250px)',
                                        opacity: 0
 
                                }),
                        ]),
                        query(':leave', [
                                style({
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        left: 0,
                                        top: 0
                                }),
                        ]),
                        query(".projects-header, .project-container", [
                                stagger(100, [
                                        animate(200, style({
                                                opacity: 0,
                                                width: 0,
                                                height: 0,
                                                borderRadius: 5,
                                                // transform: 'translateX(500px) translateY(500px) rotate(270deg)'
                                                transform: 'translateY(500px)'
                                        }))
                                ])
                        ],{optional: true}),
                        query(':leave', [
                                animate(200, style({
                                        height: '500px',
                                        width: '500px',
                                        left: 'calc(50% - 250px)',
                                        top: 'calc(50% - 250px)',
                                        opacity: 1
                                })),
                        ]),
                        group([
                                query(":enter", [
                                        animate('200ms ease', style({
                                                left: 'calc(50% - 250px)',
                                                opacity: 1
                                        }))
                                ]),
                                query(":leave", [
                                        animate('400ms ease', style({
                                                left: 'calc(-50% - 250px)',
                                                opacity: 0
                                        })),
                                ])
                        ]),
                        query(":enter", [
                                animate('150ms ease', style({
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0
                                }))
                        ]),
                        aboutMeAnimateElements[0],
                        aboutMeAnimateElements[1],
                        aboutMeAnimateElements[2],
                        aboutMeAnimateElements[3],
                        aboutMeAnimateElements[4],
                        // aboutMeAnimateElements[5]
                ]),
                // transition('AboutPage => SplashPage, SplashPage => ProjectPage', [
                transition('x => y', [
                        query(".project-container, .projects-header", 
                                style({
                                        opacity: 0,
                                        transform: 'translateY(-200px)'
                                }), {optional: true}  
                        ),
                        query(':enter', [
                                style({
                                        position: 'absolute',
                                        height: '500px',
                                        width: '500px',
                                        left: 'calc(-50% - 250px)',
                                        top: 'calc(50% - 250px)',
                                        opacity: 0
 
                                }),
                        ]),
                        query(':leave', [
                                style({
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        left: 0,
                                        top: 0
                                }),
                        ]),
                        aboutMeExitAnimation[0],
                        query(':leave', [
                                animate(200, style({
                                        height: '500px',
                                        width: '500px',
                                        left: 'calc(50% - 250px)',
                                        top: 'calc(50% - 250px)',
                                        opacity: 1
                                })),
                        ]),
                        group([
                                query(":enter", [
                                        animate('200ms ease', style({
                                                left: 'calc(50% - 250px)',
                                                opacity: 1
                                        }))
                                ]),
                                query(":leave", [
                                        animate('400ms ease', style({
                                                left: 'calc(150% - 250px)',
                                                opacity: 0
                                        })),
                                ])
                        ]),
                        query(":enter", [
                                animate('150ms ease', style({
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0
                                }))
                        ]),
                        query(".project-container, .projects-header", stagger(150, [
                                        animate("500ms cubic-bezier(0.35, 0, 0.25, 1)", keyframes([
                                                style({opacity: 1, transform: 'rotate(0deg)'})
                                        ]))
                                ]), {optional: true}  
                        ),
                       
                ])    
        ])
]



export { fadeInFromLeft, fadeInFromRight, pageSlide }
