import axios from "axios";
import { storeUser } from "@/stores/storeUser";
async function useUploadFile(boxId, files) {
    let listData = []
	for (var i = 0; i < files.length; i++) {
		let bodyFormData = new FormData();
		bodyFormData.append("file", files[i]);
		let options = {
			method: "post",
			headers: {
				accept: "application/json",
				"content-type": "multipart/form-data",
				Authorization: `Bearer ${storeUser().jwt}`,
			},
			data: bodyFormData,
			url: "http://localhost:5296/api/Box/UploadBoxFile?boxId=" + boxId,
			maxContentLength: Infinity,
			maxBodyLength: Infinity,
		};
		let data = await axios(options).catch((err) => {
			console.log(err.response);
			return err.response;
		});
		// console.log(data);
        listData.push(data)
	}
    console.log(listData);
    return listData
}
export {useUploadFile}