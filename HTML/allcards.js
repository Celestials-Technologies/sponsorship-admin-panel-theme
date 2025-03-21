const storedAllCards = JSON.parse(localStorage.getItem("addCard")) || [];
const allCardsContainer = document.getElementById("allCardsContainer");

storedAllCards.forEach((card) => {
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
    
    
  `;

  allCardsContainer.appendChild(cardElement);
});
