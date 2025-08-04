//9.2
let nomUtilisateur = "Olivier";
let nomUtilisateurBaliseSpan = document.getElementById("nom-utilisateur");
nomUtilisateurBaliseSpan.textContent = nomUtilisateur;

//9.3
//Sélection du bouton à cliquer
let btnAjouterCommentaire = document.getElementById("btn-ajouter-commentaire");

//Ajout de l'écouteur d'événement sur le bouton
btnAjouterCommentaire.addEventListener("click", () => ajouterUnCommentaire());

function ajouterUnCommentaire() {
    //Sélection du champs text area
    let elementHtmlTextArea = document.getElementById("commentaire");

    //Création du nouvel élément li
    let nouveauListItem = document.createElement("li");
    nouveauListItem.textContent = elementHtmlTextArea.value;
    nouveauListItem.className = "list-group-item"; //-> https://getbootstrap.com/docs/5.0/components/list-group/

    //Sélection de la liste ul qui va accueillir le nouvel élément li
    let listeUlDeCommentaires = document.getElementById("liste-commentaires");

    //Ajout du list item li à la liste ul
    listeUlDeCommentaires.appendChild(nouveauListItem);
}

//9.4
//Sélection des deux boutons
let boutonPlus = document.getElementById("btn-plus");
let boutonMoins = document.getElementById("btn-moins");

//Ajout des écouteurs d'événements
boutonPlus.addEventListener("click", () => incrementerNombreDePersonnes());
boutonMoins.addEventListener("click", () => decrementerNombreDePersonnes());

function incrementerNombreDePersonnes() {
    //Sélection du input nombre de personnes
    let inputNombreDePersonnes = document.getElementById("nombre-de-personnes");
    let nombre = parseInt(inputNombreDePersonnes.value);

    //On incrémente le chiffre de 1. Une solution alternative est d'écrire nombre++ comme avec les boucles (i++)
    nombre = nombre + 1;

    inputNombreDePersonnes.value = nombre;

    verifierEligibiliteAuRabis(nombre);
    calculerTotal(nombre);
}

function decrementerNombreDePersonnes() {
    //Sélection du input nombre de personnes
    let inputNombreDePersonnes = document.getElementById("nombre-de-personnes");
    let nombre = parseInt(inputNombreDePersonnes.value);

    //Cette condition fait en sorte qu'on pourra pas descendre en bas de 1
    if(nombre > 1){
        nombre = nombre - 1;
    }
    
    inputNombreDePersonnes.value = nombre;

    verifierEligibiliteAuRabis(nombre);
    calculerTotal(nombre);
    
}

//9.4 Bonus
function verifierEligibiliteAuRabis(nombre) {
    // Afficher le message de réduction si nombre > 10
     if (nombre > 10) {
         document.getElementById("message-rabais").className = "text-success";
     } 
     else {
        document.getElementById("message-rabais").className = "text-success d-none";
     }
}

//9.5
function calculerTotal(nombre) {
    let total = 0;
    if (nombre > 10) {
        total = nombre * 800;
    } 
    else {
        total = nombre * 1000;
    }
    document.getElementById('total-facture').textContent = '$' + total;
}

//On appelle la fonction quand on charge la page
calculerTotal(parseInt(document.getElementById("nombre-de-personnes").value));