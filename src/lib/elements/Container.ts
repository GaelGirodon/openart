import { Element } from "./Element";

/**
 * An element that can contain other elements.
 */
export abstract class Container extends Element {

  /** Container children */
  protected children: Element[] = [];

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
