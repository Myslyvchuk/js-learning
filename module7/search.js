"use strict"
let textArea = document.getElementById("text-box-id");
function textAreaChange() {
  document.getElementById("p-box-id").innerText = textArea.value;
}
window.addEventListener("keyup", textAreaChange);
textArea.addEventListener("input", textAreaChange);

const inputValue = document.getElementById("input-box-id");
const pText = document.getElementById("p-box-id");
function inputChange(e) {
  let searchedWord = e.target.value;
  pText.innerHTML = pText.textContent.replace(new RegExp(searchedWord, "g"),
      "<b>" + searchedWord + "</b>");

}
//window.addEventListener("keyup", inputChange);
inputValue.addEventListener("input", inputChange);