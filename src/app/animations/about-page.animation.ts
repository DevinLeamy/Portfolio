import { trigger, state, style, transition, animate, stagger, query, animateChild, animation, group, keyframes } from "@angular/animations"

let Visible = trigger("isVisible", [
        state("true", style({
                visibility: "visible",
                opacity: 1
        })),
        state("false", style({
                visibility: 'hidden',
                opacity: 0
        })),
        transition("true <=> false", animate("200ms ease"))
])

export { Visible }
