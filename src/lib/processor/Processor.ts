import { Builder } from "../elements/Builder";
import { ProcessDiagram } from "../elements/diagrams/process/ProcessDiagram";
import { ContainerLayout } from "../elements/layouts/ContainerLayout";
import { RadialLayout } from "../elements/layouts/RadialLayout";
import { StackLayout } from "../elements/layouts/StackLayout";
import { Arrow } from "../elements/shapes/Arrow";
import { Circle } from "../elements/shapes/Circle";
import { Rectangle } from "../elements/shapes/Rectangle";
import { Text } from "../elements/shapes/Text";
import { Parser } from "../parser/Parser";
import { SVGImage } from "./svg/SVGImage";

/**
 * Diagram processor
 */
export class Processor {

  /**
   * Diagram definition language parser
   */
  private parser = new Parser();

  /**
   * Diagram element builder
   */
  private builder = new Builder({
    // Layouts
    "root": ContainerLayout,
    "container": ContainerLayout,
    "radial": RadialLayout,
    "stack": StackLayout,
    // Shapes
    "arrow": Arrow,
    "circle": Circle,
    "rect": Rectangle,
    "text": Text,
    // Diagrams
    "process": ProcessDiagram
  });

  /**
   * Render a diagram.
   * @param definitionText Diagram definition as raw text
   * @returns Diagram rendered as an SVG image
   */
  public render(definitionText: string): string {
    const definition = this.parser.parse(definitionText);
    const root = this.builder.build(definition);
    const image = new SVGImage().add(root.toSVG());
    return image.render();
  }

}
