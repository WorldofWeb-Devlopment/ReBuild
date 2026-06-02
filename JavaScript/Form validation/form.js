const namebox = document.getElementById("text-box");
const age = document.getElementById("age-box");
const email = document.getElementById("email-box");
const number = document.getElementById("number-box");
const submitbtn = document.getElementById("submit-btn");
const error = document.getElementById("error-text");

submitbtn.addEventListener("click", Validation);

function Validation(e) {
  e.preventDefault();

        //Name Validation Goes Here

  if (namebox.value === "") { 

    error.innerHTML = "Empty Fields Not Allowed";

    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);


  } else if (!/^[A-Za-z]+$/.test(namebox.value)) {

    error.innerHTML = "Numbers are Not Allowed";

    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
  }

}


//age validation 

if(!age === (0-9)){
   error.innerHTML = "Enter Valid Number"
}
