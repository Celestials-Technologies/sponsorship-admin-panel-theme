let sideBar = document.getElementById("sideBar");
let sideData = document.getElementById("sideData");
let profileDropDown = document.getElementById("profileDropDown");
let buttonHeader = document.getElementById("buttonHeader");
let countrySelect = document.getElementById("countrySelect");
let countrySelected = document.getElementById("mainImg");
let bellDropDown = document.getElementById("bellDropDown");
let connectModal = document.getElementById("connectModal");
let bodyOverflowModal = document.getElementById("bodyOverflowModal");
let bodyScreenData = document.getElementById("bodyScreenData");
let addMoreBlockModal = document.getElementById("addMoreBlockModal");
let newCardModal = document.getElementById("newCardModal");
let topUpModal = document.getElementById("topUpModal");
let manageModal = document.getElementById("manageModal");
let selectedBtn = document.getElementById("selectedBtn");
let blockZindex = document.getElementById("blockZindex");
let addSelectToken = document.getElementById("addSelectToken");
let daysSelect = document.getElementById("daysSelect");
let selectedDays = document.getElementById("mainText");
let daysIcon = document.getElementById("daysIcon");

function sideBarControl() {
  if (sideBar.style.left === "24px") {
    sideBar.style.left = "-40%";
    sideData.style.width = "100%";
    sideData.style.transitionDelay = "0.1s";
  } else {
    sideBar.style.left = "24px";
    sideData.style.width = "calc(100% - 285px)";
    sideData.style.transitionDelay = "0s";
  }
}

function closeDropDowns() {
  countrySelect.style.opacity = "0";
  countrySelect.style.marginTop = "50px";
  countrySelect.style.zIndex = "0";
  profileDropDown.style.opacity = "0";
  profileDropDown.style.marginTop = "50px";
  profileDropDown.style.zIndex = "0";
  bellDropDown.style.opacity = "0";
  bellDropDown.style.marginTop = "50px";
  bellDropDown.style.zIndex = "0";
  buttonHeader.style.zIndex = "9999";
  blockZindex.style.zIndex = "9999";
  document.querySelectorAll("#daysSelect").forEach((dropdown) => {
    dropdown.style.scale = "0";
    dropdown.style.marginTop = "-50px";
    dropdown.style.zIndex = "0";
  });

  document.querySelectorAll("#daysIcon").forEach((icon) => {
    icon.style.rotate = "0deg";
  });
  document.querySelectorAll("#coinSelect").forEach((dropdown) => {
    dropdown.style.opacity = "0";
    dropdown.style.marginTop = "50px";
    dropdown.style.zIndex = "0";
  });
  document.querySelectorAll("#detailDropDown").forEach((detailDropDown) => {
    detailDropDown.style.opacity = "0";
    detailDropDown.style.marginTop = "-40px";
    detailDropDown.style.zIndex = "0";
    blockZindex.style.zIndex = "9999";
  });

  document.querySelectorAll(" #selectCoinIcon").forEach((icon) => {
    icon.style.rotate = "0deg";
  });
}

function profileButton() {
  if (
    profileDropDown.style.opacity === "0" &&
    profileDropDown.style.marginTop === "50px" &&
    profileDropDown.style.zIndex === "0"
  ) {
    profileDropDown.style.opacity = "1";
    profileDropDown.style.marginTop = "8px";
    profileDropDown.style.zIndex = "90";
    buttonHeader.style.zIndex = "auto";
    blockZindex.style.zIndex = "auto";
    countrySelect.style.opacity = "0";
    bellDropDown.style.opacity = "0";
  } else {
    closeDropDowns();
  }
}

function bellButton() {
  if (
    bellDropDown.style.opacity === "0" &&
    bellDropDown.style.marginTop === "50px" &&
    bellDropDown.style.zIndex === "0"
  ) {
    bellDropDown.style.opacity = "1";
    bellDropDown.style.marginTop = "8px";
    bellDropDown.style.zIndex = "90";
    buttonHeader.style.zIndex = "auto";
    blockZindex.style.zIndex = "auto";
    countrySelect.style.opacity = "0";
    profileDropDown.style.opacity = "0";
  } else {
    closeDropDowns();
  }
}

function countrySelectBtn() {
  if (
    countrySelect.style.opacity === "0" &&
    countrySelect.style.marginTop === "50px" &&
    countrySelect.style.zIndex === "0"
  ) {
    countrySelect.style.opacity = "1";
    countrySelect.style.marginTop = "8px";
    countrySelect.style.zIndex = "90";
    buttonHeader.style.zIndex = "auto";
    blockZindex.style.zIndex = "auto";
    profileDropDown.style.opacity = "0";
    bellDropDown.style.opacity = "0";
  } else {
    closeDropDowns();
  }
}

function selectCoin(button) {
  let parentDiv = button.closest(".relative");
  let coinSelect = parentDiv.querySelector("#coinSelect");
  let selectCoinIcon = parentDiv.querySelector("#selectCoinIcon");

  if (
    coinSelect.style.opacity === "0" &&
    coinSelect.style.marginTop === "50px"
  ) {
    closeDropDowns();
    coinSelect.style.opacity = "1";
    coinSelect.style.marginTop = "10px";
    coinSelect.style.zIndex = "90";
    selectCoinIcon.style.rotate = "180deg";
  } else {
    coinSelect.style.opacity = "0";
    coinSelect.style.marginTop = "50px";
    coinSelect.style.zIndex = "0";
    selectCoinIcon.style.rotate = "0deg";
  }
}

// function detailsBtn(button) {
//   const dropdown = button.nextElementSibling;
//   let detailsData = document.getElementById("#detailsData")
//   if (dropdown.style.height === '0px' && dropdown.style.padding === '0px' && detailsData.style.display === 'none') {
//     dropdown.style.height = 'auto';
//     dropdown.style.padding = '12px';
//     detailsData.style.display = 'block';
//   } else {
//     dropdown.style.height = '0px';
//     dropdown.style.padding = '0px';
//     detailsData.style.display = 'none';
//   }
// }

function detailsBtn(button) {
  let parentDiv = button.closest(".relative");
  let detailDropDown = parentDiv.querySelector("#detailDropDown");

  if (
    detailDropDown.style.opacity === "0" &&
    detailDropDown.style.marginTop === "-40px"
  ) {
    closeDropDowns();
    detailDropDown.style.opacity = "1";
    detailDropDown.style.marginTop = "-20px";
    detailDropDown.style.zIndex = "99999";
    blockZindex.style.zIndex = "auto";
  } else {
    detailDropDown.style.opacity = "0";
    detailDropDown.style.marginTop = "-40px";
    detailDropDown.style.zIndex = "0";
    blockZindex.style.zIndex = "9999";
  }
}

function changeMainText(text) {
  let parentDiv = event.target.closest(".relative");
  let mainText = parentDiv.querySelector("#mainText");
  mainText.textContent = text;

  closeDropDowns();
}

function btcToEURchangeMainText(text, event) {
  let BTCtoETCchart = event.target.closest(".BTCtoETCchart");
  let mainText = BTCtoETCchart.querySelector("#mainText");
  mainText.textContent = text;

  closeDropDowns();
}

function ADCtoUSDchangeMainText(text, event) {
  let ADAtoUSDchart = event.target.closest(".ADAtoUSDchart");
  let ADCtoUSDtext = ADAtoUSDchart.querySelector("#ADCtoUSDtext");
  ADCtoUSDtext.textContent = text;

  if (text === "Last 15 days") {
    document.querySelector(".ADCtoUSDlast15Days").style.display = "block";
    document.querySelector(".ADCtoUSDlast10Days").style.display = "none";
  } else if (text === "Last 10 days") {
    document.querySelector(".ADCtoUSDlast15Days").style.display = "none";
    document.querySelector(".ADCtoUSDlast10Days").style.display = "block";
  }

  closeDropDowns();
}
function performancechangeMainText(text, event) {
  let performancetext = document.querySelector("#performancetext");
  performancetext.textContent = text;

  closeDropDowns();
}

function earningchangeMainText(text, event) {
  let earningText = document.querySelector("#earningtext");
  earningText.textContent = text;

  closeDropDowns();
}

let tableLast15daysData = document.getElementById("tableLast15daysData");

if (detailSelectTableText.textContent === "Last 10 Days") {
  tableLast15daysData.style.display = "none";
}

let charts = {
  "1h": document.getElementById("1HChart"),
  "1d": document.getElementById("1DChart"),
  "1w": document.getElementById("1WChart"),
  "1m": document.getElementById("1MChart"),
  "1y": document.getElementById("1YChart"),
};

let blocks = document.querySelectorAll("#chartBlock");

function changeChart(time) {
  document.querySelectorAll("#chartBlock").forEach((block) => {
    block.style.background = "transparent";
  });

  for (let chart in charts) {
    if (chart === time.toLowerCase()) {
      charts[chart].style.display = "block";
      document.querySelector(
        `#chartBlock[onclick="changeChart('${time}')"]`
      ).style.background = "#e9901a";
    } else {
      charts[chart].style.display = "none";
    }
  }
}

// function changeSelectedDaysText(text) {
//   selectedDays.textContent = text;
//   selectDays();
// }

function selectDays(button) {
  let parentDiv = button.closest(".relative");
  let daysSelect = parentDiv.querySelector("#daysSelect");
  let daysIcon = parentDiv.querySelector("#daysIcon");

  if (daysSelect.style.scale === "0" || daysSelect.style.scale === "") {
    closeDropDowns();
    daysSelect.style.scale = "1";
    daysSelect.style.marginTop = "10px";
    daysSelect.style.zIndex = "999999";
    daysIcon.style.rotate = "180deg";
    blockZindex.style.zIndex = "auto";
  } else {
    daysSelect.style.scale = "0";
    daysSelect.style.marginTop = "-50px";
    daysSelect.style.zIndex = "0";
    daysIcon.style.rotate = "0deg";
    blockZindex.style.zIndex = "9999";
  }
}

function changeCoinData(text, newSrc) {
  let parentDiv = event.target.closest(".relative");
  let selectCoinText = parentDiv.querySelector("#selectCoinText");
  let selectCoinImg = parentDiv.querySelector("#selectCoinImg");
  selectCoinText.textContent = text;
  selectCoinImg.src = newSrc;
  closeDropDowns();
}

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(
      "#countrySelect , #profileDropDown , #bellDropDown , #daysSelect , #detailDropDown"
    ) &&
    !event.target.closest(".iconMainBox , .selectDaysBox , .chooseOption")
  ) {
    closeDropDowns();
  }
});

function changeMainImage(newSrc) {
  countrySelected.src = newSrc;
  countrySelectBtn();
}

function connectBtn() {
  if (connectModal.style.top === "-150%") {
    window.scrollTo(0, 0);
    connectModal.style.top = "0%";
    connectModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
    document
      .getElementById("connectModal")
      .addEventListener("click", function (event) {
        if (!event.target.closest("#connectData")) {
          connectModal.style.top = "-150%";
          connectModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
  } else {
    connectModal.style.top = "-150%";
    connectModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function topUpBtn() {
  if (topUpModal.style.top === "-150%") {
    window.scrollTo(0, 0);
    topUpModal.style.top = "0%";
    topUpModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
    document
      .getElementById("topUpModal")
      .addEventListener("click", function (event) {
        if (!event.target.closest("#topUpData")) {
          topUpModal.style.top = "-150%";
          topUpModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
  } else {
    topUpModal.style.top = "-150%";
    topUpModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function closeBtn() {
  if (connectModal && connectModal.style.top === "0%") {
    connectModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }

  if (liquidityModal && liquidityModal.style.top === "0%") {
    liquidityModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }

  if (addMoreBlockModal && addMoreBlockModal.style.top === "0%") {
    addMoreBlockModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }

  if (topUpModal && topUpModal.style.top === "0%") {
    topUpModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
  if (newCardModal && newCardModal.style.top === "0%") {
    newCardModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
  if (manageModal && manageModal.style.top === "0%") {
    manageModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function makeACard() {
  closeBtn();
  if (newCardModal.style.top === "-150%") {
    window.scrollTo(0, 0);
    newCardModal.style.top = "0%";
    newCardModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
    document
      .getElementById("newCardModal")
      .addEventListener("click", function (event) {
        if (!event.target.closest("#newCardData")) {
          newCardModal.style.top = "-150%";
          newCardModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
  } else {
    newCardModal.style.top = "-150%";
    newCardModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function liquidityBtn() {
  if (liquidityModal.style.top === "-150%") {
    window.scrollTo(0, 0);
    liquidityModal.style.top = "0%";
    liquidityModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
    document
      .getElementById("liquidityModal")
      .addEventListener("click", function (event) {
        if (!event.target.closest("#liquidityData")) {
          liquidityModal.style.top = "-150%";
          liquidityModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
  } else {
    liquidityModal.style.top = "-150%";
    liquidityModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function manageBtn() {
  if (manageModal.style.top === "-150%") {
    window.scrollTo(0, 0);
    manageModal.style.top = "0%";
    manageModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
    document
      .getElementById("manageModal")
      .addEventListener("click", function (event) {
        if (!event.target.closest("#modalData")) {
          manageModal.style.top = "-150%";
          manageModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
  } else {
    manageModal.style.top = "-150%";
    manageModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function addMore() {
  if (addMoreBlockModal.style.top === "-150%") {
    window.scrollTo(0, 0);
    addMoreBlockModal.style.top = "0%";
    addMoreBlockModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
    document
      .getElementById("addMoreBlockModal")
      .addEventListener("click", function (event) {
        if (!event.target.closest("#addMoreData")) {
          addMoreBlockModal.style.top = "-150%";
          addMoreBlockModal.style.opacity = "0";
          bodyOverflowModal.style.overflow = "auto";
          bodyScreenData.style.opacity = "1";
        }
      });
  } else {
    addMoreBlockModal.style.top = "-150%";
    addMoreBlockModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}
let elements = document.querySelectorAll(".addMoreSelectButton");
//  let addSelectToken = document.getElementById("addSelectToken");

// function selectBtn(element) {
//   elements.forEach((el) => {
//     el.style.backgroundColor = "transparent";
//   });
//   element.children[0].style.backgroundColor = "#E9901A";
// }

function mangeTokenButton() {
  // elements.forEach((el) => {
  //   let clonedElement = el.cloneNode(true);
  //   addSelectToken.appendChild(clonedElement);
  // });

  // console.log("Updated Tokens:", addSelectToken.innerHTML);

  addMoreBlockModal.style.top = "-150%";
  bodyOverflowModal.style.overflow = "auto";
  bodyScreenData.style.opacity = "1";
}

// function changeMainText(text) {
//   document.getElementById('mainText').innerText = text;
//   if (text === 'Last 15 days') {
//     document.querySelector('.last15Days').style.display = 'block';
//     document.querySelector('.last10Days').style.display = 'none';
//   } else if (text === 'Last 10 days') {
//     document.querySelector('.last15Days').style.display = 'none';
//     document.querySelector('.last10Days').style.display = 'block';
//   }
// }

let liquidityErrorField = document.getElementById("liquidityErrorField");
let depositErrorMessage = document.getElementById("depositErrorMessage");
let SuccessfulMessage = document.getElementById("SuccessfulMessage");

function provideLiquidityBtn() {
  let liquidityInputValue = document.getElementById(
    "liquidityInputValue"
  ).value;
  if (liquidityInputValue === "" || liquidityInputValue > 100) {
    liquidityErrorField.style.display = "block";
    return false;
  } else {
    liquidityErrorField.style.display = "none";
    SuccessfulMessage.style.right = "24px";
    SuccessfulMessage.style.display = "block";
    setTimeout(function () {
      SuccessfulMessage.style.display = "none";
      SuccessfulMessage.style.right = "-50%";
    }, 5000);
    liquidityModal.style.top = "-150%";
    liquidityModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
    liquidityInputValue = "";
  }
}
function depositBtn() {
  let depositInputValue = document.getElementById("depositInputValue").value;
  if (depositInputValue === "") {
    depositErrorMessage.style.display = "block";
    return false;
  } else {
    depositErrorMessage.style.display = "none";
    SuccessfulMessage.style.right = "24px";
    SuccessfulMessage.style.display = "block";
    setTimeout(function () {
      SuccessfulMessage.style.display = "none";
      SuccessfulMessage.style.right = "-50%";
    }, 5000);
    topUpModal.style.top = "-150%";
    topUpModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function terminateBtn() {
  SuccessfulMessage.style.right = "24px";
  SuccessfulMessage.style.display = "block";
  setTimeout(function () {
    SuccessfulMessage.style.display = "none";
    SuccessfulMessage.style.right = "-50%";
  }, 5000);
  manageModal.style.top = "-150%";
  manageModal.style.opacity = "0";
  bodyOverflowModal.style.overflow = "auto";
  bodyScreenData.style.opacity = "1";
}

function closeModalMessageBtn() {
  SuccessfulMessage.style.display = "none";
  SuccessfulMessage.style.right = "-50%";
}

function validateForm() {
  let cardHolderName = document.getElementById("cardHolderName").value;
  let selectBank = document.getElementById("selectBank").value;
  let accountNumber = document.getElementById("accountNumber").value;
  let mobileNumber = document.getElementById("mobileNumber").value;
  let cardNumber = document.getElementById("cardNumber").value;
  let selectDate = document.getElementById("selectDate").value;
  let address = document.getElementById("address").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;

  if (
    cardHolderName === "" ||
    selectBank === "Select Bank" ||
    accountNumber === "" ||
    mobileNumber === "" ||
    cardNumber === "" ||
    selectDate === "" ||
    address === "" ||
    country === "" ||
    city === ""
  ) {
    document.getElementById("cardHolderNameError").innerHTML =
      "Please enter your name";
    document.getElementById("selectBankError").innerHTML =
      "Please select a bank";
    document.getElementById("accountNumberError").innerHTML =
      "Please enter your account number";
    document.getElementById("mobileNumberError").innerHTML =
      "Please enter your mobile number";
    document.getElementById("cardNumberError").innerHTML =
      "Please enter your card number";
    document.getElementById("selectDateError").innerHTML =
      "Please select a date";
    document.getElementById("addressError").innerHTML =
      "Please enter your address";
    document.getElementById("countryError").innerHTML =
      "Please select a country";
    document.getElementById("cityError").innerHTML = "Please select a city";
  } else {
    document.getElementById("cardHolderNameError").innerHTML = "";
    document.getElementById("selectBankError").innerHTML = "";
    document.getElementById("accountNumberError").innerHTML = "";
    document.getElementById("mobileNumberError").innerHTML = "";
    document.getElementById("cardNumberError").innerHTML = "";
    document.getElementById("selectDateError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";

    document.getElementById("cardHolderName").value = "";
    document.getElementById("selectBank").value = "Select Bank";
    document.getElementById("accountNumber").value = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("selectDate").value = "";
    document.getElementById("address").value = "";
    document.getElementById("country").value = "";
    document.getElementById("city").value = "";

    SuccessfulMessage.style.right = "24px";
    SuccessfulMessage.style.display = "block";
    setTimeout(function () {
      SuccessfulMessage.style.display = "none";
      SuccessfulMessage.style.right = "-50%";
    }, 5000);
    newCardModal.style.top = "-150%";
    newCardModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

// function detailConverter() {
//   let ADAdata = document.getElementById("ADADATA");
//   let BTCdata = document.getElementById("BTCDATA");
//   let btcInput = document.getElementById("btcInput");
//   let adaInput = document.getElementById("adaInput");
//   let converterArrowBox = document.getElementById("converterArrowBox");

//   // Toggle rotation state
//   if (converterArrowBox.style.rotate === "180deg") {
//     converterArrowBox.style.rotate = "0deg";
//   } else {
//     converterArrowBox.style.rotate = "180deg";
//     const ADAHtml = ADAdata.innerHTML;
//     const adaInputValue = adaInput.value;

//     ADAdata.innerHTML = BTCdata.innerHTML;
//     adaInput.value = btcInput.value;
//     BTCdata.innerHTML = ADAHtml;
//     btcInput.value = adaInputValue;
//   }
// }

function detailConverter() {
  let ADAdata = document.getElementById("ADADATA");
  let BTCdata = document.getElementById("BTCDATA");
  let buyInput = document.getElementById("buyInput");
  let buyToInput = document.getElementById("buyToInput");
  let converterArrowBox = document.getElementById("converterArrowBox");

  const ADAHtml = ADAdata.innerHTML;
  const buyInputValue = buyInput.value;

  ADAdata.innerHTML = BTCdata.innerHTML;
  buyInput.value = buyToInput.value;
  BTCdata.innerHTML = ADAHtml;
  buyToInput.value = buyInputValue;
  if (converterArrowBox.style.rotate === "180deg") {
    converterArrowBox.style.rotate = "0deg";
  } else {
    converterArrowBox.style.rotate = "180deg";
  }
}

function sellDetailConverter() {
  let sellADADATA = document.getElementById("sellADADATA");
  let sellBTCDATA = document.getElementById("sellBTCDATA");
  let sellInput = document.getElementById("sellInput");
  let sellToInput = document.getElementById("sellToInput");
  let sellConverterArrowBox = document.getElementById("sellConverterArrowBox");
  const sellADAHtmL = sellADADATA.innerHTML;
  const sellInputValue = sellInput.value;
  sellADADATA.innerHTML = sellBTCDATA.innerHTML;
  sellInput.value = sellToInput.value;
  sellBTCDATA.innerHTML = sellADAHtmL;
  sellToInput.value = sellInputValue;
  if (sellConverterArrowBox.style.rotate === "180deg") {
    sellConverterArrowBox.style.rotate = "0deg";
  } else {
    sellConverterArrowBox.style.rotate = "180deg";
  }
}

function liquidityConverter() {
  let liquidityADAInput = document.getElementById("liquidityADAInput");
  let liquidityBTCInput = document.getElementById("liquidityBTCInput");
  let liquidityADAdata = document.getElementById("liquidityADAData");
  let liquidityBTCdata = document.getElementById("liquidityBTCData");

  const liquidityADAHtml = liquidityADAdata.innerHTML;
  const liquidityADAInputValue = liquidityADAInput.value;

  liquidityADAdata.innerHTML = liquidityBTCdata.innerHTML;
  liquidityADAInput.value = liquidityBTCInput.value;
  liquidityBTCdata.innerHTML = liquidityADAHtml;
  liquidityBTCInput.value = liquidityADAInputValue;
}

let liquidityInputValue = document.getElementById("liquidityInputValue");
let halfPercentButton = document.getElementById("halfPercentButton");
let onePercentButton = document.getElementById("onePercentButton");
let threePercentButton = document.getElementById("threePercentButton");

function halfPercentBtn() {
  liquidityInputValue.value = 0.5;
  halfPercentButton.style.background = "#E9901A";
  halfPercentButton.style.color = "white";
  onePercentButton.style.background = "transparent";
  onePercentButton.style.color = "#E9901A";
  threePercentButton.style.background = "transparent";
  threePercentButton.style.color = "#E9901A";
}

function onePercentBtn() {
  liquidityInputValue.value = 1;
  onePercentButton.style.background = "#E9901A";
  onePercentButton.style.color = "white";
  halfPercentButton.style.background = "transparent";
  halfPercentButton.style.color = "#E9901A";
  threePercentButton.style.background = "transparent";
  threePercentButton.style.color = "#E9901A";
}

function threePercentBtn() {
  liquidityInputValue.value = 3;
  threePercentButton.style.background = "#E9901A";
  threePercentButton.style.color = "white";
  onePercentButton.style.background = "transparent";
  onePercentButton.style.color = "#E9901A";
  halfPercentButton.style.background = "transparent";
  halfPercentButton.style.color = "#E9901A";
}

let buyBackground = document.getElementById("buyBackground");
let sellBackground = document.getElementById("sellBackground");
let buyData = document.getElementById("buyData");
let sellData = document.getElementById("sellData");

function buyBtn() {
  buyBackground.style.backgroundColor = "#E9901A";
  sellBackground.style.backgroundColor = "transparent";
  buyData.style.display = "block";
  sellData.style.display = "none";

  if (
    sellBackground.style.backgroundColor === "#E9901A" &&
    buyBackground.style.backgroundColor === "transparent" &&
    buyData.style.display === "none" &&
    sellData.style.display === "block"
  ) {
    buyBackground.style.backgroundColor = "#E9901A";
    sellBackground.style.backgroundColor = "transparent";
    buyData.style.display = "block";
    sellData.style.display = "none";
  }
}
function sellBtn() {
  sellBackground.style.backgroundColor = "#E9901A";
  buyBackground.style.backgroundColor = "transparent";
  sellData.style.display = "block";
  buyData.style.display = "none";

  if (
    buyBackground.style.backgroundColor === "#E9901A" &&
    sellBackground.style.backgroundColor === "transparent" &&
    sellData.style.display === "none" &&
    buyData.style.display === "block"
  ) {
    sellBackground.style.backgroundColor = "#E9901A";
    buyBackground.style.backgroundColor = "transparent";
    sellData.style.display = "block";
    buyData.style.display = "none";
  }
}

function mainBuyBtn() {
  let buyInputError = document.getElementById("buyInputError");
  let buyToInputError = document.getElementById("buyToInputError");
  let buyToInput = document.getElementById("buyToInput");
  let buyInput = document.getElementById("buyInput");
  let buyToInputValue = buyToInput.value;
  let buyInputValue = buyInput.value;
  if (buyInputValue === "") {
    buyInputError.style.display = "block";
  } else {
    buyInputError.style.display = "none";
  }
  if (buyToInputValue === "") {
    buyToInputError.style.display = "block";
  } else {
    buyToInputError.style.display = "none";
  }
  if (buyInputValue !== "" && buyToInputValue !== "") {
    buyInputValue = "";
    buyToInputValue = "";
  }
}

function mainSellBtn() {
  let sellInputError = document.getElementById("sellInputError");
  let sellToInputError = document.getElementById("sellToInputError");
  let sellInput = document.getElementById("sellInput");
  let sellToInput = document.getElementById("sellToInput");
  let sellToInputValue = sellToInput.value;
  let sellInputValue = sellInput.value;
  if (sellInputValue === "") {
    sellInputError.style.display = "block";
  } else {
    sellInputError.style.display = "none";
  }
  if (sellToInputValue === "") {
    sellToInputError.style.display = "block";
  } else {
    sellToInputError.style.display = "none";
  }
}



