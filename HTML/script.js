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

  if (text === "Last 15 days") {
    document.querySelector(".last15Days").style.display = "block";
    document.querySelector(".last10Days").style.display = "none";
  } else if (text === "Last 10 days") {
    document.querySelector(".last15Days").style.display = "none";
    document.querySelector(".last10Days").style.display = "block";
  }

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

  if (text === "Last 15 days") {
    document.querySelector(".performancelast15Days").style.display = "block";
    document.querySelector(".performancelast10Days").style.display = "none";
  } else if (text === "Last 10 days") {
    document.querySelector(".performancelast15Days").style.display = "none";
    document.querySelector(".performancelast10Days").style.display = "block";
  }

  closeDropDowns();
}
let dChart = document.getElementById("1DChart");
let wChart = document.getElementById("1WChart");
let hChart = document.getElementById("1HChart");
let mChart = document.getElementById("1MChart");
let yChart = document.getElementById("1YChart");
let dBlock = document.getElementById("1dBlock");
let hBlock = document.getElementById("1hBlock");
let mBlock = document.getElementById("1mBlock");
let yBlock = document.getElementById("1yBlock");
let wBlock = document.getElementById("1wBlock");

function BTCtoEUR1DChart() {
  if (
    dChart.style.display === "none" &&
    dBlock.style.background === "transparent"
  ) {
    dChart.style.display = "block";
    wChart.style.display = "none";
    hChart.style.display = "none";
    mChart.style.display = "none";
    yChart.style.display = "none";
    dBlock.style.background = "#E9901A";
    hBlock.style.background = "transparent";
    mBlock.style.background = "transparent";
    yBlock.style.background = "transparent";
    wBlock.style.background = "transparent";
  }
}

function BTCtoEUR1WChart() {
  if (
    wChart.style.display === "none" &&
    wBlock.style.background === "transparent"
  ) {
    wChart.style.display = "block";
    dChart.style.display = "none";
    hChart.style.display = "none";
    mChart.style.display = "none";
    yChart.style.display = "none";
    wBlock.style.background = "#E9901A";
    dBlock.style.background = "transparent";
    hBlock.style.background = "transparent";
    mBlock.style.background = "transparent";
    yBlock.style.background = "transparent";
  }
}

function BTCtoEUR1MChart() {
  if (
    mChart.style.display === "none" &&
    mBlock.style.background === "transparent"
  ) {
    mChart.style.display = "block";
    dChart.style.display = "none";
    hChart.style.display = "none";
    wChart.style.display = "none";
    yChart.style.display = "none";
    mBlock.style.background = "#E9901A";
    dBlock.style.background = "transparent";
    wBlock.style.background = "transparent";
    hBlock.style.background = "transparent";
    yBlock.style.background = "transparent";
  }
}

function BTCtoEUR1YChart() {
  if (
    yChart.style.display === "none" &&
    yBlock.style.background === "transparent"
  ) {
    yChart.style.display = "block";
    dChart.style.display = "none";
    hChart.style.display = "none";
    wChart.style.display = "none";
    mChart.style.display = "none";
    yBlock.style.background = "#E9901A";
    dBlock.style.background = "transparent";
    wBlock.style.background = "transparent";
    hBlock.style.background = "transparent";
    mBlock.style.background = "transparent";
  }
}

function BTCtoEUR1hChart() {
  if (
    hChart.style.display === "none" &&
    hBlock.style.background === "transparent"
  ) {
    hChart.style.display = "block";
    dChart.style.display = "none";
    wChart.style.display = "none";
    yChart.style.display = "none";
    mChart.style.display = "none";
    hBlock.style.background = "#E9901A";
    dBlock.style.background = "transparent";
    wBlock.style.background = "transparent";
    yBlock.style.background = "transparent";
    mBlock.style.background = "transparent";
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
  if (liquidityInputValue === "") {
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

const ctx = document.getElementById("myChart").getContext("2d");
let gradient = ctx.createLinearGradient(0, 0, 0, 600);

const xValues = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [20, 39, 75, 58, 64, 43, 79, 55, 80, 40, 40, 80],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: gradient,
        fill: true,
        borderDash: [5, 5],
        lineTension: 0.4,
        borderWidth: 2,
      },
      {
        label: "Dashed Yellow Line",
        data: [84, 64, 69, 39, 82, 39, 62, 40, 40, 62, 46, 93],
        borderColor: "yellow",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: { fontColor: "white" },
    },
    scales: {
      xAxes: [
        {
          ticks: { fontColor: "white" },
          gridLines: { display: "none" },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            stepSize: 20,
            min: 0,
            max: 100,
          },
          gridLines: { color: "white" },
        },
      ],
    },
  },
});

// Second chart
const ctx2 = document.getElementById("myChart2").getContext("2d");
let myChart2gradient = ctx2.createLinearGradient(0, 0, 0, 300);

new Chart(ctx2, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [84, 64, 69, 39, 82, 39, 62, 40, 40, 62, 46, 93],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: myChart2gradient,
        fill: true,
        lineTension: 0.4,
        borderWidth: 2,
      },
      {
        label: "Dashed Yellow Line",
        data: [20, 39, 75, 58, 64, 43, 79, 55, 80, 40, 40, 80],
        borderColor: "yellow",
        borderDash: [5, 5],
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: { fontColor: "white" },
    },
    scales: {
      xAxes: [
        {
          ticks: { fontColor: "white" },
          gridLines: { display: "none" },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            stepSize: 20,
            min: 0,
            max: 100,
          },
          gridLines: { color: "white" },
        },
      ],
    },
  },
});
