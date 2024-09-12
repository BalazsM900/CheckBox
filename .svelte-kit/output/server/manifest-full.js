export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.pg2pP-z1.js","app":"_app/immutable/entry/app.DggrHJmJ.js","imports":["_app/immutable/entry/start.pg2pP-z1.js","_app/immutable/chunks/entry.MeE_4efN.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DggrHJmJ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.WAx-dJA1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
