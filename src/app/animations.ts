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



export const button = [
  trigger("button", [
    transition(":enter", [
      style({
        opacity: 0,
        transform: "translateY(100%)",
      }),

      animate("300ms ease"),
    ]),
  ]),
];


export const dropDown = trigger("dropDown", [
  transition(":enter", [
    group([
      query(":self", [
        style({
          opacity: 0,
          height: "0px",
        }),
        animate(
          "300ms ease",
          style({
            opacity: 1,
            height: "*",
          })
        ),
      ]),

      query(
        "li",
        [
          style({
            opacity: 0,
            transform: "translateY(10px)",
          }),
          stagger("10ms", [
            animate(
              "200ms 200ms ease",
              style({
                opacity: 1,
                transform: "translateY(0px)",
              })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition(":leave", [
    animate(
      "300ms ease",
      style({
        opacity: 0,
      })
    ),
  ]),
]);