import { Processor } from "../src/lib/processor/Processor";

const processes = `
container(padding: 8) {
  stack(orientation: horizontal, gap: 8) {
    process(orientation: vertical) {
      Step 1,
      Step 2,
      Step 3
    },
    stack(orientation: vertical, gap: 8) {
      process(orientation: horizontal, color: #ED4C67) {
          Step 1.1,
          Step 1.2,
          Step 1.3,
          Step 1.4,
          Step 1.5,
          Step 1.6,
          Step 1.7
      },
      process(orientation: horizontal, color: #12CBC4, theme: lighten) {
          Step 2.1,
          Step 2.2,
          Step 2.3,
          Step 2.4,
          Step 2.5,
          Step 2.6,
          Step 2.7
      },
      process(orientation: horizontal, color: #A3CB38, theme: darken) {
          Step 3.1,
          Step 3.2,
          Step 3.3,
          Step 3.4,
          Step 3.5,
          Step 3.6,
          Step 3.7
      },
      process(orientation: horizontal, color: #F79F1F #EE5A24 #C4E538 #1289A7 #B53471 #5758BB #006266) {
          Step 3.1,
          Step 3.2,
          Step 3.3,
          Step 3.4,
          Step 3.5,
          Step 3.6,
          Step 3.7
      }
    }
  }
}
`;

const circle = `circle(x: 10, y: 10, radius: 100)`;

const radialCycle = `
stack(orientation: vertical) {
  container(padding: 55) {
    radial(radius: 200) {
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25),
      circle(radius: 50),
      circle(radius: 25)
    }
  },
  cycle { Step 1, Step 2, Step 3, Step 4, Step 5, Step 6, Step 7, Step 8 }
}
`;

const process = `
process(orientation: horizontal) {
  Step 1,
  Step 2
}
`;

const arrows = `
stack {
  arrow(width: 32, height: 32, angle: 180),
  arrow(width: 32, height: 32, angle: ${45*1}),
  arrow(width: 32, height: 32, angle: ${45*2}),
  arrow(width: 32, height: 32, angle: ${45*3}),
  arrow(width: 32, height: 32, angle: ${45*4}),
  arrow(width: 32, height: 32, angle: ${45*5}),
  arrow(width: 32, height: 32, angle: ${45*6}),
  arrow(width: 32, height: 32, angle: ${45*7})
}
`;

console.log(new Processor().render(processes));
