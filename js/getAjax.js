// Utilisation de fetch pour simplifier l'utilisation des promesses //

fetch('https://oc-p5-api.herokuapp.com/api/cameras')
.then(response => response.json())
.then(data => {

  for(let i in data){
    // Création des élément composants la card //
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

    let newCardPrice = document.createElement("p");
    newCardPrice.classList.add("card-text");

    let newCardTexte = document.createElement("p");
    newCardTexte.classList.add("card-text");

    let newLink = document.createElement("a");
    newLink.classList.add("stretched-link");

    // Création d'un lien sur chaque card avec l'id correspondant intégré a l'URL //
    newLink.href ="product.html?id=" + data[i]._id;
    let mainElt = document.getElementById("main")

    // Création et affichage de la card //
    mainElt.appendChild(newCol);
    newCol.appendChild(newCard);
    newCard.appendChild(newCardImg);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardBody.appendChild(newCardPrice);
    newCardBody.appendChild(newCardTexte);
    newCardBody.appendChild(newLink);

    // Remplissage des informations de la card //
    let price = data[i];
    newCardTitle.textContent = data[i].name;
    newCardImg.setAttribute("src", data[i].imageUrl);
    newCardPrice.textContent = data[i].price/100 + "€";
    newCardTexte.textContent = data[i].description;
    
}

})
.catch(error => console.error(error))
