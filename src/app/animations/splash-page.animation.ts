import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"

let contactMeAnimation = trigger('showContactMe', [
        state('hidden', style({
                opacity: 0,
                backgroundColor: 'transparent'
        })),
        state('visible', style({
                opacity: 1,
                zIndex: 1
        })),
        transition('visible <=> hidden', animate(200))
])

export { contactMeAnimation }
