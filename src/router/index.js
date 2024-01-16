import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import DetailBox from "@/views/DetailBox.vue";
import EditBox from "@/views/EditBox.vue";
import NotFound from "@/views/NotFound";
const routes = [
	{
		path: "/",
		name: "home",
		meta: {
			layout: "default",
		},
		component: HomeView,
		// component: defineAsyncComponent(() => import("../views/HomeView.vue")),
	},
	{
		path: "/detailBox/:title",
		name: "detailBox",

		meta: {
			layout: "default",
		},
		component: DetailBox,
	},
	{
		path: "/EditBox",
		name: "editBox",

		meta: {
			layout: "default",
		},
		component: EditBox,
	},
	{
		path: "/login",
		name: "login",
		meta: {
			isShowFooter: true,
			layout: "auth",
		},
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		meta: {
			isShowFooter: true,
			layout: "auth",
		},
		component: Register,
	},
	{
		path: "/about",
		name: "about",
		meta: {
			layout: "default",
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{ path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
