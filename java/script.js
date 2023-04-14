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
//Signe

//variabel som finder tiden for tiden for eventet
let countDownBowling = new Date("May 5, 2023 17:00:00").getTime();

//funktionen som laver countdownen
let countDown = setInterval(function() {

    //variablen som finder tiden for datoen i dag
    let iDag = new Date().getTime();

    //variabel som tager datoen i dag og trækker den fra datoen for eventet og dermed får man dagene indtil eventet
    let dageIndtil = countDownBowling - iDag;

    //variabel som regner dagene indtil eventet ud
    let dage = Math.floor(dageIndtil / (1000 * 60 * 60 * 24));

    //variabel som regner timerne indtil eventet ud
    let timer = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    //variabel som regner minutterne indtil eventet ud
    let minutter = Math.floor((dageIndtil % (1000 * 60 * 60)) / (1000 * 60));

    //if statement:
    //Hvis der er mindre en nul dage til eventet vil den fjerne countdownen, 
    //samt ændrer alt i elementet med id'et countdownid og skrive "Eventet er igang!"
    if (dageIndtil < 0 ) {
        clearInterval(countDown);
        document.getElementById("countdownid").innerHTML = "Eventet er igang!";
    }
    //Hvis der er mere end nul dage til eventet vil den ændrer alt i elementet med id'et countdownid
    //og udskrive variblerne dage, timer og minutter med et mellemrum i mellem
    else {
        document.getElementById("countdownid").innerHTML = dage + " " + timer + " " +  minutter;
    }

    //funktionen vil kører hvert sekund
}, 1000);

//array som indeholder variabler
let dtmArray = ["Dage", "Timer", "Minutter"];

//for loop som printer array'et ud i elementet med id'et dtm indtil, der ikke er flere variabler i arrayet
//mellem hver variabel printes der et mellemrum
for(let i = 0; i < dtmArray.length; i++) {
    document.getElementById("dtm").innerHTML += dtmArray[i] + " ";
}

//et objekt som indeholder info omkring et event. Det skrives med varibaltypen const, som ikke kan ændres i værdi
const bowlingEvent = {
  dagBowling: "5. maj",
  årBowling: "2023",
  tidBowling: "17:00"
};

//funktion som bliver kaldt på onclick
//her udskrives objektet sammen med tre strings, hvor det erstatter teksten i elementet med id'et countdownboks
//derefter styles der på teksten ved at tage fat i elementet og gøre teksten hvid, fed, centrere teksten
//og give teksten en skriftsstørrelse på 22px
function skrivDato() {
  document.getElementById("countdownboks").innerHTML = "Eventet er den <br>" +  bowlingEvent.dagBowling + " " + bowlingEvent.årBowling + " kl. " + bowlingEvent.tidBowling;
  document.getElementById("countdownboks").style.color = "white";
  document.getElementById("countdownboks").style.fontWeight = "bold";
  document.getElementById("countdownboks").style.textAlign = "center";
  document.getElementById("countdownboks").style.fontSize = "22px";
}

//Aimi
//dropdown vises og gemmes
type="text/javascript">

function getOption() {
    selectElement = document.querySelector('#select1');
    output = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output').textContent = output;
}
//Claudia er i mappen opret.js
