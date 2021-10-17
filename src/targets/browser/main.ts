import { Processor } from "../../lib/processor/Processor";

/**
 * Options for the browser processor
 */
interface BrowserProcessorOptions {
  selector?: string
}

/**
 * Diagram processor for the browser
 */
class BrowserProcessor {

  /**
   * Render diagrams from text in DOM elements.
   * @param opts OAProcessor options
   */
  initialize(opts: BrowserProcessorOptions = {}) {
    const selector = opts.selector || ".openart:not([data-processed])";
    const processor = new Processor();
    document.querySelectorAll(selector).forEach((el) => {
      const diagram = processor.render(el.innerHTML);
      if (el.tagName === "CODE" && el.parentElement?.tagName === "PRE")
        el = el.parentElement;
      const div = document.createElement("div");
      div.className = "openart";
      div.setAttribute("data-processed", "true");
      div.innerHTML = diagram;
      el.replaceWith(div);
    });
  }

}

// @ts-ignore
window.openart = new BrowserProcessor();
