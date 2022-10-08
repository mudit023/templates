// Outputs
const cardOutputNumber = document.getElementById("card-number");
const cardOutputName = document.getElementById("card-name");
const monthOutput = document.getElementById("month");
const yearOutput = document.getElementById("year");
const cvcOutput = document.getElementById("cvc");
// Inputs
const cardInputNumber = document.getElementById("card-input-number");
const cardInputERROR = document.getElementById("card-number-error");
const cardInputName = document.getElementById("cardholder-name");
const cardInputError = document.getElementById("card-name-error");
const monthInput = document.getElementById("month-input");
const monthInputError = document.getElementById("month-error");
const yearInput = document.getElementById("year-input");
const yearInputError = document.getElementById("year-error");
const cvcInput = document.getElementById("cvc-input");
const cvcInputError = document.getElementById("cvc-error");
// BTN
const submitBtn = document.getElementById("submit-btn");

cardInputNumber.addEventListener("input", (e) => {
    let text = e.target.value.toString().replace(/\d{4}(?=.)/g, '$&   ');
    cardOutputNumber.textContent = text;
});
cardInputName.addEventListener("input", (e) => {
    cardOutputName.textContent = e.target.value;
});
monthInput.addEventListener("input", (e) => {
    monthOutput.textContent = e.target.value;
})
yearInput.addEventListener("input", (e) => {
    yearOutput.textContent = e.target.value;
})
cvcInput.addEventListener("input", (e) => {
    cvcOutput.textContent = e.target.value;
})
submitBtn.addEventListener("click", () => {
    console.log("clicked")
    if (isNaN(cardInputNumber.value)) {
        cardInputERROR.textContent = "Wrong Format, numbers only"
        cardInputNumber.classList.add("error")
    } else {
        cardInputERROR.textContent = ""
        cardInputError.textContent = ""
        monthInputError.textContent = ""
        yearInputError.textContent = ""
        cvcInputError.textContent = ""
    }
    if (cardInputNumber.value.length !== 16 || cardInputNumber.value === "") {
        cardInputERROR.textContent = "Please enter 16 Numbers";
        cardInputNumber.classList.add("error")
    } else {
        cardInputERROR.textContent = ""
        cardInputError.textContent = ""
        monthInputError.textContent = ""
        yearInputError.textContent = ""
        cvcInputError.textContent = ""
    }
    if (cardInputName.value === "") {
        cardInputError.textContent = "Can't be Blank";
        cardInputName.classList.add("error")
    }else {
        cardInputERROR.textContent = ""
        cardInputError.textContent = ""
        monthInputError.textContent = ""
        yearInputError.textContent = ""
        cvcInputError.textContent = ""
    }
    if (monthInput.value === "") {
        monthInputError.textContent = "Can't be Blank";
        monthInput.classList.add("error")
    }else {
        cardInputERROR.textContent = ""
        cardInputError.textContent = ""
        monthInputError.textContent = ""
        yearInputError.textContent = ""
        cvcInputError.textContent = ""
    }
    if (yearInput.value === "") {
        yearInputError.textContent = "Can't be Blank";
        yearInput.classList.add("error")
    } else {
        cardInputERROR.textContent = ""
        cardInputError.textContent = ""
        monthInputError.textContent = ""
        yearInputError.textContent = ""
        cvcInputError.textContent = ""
    }
    if (cvcInput.value === "") {
        cvcInputError.textContent = "Can't be Blank";
        cvcInput.classList.add("error")
    } else {
        cardInputERROR.textContent = ""
        cardInputError.textContent = ""
        monthInputError.textContent = ""
        yearInputError.textContent = ""
        cvcInputError.textContent = ""
    }
})