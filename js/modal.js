// Manipulation du menu nav pour s'adapter à la taille d'écran -> responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements utilisés pour les fonctions Javascript
const modalBg = document.querySelector(".bground");
const modalClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalConfirm = document.querySelector(".bground-confirm");
const modalConfirmClose = document.querySelector(".bground-confirm .btn-submit");


// Affiche le formulaire modal après avoir effacé les éventuels messages d'erreurs du formulaire
function launchModal() {
  clearErrors();
  modalBg.style.display = "block";
}

// Ferme le formulaire modal et le panneau de confirmation en réinitialisant les champs
function closeModal() {
  modalBg.style.display = "none";
  modalConfirm.style.display = "none";
  document.querySelector("form").reset();
}

// Affiche le panneau de confirmation
function submitModalConfirmation() {
  modalBg.style.display = "none";
  modalConfirm.style.display = "block";
}

// Ferme le panneau de confirmation
function closeModalConfirmation() {
  modalConfirm.style.display = "none";
}

// Gestion des évènements click sur le formulaire et le panneau de confirmation
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose[0].addEventListener("click", closeModal);
modalClose[1].addEventListener("click", closeModal);
modalConfirmClose.addEventListener("click", closeModalConfirmation);

