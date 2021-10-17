import { Element } from "../../elements/Element";

/**
 * A SVG image element
 */
export class SVGElement {

  /** Element attributes */
  private attributes: { [key: string]: string | number };

  /** Element children */
  protected children: (SVGElement | string)[];

  /** Element parent */
  private parent?: SVGElement;

  /**
   * Create an SVG element.
   * @param name Element name
   */
  constructor(public element: Element | undefined, protected name: string = "") {
    this.attributes = {};
    this.children = [];
  }

  /**
   * Set an attribute.
   * @param name Attribute name
   * @param value Attribute value
   * @returns this
   */
  public attr(name: string, value: string | number): SVGElement {
    this.attributes[name] = value;
    return this;
  }

  /**
   * Add an element as a child of the current element.
   * @param element Element to add
   * @returns this
   */
  public add(element: SVGElement | string): SVGElement {
    if (typeof element != "string") {
      element.parent = this;
    }
    this.children.push(element);
    return this;
  }

  /**
   * Render the SVG element.
   * @returns SVG element as text.
   */
  public render(): string {
    let element = "";
    if (this.name) {
      element += `<${this.name}`;
      const attributes = Object.keys(this.attributes)
        .map(k => `${k}="${SVGElement.escapeAttr(this.attributes[k])}"`)
        .join(" ");
      element += attributes ? " " + attributes : "";
    }
    if (this.children.length > 0) {
      element += (this.name ? ">" : "")
        + this.children
          .map(c => typeof c == "string" ? c : c.render()).join("")
        + (this.name ? `</${this.name}>` : "");
    } else if (this.name) {
      element += " />";
    }
    return element;
  }

  /**
   * Escape an attribute value.
   * @param value Attribute value to escape
   * @returns Escaped attribute value
   */
  private static escapeAttr(value: string | number) {
    return typeof value == "string" ? value.replace(/"/g, '\\"') : value;
  }

}
