// ==============================================================================================
//                    CONSTANTES ET VARIABLES
// ==============================================================================================

// Constantes de travail
const formulaire = document.forms[0];
const inputsFormulaire = document.querySelectorAll("input");

// Constantes pour test des inputs
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");                  
const nameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/; // au moins 2 caractères alphabétiques, un seul '-'
const email = document.getElementById("email");
const emailValid = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]{2,}\.[a-zA-Z\.\-_]+[a-zA-Zs\-_]$/; // format minimum xx@yy.zz 
const birthdate = document.getElementById("birthdate");
const birthdateValid = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/; // format AAAA-MM-JJ
const qantity = document.getElementById("quantity");
const quantityValid = /^[0-9]{1,2}$/;
const tournaments = document.getElementById("tournaments");
const cities = document.querySelectorAll('#tournaments .checkbox-input');
const checkbox1 = document.getElementById("checkbox1");

// variable de travail
let formValid = document.getElementById("btn-submit");


// ==============================================================================================
//                    FONCTIONS LOCALES
// ==============================================================================================


// checkFirstname: test si non vide, longueur > 2 et caractères acceptés
function checkFirstname(event) {

  if ((firstname.validity.valueMissing) || (nameValid.test(firstname.value) == false)) {
    event.preventDefault();
    firstname.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le prénom");
    firstname.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  firstname.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// checkLastname: test si non vide, longueur > 2 et caractères acceptés
function checkLastname(event) {

  if ((lastname.validity.valueMissing) || (nameValid.test(lastname.value) == false)) {
    event.preventDefault();
    lastname.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le nom");
    lastname.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  lastname.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// checkEmail: test si non vide, et format email
function checkEmail(event) {

  if ((email.validity.valueMissing) || (emailValid.test(email.value) == false)) {
    event.preventDefault();
    email.parentElement.setAttribute("data-error", "Veuillez respecter le format du mail (exemple@domaine.fr)");
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  email.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// checkBirthdate: test si non vide, et si format date AAAA-MM-JJ
function checkBirthdate(event) {

  if ((birthdateValid.test(birthdate.value) == false)) {
    event.preventDefault();
    birthdate.parentElement.setAttribute("data-error", "Veuillez sélectionner une date au format indiqué");
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// checkQuantity: test si non vide, et valeur entre 0 & 99
function checkQuantity(event) {

  if ((quantity.validity.valueMissing) || (quantityValid.test(quantity.value) == false)) {
    event.preventDefault();
    quantity.parentElement.setAttribute("data-error", "Veuillez entrer un nombre entre 0 et 99");
    quantity.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  quantity.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// checkTournaments: test si un des radio boutons est sélectionné pour un tournoi
function checkTournaments(event) {

  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      tournaments.setAttribute("data-error-visible", "false");
      return true;
    } 
  }
  tournaments.setAttribute("data-error", "Veuillez sélectionner une ville");
  tournaments.setAttribute("data-error-visible", "true");
  return false;
}

//checkCheckbox1: test si conditions générales d'utilisation est coché
function checkCheckbox1(event) {

  if (!(checkbox1.checked)) {
    event.preventDefault();
    checkbox1.parentElement.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  checkbox1.parentElement.setAttribute("data-error-visible", "false");
  return true;
}


// Fonction de validation du formulaire (appelée sur détection du submit)
// On doit tester tous les champs
function validateForm(event) {

  let formvalid = true;

  checkFirstname(event) == false ? (formvalid = false) : 0;
  checkLastname(event) == false ? (formvalid = false) : 0;
  checkEmail(event) == false ? (formvalid = false) : 0;
  checkBirthdate(event) == false ? (formvalid = false) : 0;
  checkQuantity(event) == false ? (formvalid = false) : 0;
  checkTournaments(event) == false ? (formvalid = false) : 0;
  checkCheckbox1(event) == false ? (formvalid = false) : 0;

  return formvalid;
}

// Fonction de raz des messages d'erreur sur formulaire, appelé à l'ouverture du formulaire
function clearErrors() {

  for (let inputFormulaire of inputsFormulaire) {
    inputFormulaire.parentElement.setAttribute("data-error-visible", "false");
  }
}

// ==============================================================================================
//                    TRAITEMENTS SUR EVENTS
// ==============================================================================================

// sur détection du submit, on lance la validation du formulaire
// si validation OK on affiche le message de confirmation et on resette le formulaire
// sinon, on attend la correction
formulaire.addEventListener('submit', function (e) {

  e.preventDefault();

  if (validateForm(e)) {
    submitModalConfirmation();
    formulaire.reset();
  }

});


// Sur détection de changement d'input, on valide le champ
firstname.addEventListener("keyup", checkFirstname);
lastname.addEventListener("keyup", checkLastname);
email.addEventListener("keyup", checkEmail);
birthdate.addEventListener("input", checkBirthdate);
quantity.addEventListener("keyup", checkQuantity);
tournaments.addEventListener("input", checkTournaments);
checkbox1.addEventListener("input", checkCheckbox1);


