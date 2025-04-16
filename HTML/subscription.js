document.addEventListener("DOMContentLoaded", () => {
let logo = document.getElementById("logo");
let editImage = document.getElementById("editImage");
let inputFile = document.getElementById("input-file");
let uploadInputImage = document.getElementById("uploadInputImage");

inputFile.onchange = function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    logo.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file); // Convert the file to base64
  }
};
document.getElementById("removeCoinImage").addEventListener("click", removeCoinImage);
function removeCoinImage() {
  logo.src = "./src/images/upload.png";
  inputFile.value = "";
}

uploadInputImage.onchange = function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    editImage.src = reader.result; // Set the image src to the base64 string
  };
  if (file) {
    reader.readAsDataURL(file); // Convert the file to base64
  }
};

const nameInput = document.getElementById("nameInput");
const nameError = document.getElementById("nameError");
const priceInput = document.getElementById("priceInput");
const priceError = document.getElementById("priceError");

document.getElementById("uploadSubscriptionBtn").addEventListener("click", uploadSubscriptionBtn);
function uploadSubscriptionBtn() {
  if (nameInput.value === "") {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
  if (priceInput.value === "") {
    priceError.style.display = "block";
  } else {
    priceError.style.display = "none";
  }
  if (nameInput.value !== "" && priceInput.value !== "") {
    let subscriptionValue = {
      name: nameInput.value,
      price: priceInput.value,
      image: logo.src,
    };
    nameInput.value = "";
    priceInput.value = "";
    logo.src = "./src/images/upload.png";

    let storedSubscriptionValue =
      JSON.parse(localStorage.getItem("subscriptionValue")) || [];
    storedSubscriptionValue.push(subscriptionValue);

    localStorage.setItem(
      "subscriptionValue",
      JSON.stringify(storedSubscriptionValue)
    );
    console.log(subscriptionValue);
    showAllSubscriptionValue();
  }
}
let editSubsriptionModal = document.getElementById("editSubsriptionModal");
let bodyOverflowModal = document.getElementById("bodyOverflowModal");
let bodyScreenData = document.getElementById("bodyScreenData");

function showAllSubscriptionValue() {
  let dataSubscriptionValue = document.getElementById("dataSubscriptionValue");
  dataSubscriptionValue.innerHTML = "";
  const defaultImage = "./src/images/upload.png";
  const subscriptionValue =
    JSON.parse(localStorage.getItem("subscriptionValue")) || [];
  subscriptionValue.forEach((subscriptionValue, index) => {
    const subscriptionValueHTML = `
        <div class="subscriptionValue">
        <div class="subscriptionContainer">
          <img src="${subscriptionValue.image || defaultImage}" alt="image">
          <h2>${subscriptionValue.name}</h2>
          <p>Price: ${subscriptionValue.price}$</p>
        </div>
        <div class="subscriptionContainer">
          <button class="editButton" data-index="${index}">Edit</button>
          <button class="removeButton" data-index="${index}">Remove</button>
        </div>
        </div>
        `;
    dataSubscriptionValue.innerHTML += subscriptionValueHTML;
  });
  const removeButtons = document.querySelectorAll(".removeButton");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
      const index = removeButton.dataset.index;
      const subscriptionValue =
        JSON.parse(localStorage.getItem("subscriptionValue")) || [];
      subscriptionValue.splice(index, 1);
      localStorage.setItem(
        "subscriptionValue",
        JSON.stringify(subscriptionValue)
      );
      showAllSubscriptionValue();
    });
  });
  const editButtons = document.querySelectorAll(".editButton");
  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", () => {
      const index = editButton.dataset.index;
      const subscriptionValue =
        JSON.parse(localStorage.getItem("subscriptionValue")) || [];
      if (editSubsriptionModal.style.top === "-150%") {
        editSubsriptionModal.dataset.index = index;
        let editImage = document.getElementById("editImage");
        let editNameInput = document.getElementById("editNameInput");
        let editPriceInput = document.getElementById("editPriceInput");
        window.scrollTo(0, 0);
        editSubsriptionModal.style.top = "0%";
        editSubsriptionModal.style.opacity = "1";
        bodyOverflowModal.style.overflow = "hidden";
        bodyScreenData.style.opacity = "0.7";
        editNameInput.value = subscriptionValue[index].name;
        editPriceInput.value = subscriptionValue[index].price;
        editImage.src = subscriptionValue[index].image || defaultImage;

        document
          .getElementById("editSubsriptionModal")
          .addEventListener("click", function (event) {
            if (!event.target.closest("#subscriptionData")) {
              editSubsriptionModal.style.top = "-150%";
              editSubsriptionModal.style.opacity = "0";
              bodyOverflowModal.style.overflow = "auto";
              bodyScreenData.style.opacity = "1";
            }
          });
      } else {
        editSubsriptionModal.style.top = "-150%";
        editSubsriptionModal.style.opacity = "0";
        bodyOverflowModal.style.overflow = "auto";
        bodyScreenData.style.opacity = "1";
      }
    });
  });
}
showAllSubscriptionValue();

document.getElementById("closeEditModal").addEventListener("click", closeEditModal);
function closeEditModal() {
  if (editSubsriptionModal && editSubsriptionModal.style.top === "0%") {
    editSubsriptionModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}
document.getElementById("finalEditBtn").addEventListener("click", finalEditBtn);
function finalEditBtn() {
  const editNameInput = document.getElementById("editNameInput");
  const editPriceInput = document.getElementById("editPriceInput");
  const editImage = document.getElementById("editImage");

  const subscriptionValue =
    JSON.parse(localStorage.getItem("subscriptionValue")) || [];
  const index = editSubsriptionModal.dataset.index;
  const name = editNameInput.value;
  const price = editPriceInput.value;
  const image = editImage.src;


    const data = {
      name,
      price,
      image,
    };
    subscriptionValue[index] = data;
    localStorage.setItem(
      "subscriptionValue",
      JSON.stringify(subscriptionValue)
    );
    editSubsriptionModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
    showAllSubscriptionValue();
  
}
})