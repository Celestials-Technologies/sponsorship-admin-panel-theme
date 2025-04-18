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
  $.getJSON("billing.json", function (data) {
    console.log("Data loaded for Last 10 Days:", data);
    let last10Days = data.last10Days;
    makeResultsTable(last10Days, data.last15Days);
  });
}

function handleLast15Days() {
  $.getJSON("billing.json", function (data) {
    console.log("Data loaded for Last 15 Days:", data);
    let last15Days = data.last15Days;
    makeResultsTable(last15Days, data.last10Days);
  });
}

$.getJSON("billing.json", function (data) {
  console.log("Data loaded:", data);
  let last15Days = data.last15Days;
  let last10Days = data.last10Days;
  makeResultsTable(last15Days, last10Days);
});

function makeResultsTable(last15Days, last10Days) {
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
  headerRow.insertCell().textContent = "Invoice";
  headerRow.insertCell().textContent = "Client";
  headerRow.insertCell().textContent = "Date";
  headerRow.insertCell().textContent = "Value";
  headerRow.insertCell().textContent = "Taxes";
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

    var mainResultInvoice = document.createElement("div");
    mainResultInvoice.classList.add("mainResultInvoice");
    let mainResultInvoiceSvg = document.createElement("div");
    mainResultInvoiceSvg.classList.add("mainResultInvoiceSvg");
    mainResultInvoiceSvg.innerHTML = `
         <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#E9901A"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                          />
                        </svg>`;
    mainResultInvoice.appendChild(mainResultInvoiceSvg);
    let mainResultInvoiceText = document.createElement("p");
    mainResultInvoiceText.textContent = result.invoice;
    mainResultInvoice.appendChild(mainResultInvoiceText);
    newRow.insertCell().appendChild(mainResultInvoice);

    var mainResultClientText = document.createElement("p");
    mainResultClientText.classList.add("billingTableText");
    mainResultClientText.textContent = result.client;
    newRow.insertCell().appendChild(mainResultClientText);

    var mainResultDateText = document.createElement("p");
    mainResultDateText.classList.add("billingTableText");
    mainResultDateText.textContent = result.date;
    newRow.insertCell().appendChild(mainResultDateText);

    var mainResultValueText = document.createElement("p");
    mainResultValueText.classList.add("billingTableText");
    mainResultValueText.textContent = result.value;
    newRow.insertCell().appendChild(mainResultValueText);

    var mainResultTaxesText = document.createElement("p");
    mainResultTaxesText.classList.add("billingTableText");
    mainResultTaxesText.textContent = result.taxes;
    newRow.insertCell().appendChild(mainResultTaxesText);

    var mainResultStatus = document.createElement("div");
    var mainResultStatusText = document.createElement("h2");
    mainResultStatusText.textContent = result.status;
    if (result.status === "Successful") {
      mainResultStatus.classList.add("succesfullStatusBox");
    } else if (result.status === "Pending") {
      mainResultStatus.classList.add("pendingStatusBox");
    } else if (result.status === "Canceled") {
      mainResultStatus.classList.add("canceledStatusBox");
    }
    mainResultStatus.appendChild(mainResultStatusText);
    newRow.insertCell().appendChild(mainResultStatus);

    var mainResultAction = document.createElement("div");
    mainResultAction.classList.add("mainResultAction");
    mainResultAction.innerHTML = `
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
                      </svg>`;
    newRow.insertCell().appendChild(mainResultAction);
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

    var mainResultInvoice = document.createElement("div");
    mainResultInvoice.classList.add("mainResultInvoice");
    let mainResultInvoiceSvg = document.createElement("div");
    mainResultInvoiceSvg.classList.add("mainResultInvoiceSvg");
    mainResultInvoiceSvg.innerHTML = `
           <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#E9901A"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                            />
                          </svg>`;
    mainResultInvoice.appendChild(mainResultInvoiceSvg);
    let mainResultInvoiceText = document.createElement("p");
    mainResultInvoiceText.textContent = result.invoice;
    mainResultInvoice.appendChild(mainResultInvoiceText);
    newRow.insertCell().appendChild(mainResultInvoice);

    var mainResultClientText = document.createElement("p");
    mainResultClientText.classList.add("billingTableText");
    mainResultClientText.textContent = result.client;
    newRow.insertCell().appendChild(mainResultClientText);

    var mainResultDateText = document.createElement("p");
    mainResultDateText.classList.add("billingTableText");
    mainResultDateText.textContent = result.date;
    newRow.insertCell().appendChild(mainResultDateText);

    var mainResultValueText = document.createElement("p");
    mainResultValueText.classList.add("billingTableText");
    mainResultValueText.textContent = result.value;
    newRow.insertCell().appendChild(mainResultValueText);

    var mainResultTaxesText = document.createElement("p");
    mainResultTaxesText.classList.add("billingTableText");
    mainResultTaxesText.textContent = result.taxes;
    newRow.insertCell().appendChild(mainResultTaxesText);

    var mainResultStatus = document.createElement("div");
    var mainResultStatusText = document.createElement("h2");
    mainResultStatusText.textContent = result.status;
    if (result.status === "Successful") {
      mainResultStatus.classList.add("succesfullStatusBox");
    } else if (result.status === "Pending") {
      mainResultStatus.classList.add("pendingStatusBox");
    } else if (result.status === "Canceled") {
      mainResultStatus.classList.add("canceledStatusBox");
    }
    mainResultStatus.appendChild(mainResultStatusText);
    newRow.insertCell().appendChild(mainResultStatus);

    var mainResultAction = document.createElement("div");
    mainResultAction.classList.add("mainResultAction");
    mainResultAction.innerHTML = `
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
                        </svg>`;
    newRow.insertCell().appendChild(mainResultAction);
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
  const cardsPerPage = 5;
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
