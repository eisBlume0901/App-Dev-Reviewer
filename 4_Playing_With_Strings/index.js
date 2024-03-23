const userString = document.querySelector('#user-string');
const stringWithIndex = document.querySelector('#string-with-index');
const checkButton = document.querySelector('button[type=submit]');
const stringInfo = document.querySelector('#string-info');
const userName = document.querySelector('#user-name');
const greetUserLabel = document.querySelector('#greet-user');
const showStringWithIndex = () => {
    const stringVal = userString.value;
    let stringValWithSpaces = "";
    let stringWithIndexVal = "";
    for (let i = 0; i < stringVal.length; i++) {
        stringValWithSpaces += stringVal.charAt(i) + " "
    }
    for (let i = 0; i < stringVal.length; i++) {
        stringWithIndexVal += i + " ";
    }

    stringWithIndex.innerHTML = `${stringValWithSpaces}<br>${stringWithIndexVal}`;
};

const showStringInfo = () => {
    const stringVal = userString.value;
    stringInfo.innerHTML = `String: ${stringVal}<br>Length: ${stringVal.length}`;
}

const greetUser = () => {
    const userNameVal = userName.value;
    greetUserLabel.innerHTML = `Hello, ${userNameVal}`;
}
checkButton.addEventListener('click', () => {
    greetUser();
    showStringInfo();
    showStringWithIndex();

    greetUserLabel.value = "";
    userString.value = "";
});