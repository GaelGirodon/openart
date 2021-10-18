import { SVGElement } from "../../processor/svg/SVGElement";
import { Container } from "../Container";

/**
 * A high-level diagram element used to generate complex images
 * from simple data.
 */
export abstract class Diagram extends Container {

  /** @inheritdoc */
  toSVG(): SVGElement {
    this.children[0].x = this.x;
    this.children[0].y = this.y;
    return this.children[0].toSVG();
  }

}
