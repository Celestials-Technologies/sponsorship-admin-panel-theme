let sideBar = document.getElementById("sideBar");
let sideData = document.getElementById("sideData");
let profileDropDown = document.getElementById("profileDropDown");
let buttonHeader = document.getElementById("buttonHeader");
let countrySelect = document.getElementById("countrySelect");
let countrySelected = document.getElementById("mainImg");

function sideBarControl() {
  if (sideBar.style.left === "24px") {
    sideBar.style.left = "-40%";
    sideData.style.width = "100%";
  } else {
    sideBar.style.left = "24px";
    sideData.style.width = "calc(100% - 285px)";
  }
}

function profileButton() {
  if (
    profileDropDown.style.opacity === "0" &&
    profileDropDown.style.marginTop === "50px" &&
    profileDropDown.style.zIndex === "0"
  ) {
    profileDropDown.style.opacity = "1";
    profileDropDown.style.marginTop = "20px";
    profileDropDown.style.zIndex = "90";
    buttonHeader.style.zIndex = "0";
  } else {
    profileDropDown.style.opacity = "0";
    profileDropDown.style.marginTop = "50px";
    profileDropDown.style.zIndex = "0";
    buttonHeader.style.zIndex = "9999";
  }
  // if (profileDropDown.style.opacity=== "1") {
  //   countrySelect.style.opacity = "0";
  // }
}

function countrySelectBtn() {
  if (
    countrySelect.style.opacity === "0" &&
    countrySelect.style.marginTop === "50px" &&
    countrySelect.style.zIndex === "0"
  ) {
    countrySelect.style.opacity = "1";
    countrySelect.style.marginTop = "20px";
    countrySelect.style.zIndex = "90";
    buttonHeader.style.zIndex = "0";
  } else {
    countrySelect.style.opacity = "0";
    countrySelect.style.marginTop = "50px";
    countrySelect.style.zIndex = "0";
    buttonHeader.style.zIndex = "9999";
  }
  // if (countrySelect.style.opacity === "1") {
  //   profileDropDown.style.opacity = "0";
  // }
}

function changeMainImage(newSrc) {
  countrySelected.src = newSrc;
  countrySelectBtn();
}
