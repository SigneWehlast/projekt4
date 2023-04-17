//Kasper
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // 1000 = 1 sekund
}

let tekst = ["Tur", "tid", "andet"]
for(let i = 0; i < tekst.length; i++) {
  document.getElementById("tekst").innerHTML += tekst[i] + " ";
}
function tekstskifterfarve() {
  document.getElementById("tekst").style.color = "#00DD00";
}
//Objekt//
const skovbillede = {
  substantiv1: "Skoven",
  pronomen: "en",
};
// Display some data from the object:
document.getElementById("tekstjs").innerHTML =
skovbillede.substantiv1 + " har " + skovbillede.pronomen + "bro";

//If else//
let Karakter = 10;

if (Karakter <=10){
  console.log ("Godt arbejde");
} else {
  console.log ("Prøv igen");
}
//Signe

let countDownBowling = new Date("May 5, 2023 17:00:00").getTime();

let countDown = setInterval(function() {

    let iDag = new Date().getTime();

    let dageIndtil = countDownBowling - iDag;

    let dage = Math.floor(dageIndtil / (1000 * 60 * 60 * 24));

    let timer = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutter = Math.floor((dageIndtil % (1000 * 60 * 60)) / (1000 * 60));

    if (dageIndtil < 0 ) {
        clearInterval(countDown);
        document.getElementById("countdownid").innerHTML = "Eventet er igang!";
    }
    else {
        document.getElementById("countdownid").innerHTML = dage + " " + timer + " " +  minutter;
    }

}, 1000);

let dtmArray = ["Dage", "Timer", "Minutter"];


for(let i = 0; i < dtmArray.length; i++) {
    document.getElementById("dtm").innerHTML += dtmArray[i] + " ";
}

const bowlingEvent = {
  dagBowling: "5. maj",
  årBowling: "2023",
  tidBowling: "17:00"
};

//onclick event
function skrivDato() {
  document.getElementById("countdownboks").innerHTML = "Eventet er den <br>" +  bowlingEvent.dagBowling + " " + bowlingEvent.årBowling + " kl. " + bowlingEvent.tidBowling;
  document.getElementById("countdownboks").style.color = "white";
  document.getElementById("countdownboks").style.fontWeight = "bold";
  document.getElementById("countdownboks").style.textAlign = "center";
  document.getElementById("countdownboks").style.fontSize = "22px";
}

//Aimi

let uddannelser = ['Multimediedesigner', 'Markedsøkonom', 'Finansøkonom'];

let dropdown = document.querySelector('#dropdown');

dropdown.addEventListener('change', () => {
  let valgtMulighed = dropdown.value;
  console.log(valgtMulighed);
});
//dropdown vises og gemmes
type="text/javascript">

function getOption() {
    selectElement = document.querySelector('#select1');
    output = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output').textContent = output;
}
//Claudia er i mappen opret.js
