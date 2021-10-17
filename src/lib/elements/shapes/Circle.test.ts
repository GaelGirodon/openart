import { assert } from "chai";
import { Processor } from "../../processor/Processor";

describe("Circle", function () {

  it("should render correctly", function () {
    const processor = new Processor();
    const definition = "circle(radius: 100)";
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px">`
      + `<circle cx="100" cy="100" r="100" fill="#fff" stroke="#000" stroke-width="2" /></svg>`;
    assert.equal(processor.render(definition), expected);
  });

});
