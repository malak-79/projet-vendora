function calculerTotal(){
    let quantite =document.getElementById("quantite").value;
    let prixUnitaire =document.getElementById("PrixUnitaire").value;
    if (!isNaN(quantite) && quantite > 0){
        let total = quantite * prixUnitaire; 
        document.getElementById("total").value = total.toFixed(2);
    }else{
        document.getElementById("total").value = 0;
    }
}