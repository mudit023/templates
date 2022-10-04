/*selects div with id = sign-in-btn*/
const sign_in_btn = document.querySelector("#sign-in-btn");

/*selects div with id = sign-up-btn*/
const sign_up_btn = document.querySelector("#sign-up-btn");

/*selects div with class = container*/
const container = document.querySelector(".container");

/*with a click event on the button, it adds a class "sign-up-mode" to the container*/
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

/*with a click event on the button, it removes a class "sign-up-mode" to the container*/
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
