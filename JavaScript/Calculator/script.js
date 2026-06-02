const inputbox = document.getElementById("input-box");

function displayvalues(value) {
  inputbox.value += value;
}

//function for calculation

function calculate() {
    try {
        inputbox.value = eval(inputbox.value);
    } catch (error) {
        inputbox.value = "Syntax Error"
    }
  
}

function clearDisplay(){
    inputbox.value = ""
}
