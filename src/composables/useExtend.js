function startDis(myClass) {
	var myBtn = $(myClass);
    myBtn.attr("disabled", true);
    myBtn.css("cursor", "wait");
    myBtn.addClass("bg-gray-300")
}
function stopDis(myClass) {
	var myBtn = $(myClass);
    myBtn.attr("disabled", false);
    myBtn.css("cursor", "default");
    myBtn.removeClass("bg-gray-300")
}

export {startDis,stopDis}
