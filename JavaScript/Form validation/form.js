const userName = document.getElementById("user-name1");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password1");
const submitBtn = document.getElementById("btn");
const error = document.querySelector(".error-text");
const error1 = document.querySelector(".error-text1");
const error2 = document.querySelector(".error-text2");
const checkBox = document.getElementById("check-box");
const confirmCheckBox = document.getElementById("check-box-confirm");

submitBtn.addEventListener("click", check);

function check(e) {
  //prevent default actions
  e.preventDefault();

  //check user name

  if (userName.value.length !== "3") {
    error.innerHTML = "Name should be above 3 characters";
    userName.style.border = "1px solid #fc0000ff";

    setTimeout(() => {
      error.innerHTML = "";
      userName.style.border = "none";
    }, 3000);
  }

  //check email

  if (!email.value.includes("@gmail.com")) {
    error1.innerHTML = "Email should contain @gmail";
    email.style.border = "1px solid #fc0000ff";

    setTimeout(() => {
      error1.innerHTML = "";
      email.style.border = "none";
    }, 3000);
  }

  //password field

  if (!password.value.trim() !== "" || "/^[A-za-z]+$/") {
    error2.innerHTML = "Enter valid password";
    password.style.border = "1px solid #fc0000ff";
  }
  setTimeout(() => {
    error2.innerHTML = "";
    password.style.border = "none";
  }, 3000);
}

//show password

checkBox.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

confirmCheckBox.addEventListener("click", () => {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
});
