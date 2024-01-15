import axios from "axios";
import { storeUser } from "@/stores/storeUser";
import { list } from "postcss";
async function useCreateBox(title, content, available, files) {
	var bodyFormData = new FormData();
	bodyFormData.append("title", title);
	bodyFormData.append("content", content);
	bodyFormData.append("SharedStatus", available);

	for (var i = 0; i < files.length; i++) {
		bodyFormData.append("myFiles", files[i]);
	}
	// bodyFormData.append("myFiles", myFiles[0]);

	console.log(bodyFormData.get("myFiles"));
	let options = {
		method: "post",
		headers: {
			accept: "application/json",
			"content-type": "multipart/form-data",
			Authorization: `Bearer ${storeUser().jwt}`,
		},
		data: bodyFormData,
		url: "http://localhost:5296/api/Box/CreateBox",
		maxContentLength: Infinity,
		maxBodyLength: Infinity,
	};
	var result;
	await axios(options)
		.then(function (res) {
			console.log(res);
			result = res;
		})
		.catch(function (err) {
			console.log(err);
			result = err.response;
		});
	return result;
}
export { useCreateBox };
