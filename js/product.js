// Récupération de l'id API de l'item sélectionné //
function getId() {
    const param = window.location.search;
    const id = param.replace("?id=", "");
    return id;
}
 // Création d'une URL propre à l'item sélectionné afin de récupérer ses information via son ID //
id = getId();
let newAjaxUrl = "https://oc-p5-api.herokuapp.com/api/cameras/" +  id;

// Remplissage de le card en fonction de l'item choisi //
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
.catch(error => console.error(error));



function addBasketItem(){
    let btnElt = document.getElementById("btn");
    btnElt.addEventListener("click", function(){

    let imgElt = document.getElementById("img");
    let titleElt = document.getElementById("title");
    let selectElt = document.getElementById("inputOak");
    let quantityElt = document.getElementById("quantitee");
    let priceElt = document.getElementById("price");

    function Product(id, title,quantity, price, url){
      this.id = id;
      this.title = title + " focale : " + selectElt.options[selectElt.selectedIndex].value;
      this.quantity = quantity;
      this.price = price;
      this.url = url;
    }

    let basketContent = JSON.parse(localStorage.getItem("basketContent"));
    if (basketContent === null){
      basketContent = [];
    }

    let product = new Product(id,titleElt.textContent, quantityElt.value,priceElt.textContent, imgElt.src);
    basketContent.push(product);
    localStorage.setItem("basketContent", JSON.stringify(basketContent));
  })

}

addBasketItem();
