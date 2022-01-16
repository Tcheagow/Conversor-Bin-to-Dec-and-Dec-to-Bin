import change from "./change.js"

//capturing inputs values
const values = {
    tittle1: () => {
        let tittle1Value = document.getElementById("tittle1").innerText;

        return tittle1Value;
    },
    tittle2: () => {
        let tittle2Value = document.getElementById("tittle2").innerText;

        return tittle2Value;
    },
    binary: () => {
        let binaryValue;
        
        if(values.tittle1() == "Binary Digits"){
            binaryValue = document.getElementById("input1").value;
        }else{
            binaryValue = document.getElementById("input2").value;
        }
        return binaryValue;
    },
    decimal: () => {
        let decimalValue;
        
        if(values.tittle1() == "Binary Digits"){
            decimalValue = document.getElementById("input2").value;
        }else{
            decimalValue = document.getElementById("input1").value;
        }
        return decimalValue;
    }
}

//capturing elements and adding functions to elements
const button = document.getElementById("buttonConversor");
button.addEventListener("click", convertBinary);

const buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener("click", changeDivs);

// main function
function convertBinary(){
    let binary;
    let change = false;

    if(values.tittle1() == "Binary Digits"){
        binary = true;
    }else{
        binary = false;
    }

    if(binary === true){
        if(regexBinary() === true){
            let convertedDecimal= parseInt(values.binary(), 2);
        
            insereDecimal(convertedDecimal);
            clearDisplayMessage();
        }else{
            displayMessage(binary);
            clearInput(change);
        }
    }else{
        if(regexDecimal() === true){
            let convertedBinary = parseInt(values.decimal()).toString(2);

            insereBinary(convertedBinary);
            clearDisplayMessage();
        }else{
            displayMessage(binary);
            clearInput(change);
        }
    }
}

//insert values
function insereDecimal(decimal){
    let inputDecimal = document.getElementById("input2");

    inputDecimal.value = decimal;
}

function insereBinary(binary){
    let inputBinary= document.getElementById("input2");

    inputBinary.value = binary;
}

//functions secundaries

//regex
function regexBinary(){
    let regExp = /^[0-1]+$/i;

    return regExp.test(values.binary());
}

function regexDecimal(){
    let regExp = /^[0-9]+$/i;

    return regExp.test(values.decimal());
}

//function change
function changeDivs() {
    let assistant = true;
    change();
    clearDisplayMessage();
    clearInput(assistant);
}

//messages and clearing
function clearInput(change){
    if(change === false){
        document.getElementById("input2").value = "";
    }else{
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    }
}

function displayMessage(binary){
    let message = document.getElementById("message");

    if(binary === true){
        message.innerText = "Please, insert only 0 and 1";
    }
    else{
        message.innerText = "Please, insert only numbers";
    }
}

function clearDisplayMessage(){
    let message = document.getElementById("message");
    message.innerText = "";
}
