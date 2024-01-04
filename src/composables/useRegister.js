import axios from "axios";
async function useRegister(userName, passWord, rePass) {
	try {
		var data = await axios.post(
			"http://127.0.0.1:5296/api/Account/Register",
			{
				userName: userName,
				passWord: passWord,
				rePass: rePass,
			}
		);
	} catch (error) {
		console.log(error);
		return error.response;
	}
	if (data.status == 200) {
		console.log(data);
	} else {
		console.log("loi", data);
	}
	return data;
}
export { useRegister };
