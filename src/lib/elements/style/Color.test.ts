import { assert } from "chai";
import { Color } from "./Color";

describe("Color", function () {

  it("should parse and stringify correctly", function () {
    const raw = "#f63a46";
    const color = Color.parse(raw);
    assert.deepEqual(color, new Color(246, 58, 70));
    assert.equal(color.hex(), raw);
  });

});
