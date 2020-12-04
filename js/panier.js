function fillBasket(){
  let sommeTotal = 0;
  for(let i in JSON.parse(localStorage.getItem("basketContent"))){

      let tbodyElt = document.getElementById("tbody");
      let trElt = document.createElement("tr");
      let imgElt = document.createElement("td");
      let img = document.createElement("img");
      let titleElt = document.createElement("td");
      let quantityElt = document.createElement("td");
      let priceElt = document.createElement("td");

      tbodyElt.appendChild(trElt);
      imgElt.appendChild(img);
      trElt.appendChild(imgElt);
      trElt.appendChild(titleElt);
      trElt.appendChild(quantityElt);
      trElt.appendChild(priceElt);


      img.src = (JSON.parse(localStorage.getItem("basketContent"))[i].url);
      img.style = "width :100px; height:70px;";
      titleElt.textContent = (JSON.parse(localStorage.getItem("basketContent"))[i].title);
      quantityElt.textContent = (JSON.parse(localStorage.getItem("basketContent"))[i].quantity);
      priceElt.textContent = parseInt((JSON.parse(localStorage.getItem("basketContent"))[i].price))
      *(JSON.parse(localStorage.getItem("basketContent"))[i].quantity) +"€";


        let sumElt = document.getElementById("sum");
        sommeTotal += parseInt((JSON.parse(localStorage.getItem("basketContent"))[i].price))
        *(JSON.parse(localStorage.getItem("basketContent"))[i].quantity);
        sumElt.textContent = sommeTotal + "€";

        let spreadElt = document.getElementById("spread");
        let spread =  Number.parseFloat(sommeTotal/3).toPrecision(6);
        spreadElt.textContent = "3X " + spread;
  }
}

// Envoi des données au serveur //

// Création du tableau "products" contenant les id des produits commandés //

let products = []; // Création du tableau products qui contiendra les id de chaque appareil commandé
for(let i in JSON.parse(localStorage.getItem("basketContent"))){ // On parcours le localStorage
  products.push(JSON.parse(localStorage.getItem("basketContent"))[i].id)
   // On ajoute au tableau l'id de chaque appareil
};


// Envoi des données du formulaire //

let submitBtn = document.getElementById("btn"); // Ciblage du bouton
submitBtn.addEventListener("click", function(){ // Ajout d'un listener au clique

  let formElt = document.getElementById("form"); // Ciblage du formulaire
  formElt.addEventListener("submit", function(e){ // Ajout d'un listener au moment de soumettre le formulaire
    e.preventDefault(); // Empêche le formulaire de se réinitialiser et de recharger la page
    window.location.assign("confirmation.html")
  })

  let contact = { // Création du l'obket contact qui sera envoyé dans data
    "lastName" : document.getElementById("inputName").value,
    "firstName" : document.getElementById("inputFirstName").value,
    "address" : document.getElementById("inputAddress").value,
    "code" : document.getElementById("inputPostcode").value,
    "city" : document.getElementById("inputCity").value,
    "email" : document.getElementById("inputEmail").value
  }



  let data = { //Objet contenant products et contact qui seront envoyés au serveur
    "products" : products,
    "contact" : contact,
  }


  ajaxPost('https://oc-p5-api.herokuapp.com/api/cameras/order', data) //Appel de la fonctione AjaxPost
  .then(function(response) { // reponse récupère resolve (Donc le responseText) quand elle est disponible
    console.log("coucouuuuuu");
    let orderId = JSON.parse(response); // OrderId contient la reponse en Objet JS
    console.log(orderId.orderId);
    localStorage.setItem("orderId", orderId.orderId);  //Je crée une clé "orderID" et lui attribut la valeur id de orderID
    let sumElt = document.getElementById("sum");
    localStorage.setItem("total", sumElt.textContent); // Je crée une clée "total" et lui attribut la valeur spread (voir plus haut)
  })
  .catch(function (error){
    console.log(error); //En cas d'erreur, log un message d'erreur
  })
})

fillBasket();
