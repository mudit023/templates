/*just adding event listener for toggle container*/

document.querySelector(".toggle-container").addEventListener("click",function name(){
/*things that should be executed when eventlistner is being fired*/  
/*adding darkmode to circle class in order to change its position*/  
document.querySelector(".circle").classList.toggle("darkmode");
/*adding the darkmode to body element to change the color of everything*/
document.body.classList.toggle("darkmode");
});