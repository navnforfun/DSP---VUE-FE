import ref from "vue";
import axios from "axios";
async function login(username, password) {
	try {
		var data = await axios.post("http://127.0.0.1:5296/api/Account/Login", {
			userName: username,
			passWord: password,
		});
	} catch (error){
	
		return error.response
	}

	return data;
}
export { login };
