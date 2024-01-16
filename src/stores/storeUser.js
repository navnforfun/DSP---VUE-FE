import { defineStore,getActivePinia } from "pinia";
import { ref, reactive } from "vue";
let storeUser = defineStore("storeUser", {
	state: () => {
		return {
			id: "",
			name: "",
			userName: "",
			email: "",
			img: "",
			roles: "",
			jwt: "",
		};
	},
	getters: {},
	actions: {},
});
// let user = reactive({
// 	id: "",
// 	name: "",
// 	userName: "",
// 	email: "",
// 	img: "",
// 	roles: "",
// });
export { storeUser };
