const userString = document.querySelector('#user-string');
const stringWithIndex = document.querySelector('#string-with-index');
const checkButton = document.querySelector('#check-button');
const showStringResults = () => {
    const stringVal = userString.value;
    let stringValWithSpaces = "";
    let stringWithIndexVal = "";
    for (let i = 0; i < stringVal.length; i++) {
        stringValWithSpaces += stringVal[i] + " ";
    }
    for (let i = 0; i < stringVal.length; i++) {
        stringWithIndexVal += i + " ";
    }


    stringWithIndex.innerHTML = `${stringValWithSpaces}<br>${stringWithIndexVal}`;
};

checkButton.addEventListener('click', showStringResults);