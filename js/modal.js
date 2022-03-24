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
// const formData = document.querySelectorAll(".formData");

// Manage modal events: launch & close
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);


// Affiche le formulaire modal
function launchModal() {
  modalBg.style.display = "block";
}

// Ferme le formulaire modal en réinitialisant les champs éventuels
function closeModal() {
  modalBg.style.display = "none";
  document.querySelector("form").reset();
}

