function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementsByName("gender");
let selectedGender;
const age = document.getElementById("age");

function validateInputs() {
  // Get selected gender
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
    }
  }

  if (fullName == null || fullName.value == "") return false;
  if (email.value == null || email.value == "") return false;
  if (phone.value == null || phone.value == "") return false;
  if (selectedGender == null || selectedGender == "") return false;
  if (age.value == null || age.value == "") return false;

  // email validation
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailFormat)) return false;

  // phone validation
  var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!phone.value.match(phoneFormat)) return false;

  return true;
}

function submitForm() {
  if (validateInputs()) {
    alert("Thank you for submitting the form!");
  } else {
    alert("Error: Please enter valid inputs!");
  }
}