import { assert } from "chai";
import { Processor } from "../../processor/Processor";

describe("Text", function () {

  it("should render correctly", function () {
    const processor = new Processor();
    const definition = 'text(text: "Test", x: 100, y: 50)';
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="0px" height="0px">`
      + `<text x="100" y="56" text-anchor="middle" font-family="Arial, sans-serif">Test</text></svg>`;
    assert.equal(processor.render(definition), expected);
  });

});
