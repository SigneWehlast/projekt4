//Aimi

let select_element = document.getElementById("dropdownselect");

let options = ["Multimediedesigner", "Markedsøkonom", "Finansøkonom",]

select_element.innerHTML = "";

for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    select_element.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
