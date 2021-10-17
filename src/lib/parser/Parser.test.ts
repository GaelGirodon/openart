import { assert } from "chai";
import { Parser } from "./Parser";

describe("Parser", function () {

  it("should parse an object with a name", function () {
    const parser = new Parser();
    const input = "process";
    const expected = {
      name: "root",
      children: [
        { name: "process", children: [] }
      ]
    };
    assert.deepEqual(parser.parse(input), expected);
  });

  it("should parse an object with attributes", function () {
    const parser = new Parser();
    const input = "process(style: classic, color: blue)";
    const expected = {
      name: "root",
      children: [
        { name: "process", style: "classic", color: "blue", children: [] }
      ]
    };
    assert.deepEqual(parser.parse(input), expected);
  });

  it("should parse an object with children", function () {
    const parser = new Parser();
    const input =
      "process(style: 'classic', color: \"blue\") {" +
      "  'First item'(color: green)," +
      "  \"Second item\"," +
      "  Third item(color: red) {" +
      "     3.1" +
      "  }" +
      "}";
    const expected = {
      name: "root",
      children: [
        {
          name: "process",
          style: "classic",
          color: "blue",
          children: [
            { name: "First item", color: "green", children: [] },
            { name: "Second item", children: [] },
            { name: "Third item", color: "red", children: [{ name: "3.1", children: [] }] }
          ]
        }
      ]
    };
    assert.deepEqual(parser.parse(input), expected);
  });

  it("should parse multiple objects", function () {
    const parser = new Parser();
    const input = "process-1(a: 1),\nprocess-2(b: 2),\nprocess-3(c: 3)";
    const expected = {
      name: "root",
      children: [
        { name: "process-1", a: 1, children: [] },
        { name: "process-2", b: 2, children: [] },
        { name: "process-3", c: 3, children: [] }
      ]
    };
    assert.deepEqual(parser.parse(input), expected);
  });

});
