

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
function closeBtn() {
  if (addMemberModal && addMemberModal.style.top === "0%") {
    addMemberModal.style.top = "-150%";
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

let image = document.getElementById("profileImg");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    image.src = reader.result; // Set the image src to the base64 string
    console.log(image.src);
  };
  if (file) {
    reader.readAsDataURL(file); // Convert the file to base64
  }
};

function removeCoinImage() {
  image.src = "./src/images/upload.png";
  inputFile.value = "";
}

let fullNameInput = document.getElementById("fullNameInput");
let emailInput = document.getElementById("emailInput");
let numberInput = document.getElementById("numberInput");
// let selectDate = document.getElementById("selectDate")
let workInput = document.getElementById("workInput");
let teamStatus = document.getElementById("teamStatus");

function submitNewMember() {
  let fullNameError = document.getElementById("fullNameError");
  let emailInputError = document.getElementById("emailInputError");
  let numberInputError = document.getElementById("numberInputError");
  let workInputError = document.getElementById("workInputError");
  let teamStatusError = document.getElementById("teamStatusError");

  let profileImg = image.src;
  console.log(profileImg);

  if (fullNameInput.value === "") {
    fullNameError.style.display = "block";
  } else {
    fullNameError.style.display = "none";
  }
  if (emailInput.value === "") {
    emailInputError.style.display = "block";
  } else {
    emailInputError.style.display = "none";
  }
  if (numberInput.value === "") {
    numberInputError.style.display = "block";
  } else {
    numberInputError.style.display = "none";
  }
  if (workInput.value === "") {
    workInputError.style.display = "block";
  } else {
    workInputError.style.display = "none";
  }
  if (teamStatus.value === "Select Status") {
    teamStatusError.style.display = "block";
  } else {
    teamStatusError.style.display = "none";
  }
  if (
    fullNameError.style.display === "none" &&
    emailInputError.style.display === "none" &&
    numberInputError.style.display === "none" &&
    workInputError.style.display === "none" &&
    teamStatusError.style.display === "none"
  ) {
    addMemberModal.style.top = "-150%";
    bodyOverflowModal.style.overflow = "auto";
    bodyScreenData.style.opacity = "1";

    let members = {
      coverImg: profileImg,
      name: fullNameInput.value,
      email: emailInput.value,
      number: numberInput.value,
      work: workInput.value,
      teamStatus: teamStatus.value,
      date: new Date().toLocaleDateString(),
    };
    // console.log("Members before saving:", storedMember);
    // console.log("New member being added:", members);
    console.log("Saving to localStorage:", members);

    // Retrieve previous assets from localStorage, if any
    let storedMember = JSON.parse(localStorage.getItem("members")) || [];

    // Add the new asset to the stored assets array
    storedMember.push(members);

    // Save the updated assets array back to localStorage
    localStorage.setItem("members", JSON.stringify(storedMember));

    profileImg.value = "./src/images/upload.png";
    fullNameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    workInput.value = "";
    teamStatus.value = "Select Status";

    SuccessfulMessage.style.display = "block";
    setTimeout(() => {
      SuccessfulMessage.style.display = "none";
    }, 3000);

    //refresh the page
    location.reload();
  }
}

let detailSelectTableText = document.querySelector("#detailSelectTableText");

function changeSelectTableText(text, event) {
  detailSelectTableText.textContent = text;

  if (detailSelectTableText.textContent === "Last 10 days") {
    handleLast10Days();
  } else {
    handleLast15Days();
  }

  closeDropDowns();
}

function handleLast10Days() {
  $.getJSON("team.json", function (data) {
    const members = JSON.parse(localStorage.getItem("members")) || [];

    if (members && members.length > 0) {
      console.log("Members Data:", members);

      members.forEach((member) => {
        if (member && member.email) {
          data.last10Days.push({
            img: member.coverImg,
            name: member.name,
            email: member.email,
            number: member.number,
            work: member.work,
            teamStatus: member.teamStatus,
          });
        }
      });
    } else {
      console.log("No assets found in local storage.");
    }
    makeMemberTable(data.last10Days.reverse(), data.last15Days.reverse());
  });
}

function handleLast15Days() {
  $.getJSON("team.json", function (data) {
    const members = JSON.parse(localStorage.getItem("members")) || [];

    if (members && members.length > 0) {
      console.log("Members Data:", members);

      members.forEach((member) => {
        if (member && member.email) {
          data.last15Days.push({
            img: member.coverImg,
            name: member.name,
            email: member.email,
            number: member.number,
            work: member.work,
            teamStatus: member.teamStatus,
          });
        }
      });
    } else {
      console.log("No assets found in local storage.");
    }
    makeMemberTable(data.last15Days.reverse(), data.last10Days.reverse());
  });
}

$.getJSON("team.json", function (data) {
  console.log("Data loaded:", data);

  const members = JSON.parse(localStorage.getItem("members")) || [];

  if (members && members.length > 0) {
    console.log("Assets Data:", members);

    members.forEach((member) => {
      if (member && member.email) {
        if (member.date > new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)) {
          data.last15Days.push({
            img: member.coverImg,
            name: member.name,
            email: member.email,
            number: member.number,
            work: member.work,
            teamStatus: member.teamStatus,
          });
        } else {
          data.last10Days.push({
            img: member.coverImg,
            name: member.name,
            email: member.email,
            number: member.number,
            work: member.work,
            teamStatus: member.teamStatus,
          });
        }
      }
    });
  } else {
    console.log("No assets found in local storage.");
  }

  let last15Days = data.last15Days.reverse();
  let last10Days = data.last10Days.reverse();
  makeMemberTable(last15Days, last10Days);
});

function makeMemberTable(last15Days, last10Days) {
  let dataContainer = document.getElementById("data-container");

  // Clear existing table content
  dataContainer.innerHTML = "";

  let tbl = document.createElement("table");
  tbl.classList.add("w-full");
  tbl.id = "myTable";
  let headerRow = tbl.insertRow();
  headerRow.classList.add("tableHeader");
  let firstHeading = document.createElement("th");
  firstHeading.classList.add("checkBoxMainDiv");
  let checkBoxDiv = document.createElement("div");
  checkBoxDiv.classList.add("checkBoxDiv");
  let checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("checkMarkRadioButtonContainer");
  let CheckBoxInput = document.createElement("input");
  CheckBoxInput.type = "checkbox";
  let checkBoxTick = document.createElement("span");
  checkBoxTick.classList.add("checkMarkRadioTick");
  checkBoxLabel.appendChild(CheckBoxInput);
  checkBoxLabel.appendChild(checkBoxTick);
  checkBoxDiv.appendChild(checkBoxLabel);
  firstHeading.appendChild(checkBoxDiv);
  headerRow.appendChild(firstHeading);
  headerRow.insertCell().textContent = "Name";
  headerRow.insertCell().textContent = "Mail";
  headerRow.insertCell().textContent = "Number";
  headerRow.insertCell().textContent = "Work";
  headerRow.insertCell().textContent = "Status";
  headerRow.insertCell().textContent = "Action";

  last15Days.forEach((result) => {
    let newRow = tbl.insertRow();
    newRow.classList.add("mainData");

    var mainResultTitleContainer = document.createElement("div");
    mainResultTitleContainer.classList.add("maintitleContainer");
    let checkBoxDiv = document.createElement("div");
    checkBoxDiv.classList.add("checkBoxDiv");
    let checkBoxLabel = document.createElement("label");
    checkBoxLabel.classList.add("checkMarkRadioButtonContainer");
    let CheckBoxInput = document.createElement("input");
    CheckBoxInput.type = "checkbox";
    let checkBoxTick = document.createElement("span");
    checkBoxTick.classList.add("checkMarkRadioTick");
    checkBoxLabel.appendChild(CheckBoxInput);
    checkBoxLabel.appendChild(checkBoxTick);
    checkBoxDiv.appendChild(checkBoxLabel);
    mainResultTitleContainer.appendChild(checkBoxDiv);

    newRow.insertCell().appendChild(mainResultTitleContainer);

    //Name
    let nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    var profileImage = new Image();
    profileImage.src = result.img;
    nameContainer.appendChild(profileImage);
    let name = document.createElement("p");
    name.textContent = result.name;
    nameContainer.appendChild(name);
    newRow.insertCell().appendChild(nameContainer);

    //email
    let emailContainer = document.createElement("p");
    emailContainer.textContent = result.email;
    newRow.insertCell().appendChild(emailContainer);

    // number
    let numberContainer = document.createElement("p");
    numberContainer.textContent = result.number;
    newRow.insertCell().appendChild(numberContainer);

    // work
    let workContainer = document.createElement("p");
    workContainer.textContent = result.work;
    newRow.insertCell().appendChild(workContainer);

    //status
    let statusContainer = document.createElement("p");
    statusContainer.textContent = result.teamStatus;
    newRow.insertCell().appendChild(statusContainer);

    //action
    let actionContainer = document.createElement("div");
    actionContainer.classList.add("actionContainer");
    actionContainer.innerHTML = `
     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="cursor-pointer"
                      >
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      `;
    newRow.insertCell().appendChild(actionContainer);
  });

  last10Days.forEach((result) => {
    let newRow = tbl.insertRow();
    newRow.classList.add("mainData");

    var mainResultTitleContainer = document.createElement("div");
    mainResultTitleContainer.classList.add("maintitleContainer");
    let checkBoxDiv = document.createElement("div");
    checkBoxDiv.classList.add("checkBoxDiv");
    let checkBoxLabel = document.createElement("label");
    checkBoxLabel.classList.add("checkMarkRadioButtonContainer");
    let CheckBoxInput = document.createElement("input");
    CheckBoxInput.type = "checkbox";
    let checkBoxTick = document.createElement("span");
    checkBoxTick.classList.add("checkMarkRadioTick");
    checkBoxLabel.appendChild(CheckBoxInput);
    checkBoxLabel.appendChild(checkBoxTick);
    checkBoxDiv.appendChild(checkBoxLabel);
    mainResultTitleContainer.appendChild(checkBoxDiv);

    newRow.insertCell().appendChild(mainResultTitleContainer);

    //Name
    let nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    var profileImage = new Image();
    profileImage.src = result.img;
    nameContainer.appendChild(profileImage);
    let name = document.createElement("p");
    name.textContent = result.name;
    nameContainer.appendChild(name);
    newRow.insertCell().appendChild(nameContainer);

    //email
    let emailContainer = document.createElement("p");
    emailContainer.textContent = result.email;
    newRow.insertCell().appendChild(emailContainer);

    // number
    let numberContainer = document.createElement("p");
    numberContainer.textContent = result.number;
    newRow.insertCell().appendChild(numberContainer);

    // work
    let workContainer = document.createElement("p");
    workContainer.textContent = result.work;
    newRow.insertCell().appendChild(workContainer);

    //status
    let statusContainer = document.createElement("p");
    statusContainer.textContent = result.teamStatus;
    newRow.insertCell().appendChild(statusContainer);

    //action
    let actionContainer = document.createElement("button");
    actionContainer.classList.add("actionContainer");
    actionContainer.innerHTML = `
     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="cursor-pointer"
                      >
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      `;
    newRow.insertCell().appendChild(actionContainer);
    //actionContainer click
    actionContainer.addEventListener("click", () => {
      //delete button show
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.innerHTML = `Delete`;
      actionContainer.parentNode.replaceChild(deleteButton, actionContainer);
      deleteButton.addEventListener("click", () => {
        let deleteMember = JSON.parse(localStorage.getItem("members")) || [];
        let row = newRow;
       deleteMember = deleteMember.filter((member) => member.id !== row.id);
        localStorage.setItem("members", JSON.stringify(deleteMember));
        row.parentNode.removeChild(row);
      });
    });
  });

  dataContainer.appendChild(tbl);

  initPagination();
}

function searchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        pagination.style.display = "none";
        pageToTotalPage.style.display = "none";
      }
      if (filter === "") {
        tr[i].style.display = "";
        pagination.style.display = "flex";
        pageToTotalPage.style.display = "block";
      }
    }
  }
}

function initPagination() {
  const cardsPerPage = 10;
  const dataContainer = document.getElementById("data-container");
  const pagination = document.getElementById("pagination");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pageNumbers = document.getElementById("page-numbers");
  const pageToTotalPage = document.getElementById("pageToTotalPage");

  const cards = Array.from(document.getElementsByClassName("mainData"));

  if (cards.length > cardsPerPage) {
    pagination.style.display = "flex";
  } else {
    pagination.style.display = "none";
  }

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;

  function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
      card.style.display =
        index >= startIndex && index < endIndex ? "table-row" : "none";
    });
  }

  function generatePagination() {
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const a = document.createElement("a");
      a.classList.add("page-link");
      a.href = "#";
      a.textContent = i;
      a.setAttribute("data-page", i);

      pageNumbers.appendChild(a);

      a.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        displayPage(currentPage);
        updatePagination();
      });
    }
  }

  function updatePagination() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    let allCards = cards.length;

    // Calculate the range of cards being displayed
    const startCard = (currentPage - 1) * cardsPerPage + 1;
    const endCard = Math.min(currentPage * cardsPerPage, cards.length);

    pageToTotalPage.innerHTML = `Showing ${startCard} to ${endCard} of ${cards.length} entries`;

    document.querySelectorAll(".page-link").forEach((link) => {
      const page = parseInt(link.getAttribute("data-page"));
      link.classList.toggle("active", page === currentPage);
    });
  }

  // Event listeners for Next and Previous buttons
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
      updatePagination();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayPage(currentPage);
      updatePagination();
    }
  });

  // Initialize pagination
  generatePagination();
  displayPage(currentPage);
  updatePagination();
}
