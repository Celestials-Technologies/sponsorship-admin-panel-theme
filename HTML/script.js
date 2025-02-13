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
let selectedBtn = document.getElementById("selectedBtn");
let blockZindex = document.getElementById("blockZindex");
let addSelectToken = document.getElementById("addSelectToken");
let daysSelect = document.getElementById("daysSelect")
let selectedDays = document.getElementById("mainText")
let daysIcon = document.getElementById("daysIcon")

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

function selectDays(button) {
  let parentDiv = button.closest(".relative");
  let daysSelect = parentDiv.querySelector("#daysSelect");
  let daysIcon = parentDiv.querySelector("#daysIcon");

  if (daysSelect.style.scale === "0" || daysSelect.style.scale === "") {
    closeDropDowns();
    daysSelect.style.scale = "1";
    daysSelect.style.marginTop = "10px";
    daysSelect.style.zIndex = "90";
    daysIcon.style.rotate = "180deg";
  } else {
    daysSelect.style.scale = "0";
    daysSelect.style.marginTop = "-50px";
    daysSelect.style.zIndex = "0";
    daysIcon.style.rotate = "0deg";
  }
}

function selectCoin(button) {
  let parentDiv = button.closest(".relative");
  let coinSelect = parentDiv.querySelector("#coinSelect");
  let selectCoinIcon = parentDiv.querySelector("#selectCoinIcon");

  if (coinSelect.style.opacity === "0" && coinSelect.style.marginTop === "50px") {
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


function changeMainText(text) {
  let parentDiv = event.target.closest(".relative");
  let mainText = parentDiv.querySelector("#mainText");
  mainText.textContent = text;

  closeDropDowns();
}

function changeCoinData(text , newSrc) {
  let parentDiv = event.target.closest(".relative");
  let selectCoinText = parentDiv.querySelector("#selectCoinText");
  let selectCoinImg = parentDiv.querySelector("#selectCoinImg")
  selectCoinText.textContent = text;
  selectCoinImg.src = newSrc;
  closeDropDowns(); 
}


document.addEventListener("click", function (event) {
  if (
    !event.target.closest(
      "#countrySelect , #profileDropDown , #bellDropDown , #daysSelect"
    ) &&
    !event.target.closest(".iconMainBox , .selectDaysBox")
  ) {
    closeDropDowns();
  }
});

function changeMainImage(newSrc) {
  countrySelected.src = newSrc;
  countrySelectBtn();
}
function changeMainText(text){
  selectedDays.textContent = text;
  selectDays();

}
function connectBtn() {
  if (connectModal.style.top === "-150%") {
    connectModal.style.top = "0%";
    connectModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
  } else {
    connectModal.style.top = "-150%";
    connectModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}
function closeBtn() {
  connectModal.style.top = "-150%";
  liquidityModal.style.top = "-150%";
  addMoreBlockModal.style.top = "-150%";
  bodyOverflowModal.style.overflow = "auto";
  bodyScreenData.style.opacity = "1";
}


function liquidityBtn() {
  if (liquidityModal.style.top === "-150%") {
    liquidityModal.style.top = "0%";
    liquidityModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
  } else {
    liquidityModal.style.top = "-150%";
    liquidityModal.style.opacity = "0";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";
  }
}

function addMore() {
  if (addMoreBlockModal.style.top === "-150%") {
    addMoreBlockModal.style.top = "0%";
    addMoreBlockModal.style.opacity = "1";
    bodyOverflowModal.style.overflow = "hidden";
    bodyScreenData.style.opacity = "0.7";
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
