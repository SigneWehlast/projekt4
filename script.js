//Kasper
let i = 0;
let billeder = [];
let tid = 3000;

billeder[0] = 'gul.png'
billeder[1] = 'gul.png'
billeder[2] = 'grøn.png'

function changeImg(){
    document.slide.src= billeder[i];

    if(i < billeder.length - 1){
        i++;
    } else {
        i = 0;
    }

setTimeout("ændrebilleder()", time)
}

window.onload = ændrebilleder;

//Signe
let countDownBowling = new Date("May 5, 2023 17:00:00").getTime();

let x = setInterval(function() {

    let nu = new Date().getTime();

    let dageIndtil = countDownBowling - nu;

    let dage = Math.floor(dageIndtil / (1000 * 60 * 60 * 24));

    let timer = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));

    let minutter = Math.floor((dageIndtil % (1000 * 60 * 60 * 24)) / (1000 * 60));

    let sekunder = Math.floor((dageIndtil % (1000 * 60)) / 1000);

    document.getElementById("countdownid").innerHTML = dage + "d " + timer + "t " + minutter + "m " + sekunder + "s ";

    if (dageIndtil < 0 ) {
        clearInterval(x);
        document.getElementById("countdownid").innerHTML = "Eventet er igang";
    }
}, 1000);

//Aimi
//dropdown vises og gemmes
function show_hide() {
   var click = document.getElementById("list-items");
   if(click.style.display ==="none") {
      click.style.display ="block";
   } else {
      click.style.display ="none";
   }
}
//Claudia
