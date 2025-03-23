import { mount } from "svelte";
import App from "./App.svelte";

mount(App, {
  target: document.body, // or any specific element like document.querySelector('#app')
  props: {
    // optional props
  },
});
