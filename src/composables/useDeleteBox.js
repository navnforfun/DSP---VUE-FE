import axios from "axios";
import { storeUser } from "@/stores/storeUser";
async function useDeleteBox(boxId) {
	let option = {
		method: "delete",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${storeUser().jwt}`,
		},
		url: `http://localhost:5296/api/Box/DeleteBox?boxId=` + boxId,
	};
	let data = axios(option).catch((err) => {
		console.log(err.response);
		return err.response;
	});
	return data;
}
export { useDeleteBox };
