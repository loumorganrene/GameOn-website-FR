function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const tournamentLbl = document.querySelector(".text-label")
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const thankMsg = document.querySelector(".modal-thank");

// Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournament = document.querySelector(`input[name="location"]`);
const cge = document.querySelector("#checkbox1");

// Regex
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
const nameRegExp = /[^0-9<>()\[\]\\.,;:\s@"][A-Za-z]{1,}/
const birthdateRegExp = /[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{2}|[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{2}|[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{4}/
const numberRegExp = /[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{0,}/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  window.location.reload(true);
}

// verify firstname
function firstNameInvalid() {
  if (!firstName.value.match(nameRegExp)) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Entrez un prénom valide.");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify lastname
function lastNameInvalid() {
  if (!lastName.value.match(nameRegExp)) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Entrez un nom valide.");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify email
function emailInvalid() {
  if (!email.value.match(emailRegExp)) {
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Entrez un email valide.");
    return false;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify birthdate
function birthdateInvalid() {
  if (!birthdate.value.match(birthdateRegExp)) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Entrez une date de naissance valide.");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify quantity
function quantityInvalid() {
  if (!quantity.value.match(numberRegExp)) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Renseignez un nombre de tournoi.");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify checked radio button
function tournamentInvalid() {
  if (document.querySelector('input[name="location"]:checked') === null) {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Sélectionnez une option.");
    return false;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
    return true;
  }
}

// verify checked cge checkbox
function cgeInvalid() {
    if(!cge.checked) {
      formData[6].setAttribute("data-error-visible", "true");
      formData[6].setAttribute("data-error", "Veuillez lire et accepter les conditions.");
      return false;
    } else {
      formData[6].setAttribute("data-error-visible", "false");
      return true;
    }
}

// // // validate modal form
submitBtn.addEventListener("click", validate);

// validate tournament selection
function validate(e) {
  // prevent closing modal & erasing user input data
  e.preventDefault();
  if (
  firstNameInvalid() &&
  lastNameInvalid() &&
  emailInvalid() &&
  birthdateInvalid() &&
  quantityInvalid() &&
  tournamentInvalid() &&
  cgeInvalid() === true
  ) {
    function thanksModal() {
      form.style.visibility= "hidden";
      submitBtn.setAttribute("value", "Fermer");
      submitBtn.style.visibility= "visible";
      thankMsg.style.visibility= "visible";
      submitBtn.addEventListener("click", closeModal);
    }
    thanksModal();
  } 
  else {
    firstNameInvalid(),
    lastNameInvalid(),
    emailInvalid(),
    birthdateInvalid(),
    quantityInvalid(),
    tournamentInvalid(),
    cgeInvalid(),
    console.log("Formulaire incomplet");
  }
}

