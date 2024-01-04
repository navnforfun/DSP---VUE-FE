function startDis(myClass) {
	var myBtn = $(myClass);
    myBtn.attr("disabled", true);
    myBtn.css("cursor", "wait");
}
function stopDis(myClass) {
	var myBtn = $(myClass);
    myBtn.attr("disabled", false);
    myBtn.css("cursor", "default");
}

export {startDis,stopDis}
