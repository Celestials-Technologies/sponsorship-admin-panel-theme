let addMemberModal = document.getElementById("addMemberModal")

function addTeamMemberBtn() {
    if (addMemberModal.style.top === "-150%") {
        window.scrollTo(0, 0);
        addMemberModal.style.top = "0%";
        addMemberModal.style.opacity = "1";
        bodyOverflowModal.style.overflow = "hidden";
        bodyScreenData.style.opacity = "0.7";
        document
          .getElementById("addMemberModal")
          .addEventListener("click", function (event) {
            if (!event.target.closest("#addMemberData")) {
            addMemberModal.style.top = "-150%";
            addMemberModal.style.opacity = "0";
              bodyOverflowModal.style.overflow = "auto";
              bodyScreenData.style.opacity = "1";
            }
          });
      } else {
        addMemberModal.style.top = "-150%";
        addMemberModal.style.opacity = "0";
        bodyOverflowModal.style.overflow = "auto";
        bodyScreenData.style.opacity = "1";
      }
}
function closeMemberModal() {
    if (addMemberModal && addMemberModal.style.top === "0%") {
        addMemberModal.style.top = "-150%";
        bodyOverflowModal.style.overflow = "auto";
        bodyScreenData.style.opacity = "1";
      }
}

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

let fullNameInput = document.getElementById("fullNameInput")
let emailInput = document.getElementById("emailInput")
let numberInput = document.getElementById("numberInput")
// let selectDate = document.getElementById("selectDate")
let workInput = document.getElementById("workInput")
let teamStatus = document.getElementById("teamStatus")

function submitNewMember() {
    let fullNameError = document.getElementById("fullNameError")
    let emailInputError = document.getElementById("emailInputError")
    let numberInputError = document.getElementById("numberInputError")
    let workInputError = document.getElementById("workInputError")
    let teamStatusError = document.getElementById("teamStatusError")

    if (fullNameInput.value === "") {
        fullNameError.style.display = "block"
    }
    if (emailInput.value === "") {
        emailInputError.style.display = "block"
    }
    if (numberInput.value === "") {
        numberInputError.style.display = "block"
    }
    if (workInput.value === "") {
        workInputError.style.display = "block"
    }
    if (teamStatus.value === "Select Status") {
        teamStatusError.style.display = "block"
    }

    if(
        fullNameError.style.display === "none" &&
        emailInputError.style.display === "none" &&
        numberInputError.style.display === "none" &&
        workInputError.style.display === "none" &&
        teamStatusError.style.display === "none"
    ) {
        let member = {
         name: fullNameInput.value,
         email: emailInput.value,
         number: numberInput.value,
         work: workInput.value,
         teamStatus: teamStatus.value,
         date: new Date().toLocaleDateString(),
        }
        console.log("Saving to localStorage:", member);

        // Retrieve previous assets from localStorage, if any
        let storedMember = JSON.parse(localStorage.getItem("member")) || [];

        // Add the new asset to the stored assets array
        storedMember.push(member);

        // Save the updated assets array back to localStorage
        localStorage.setItem("member", JSON.stringify(storedMember));
    }

}