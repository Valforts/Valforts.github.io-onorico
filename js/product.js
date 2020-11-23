function getId() {
    const param = window.location.search;
    const id = param.replace("?id=", "");
    return id;
}

id = getId();
let newAjaxUrl = "https://oc-p5-api.herokuapp.com/api/cameras/" +  id;


fetch(newAjaxUrl)
.then(response => response.json())
.then(data => {

let titleElt = document.getElementById("title");
titleElt.textContent = data.name;

let imgElt = document.getElementById("img");
imgElt.src = data.imageUrl;

let priceElt = document.getElementById("price");
priceElt.textContent = data.price/100 +"€";

let descriptionElt = document.getElementById("description");
descriptionElt.textContent = data.description;

// Création et remplissage des options du select //
let selectElt = document.getElementById("inputOak");
for(let i in data.lenses){
  let optionElt = document.createElement("option");
  optionElt.textContent = data.lenses[i];
  selectElt.appendChild(optionElt);
}


})
.catch(error => console.error(error))
