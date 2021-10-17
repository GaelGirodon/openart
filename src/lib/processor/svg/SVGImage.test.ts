import { assert } from "chai";
import { SVGImage } from "./SVGImage";
import { SVGElement } from "./SVGElement";
import { Rectangle } from "../../elements/shapes/Rectangle";

describe("SVGImage", function () {

  it("should render correctly", function () {
    const image = new SVGImage()
      .add(new SVGElement(new Rectangle({ width: 50, height: 50 }), "rect")
        .attr("width", "50")
        .attr("height", "50"));
    const expected = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">`
      + `<rect width="50" height="50" /></svg>`;
    assert.deepEqual(image.render(), expected);
  });

});
