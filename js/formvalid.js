// Constantes de travail
const formulaire = document.forms[0];
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");                  
const nameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const email = document.getElementById("email");
const emailValid = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]{2,}\.[a-zA-Z\.\-_]+[a-zA-Zs\-_]$/;
const birthdate = document.getElementById("birthdate");
const birthdateValid = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;
const qantity = document.getElementById("quantity");
const quantityValid = /^[0-9]{1,2}$/;
const tournaments = document.getElementById("tournaments");
const cities = document.querySelectorAll('#tournaments .checkbox-input');
const checkbox1 = document.getElementById("checkbox1");


// variable de travail
let formValid = document.getElementById("btn-submit");

// Fonction de validation du formulaire (appelée sur détection du submit)
function validateForm(event) {

  let result = true;

  //Prénom: test si non vide, longueur > 2 et caractères acceptés
  if ((firstname.validity.valueMissing) || (nameValid.test(firstname.value) == false)) {
    event.preventDefault();
    firstname.parentElement.setAttribute("data-error", "Prénom manquant ou format incorrect");
    firstname.parentElement.setAttribute("data-error-visible", "true");
    result = false;
  } else {
    firstname.parentElement.setAttribute("data-error-visible", "false");
  }

  //Nom: test si non vide, longueur > 2 et caractères acceptés
  if ((lastname.validity.valueMissing) || (nameValid.test(lastname.value) == false)) {
    event.preventDefault();
    lastname.parentElement.setAttribute("data-error", "Nom manquant ou format incorrect");
    lastname.parentElement.setAttribute("data-error-visible", "true");
    result = false;
  } else {
    lastname.parentElement.setAttribute("data-error-visible", "false");
  }

  //email: test si non vide, et format email
  if ((email.validity.valueMissing) || (emailValid.test(email.value) == false)) {
    event.preventDefault();
    email.parentElement.setAttribute("data-error", "Mail manquant ou format mail incorrect");
    email.parentElement.setAttribute("data-error-visible", "true");
    result = false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
  }

  //birthdate: test si non vide, et format date AAAA-MM-JJ
  if ((birthdateValid.test(birthdate.value) == false)) {
    event.preventDefault();
    birthdate.parentElement.setAttribute("data-error", "Date manquante ou format date incorrect");
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    result = false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
  }

  //quantity: test si non vide, et valeur entre 0 & 99
  if ((quantity.validity.valueMissing) || (quantityValid.test(quantity.value) == false)) {
    event.preventDefault();
    quantity.parentElement.setAttribute("data-error", "Veuillez entrer un nombre entre 0 et 99");
    quantity.parentElement.setAttribute("data-error-visible", "true");
    result = false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
  }

  //tournaments: test si un des radio boutons est sélectionné pour un tournoi
  tournaments.setAttribute("data-error", "Veuillez sélectionner une ville");
  tournaments.setAttribute("data-error-visible", "true");
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
      tournaments.setAttribute("data-error-visible", "false");
      break;
    } 
  }

  //checkbox1 conditions générales d'utilisation: test si coché
  if (!(checkbox1.checked)) {
    event.preventDefault();
    checkbox1.parentElement.setAttribute("data-error", "Veuillez accepter les conditions generales");
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    result = false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
  }

  return result;

}

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

//formValid.addEventListener('click', submitForm);
