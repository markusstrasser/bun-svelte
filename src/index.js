import { defineWidget } from "@anywidget/svelte";
import { mount } from "svelte";

import App from "./App.svelte";
import Counter from "./Counter.svelte";

mount(App, {
  target: document.body, // or any specific element like document.querySelector('#app')
  props: {
    bindings: {value :5}// optional props
  },
});

export default defineWidget(Counter);