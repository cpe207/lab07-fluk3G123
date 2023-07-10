const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;

  if (firstNameInput.value && lastNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    lastNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    lastNameInput.classList.add("is-valid");
    isFirstNameOk = true;
    isLastNameOk = true;
  }

  // if (isFirstNameOk && isLastNameOk) {
  //   alert("Register successfullys");
  // }
};
