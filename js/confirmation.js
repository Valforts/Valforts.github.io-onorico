let totalElt = document.getElementById("total");
totalElt.textContent = "Coût total de votre commande : " + localStorage.getItem("total");

let orderIdElt = document.getElementById("orderId");
orderId.textContent = "Numéro d'identifiant de votre commande : " + localStorage.getItem("orderId");
