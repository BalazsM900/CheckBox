import { c as create_ssr_component, e as each } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const css = {
  code: ".g.svelte-4jdl0i.svelte-4jdl0i{display:grid;grid-template-columns:repeat(10, 1fr)}.g.svelte-4jdl0i button.svelte-4jdl0i{padding:10px;border:1px solid black;text-align:center;cursor:pointer}.g.svelte-4jdl0i button.l0.svelte-4jdl0i{background-color:aqua}.g.svelte-4jdl0i button.l1.svelte-4jdl0i{background-color:red}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    const l = Array(50).fill(0)\\n<\/script>\\n<div class=g>\\n{#each l as _}\\n    <button class=l{_} \\n            on:click={() => \\n                _ = _ == 1 ? 0 : 1\\n            }\\n    ></button>\\n{/each}\\n</div>\\n<style>\\n.g {\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n}\\n.g button {\\n    padding:10px;\\n    border: 1px solid black;\\n    text-align: center;\\n    cursor: pointer;\\n}\\n.g button.l0 {\\n    background-color: aqua;\\n}\\n.g button.l1 {\\n    background-color: red;\\n}\\n</style>"],"names":[],"mappings":"AAaA,8BAAG,CACC,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,EAAE,CAAC,CAAC,GAAG,CACzC,CACA,gBAAE,CAAC,oBAAO,CACN,QAAQ,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,OACZ,CACA,gBAAE,CAAC,MAAM,iBAAI,CACT,gBAAgB,CAAE,IACtB,CACA,gBAAE,CAAC,MAAM,iBAAI,CACT,gBAAgB,CAAE,GACtB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const l = Array(50).fill(0);
  $$result.css.add(css);
  return `<div class="g svelte-4jdl0i">${each(l, (_) => {
    return `<button class="${"l" + escape(_, true) + " svelte-4jdl0i"}"></button>`;
  })} </div>`;
});
export {
  Page as default
};
