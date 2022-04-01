import { trigger, transition, query, style, stagger, animate, group, state, animateChild } from '@angular/animations';



export const list = trigger("list", [
  transition(":enter", [

      query(
        "app-currency",
        [
          style({
            opacity: 0,
            transform: 'translateY(-20%)'
          }),
          stagger("30ms", [
            animate("400ms ease")]),
        ],
        { optional: true }
      ),
    ]),
  
]);


export const onShowDetail = [trigger("onShowDetail", [
      state(
        "currency-detail",
        style({
          left: "0px",
        })
      ),
      transition("* => currency-detail", [animate("300ms ease")]),
])]
    


export const detail = [
  trigger("detail", [
    transition(":enter", [
      style({
        opacity: 0,
        transform: "translateX(-12%)",
      }),
      animate(
        "500ms 300ms ease",
        style({
          opacity: 1,
          transform: "translateX(0%)",
        })
      ),
      query("@button", animateChild(), { optional: true }),
    ]),

    transition(":leave", [
      animate(
        "500ms ease",
        style({
          opacity: 0,
          transform: "translateX(-12%)",
        })
      ),
    ]),
  ]),
];