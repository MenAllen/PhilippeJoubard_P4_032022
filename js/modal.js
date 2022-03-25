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
const modalClose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalConfirm = document.querySelector(".bground-confirm");
const modalConfirmClose = document.querySelector(".bground-confirm .btn-submit");
// const formData = document.querySelectorAll(".formData");



// Affiche le formulaire modal
function launchModal() {
  modalBg.style.display = "block";
}

// Ferme le formulaire modal en réinitialisant les champs
function closeModal() {
  modalBg.style.display = "none";
  document.querySelector("form").reset();
}

// Affiche le panneau de confirmation
function submitModalConfirmation() {
  modalBg.style.display = "none";
  modalConfirm.style.display = "block";
  console.log("submitModalConfirmation");
}

// Ferme le panneau de confirmation
function closeModalConfirmation() {
  modalConfirm.style.display = "none";
}

// Manage modal events: launch & close
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);
modalConfirmClose.addEventListener("click", closeModalConfirmation);

