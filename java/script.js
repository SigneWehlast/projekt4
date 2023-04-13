//Kasper


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
//Claudia er i mappen event.js
