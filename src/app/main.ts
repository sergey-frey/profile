import { mount } from "svelte";
import App from "./App.svelte";

import "@fontsource/b612-mono";
import "./app.css";
import "./media-queries.css";
import "./code-block.scss";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
