const userString = document.querySelector("#user-string");
const userNumber = document.querySelector("#user-number");
const numberResult = document.querySelector("#number-result");
const stringResult = document.querySelector("#string-result");
const checkButton = Array.from(document.getElementsByTagName("button"));


const convertType = () => {
    const stringVal = userString.value;
    const numVal = userNumber.value;

    if (stringVal === "" || numVal === "") {
        alert("Please enter a value in both fields");
        return;
    }

    let numResult;
    let strResult;


    numResult = Number(stringVal);
    strResult = numVal.toString();

    numberResult.textContent = `${stringVal} is ${typeof numResult}`;
    stringResult.textContent = `${numVal} is ${typeof strResult}`;

    userNumber.value = "";
    userString.value = "";
}

checkButton.forEach(button => {
    button.addEventListener("click", () => {
        convertType();
    });
})