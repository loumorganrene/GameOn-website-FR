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
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");

// Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radioBtn = document.querySelectorAll('input[name="location"]');
const cgeCheckbox = document.getElementById("checkbox1");
const faculCheckbox = document.getElementById("checkbox2");

console.log(radioBtn);

// Regex
var regeEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// verify firstname
function firstNameValid() {
  if (firstName.value === "" || firstName.value.length < 2) {
    alert("Veuillez spécifier votre prénom");
    return false;
  }
}

// verify lastname
function lastNameValid() {
  if (lastName.value === "" || lastName.value.length < 2) {
    alert("Veuillez spécifier votre nom");
    return false;
  }
}

// verify email
function emailValid() {
  if (email.value === "" || email.value === regeEmail) {
    alert("Adresse mail invalide");
    return false;
  }
}


// verify quantity
function quantityValid() {
  if (quantity.value === "" || isNaN(quantity.value)) {
    alert("Veuillez spécifier un nombre");
    return false;
  }
}

// verify checked cge checkbox
function checkedCge() {
    if(!cgeCheckbox.checked) {
      alert("Veuillez accepter les conditions");
      return false;
    }
}

// verify checked radio button
function checkedRadioBtn() {
  let checkedBtn = 0;
  for(let i = 0; i < radioBtn.length; i++){
    if(radioBtn[i].checked) {
      checkedBtn++
    }
  }

  if (checkedBtn === 0) {
    alert('Sélectionnez un tournoi');
  }
}


// validate modal form
submitBtn.addEventListener('submit', validate);

// validate tournament selection
function validate() {
  checkedRadioBtn();
}

