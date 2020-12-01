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
        spreadElt =  Number.parseFloat(sommeTotal/3).toPrecision(6);
        spreadElt.textContent = "3X " + spreadElt;
  }

}
fillBasket();



// Envoi des données au serveur //

// Création du tableau "products" contenant les id des produits commandés //

let products = [];
for(let i in JSON.parse(localStorage.getItem("basketContent"))){
  products.push(JSON.parse(localStorage.getItem("basketContent"))[i].id)
};

// Envoi des données du formulaire //

let submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", function(){

  let formElt = document.getElementById("form");
  formElt.addEventListener("submit" function(e){
    e.preventDefault();
  })

  let contact = {
    "lastName" : document.getElementById("inputName").value,
    "firstName" : document.getElementById("inputFirstName").value,
    "address" : document.getElementById("inputAddress").value,
    "code" : document.getElementById("inputPostcode").value,
    "city" : document.getElementById("inputCity").value,
    "email" : document.getElementById("inputEmail").value
  }

  let data = {
    "products" : products,
    "contact" : contact,
  }

  ajaxPost('https://oc-p5-api.herokuapp.com/api/cameras/order', data)
  .then(function(response) {
    let orderId = JSON.parse(response);
    localStorage.setItem("orderID", orderId.orderId);
    localStorage.setItem("totalAmount", spreadElt.textContent);
    window.location.assign("../confirmation.html");

  })
  .catch(function (error){
    console.log(error);
  })
})
