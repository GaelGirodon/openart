import { ElementDefinition } from "./ElementDefinition";

/**
 * Diagram definition language parser
 */
export class Parser {

  /**
   * Parse a block of diagram definition language.
   *
   * @param text Raw block of diagram definition language
   * @returns Parsed element
   */
  parse(text: string): ElementDefinition {
    let type = "object.name";
    const stack: any[] = [{ name: "root", children: [] }, { name: "", children: [] }];
    text += ",";

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (type == "object.name") { // Processing the object name
        if (ch == "(" || ch == "{" || ch == "," || ch == "}") { // End of the object name
          stack[stack.length - 1].name = Parser.clean(stack[stack.length - 1].name);
          if (ch == "(") { // Start processing the first attribute name
            type = "object.attr.name";
            stack.push("");
          } else if (ch == "{" || ch == "}" || ch == ",") { // Start processing the object children or the next object
            type = "object.children"
            i--;
          }
        } else { // Continue processing the object name
          stack[stack.length - 1].name += ch;
        }
      } else if (type == "object.attr.name") { // Processing the attribute name
        if (ch == ":") { // End of the attribute name, start processing the attribute value
          stack[stack.length - 1] = Parser.clean(stack[stack.length - 1]);
          type = "object.attr.value";
          stack.push("");
        } else { // Continue processing the attribute name
          stack[stack.length - 1] += ch;
        }
      } else if (type == "object.attr.value") { // Processing the attribute value
        if (ch == ")" || ch == ",") { // End of the attribute value
          const attrValue = Parser.clean(stack.pop());
          const attrName = Parser.clean(stack.pop());
          const obj = stack[stack.length - 1];
          // @ts-ignore
          obj[attrName] = isFinite(attrValue) ? parseFloat(attrValue) : attrValue;
          if (ch == ",") { // Start processing the next attribute name
            type = "object.attr.name";
            stack.push("");
          } else if (ch == ")") { // Start processing the object children or the next object
            type = "object.children";
          }
        } else { // Continue processing the attribute value
          stack[stack.length - 1] += ch;
        }
      } else if (type == "object.children") { // Processing the object children
        if (ch.match(/\s/)) {
          continue;
        } else if (ch == "}") { // Stop processing the object children, move one level up
          const obj = stack.pop();
          stack[stack.length - 1].children.push(obj);
        } else if (ch == "," || ch == "{") { // Start processing the next object (sibling or child)
          if (ch == ",") { // Sibling
            const obj = stack.pop();
            stack[stack.length - 1].children.push(obj);
          }
          type = "object.name";
          stack.push({ name: "", children: [] }); // Child
        } else {
          throw new Error(`Unexpected token: '${ch}'`);
        }
      } else {
        throw new Error(`Unexpected token: '${ch}'`);
      }
    }

    return stack[0];
  }

  /**
   * Clean a value.
   * @param value The value to clean
   * @returns Cleaned value
   */
  static clean(value: string): string {
    return value.trim().replace(/(^["']|["']$)/g, "");
  }

}
