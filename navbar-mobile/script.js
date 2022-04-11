const navigation = document.querySelector(".navigation");
document.querySelector(".toggle").onclick = function () {
	this.classList.toggle("active");
	navigation.classList.toggle("active");
};
