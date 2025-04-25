const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const eyeBorder = document.getElementById("eyeBorder");

function loginBtn() {
  // Reset errors
  emailError.style.display = "none";
  passwordError.style.display = "none";

  // Validate fields
  if (emailInput.value === "") {
    emailError.style.display = "block";
    return;
  }
  if (passwordInput.value === "") {
    passwordError.style.display = "block";
    return;
  }

  // Get stored users
  const storedUsers = JSON.parse(localStorage.getItem("user")) || [];
  const loginEmail = emailInput.value;
  const loginPassword = passwordInput.value;

  const user = storedUsers.find((u) => u.email === loginEmail);

  if (user) {
    if (user.password === loginPassword) {
      // Store login status and user data
      localStorage.setItem("loginSuccess", "true");
      localStorage.setItem("firstName", user.firstName);
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "dashboard.html";
    } else {
   
      passwordError.textContent = "Incorrect password";
      passwordError.style.display = "block";
    }
  } else {
  
    emailError.textContent = "Email not found";
    emailError.style.display = "block";
    localStorage.setItem("loginSuccess", "false");
    localStorage.removeItem("currentUser");
    currentUser = null;
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
