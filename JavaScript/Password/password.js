const inputbox = document.getElementById("input-box");
const checkbox = document.getElementById("check-box");

checkbox.addEventListener("click", () => {
  if (inputbox.type === "password") {
    inputbox.type = "text";   //click pnum pothu password erutha .... erutha text kamikanum atha text
  } else {
    inputbox.type = "password";
  }
});
