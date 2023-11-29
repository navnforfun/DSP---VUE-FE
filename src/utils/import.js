import { defineAsyncComponent } from "vue";
export default function registerGlobalComponets(app) {
	app.component(
		"auth-layout",
		defineAsyncComponent(() => import("@/layouts/Auth.vue"))
	);
	app.component(
		"default-layout",
		defineAsyncComponent(() => import("@/layouts/Default.vue"))
	);
}
