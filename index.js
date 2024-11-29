// // fonction de total
// function calculerTotal() {
//     let quantite = document.getElementById("quantite").value;
//     let prixUnitaire = parseFloat(document.getElementById("PrixUnitaire").value);
//     if (!isNaN(quantite) && quantite > 0) {
//         let total = quantite * prixUnitaire;
//         document.getElementById("total").textContent = total.toFixed(2);
//     } else {
//         document.getElementById("total").textContent = 0;
//     }
// }
// function calculerTotal() {
//     let quantite = document.getElementById("quantite").value;
//     let prixUnitaire = parseFloat(document.getElementById("PrixUnitaire").value);
//     if (!isNaN(quantite) && quantite > 0) {
//         let total = quantite * prixUnitaire;
//         document.getElementById("total").textContent = total.toFixed(2);
//     } else {
//         document.getElementById("total").textContent = 0;
//     }
// }

// document.getElementById('tele').addEventListener('input', function () {
//     let tele = this.value;
//     this.value = tele.replace(/\D/g, '');

//     if (this.value.length > 10) {
//         this.value = this.value.slice(0, 10);
//     }

//     if (this.value.length === 10 && !/^\d+$/.test(this.value)) {
//         alert('You must enter only numbers.');
//     }
// });

// document.getElementById('codePostal').addEventListener('input', function () {
//     let codePostal = this.value;
//     this.value = codePostal.replace(/\D/g, '');

//     if (this.value.length > 10) {
//         this.value = this.value.slice(0, 10);
//     }

//     if (this.value.length === 10 && !/^\d+$/.test(this.value)) {
//         alert('You must enter only numbers.');
//     }
// });
// function validerFormulaire() {
//     let messageElement = document.getElementById("message");
//     let nom = document.getElementById("nom").value;
//     let prenom = document.getElementById("prenom").value;
//     let codePostal = document.getElementById("codePostal").value;
//     let tele = document.getElementById("tele").value;
//     let quantite = document.getElementById("quantite").value;

//     if (nom === "" || prenom === "" || codePostal === "" || tele === "" || quantite === "") {
//         messageElement.textContent = "Commande non valide. Veuillez remplir tous les champs.";
//         return false; 
//     } else {
//         messageElement.textContent = "Commande validée. Merci pour votre achat !";
//         messageElement.style.color = "green";
//         return true; 
//     }
// }



















































