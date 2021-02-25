import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {

  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  
  head.script.push({
    src:"<script data-goatcounter='https://gekolev.goatcounter.com/count' async src='//gc.zgo.at/count.js'></script>",
    body: true})

}
