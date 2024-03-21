const userInput = document.querySelector("#user-input");
const numberResult = document.querySelector("#number-result");
const checkButton = document.querySelector("#check-type-button");
const checkNumberType = () => {
    let result;
    if (userInput.value === "")  // empty string means 0 length and null means no value or no object
        alert("Please enter a number");
    else if (isNaN(userInput.value))
        result = " not a number";
    else if (!isFinite(userInput.value))
        result = " an infinity";
    else if (userInput.value % 1 === 0)
        result = " an integer";
    else if (userInput.value % 1 !== 0)
        result = " a float";

    userInput.value = "";
    numberResult.textContent = `The number is ${result}`;
    result = "";
}

checkButton.addEventListener("click", () => {
    checkNumberType();
});