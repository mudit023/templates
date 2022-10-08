/*selects 'navigation' class and assigns it to variable 'navigation'*/
const navigation = document.querySelector(".navigation");

/*selects 'toggle' class, which executes the function on clicking*/
document.querySelector(".toggle").onclick = () => {
	/*toggle method attaches two or more functions to toggle between for the click event for the selected elements.*/
	/*selects the current object and toggles 'active' class*/
	this.classList.toggle("active");
	navigation.classList.toggle("active");
};
