import { ElementDefinition } from "../../parser/ElementDefinition";
import { SVGElement } from "../../processor/svg/SVGElement";
import { Builder } from "../Builder";
import { Container } from "../Container";

/**
 * A simple container layout
 */
export class ContainerLayout extends Container {

  /**
   * Create a container layout.
   * @param def Container layout definition
   * @param builder Diagram element builder
   */
  constructor(protected def: ContainerLayoutDefinition = {}, builder: Builder) {
    super(def, builder);
  }

  /**
   * Container layout padding
   */
  public get padding(): { top: number, right: number, bottom: number, left: number } {
    if (this.def.padding && /^([0-9]+,){0,3}[0-9]+$/.test(this.def.padding.toString())) {
      const v = this.def.padding.toString().split(",").map(v => parseInt(v));
      const i = [[0, 0, 0, 0], [0, 1, 0, 1], [0, 1, 2, 1], [0, 1, 2, 3]][v.length - 1];
      return { top: v[i[0]], right: v[i[1]], bottom: v[i[2]], left: v[i[3]] };
    }
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }

  /** @inheritdoc */
  public get width(): number {
    return this.computeWidth() + this.padding.left + this.padding.right;
  }

  /** @inheritdoc */
  public get height(): number {
    return this.computeHeight() + this.padding.top + this.padding.bottom;
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    const group = new SVGElement(this);
    for (const c of this.children) {
      c.x += this.x + this.padding.left;
      c.y += this.y + this.padding.top;
      group.add(c.toSVG());
    }
    return group;
  }

}

/**
 * Container layout definition
 */
export interface ContainerLayoutDefinition extends ElementDefinition {

  /** Container padding */
  padding?: string | number;

}
