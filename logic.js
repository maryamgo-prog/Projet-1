document.getElementById('quantity').addEventListener('input', function() {
    const quantity = parseInt(this.value); // Récupérer la quantité saisie
    const pricePerItem = 100; // Prix fixe du produit
    const total = quantity > 0 ? quantity * pricePerItem : 0; // Calculer le total si la quantité est valide
    document.getElementById('total').value = total + ' Dh'; // Afficher le total dans le champ output
});


// let name = document.getElementById("name");

// let phone = document.getElementById("phone");

// let addresse = document.getElementById("addresse");

// let postalcode = document.getElementById("postal-code");

// if (name != null && phone != null && addresse != null && postalcode != null) {

// }


// let total = document.getElementById("total");
// let quantity = document.getElementById("quantity")
// total.innerHTML = quantity * 100;


// let submitbtn = document.getElementsByClassName("submit-btn");
// submitbtn.addEventListener("click", function() {
//     alert(submitbtn.style.color = "geen");
// });