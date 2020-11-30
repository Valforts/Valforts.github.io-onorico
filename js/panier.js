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
        spreadElt.textContent = "3X " + Number.parseFloat(sommeTotal/3).toPrecision(6);
  }

}
fillBasket();

function sendData(data) {
  let request = new XMLHttpRequest();
  let FD  = new FormData();

  // Mettez les données dans l'objet FormData
  for(name in data) {
    FD.append(name, data[name]);
  }

  // Définissez ce qui se passe si la soumission s'est opérée avec succès
  request.addEventListener('load', function(event) {
    alert('Ouais ! Données envoyées et réponse chargée.');
  });

  // Definissez ce qui se passe en cas d'erreur
  request.addEventListener('error', function(event) {
    alert('Oups! Quelque chose s\'est mal passé.');
  });

  // Configurez la requête
  request.open('POST', '#');

  // Expédiez l'objet FormData ; les en-têtes HTTP sont automatiquement définies
  request.send(FD);
}
