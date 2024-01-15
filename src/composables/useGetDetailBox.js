import { data } from "autoprefixer";
import axios from "axios";
import { storeUser } from "@/stores/storeUser";
async function useGetDetailBox(id) {
	let option = {}
	if(storeUser().jwt != null){
		option = {
			method:"get",
			url : "http://localhost:5296/api/Box/GetDetailBox?boxId=" + id,
			headers: {
				
				Authorization: `Bearer ${storeUser().jwt}`,
			},
		}
	}else{
		option = {
			method:"get",
			url : "http://localhost:5296/api/Box/GetDetailBox?boxId=" + id,
		}
	}
	var data = await axios(option)
		.catch(function (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response);
				return error.response;
			}
		});
    

	return data;
}
export { useGetDetailBox };
