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
