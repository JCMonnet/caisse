let total = document.querySelector(".total");
let paye = document.querySelector(".paye");
let rendu = document.querySelector(".rendu");
let billets10 = 0
let billets5 = 0
let btnCalculer = document.querySelector(".calculer");

btnCalculer.addEventListener('click', calculRendu);
function calculRendu() {
    rendu.value = (paye.value - total.value);
    while (rendu.value >= 10) {
        billets10++;
        rendu.value -= 10;
    }
    while (rendu.value >= 5) {
        billets5++;
        rendu.value -= 5;
    }
    rendu.value = billets10 + " billets de 10 et" + billets5 + " billets de 5 et " + rendu.value + " pieces de 1";
}


