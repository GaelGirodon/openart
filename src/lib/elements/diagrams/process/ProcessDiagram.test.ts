import { assert } from "chai";
import { Processor } from "../../../processor/Processor";

describe("ProcessDiagram", function () {

  it("should render correctly an horizontal process", function () {
    const processor = new Processor();
    const definition = "process(orientation: horizontal) { Step 1, Step 2 }";
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="348px" height="80px">`
      + `<rect x="1" y="1" width="148" height="78" rx="1" fill="#fff" stroke="#000" stroke-width="2" />`
      + `<text x="75" y="46" text-anchor="middle" font-family="Arial, sans-serif">Step 1</text>`
      + `<path d="M162 40 L186 40 M174 52 L186 40 L174 28" stroke="#000" stroke-width="2" stroke-linecap="round" fill="transparent" />`
      + `<rect x="199" y="1" width="148" height="78" rx="1" fill="#fff" stroke="#000" stroke-width="2" />`
      + `<text x="273" y="46" text-anchor="middle" font-family="Arial, sans-serif">Step 2</text>`
      + `</svg>`;
    assert.equal(processor.render(definition), expected);
  });

  it("should render correctly a vertical process", function () {
    const processor = new Processor();
    const definition = "process(orientation: vertical) { Step 1, Step 2 }";
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="150px" height="208px">`
      + `<rect x="1" y="1" width="148" height="78" rx="1" fill="#fff" stroke="#000" stroke-width="2" />`
      + `<text x="75" y="46" text-anchor="middle" font-family="Arial, sans-serif">Step 1</text>`
      + `<path d="M75 92 L75 116 M63 104 L75 116 L87 104" stroke="#000" stroke-width="2" stroke-linecap="round" fill="transparent" />`
      + `<rect x="1" y="129" width="148" height="78" rx="1" fill="#fff" stroke="#000" stroke-width="2" />`
      + `<text x="75" y="174" text-anchor="middle" font-family="Arial, sans-serif">Step 2</text>`
      + `</svg>`;
    assert.equal(processor.render(definition), expected);
  });

});
