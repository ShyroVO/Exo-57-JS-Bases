let ageUtilisateur = prompt("Votre âge:");
let age = parseInt(ageUtilisateur);

if ( age < 18 && age > 0) {
    alert("Vous êtes mineur, vous avez " + age + "ans");
}

else if ( age <0 ) {
    alert("Il y a du réseau dans le ventre de maman?")
}

else if ( age > 18 && age < 100 ) {
    alert("Vous êtes majeur, vous avez " + age + "ans");
}

else if ( age > 100) {
    alert("Toujours vivant?");
}

else {
    alert("Je ne comprend pas!");
}