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
      if (v.length == 1) return { top: v[0], right: v[0], bottom: v[0], left: v[0] };
      if (v.length == 2) return { top: v[0], right: v[1], bottom: v[0], left: v[1] };
      if (v.length == 3) return { top: v[0], right: v[1], bottom: v[2], left: v[1] };
      if (v.length == 4) return { top: v[0], right: v[1], bottom: v[2], left: v[3] };
    }
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }

  /** @inheritdoc */
  public get width(): number {
    return this.def.width ?? this.children.reduce((max, c) => {
      const width = c.width;
      return width > max ? width : max;
    }, 0) + this.padding.left + this.padding.right;
  }

  /** @inheritdoc */
  public get height(): number {
    return this.def.height ?? this.children.reduce((max, c) => {
      const height = c.height;
      return height > max ? height : max;
    }, 0) + this.padding.top + this.padding.bottom;
  }

  /** @inheritdoc */
  toSVG(): SVGElement {
    for (const el of this.children) {
      el.x += this.x + this.padding.left;
      el.y += this.y + this.padding.top;
    }
    return this.children.reduce((group, c) => group.add(c.toSVG()),
      new SVGElement(this));
  }

}

/**
 * Container layout definition
 */
export interface ContainerLayoutDefinition extends ElementDefinition {

  /** Container padding */
  padding?: string | number;

}
