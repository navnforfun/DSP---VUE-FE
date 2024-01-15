import axios from "axios";
import { storeUser } from "@/stores/storeUser";

async function useUpdateBox(id, title, content, available) {
console.log(id, title, content, available);
	var bodyFormData = new FormData();
	bodyFormData.append("title", title);
	bodyFormData.append("content", content);
	bodyFormData.append("sharedStatus", available);
	// bodyFormData.append("myFiles", "");
	let option = {
		method: "put",
		url: "http://localhost:5296/api/Box/UpdateBox?Id=" + id,
        "content-type": "multipart/form-data",
		headers: {
			Authorization: `Bearer ${storeUser().jwt}`,
		},
		data: bodyFormData,
        maxContentLength: Infinity,
		maxBodyLength: Infinity,
	};
	let data = await axios(option).catch((err) => {
		console.log(err.response);
	});
    console.log(data);
    // if(data.status == 200){
    //     alert("Thành công")
    // }
    return data;
}
export { useUpdateBox };
