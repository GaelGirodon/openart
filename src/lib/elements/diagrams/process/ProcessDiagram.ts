import { ElementDefinition } from "../../../parser/ElementDefinition";
import { SVGElement } from "../../../processor/svg/SVGElement";
import { Container } from "../../Container";
import { ContainerLayout } from "../../layouts/ContainerLayout";
import { StackLayout, StackLayoutOrientation } from "../../layouts/StackLayout";
import { Rectangle } from "../../shapes/Rectangle";
import { Text } from "../../shapes/Text";

/**
 * Illustrate steps or stages in a process or workflow, such as sequential steps
 * for completing a task, general phases in the development of a product, or a
 * timeline or schedule.
 */
export class ProcessDiagram extends Container {

  /**
   * Create a process.
   * @param definition Process definition.
   */
  constructor(definition: ElementDefinition) {
    super(definition);
    if (!definition.children) {
      throw new Error("No steps defined");
    }
    const stack = new StackLayout({
      orientation: definition.orientation || StackLayoutOrientation.Horizontal,
      gap: 8
    });
    for (const child of definition.children!) {
      stack.add(new ContainerLayout({ width: 150, height: 100 })
        .add(new Rectangle({ width: 150, height: 100 }))
        .add(new Text({ text: child.name, width: 150, height: 100, x: 75, y: 50 }))
      );
    }
    this.add(stack);
  }

  /** @inheritdoc */
  toSVGElement(): SVGElement | string {
    return this.children[0].toSVGElement();
  }

}
