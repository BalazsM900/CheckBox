

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BXME6xuk.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.WAx-dJA1.js","_app/immutable/chunks/entry.C8gNnfsi.js"];
export const stylesheets = [];
export const fonts = [];
