//Aimi

let select_element = document.getElementById("dropdownselect");

let uddannelser = ["Multimediedesigner", "Markedsøkonom", "Finansøkonom",]

select_element.innerHTML = "";

for(let i = 0; i < uddannelser.length; i++) {
    let opt = uddannelser[i];
    select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
