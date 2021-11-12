import { OpenArt } from "../dist/openart.esm.js";

/*const definition = `
stack(orientation: vertical) {
  process(orientation: horizontal) {
    Step 1,
    Step 2,
    Step 3
  },
  stack(orientation: horizontal) {
    process(orientation: vertical) {
        Step 1.1,
        Step 1.2,
        Step 1.3,
        Step 1.4,
        Step 1.5,
        Step 1.6,
        Step 1.7,
        Step 1.8
    },
    process(orientation: vertical) {
        Step 2.1,
        Step 2.2,
        Step 2.3,
        Step 2.4,
        Step 2.5,
        Step 2.6,
        Step 2.7,
        Step 2.8
    },
    process(orientation: vertical) {
        Step 3.1,
        Step 3.2,
        Step 3.3,
        Step 3.4,
        Step 3.5,
        Step 3.6,
        Step 3.7,
        Step 3.8
    }
  }
  }
`;*/

/*const definition = `circle(x: 10, y: 10, radius: 100)`;*/

/*const definition = `
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
`;*/

const definition = `
process(orientation: vertical) {
  Step 1,
  Step 2,
  Step 3
}
`;

console.log(new OpenArt().render(definition));
