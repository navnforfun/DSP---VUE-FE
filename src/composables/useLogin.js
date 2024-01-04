import { ref, reactive } from "vue";
import axios from "axios";
import { storeUser } from "@/stores/storeUser";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
async function useLogin(username, password) {
	try {
		var data = await axios.post("http://127.0.0.1:5296/api/Account/Login", {
			userName: username,
			passWord: password,
		});
	} catch (error) {
		return error.response;
	}
	if (data.status == 200) {
		let user = storeUser()
		// console.log(data);
		let jwtUser = jwtDecode(data.data);
		user.id = jwtUser.id;
		user.name = jwtUser.name;
		user.userName = jwtUser.userName;
		user.roles = jwtUser.roles;
		user.img = jwtUser.img;
		console.log(data.data);
		user.jwt = "data.data";
		user.email = jwtUser.email == null ? "" : jwtUser.email;
		localStorage.setItem("jwt",data.data)

	} else {
		console.log(data);
	}
	return data;
}
export { useLogin };
