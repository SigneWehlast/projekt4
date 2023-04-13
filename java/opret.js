//Claudia

const myForm = document.getElementById("myForm");
const popup = document.getElementById("popup");
const userNameSpan = document.getElementById("userName");

myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (nameInput.checkValidity() && emailInput.checkValidity()) {
    userNameSpan.innerText = nameInput.value;
    popup.style.display = "block";
  }
});
