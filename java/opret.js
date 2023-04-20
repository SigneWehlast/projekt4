//Claudia

	function opretKnapper(antal) {

		const knapperDiv = document.getElementById('knapper');
		for (let i = 1; i <= antal; i++) {
			const knap = document.createElement('button');
			knap.textContent = i;
			knapperDiv.appendChild(knap);
		}
	}

	function openPopup() {
		const popup = document.getElementById('popu');
		popup.style.display = 'block';
		opretKnapper(5);
	}

	function closePopup() {
		const popup = document.getElementById('popu');
		popup.style.display = 'none';
	}

	// Funktion til att lukke popup
	function closePopup() {
		const popup = document.getElementById('popu');
		popup.style.display = 'none';
	}

	// Lyt efter klik på knappen til at åbne popup
	document.getElementById('open').addEventListener('click', openPopup);

	// Lyt efter klik på knappen til at lukke popup
	document.getElementById('close').addEventListener('click', closePopup);

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

const person = {
  firstName: "Opret",
  lastName: "helt egent",
  age: 20,
  eyeColor: "green"
};

document.getElementById("demo").innerHTML =
person.firstName + " dit " + person.lastName + " event ";


 let colors = ["#FF5722", "#4CAF50", "#2196F3", "#9C27B0", "#00BCD4"];

 let closeBtn = document.getElementById("lukbtn");

closeBtn.addEventListener("click", function() {

  let popup = document.getElementById("popup");
  popup.style.display = "none";

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
      lukbtn.style.backgroundColor = randomColor;
      lukbtn.classList.add("active");

});
