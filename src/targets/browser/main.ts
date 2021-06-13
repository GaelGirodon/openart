import { Processor } from "../../lib/processor/Processor";

/**
 * Options for the browser processor.
 */
interface BrowserProcessorOptions {
  selector?: string
}

/**
 * Diagram processor for the browser.
 */
class BrowserProcessor {

  /**
   * Render diagrams from text in DOM elements.
   * @param opts OAProcessor options
   */
  initialize(opts: BrowserProcessorOptions = {}) {
    const selector = opts.selector || ".openart";
    const processor = new Processor();
    document.querySelectorAll(selector).forEach((element) => {
      element.innerHTML = processor.render(element.innerHTML);
    });
  }

}

// @ts-ignore
window.openart = new BrowserProcessor();
