const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

function checkBtn() {
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
  const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;

  const user = storedUsers.find(
    (u) =>
      u.firstName === firstName && u.lastName === lastName && u.email === email
  );
  if (user) {
    const storedPassword = user.password;
    alert(`User Exist Your Password is ${storedPassword}`);
    window.location.href = "login.html";
  } else {
    alert("User not exists!");
  }
}
