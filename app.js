// essai pour clavier saisie articles
let clavier = document.querySelector(".clavier");
let infoClavier = Array.from(clavier.children);
let chiffres = document.querySelectorAll('.chiffre');

let rendu = document.querySelector(".rendu");
let total = document.querySelector(".total");
let paye = document.querySelector(".paye");
let versRendu=document.querySelector('versRendu');
let btnCalculer = document.querySelector(".calculer");

// lancement de la boucle pour récupérer tous les boutons
for (let i = 0; i < chiffres.length; i++) {
    chiffres[i].addEventListener('click', ajoute);
}
function ajoute(e) {
    // le += pour pouvoir saisir plusieurs chiffres (12,100 etc...). Et e.target.value càd "valeur de la cible de l'evenement". 
    total.value += (e.target.value);
}

btnCalculer.addEventListener('click', calculRendu);
function calculRendu() {
    let billets10 = 0
    let billets5 = 0
    rendu.value = (paye.value - total.value);
    if (total.value <= 0 || paye.value < total.value || paye.value <= 0) {
        alert('operation impossible!!')
    }
    while (rendu.value >= 10) {
        billets10++;
        // bien retirer la valeur de 1 billet rendu, sur le total à rendre
        rendu.value -= 10;
    }
    while (rendu.value >= 5) {
        billets5++;
        rendu.value -= 5;
    }
    // pour affichage html: la variable pour avoir le chiffre et le string entre ""
    rendu.value = billets10 + " billets de 10 et " + billets5 + " billets de 5 et " + rendu.value + " pieces de 1";
}



