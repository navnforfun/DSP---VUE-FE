import axios from "axios";
import { storeUser } from "@/stores/storeUser";
async function useDeleteFile(id,boxId,fileName){
    let option = {
		method: "delete",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${storeUser().jwt}`,
		},
		url: `http://localhost:5296/api/Box/DeleteFile?Id=${id}&boxId=${boxId}&fileName=${fileName}`,
	};
    let data = await axios(option).catch((err)=>{
        console.log(err.response);
        return err.response
    })
    return data
}
export {useDeleteFile}