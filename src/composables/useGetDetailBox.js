import { data } from "autoprefixer";
import axios from "axios";

async function useGetDetailBox(id) {
	var data = await axios
		.get("http://localhost:5296/api/Box/GetDetailBox?boxId=" + id)
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
