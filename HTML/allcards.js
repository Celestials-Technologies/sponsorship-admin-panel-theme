
document.addEventListener("DOMContentLoaded", () => {
  const storedAllCards = JSON.parse(localStorage.getItem("addCard")) || [];
  const allCardsContainer = document.getElementById("allCardsContainer");

  const manageModal = document.getElementById("manageModal");
  const manageCardNumber = document.getElementById("manageCardNumber");
  const bodyOverflowModal = document.body;
  const bodyScreenData = document.getElementById("bodyScreenData");

  // Render all stored cards
  storedAllCards.forEach((card, index) => {
    const cardElement = document.createElement("li");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <div class="card-header">
        <img src="./src/images/card.png" alt="Card Image">
        <h3>${card.cardHolderName}</h3>
      </div>
      <div class="card-details">
        <p>Card Number: ${card.cardNumber}</p>
      </div>
      <div class="card-expiry">
        <p>Expiry Date: ${card.selectDate}</p>
      </div>
      <div class="card-bank">
        <p>Bank: ${card.selectBank}</p>
      </div>
      <div class="card-address">
        <p>Address: ${card.address}</p>
      </div>
      <div class="card-country">
        <p>Country: ${card.country}</p>
      </div>
      <div class="card-city">
        <p>City: ${card.city}</p>
      </div>
      <div class="card-mobile">
        <p>Mobile: ${card.mobileNumber}</p>
      </div>
      <div class="card-account">
        <p>Account Number: ${card.accountNumber}</p>
      </div>
      <button class="manageBtn" data-index="${index}">Manage Card</button>
    `;
    allCardsContainer.appendChild(cardElement);
  });

  // Attach event listeners to all Manage buttons
  const manageBtns = document.querySelectorAll(".manageBtn");
  manageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      const storedCard = JSON.parse(localStorage.getItem("addCard")) || [];

      // Populate modal and show
      window.scrollTo(0, 0);
      manageModal.dataset.index = index;
      manageCardNumber.textContent = `Card Number: ${storedCard[index].cardNumber}`;
      manageModal.style.top = "0%";
      manageModal.style.opacity = "1";
      bodyOverflowModal.style.overflow = "hidden";
      bodyScreenData.style.opacity = "0.7";
    });
  });


  manageModal.addEventListener("click", function (event) {
    if (!event.target.closest("#modalData")) {
      closeManageModal();
    }
  });


  document.getElementById("closeModalBtn").addEventListener("click", closeManageModal);

  function closeManageModal() {
    manageModal.style.top = "-150%";
    manageModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
});

