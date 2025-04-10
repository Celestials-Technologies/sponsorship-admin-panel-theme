let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let oldPasswordError = document.getElementById("oldPasswordError");
let newPasswordError = document.getElementById("newPasswordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

function savePasswords() {
    if (oldPassword.value === "") {
        oldPasswordError.style.display = "block";
    }
    if (newPassword.value === "") {
        newPasswordError.style.display = "block";
    }
    if (confirmPassword.value === "") {
        confirmPasswordError.style.display = "block";
    }
    if (oldPassword.value === newPassword.value) {
        newPasswordError.style.display = "block";
    }
    if (confirmPassword.value !== newPassword.value) {
        confirmPasswordError.style.display = "block";
    }
    if (oldPassword.value === newPassword.value) {
        newPasswordError.style.display = "block";
    }

    
    if (confirmPassword.value !== newPassword.value) {
        confirmPasswordError.style.display = "block";
    }

    const storedUsers = JSON.parse(localStorage.getItem("user")) || [];

    const userIndex = storedUsers.findIndex((u) => u.password === oldPassword.value);

    if (userIndex !== -1 && 
        oldPassword.value !== "" && 
        newPassword.value !== "" && 
        confirmPassword.value !== "" && 
        oldPassword.value !== newPassword.value && 
        confirmPassword.value === newPassword.value) {
        
        oldPasswordError.style.display = "none";
        newPasswordError.style.display = "none";
        confirmPasswordError.style.display = "none";

        // Update only the password while keeping other user properties
        storedUsers[userIndex].password = newPassword.value;
        
        // Save the updated array back to localStorage
        localStorage.setItem("user", JSON.stringify(storedUsers));
        alert("Password updated successfully");
        
        // Clear the form
        oldPassword.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
    } else if (userIndex === -1) {
        oldPasswordError.style.display = "block";
        oldPasswordError.textContent = "Incorrect old password";
    }
}

function getUserPassword() {
    let userPassword = JSON.parse(localStorage.getItem("userPassword")) || [];
    console.log(userPassword);
    let lastUserPassword = userPassword[userPassword.length - 1];
    console.log(lastUserPassword);
    oldPassword.value = lastUserPassword.oldPassword;
    newPassword.value = lastUserPassword.newPassword;
    confirmPassword.value = lastUserPassword.confirmPassword;
    oldPasswordError.style.display = "none";
    newPasswordError.style.display = "none";
    confirmPasswordError.style.display = "none";
}

getUserPassword();

function cancelPasswords() {
    oldPassword.value = "";
    newPassword.value = "";
    confirmPassword.value = "";
}