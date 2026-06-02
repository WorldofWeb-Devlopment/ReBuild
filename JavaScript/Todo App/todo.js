
const container = document.getElementById("container");

const inputbox = document.getElementById("input-box");

const addbtn = document.getElementById("add-btn");

addbtn.addEventListener("click", () => {
    const para = document.createElement("h1")
     para.innerText = inputbox.value 
     container.append(para)
});
