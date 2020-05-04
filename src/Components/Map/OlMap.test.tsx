import React from "react";
import OlMap from "./OlMap";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a greeting", () => {
  act(() => {
    render(<OlMap />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div id=\\"map\\">
      <div class=\\"ol-viewport\\" style=\\"position: relative; overflow: hidden; width: 100%; height: 100%;\\">
        <div style=\\"position: absolute; width: 100%; height: 100%; z-index: 0;\\" class=\\"ol-unselectable ol-layers\\"></div>
        <div style=\\"position: absolute; z-index: 0; width: 100%; height: 100%;\\" class=\\"ol-overlaycontainer\\"></div>
        <div style=\\"position: absolute; z-index: 0; width: 100%; height: 100%;\\" class=\\"ol-overlaycontainer-stopevent\\">
          <div class=\\"ol-rotate ol-unselectable ol-control ol-hidden\\"><button class=\\"ol-rotate-reset\\" type=\\"button\\" title=\\"Reset rotation\\"><span class=\\"ol-compass\\">⇧</span></button></div>
        </div>
      </div>
    </div>"
  `);
});
