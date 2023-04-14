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

function changeText() {
  document.getElementsByTagName("h1")[0].innerHTML = "UCLSocial";
}

function resetText() {
  document.getElementsByTagName("h1")[0].innerHTML = "Oprettelse af event";
}

 let colors = ["#FF5722", "#4CAF50", "#2196F3", "#9C27B0", "#00BCD4"];

 let closeBtn = document.getElementById("lukbtn");

closeBtn.addEventListener("click", function() {

  let popup = document.getElementById("popup");
  popup.style.display = "none";

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
      lukbtn.style.backgroundColor = randomColor;
      lukbtn.classList.add("active");
});
