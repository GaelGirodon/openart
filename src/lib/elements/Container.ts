import { ElementDefinition } from "../parser/ElementDefinition";
import { Builder } from "./Builder";
import { Element } from "./Element";

/**
 * An element that can contain other elements.
 */
export abstract class Container extends Element {

  /** Container children */
  protected children: Element[] = [];

  /**
   * Create a container element.
   * @param def Container definition
   * @param builder Diagram element builder
   */
  constructor(def: ElementDefinition = {}, protected builder: Builder) {
    super(def);
    this.children = def.children?.length
      ? def.children.map(c => this.builder.build(c)) : [];
  }

  /** @inheritdoc */
  public get width(): number {
    return this.def.width ?? this.children.reduce((max, c) => {
      const width = c.width;
      return width > max ? width : max;
    }, 0);
  }

  /** @inheritdoc */
  public get height(): number {
    return this.def.height ?? this.children.reduce((max, c) => {
      const height = c.height;
      return height > max ? height : max;
    }, 0);
  }

  /**
   * Add an element as a child of the current container.
   * @param element Element to add to container children
   * @returns this
   */
  public add(element: Element): Container {
    element.parent = this;
    this.children.push(element);
    return this;
  }

}
