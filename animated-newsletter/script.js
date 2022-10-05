/*ready() function prevents any jQuery code from running before the document is finished loading*/
$(document).ready(function () {
	/*selects 'envelope' class on 'click' action*/
	$(".envelope").click(function () {
		/*selects 'overlay' class to toggle between adding and removing 'active' class*/
		$(".overlay").toggleClass("active");
	});
	/*select 'close' class on 'click' action*/
	$(".close").click(function () {
		/*selects 'overlay' class to toggle between adding and removing 'active' class*/
		$(".overlay").toggleClass("active");
	});
});
