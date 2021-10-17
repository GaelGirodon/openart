# OpenArt

[![Version](https://img.shields.io/github/package-json/v/GaelGirodon/openart?style=flat-square)](./package.json)
[![License](https://img.shields.io/github/license/GaelGirodon/openart?style=flat-square)](./LICENSE)

A lightweight (~4 kB _gzipped_) and dependency-free diagram generator from text
for the server (Node.js/Deno) and the browser

The goal of this library is to provide an open and lightweight equivalent (yet
very far to be complete) to Microsoft Office SmartArt graphics for Markdown,
HTML and other markup languages as well as a lighter and not browser-dependent
alternative to Mermaid (with more basic diagrams for now).

## Usage

### Quickstart

#### Browser

Import `openart.min.js`:

```html
<script src="dist/openart.min.js"></script>
```

Create diagrams using `pre>code` or `div` elements with the `openart` class:

```html
<pre><code class="openart">process { Step 1, Step 2, Step 3 }</code></pre>
<div class="openart">process { Step 1, Step 2, Step 3 }</div>
```

Setup diagrams rendering:

```html
<script>openart.initialize()</script>
```

#### Server

Install and import the library:

```js
import { OpenArt } from "./dist/index.esm.js";     // ES Module
const OpenArt = require("./dist/index.common.js"); // CommonJS
```

Render diagrams:

```js
new OpenArt().render("process { Step 1, Step 2, Step 3 }");
```

#### Markdown

Create diagrams using fenced code blocks:

````markdown
```openart
process { Step 1, Step 2, Step 3 }
```
````

Pre-render diagrams [server-side](#server) (by using the library during the
Markdown to HTML compilation) or setup rendering [browser-side](#browser) by
including above scripts in your output HTML files.

### Syntax

Diagrams definitions are written using the following syntax:

```js
element(attr1: value1, attr2: value2) {
  Child 1,
  Child 2
}
```

This markup language allows to create elements with attributes and children,
similarly to HTML and XML but with a lighter syntax.

The library provides low-level [building blocks](./src/lib/elements/) (layouts,
shapes, etc.) as well as higher-level [diagrams](./src/lib/elements/diagrams/)
that can both be used as elements.

Refer to the documentation associated to each element to know more about the
syntax.

## License

**OpenArt** is licensed under the MIT License.
