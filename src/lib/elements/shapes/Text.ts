import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Element } from "../Element";

/**
 * A text block
 */
export class Text extends Element {

  /**
   * Create a text block.
   * @param def Text definition
   */
  constructor(protected def: TextDefinition) {
    super(def);
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    const el = new SVGElement(this, "text")
      .attr("x", this.x)
      .attr("y", this.y + 6)
      .attr("text-anchor", "middle")
      .attr("font-family", this.def.fontFamily || "Arial, sans-serif")
      .attr("fill", this.def.fill ?? "#000")
      .add(this.def.text || "");
    if (this.def.fontSize) el.attr("font-size", this.def.fontSize);
    return el;
  }

}

/**
 * Text definition
 */
export interface TextDefinition extends ElementDefinition {

  /** Text value */
  text?: string;

  /** Size of the font */
  fontSize?: string;

  /** Font family */
  fontFamily?: string;

}
