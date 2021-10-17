import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Builder } from "../Builder";
import { Container } from "../Container";

/**
 * Draw elements on a circle.
 */
export class RadialLayout extends Container {

  /**
   * Create a radial layout.
   * @param def Radial layout definition
   * @param builder Diagram element builder
   */
  constructor(def: RadialLayoutDefinition, builder: Builder) {
    super(def, builder);
  }

  /** @inheritdoc */
  public get width(): number {
    return (this.def?.radius || 0) * 2;
  }

  /** @inheritdoc */
  public get height(): number {
    return (this.def?.radius || 0) * 2;
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    const group = new SVGElement(this);
    const startAngle = -Math.PI / 2;
    const angleStep = (2 * Math.PI) / this.children.length;
    for (let i = 0; i < this.children.length; i++) {
      const el = this.children[i];
      el.x += this.x + this.def.radius * (Math.cos(startAngle + angleStep * i) + 1) - el.width / 2;
      el.y += this.y + this.def.radius * (Math.sin(startAngle + angleStep * i) + 1) - el.height / 2;
      group.add(el.toSVG());
    }
    return group;
  }

}

/**
 * Radial layout definition
 */
export interface RadialLayoutDefinition extends ElementDefinition {

  /** Distance between layout center and elements center */
  radius?: number;

}
