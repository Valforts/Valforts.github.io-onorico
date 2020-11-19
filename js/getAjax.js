/*
let nameElt = document.getElementsByClassName("card-title");
let imgElt = document.getElementsByClassName("card-img-top");
let txtElt = document.getElementsByClassName("card-text");
let testElt = document.getElementById("test");


  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var response = JSON.parse(this.responseText);
          for(let i in response){
          nameElt[i].textContent = response[i].name;
          imgElt[i].setAttribute("src", response[i].imageUrl);
          txtElt[i].textContent = response[i].description;
      }
    }
  };

  request.open("GET", "https://oc-p5-api.herokuapp.com/api/cameras");
  request.send();
  */

// BON EXEMPLE DE FETCH


fetch('https://oc-p5-api.herokuapp.com/api/cameras')
.then(response => response.json())
.then(data => {
  for(let i in data){
    let newCol = document.createElement("div");
    newCol.classList.add("col-12", "col-lg-4");
    let newCard = document.createElement("div");
    newCard.classList.add("card", "mb-4");
    let newCardImg = document.createElement("img");
    newCardImg.classList.add("card-img-top");
    let newCardBody = document.createElement("div");
    newCardBody.classList.add("card-body");
    let newCardTitle = document.createElement("h5");
    newCardTitle.classList.add("card-title");
    let newCardTexte = document.createElement("p");
    newCardTexte.classList.add("card-text");
    let newLink = document.createElement("a");
    newLink.classList.add("stretched-link");
    newLink.href ="#"
    let mainElt = document.getElementById("main")

    mainElt.appendChild(newCol);
    newCol.appendChild(newCard);
    newCard.appendChild(newCardImg);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardTexte);
    newCardBody.appendChild(newLink);

    newCardTitle.textContent = data[i].name;
    newCardImg.setAttribute("src", data[i].imageUrl);
    newCardTexte.textContent = data[i].description;

}

})
.catch(error => console.error(error))
