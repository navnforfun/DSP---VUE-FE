import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
import { storeUser } from "@/stores/storeUser";
function useJwt(ignore) {
	let sUser = storeUser();
	let jwt = localStorage.getItem("jwt");
	if ((jwt == null || jwt == "") && ignore === true) {
		useRouter().push({ name: "login" });
		return;
	}
	try {
		let user = jwtDecode(jwt);
		let expire = new Date(user.exp * 1000);
		if (expire < new Date() && ignore === true) {
			useRouter().push({ name: "login" });
		}
		sUser.id = user.id;
		sUser.name = user.name;
		sUser.userName = user.userName;
		sUser.roles = user.roles;
		sUser.img = user.img;
		sUser.jwt = jwt;
		sUser.email = user.email == null ? "" : user.email;
	} catch {
        console.log("Loi phan tich JWT");
    }
}
export { useJwt };
