let coinImage = document.getElementById("coin-img");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    coinImage.src = reader.result; // Set the image src to the base64 string
  }
  if (file) {
    reader.readAsDataURL(file); // Convert the file to base64
  }
};

function removeCoinImage() {
  coinImage.src = "./src/images/upload.png";
  inputFile.value = "";
}
let tagline = document.getElementById("taglineInput").value;
function saveChange() {
  let coinImage = document.getElementById("coin-img").src;
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let email = document.getElementById("emailInput").value;
  let phone = document.getElementById("phoneInput").value;

  // Capture the selected radio button value
  let gender = document.querySelector('input[name="radio"]:checked')?.value;

  // Display errors if any required fields are empty
  if (firstName === "") {
    document.getElementById("firstNameError").style.display = "block";
  }
  if (lastName === "") {
    document.getElementById("lastNameError").style.display = "block";
  }
  if (email === "") {
    document.getElementById("emailError").style.display = "block";
  }
  if (tagline === "") {
    document.getElementById("taglineError").style.display = "block";
  }

  // If all required fields are filled, save the data
  if (firstName !== "" && lastName !== "" && email !== "" && phone !== "" && tagline !== "" && gender) {
    document.getElementById("firstNameError").style.display = "none";
    document.getElementById("lastNameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    document.getElementById("taglineError").style.display = "none";

    let allUserInformation = {
      coinImage: coinImage, // This will now be a base64 string
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      tagline: tagline,
      gender: gender // Store the selected gender here
    };

    // Retrieve existing data from localStorage, if any
    let storedUserInformation = JSON.parse(localStorage.getItem("allUserInformation")) || [];
    
    // Push the new data to the array
    storedUserInformation.push(allUserInformation);

    // Save the updated data back to localStorage
    localStorage.setItem("allUserInformation", JSON.stringify(storedUserInformation));
  }
}


function getUserInformation() {
  const defaultImage = './src/images/upload.png';
  const allUserInformation = JSON.parse(localStorage.getItem("allUserInformation")) || [];

  // Get the most recent data from localStorage or default values
  const lastUserInfo = allUserInformation.length > 0 ? allUserInformation[allUserInformation.length - 1] : {};
  console.log(lastUserInfo);

  const {
    coinImage = defaultImage,
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    tagline = ''
  } = lastUserInfo;

  // Set form input fields
  document.getElementById("coin-img").src = coinImage;
  document.getElementById("firstNameInput").value = firstName;
  document.getElementById("lastNameInput").value = lastName;
  document.getElementById("emailInput").value = email;
  document.getElementById("phoneInput").value = phone;
  document.getElementById("taglineInput").value = tagline;
}

getUserInformation();


function cancelChange() {
  coinImage.src = "./src/images/upload.png";
  document.getElementById("firstNameInput").value = "";
  document.getElementById("lastNameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("phoneInput").value = "";
  document.getElementById("taglineInput").value = "";
}

function addressSaveChange() {
  let location = document.getElementById("locationInput").value;
  let address1 = document.getElementById("address1Input").value;
  let address2 = document.getElementById("address2Input").value;
  let zipCode = document.getElementById("zipCodeInput").value;

  if (location === "Select Country") {
    document.getElementById("locationError").style.display = "block";
  }
  if (address1 === "") {
    document.getElementById("address1Error").style.display = "block";
  }
  if (address2 === "") {
    document.getElementById("address2Error").style.display = "block";
  }
  if (zipCode === "") {
    document.getElementById("zipCodeError").style.display = "block";
  }
  if (location !== "Select Country" && address1 !== "" && address2 !== "" && zipCode !== "") {
    document.getElementById("locationError").style.display = "none";
    document.getElementById("address1Error").style.display = "none";
    document.getElementById("address2Error").style.display = "none";
    document.getElementById("zipCodeError").style.display = "none";

    let userAdressInformation = {
      location: location,
      address1: address1,
      address2: address2,
      zipCode: zipCode
    }
    
    let storedUserAddressInformation = JSON.parse(localStorage.getItem("userAdressInformation")) || [];
    storedUserAddressInformation.push(userAdressInformation);
    localStorage.setItem("userAdressInformation", JSON.stringify(storedUserAddressInformation));
  }
}

function getUserAddressInformation() {
  const userAddressInformation = JSON.parse(localStorage.getItem("userAdressInformation")) || [];
  const lastUserAddressInfo = userAddressInformation.length > 0 ? userAddressInformation[userAddressInformation.length - 1] : {};
  console.log(lastUserAddressInfo);

  const {
    location = 'Select Country',
    address1 = '',
    address2 = '',
    zipCode = ''
  } = lastUserAddressInfo;

  document.getElementById("locationInput").value = location;
  document.getElementById("address1Input").value = address1;
  document.getElementById("address2Input").value = address2;
  document.getElementById("zipCodeInput").value = zipCode;
}
getUserAddressInformation();
function addressCancelChange() {
  getUserAddressInformation();
}

function privacySaveChange() {
  let profilePhotoVisibilityInput = document.getElementById("profilePhotoVisibilityInput").value;
  if (profilePhotoVisibilityInput === "Select") {
    document.getElementById("profilePhotoVisibilityError").style.display = "block";
  }
  if (profilePhotoVisibilityInput !== "Select") {
    document.getElementById("profilePhotoVisibilityError").style.display = "none";
    let userPrivacyInformation = {
      profilePhotoVisibility: profilePhotoVisibilityInput
    }
    let storedUserPrivacyInformation = JSON.parse(localStorage.getItem("userPrivacyInformation")) || [];
    storedUserPrivacyInformation.push(userPrivacyInformation);
    localStorage.setItem("userPrivacyInformation", JSON.stringify(storedUserPrivacyInformation));
  }
}

function getUserPrivacyInformation() {
  const userPrivacyInformation = JSON.parse(localStorage.getItem("userPrivacyInformation")) || [];
  const lastUserPrivacyInfo = userPrivacyInformation.length > 0 ? userPrivacyInformation[userPrivacyInformation.length - 1] : {};
  console.log(lastUserPrivacyInfo);

  const {
    profilePhotoVisibility = 'Select'
  } = lastUserPrivacyInfo;

  document.getElementById("profilePhotoVisibilityInput").value = profilePhotoVisibility;
}
getUserPrivacyInformation();

function privacyCancelChange() {
  getUserPrivacyInformation();
}

//.radioButtonContainer input:checked ~ .radioTickcheckmark:after {
//  display: block;
//}


function deleteAccount() {
  let deleteAccountError = document.getElementById("deleteAccountError");
  // let radioTickcheckmark = document.querySelector(".radioTickcheckmark");
  // if (radioTickcheckmark && radioTickcheckmark.style.display === "block") {
  //   deleteAccountError.style.display = "none";
  // }
  // else {
  //   deleteAccountError.style.display = "block";
  // }

  if (deleteAccountError.style.display === "none") {
    localStorage.removeItem("allUserInformation");
    localStorage.removeItem("userAdressInformation");
    localStorage.removeItem("userPrivacyInformation");
    window.location.href = "./setting.html";
  }
}

function boldBtn() {
  const taglineInput = document.getElementById("taglineInput");
  taglineInput.style.fontWeight = taglineInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function italicBtn() {
  const taglineInput = document.getElementById("taglineInput");
  taglineInput.style.fontStyle = taglineInput.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

function underlineBtn() {
  const taglineInput = document.getElementById("taglineInput");
  taglineInput.style.textDecoration = taglineInput.style.textDecoration === 'underline' ? 'none' : 'underline';
}

function alignCenter() {
  const taglineInput = document.getElementById("taglineInput");
  taglineInput.style.textAlign = taglineInput.style.textAlign === 'center' ? 'left': 'center';
}