document.addEventListener("DOMContentLoaded", () => {
  let inputFile = document.getElementById("input-file");
  let logo = document.getElementById("logo");
  inputFile.onchange = function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      logo.src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  document
    .getElementById("removeCoinImage")
    .addEventListener("click", removeCoinImage);
  function removeCoinImage() {
    logo.src = "./src/images/upload.png";
    inputFile.value = "";
  }
  const nameInput = document.getElementById("nameInput");
  const nameError = document.getElementById("nameError");
  const priceInput = document.getElementById("priceInput");
  const priceError = document.getElementById("priceError");
  const coinCurrency = document.getElementById("coinCurrency");
  const currencyError = document.getElementById("currencyError");
  const coinCategory = document.getElementById("coinCategory");
  const categoryError = document.getElementById("categoryError");
  const growthInput = document.getElementById("growthInput");
  document
    .getElementById("uploadTokenBtn")
    .addEventListener("click", uploadTokenBtn);
  function uploadTokenBtn() {
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
    if (coinCurrency.value === "Select Coin") {
      currencyError.style.display = "block";
    } else {
      currencyError.style.display = "none";
    }
    if (coinCategory.value === "Select Category") {
      categoryError.style.display = "block";
    } else {
      categoryError.style.display = "none";
    }
    if (growthInput.value === "") {
      growthError.style.display = "block";
    } else {
      growthError.style.display = "none";
    }
    if (nameInput.value !== "" && priceInput.value !== "") {
      let tokenValue = {
        name: nameInput.value,
        price: priceInput.value,
        image: logo.src,
        currency: coinCurrency.value,
        category: coinCategory.value,
        growth: growthInput.value,
      };
      nameInput.value = "";
      priceInput.value = "";
      logo.src = "./src/images/upload.png";
      coinCurrency.value = "Select Coin";
      coinCategory.value = "Select Category";
      growthInput.value = "";

      let storedTokenValue =
        JSON.parse(localStorage.getItem("tokenValue")) || [];
      storedTokenValue.push(tokenValue);
      localStorage.setItem("tokenValue", JSON.stringify(storedTokenValue));
      console.log(tokenValue);
      showAllTokenValue();
    }
  }
  let editTokenModal = document.getElementById("editTokenModal");
  let bodyOverflowModal = document.getElementById("bodyOverflowModal");
  let bodyScreenData = document.getElementById("bodyScreenData");

  function showAllTokenValue() {
    let dataTokenValue = document.getElementById("dataTokenValue");
    dataTokenValue.innerHTML = "";
    const defaultImage = "./src/images/upload.png";
    let storedTokenValue = JSON.parse(localStorage.getItem("tokenValue")) || [];
    storedTokenValue.forEach((tokenValue, index) => {
      const tokenValueElement = document.createElement("div");
      tokenValueElement.classList.add("tokenValueElement");
      tokenValueElement.innerHTML = `
       <div class="subscriptionValue">
        <div class="subscriptionContainer">
          <img src="${tokenValue.image || defaultImage}" alt="image">
          <h2>${tokenValue.name}</h2>
          <p>Price: ${tokenValue.price} ${tokenValue.currency}</p>
          <p>Category: ${tokenValue.category}</p>
          <p class="growthSvg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>${tokenValue.growth}</p>
        </div>
        <div class="subscriptionContainer">
          <button class="editButton" data-index="${index}">Edit</button>
          <button class="removeButton" data-index="${index}">Remove</button>
        </div>
        </div>
        `;

      if (tokenValue.growth < 70) {
        tokenValueElement.querySelector("svg").style.stroke = "#ff6161";
        tokenValueElement.querySelector(".growthSvg").style.color = "#ff6161";
      } else if (tokenValue.growth < 100) {
        tokenValueElement.querySelector("svg").style.stroke = "#ffc861";
        tokenValueElement.querySelector(".growthSvg").style.color = "#ffc861";
      } else {
        tokenValueElement.querySelector("svg").style.stroke = "#00A385";
        tokenValueElement.querySelector(".growthSvg").style.color = "#00A385";
      }
      dataTokenValue.appendChild(tokenValueElement);
    });
    const editButtons = document.querySelectorAll(".editButton");
    editButtons.forEach((editButton) => {
      editButton.addEventListener("click", () => {
        const index = editButton.dataset.index;
        const storedTokenValue =
          JSON.parse(localStorage.getItem("tokenValue")) || [];
        if (editTokenModal.style.top === "-150%") {
          editTokenModal.dataset.index = index;
          let editImage = document.getElementById("editImage");
          let editNameInput = document.getElementById("editNameInput");
          let editPriceInput = document.getElementById("editPriceInput");
          let editCurrency = document.getElementById("editCurrency");
          let editCategory = document.getElementById("editCategory");
          let editGrowthInput = document.getElementById("editGrowthInput");
          window.scrollTo(0, 0);
          editTokenModal.style.top = "0%";
          editTokenModal.style.opacity = "1";
          bodyOverflowModal.style.overflow = "hidden";
          bodyScreenData.style.opacity = "0.7";
          editNameInput.value = storedTokenValue[index].name;
          editPriceInput.value = storedTokenValue[index].price;
          editCurrency.value = storedTokenValue[index].currency;
          editCategory.value = storedTokenValue[index].category;
          editGrowthInput.value = storedTokenValue[index].growth;
          editImage.src = storedTokenValue[index].image || defaultImage;

          document
            .getElementById("editTokenModal")
            .addEventListener("click", function (event) {
              if (!event.target.closest("#tokenData")) {
                editTokenModal.style.top = "-150%";
                editTokenModal.style.opacity = "0";
                bodyOverflowModal.style.overflow = "auto";
                bodyScreenData.style.opacity = "1";
              }
            });
        } else {
          editTokenModal.style.top = "-150%";
          editTokenModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
    });
    const removeButtons = document.querySelectorAll(".removeButton");
    removeButtons.forEach((removeButton) => {
      removeButton.addEventListener("click", () => {
        const index = removeButton.dataset.index;
        const storedTokenValue =
          JSON.parse(localStorage.getItem("tokenValue")) || [];
        storedTokenValue.splice(index, 1);
        localStorage.setItem("tokenValue", JSON.stringify(storedTokenValue));
        showAllTokenValue();
      });
    });
  }
  showAllTokenValue();

  document
    .getElementById("closeEditModal")
    .addEventListener("click", closeEditModal);
  function closeEditModal() {
    if (editTokenModal && editTokenModal.style.top === "0%") {
      editTokenModal.style.top = "-150%";
      bodyOverflowModal.style.overflow = "auto";
      bodyScreenData.style.opacity = "1";
    }
  }
  document
    .getElementById("finalEditBtn")
    .addEventListener("click", finalEditBtn);
  function finalEditBtn() {
    const editNameInput = document.getElementById("editNameInput");
    const editPriceInput = document.getElementById("editPriceInput");
    const editCurrency = document.getElementById("editCurrency");
    const editCategory = document.getElementById("editCategory");
    const editGrowthInput = document.getElementById("editGrowthInput");
    const editImage = document.getElementById("editImage");

    const storedTokenValue =
      JSON.parse(localStorage.getItem("tokenValue")) || [];
    const index = editTokenModal.dataset.index;
    const name = editNameInput.value;
    const price = editPriceInput.value;
    const image = editImage.src;
    const currency = editCurrency.value;
    const category = editCategory.value;
    const growth = editGrowthInput.value;

    const data = {
      name,
      price,
      currency,
      image,
      category,
      growth,
    };
    storedTokenValue[index] = data;
    localStorage.setItem("tokenValue", JSON.stringify(storedTokenValue));
    editTokenModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
    showAllTokenValue();
  }
});
