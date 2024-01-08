function useDownLoadFile(link) {
	var filename = "";

	// We first call fetch with the URL of the resource we want to download
	fetch(link)
		// This returns a promise inside of which we are checking for errors from the server.
		// The catch promise at the end of the call does not getting called when the server returns an error.
		// More information about the error catching can be found here: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/.
		.then((result) => {
			if (!result.ok) {
				throw Error(result.statusText);
			}

			// We are reading the *Content-Disposition* header for getting the original filename given from the server
			const header = result.headers.get("Content-Disposition");
			const parts = header.split(";");
			filename = parts[1].split("=")[1].replaceAll('"', "");
			console.log(result);
			return result.blob();
		})
		// We use the download property for triggering the download of the file from our browser.
		// More information about the following code can be found here: https://stackoverflow.com/questions/32545632/how-can-i-download-a-file-using-window-fetch.
		// The filename from the first promise is used as name of the file.
		.then((blob) => {
			console.log(blob);
			if (blob != null) {
				var url = window.URL.createObjectURL(blob);
				var a = document.createElement("a");
				a.href = url;
				a.download = filename;
				document.body.appendChild(a);
				console.log(a);
				a.click();
				a.remove();
			}
		})
		// The catch is getting called only for client-side errors.
		// For example the throw in the first then-promise, which is the error that came from the server.
		.catch((err) => {
			alert("Có lỗi xảy ra khi tải tệp tin này")
			console.log(err.response);
            return err
		});
}
export {useDownLoadFile}