import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"

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
                transition('SplashPage => AboutPage, ProjectPage => SplashPage', [
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
                        query(':leave', [
                                animate(400, style({
                                        height: '500px',
                                        width: '500px',
                                        left: 'calc(50% - 250px)',
                                        top: 'calc(50% - 250px)',
                                        opacity: 1
                                })),
                        ]),
                        group([
                                query(":enter", [
                                        animate('400ms ease', style({
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
                                animate('300ms ease', style({
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0
                                }))
                        ])
                ]),
                transition('AboutPage => SplashPage, SplashPage => ProjectPage', [
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
                        query(':leave', [
                                animate(400, style({
                                        height: '500px',
                                        width: '500px',
                                        left: 'calc(50% - 250px)',
                                        top: 'calc(50% - 250px)',
                                        opacity: 1
                                })),
                        ]),
                        group([
                                query(":enter", [
                                        animate('400ms ease', style({
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
                                animate('300ms ease', style({
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        left: 0
                                }))
                        ])
                ])    
        ])
]



export { fadeInFromLeft, fadeInFromRight, pageSlide }
