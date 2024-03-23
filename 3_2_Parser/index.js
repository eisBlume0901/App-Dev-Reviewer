const userString = document.querySelector("#user-string");
const userNumber = document.querySelector("#user-number");
const numberResult = document.querySelector("#number-result");
const stringResult = document.querySelector("#string-result");
const checkButton = Array.from(document.getElementsByTagName("button"));


const convertStringToNum = () => {
    const stringVal = userString.value;

    if (stringVal === "") {
        alert("Please input a string in the string field");
        return;
    }

    let numResult = Number(`${stringVal}`);
    numberResult.textContent = `${numResult} is a ${typeof numResult}`;
    userNumber.value = "";
}
const convertNumToString = () => {
    const numVal = userNumber.value;

    if (numVal === "") {
        alert("Please input a number in the number field");
        return;
    }

    let strResult;


    strResult = numVal.toString();

    stringResult.textContent = `${numVal} is a ${typeof strResult}`;

    userString.value = "";
}

checkButton[0].addEventListener("click", () => {
    convertStringToNum();
});

checkButton[1].addEventListener("click", () => {
    convertNumToString();
});
