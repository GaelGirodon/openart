import { assert } from "chai";
import { Processor } from "../../processor/Processor";

describe("Rectangle", function () {

  it("should render correctly", function () {
    const processor = new Processor();
    const definition = "rect";
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg">`
      + `<rect x="0" y="0" width="0px" height="0px" fill="#fff" stroke="#000" stroke-width="1" /></svg>`;
    assert.equal(processor.render(definition), expected);
  });

});
