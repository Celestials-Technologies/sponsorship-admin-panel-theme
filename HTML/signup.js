const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const eyeBorder = document.getElementById("eyeBorder");

function signupBtn() {
  // Reset all errors
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";

  if (firstNameInput.value === "") {
    firstNameError.style.display = "block";
  } else {
    firstNameError.style.display = "none";
  }
  if (lastNameInput.value === "") {
    lastNameError.style.display = "block";
  } else {
    lastNameError.style.display = "none";
  }
  if (emailInput.value === "") {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
  if (passwordInput.value === "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }

  // Only proceed if all validations pass
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;

  if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    let storedUser = JSON.parse(localStorage.getItem("user")) || [];
    let existingUser = storedUser.find((user) => user.email === email);
    if (existingUser) {
      emailError.textContent =
        "Email is already Taken. Please Forget your Passoword";
      emailError.style.display = "block";
    } else {
      storedUser.push(user);
      localStorage.setItem("user", JSON.stringify(storedUser));

      firstNameInput.value = "";
      lastNameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";

      window.location.href = "login.html";
    }

    console.log("Stored users:", storedUser);
  }
}

function showPasswordBtn() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeBorder.style.display = "none";
  } else {
    passwordInput.type = "password";
    eyeBorder.style.display = "block";
  }
}
