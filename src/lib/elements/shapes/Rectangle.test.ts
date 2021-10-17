import { assert } from "chai";
import { Processor } from "../../processor/Processor";

describe("Rectangle", function () {

  it("should render correctly", function () {
    const processor = new Processor();
    const definition = "rect(width: 100, height: 50)";
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">`
      + `<rect x="1" y="1" width="98" height="48" fill="#fff" stroke="#000" stroke-width="2" /></svg>`;
    assert.equal(processor.render(definition), expected);
  });

});
