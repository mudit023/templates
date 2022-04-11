const navigation = document.querySelector(".navigation");
document.querySelector(".toggle").onclick = () => {
	this.classList.toggle("active");
	navigation.classList.toggle("active");
};
