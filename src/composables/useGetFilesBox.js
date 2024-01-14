import axios from "axios";
async function useGetFilesBox(id) {
	let data = await axios
		.get("http://localhost:5296/api/Box/GetListFileInBox?boxId=" + id)
		.catch(function (error) {
			console.log(error.response);
			return error.response;
		});
	if (data.status == 200) {
		data.data.forEach((file) => {
			let position = file.name.lastIndexOf(".");
			let ext = file.name.substring(position);
			let img = [".png", ".jpg", ".jpeg", ".svg"];
			let text = [".doc", ".docx"];
			let filex = [".pptx", ".pdf",".mp4"];
			if (img.includes(ext)) {
				file.ext = "img.png";
			} else if (text.includes(ext)) {
				file.ext = "text.png";
			} else if (filex.includes(ext)) {
				file.ext = "file.png";
			} else {
				file.ext = "other.png";
			}
		});
	}
	return data;
}
export { useGetFilesBox };
