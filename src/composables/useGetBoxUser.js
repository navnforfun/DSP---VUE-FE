import axios from "axios";
import { storeUser } from "@/stores/storeUser";
import Cookies from "js-cookie";
import { data } from "autoprefixer";
async function useGetBoxUser() {
	let user = storeUser();
	let config = {
		headers: { Authorization: `Bearer ${user.jwt}` },
	};
	try {
		var data = await axios.get(
			"http://localhost:5296/api/Box/GetBoxsCurrentUser",
			config
		);
	} catch (error) {
		return error.response;
	}
	if (data.status === 200) {
		console.log(data.data);
		data.data.sort(function (a, b) {
		
			return b.id - a.id;
		});
		data.data.forEach((box) => {
			function pad(s) {
				return s < 10 ? "0" + s : s;
			}
			let d = new Date(box.dateCreated);
			box.dateCreated = [
				pad(d.getDate()),
				pad(d.getMonth() + 1),
				d.getFullYear(),
			].join("/");
		});
	}
	return data;
}
export { useGetBoxUser };
