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
formData[0].addEventListener("input", firstNameIsValid); // verify entry on type
function firstNameIsValid() {
  if (!firstName.value.match(nameRegExp)) {
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "Entrez un prénom valide.");
    return false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");
    formData[0].setAttribute("data-error", "");
    return true;
  }
}

// verify lastname
formData[1].addEventListener("input", lastNameIsValid); // verify entry on type
function lastNameIsValid() {
  if (!lastName.value.match(nameRegExp)) {
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "Entrez un nom valide.");
    return false;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
    formData[1].setAttribute("data-error", "");
    return true;
  }
}

// verify email
formData[2].addEventListener("input", emailIsValid); // verify entry on type
function emailIsValid() {
  if (!email.value.match(emailRegExp)) {
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "Entrez un email valide.");
    return false;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
    formData[2].setAttribute("data-error", "");
    return true;
  }
}


// verify birthdate
formData[3].addEventListener("input", birthdateIsValid); // verify entry on type
function birthdateIsValid() {
  // verify age limite from user input entry birthdate
  const today = new Date();
  const birthdateValue = new Date(birthdate.value);
  const todayYear = today.getFullYear();
  const userBirthYear = birthdateValue.getFullYear();
  const validDate = todayYear - 18;
  const birthDateisValid = validDate <= userBirthYear;
  if (!birthdate.value.match(birthdateRegExp) || birthDateisValid) {
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "Entrez une date de naissance valide.");
    return false;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
    formData[3].setAttribute("data-error", "");
    return true;
  }
}

// verify quantity
formData[4].addEventListener("input", quantityIsValid); // verify entry on type
function quantityIsValid() {
  if (!quantity.value.match(numberRegExp)) {
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "Renseignez un nombre de tournoi.");
    return false;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
    formData[4].setAttribute("data-error", "");
    return true;
  }
}

// verify checked radio button
formData[5].addEventListener("input", tournamentIsValid); // verify entry on type
function tournamentIsValid() {
  if (document.querySelector('input[name="location"]:checked') === null) {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "Sélectionnez une option.");
    return false;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
    formData[5].setAttribute("data-error", "");
    return true;
  }
}

// verify checked cge checkbox
formData[6].addEventListener("input", cgeIsValid); // verify entry on check
function cgeIsValid() {
    if(!cge.checked) {
      formData[6].setAttribute("data-error-visible", "true");
      formData[6].setAttribute("data-error", "Veuillez lire et accepter les conditions.");
      return false;
    } else {
      formData[6].setAttribute("data-error-visible", "false");
      formData[6].setAttribute("data-error", "");
      return true;
    }
}

// validate modal form
submitBtn.addEventListener("click", validate);

// validate tournament selection
function validate(e) {
  // prevent closing modal & erasing user input data
  e.preventDefault();
  if (
  firstNameIsValid() &&
  lastNameIsValid() &&
  emailIsValid() &&
  birthdateIsValid() &&
  quantityIsValid() &&
  tournamentIsValid() &&
  cgeIsValid()
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
    firstNameIsValid(),
    lastNameIsValid(),
    emailIsValid(),
    birthdateIsValid(),
    quantityIsValid(),
    tournamentIsValid(),
    cgeIsValid();
  }
}

