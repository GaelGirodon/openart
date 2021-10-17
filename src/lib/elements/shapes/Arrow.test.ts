import { assert } from "chai";
import { Processor } from "../../processor/Processor";

describe("Arrow", function () {

  it("should render correctly", function () {
    const processor = new Processor();
    const definition = "arrow(width: 32, height: 32, angle: 180)";
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px">`
      + `<path d="M32 16 L0 16 M16 0 L0 16 L16 32" stroke="#000" stroke-width="2" stroke-linecap="round" fill="transparent" />`
      + `</svg>`;
    assert.equal(processor.render(definition), expected);
  });

});
