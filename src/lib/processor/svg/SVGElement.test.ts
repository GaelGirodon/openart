import { assert } from "chai";
import { SVGElement } from "./SVGElement";

describe("SVGElement", function () {

  it("should render correctly", function () {
    const element = new SVGElement(undefined, "svg")
      .attr("id", "test")
      .add(new SVGElement(undefined, "a").attr("b", "c"))
      .add(new SVGElement(undefined, "d").attr("e", "f")
        .add(new SVGElement(undefined, "g").attr("h", "i"))
        .add(new SVGElement(undefined, "j").attr("k", "l")));
    const expected = `<svg id="test"><a b="c" />`
      + `<d e="f"><g h="i" /><j k="l" /></d></svg>`;
    assert.deepEqual(element.render(), expected);
  });

});
