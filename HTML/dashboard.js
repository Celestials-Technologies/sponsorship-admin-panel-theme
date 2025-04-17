function coinsChart() {
  fetch("dashboard.json")
    .then((response) => response.json())
    .then((jsonData) => {
      const xBarValues = jsonData.xBarValues;

      jsonData.coinsChart.forEach(({ id, data }) => {
        const ctx = document.getElementById(id).getContext("2d");

        let gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(138, 43, 226, 0.5)");
        gradient.addColorStop(1, "rgba(138, 43, 226, 0)");

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: xBarValues,
            datasets: [
              {
                label: "Smooth Line",
                data: data,
                borderColor: gradient,
                backgroundColor: gradient,
                fill: true,
                lineTension: 0.4,
                borderWidth: 3,
              },
            ],
          },
          options: {
            legend: { display: false },
            scales: {
              xAxes: [
                {
                  ticks: { display: false },
                  gridLines: { display: false },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    display: false,
                    stepSize: 20,
                    min: 0,
                    max: 100,
                  },
                  gridLines: { display: false },
                },
              ],
              y: {
                display: false,
              },
            },
          },
        });
      });
    })
    .catch((error) => console.error("Error loading charts:", error));
}

coinsChart();

fetch("dashboard.json")
  .then((response) => response.json())
  .then((data) => {
    const ctx = document.getElementById("myChart").getContext("2d");

    function updateChart() {
      let selectedData =
        earningtext.textContent === "Last 10 days"
          ? data.last10DaysChart
          : data.datasets;

      let gradient = ctx.createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0, "rgba(138, 43, 226, 0.5)");
      gradient.addColorStop(1, "rgba(138, 43, 226, 0)");

      selectedData = selectedData.map((dataset) => {
        if (dataset.label === "Smooth Line") {
          return { ...dataset, backgroundColor: gradient };
        }
        return dataset;
      });

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.xValues,
          datasets: selectedData,
        },
        options: {
          legend: {
            display: false,
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
    }
    updateChart();

    const observer = new MutationObserver(updateChart);
    observer.observe(earningtext, { childList: true });
  })
  .catch(() => console.error("Error loading chart data:"));

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
  $.getJSON("dashboard.json", function (data) {
    console.log("Data loaded for Last 10 Days:", data);
    let last10Days = data.last10Days;
    makeResultsTable(last10Days, data.last15Days);
  });
}

function handleLast15Days() {
  $.getJSON("dashboard.json", function (data) {
    console.log("Data loaded for Last 15 Days:", data);
    let last15Days = data.last15Days;
    makeResultsTable(last15Days, data.last10Days);
  });
}

$.getJSON("dashboard.json", function (data) {
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
  headerRow.insertCell().textContent = "Title";
  headerRow.insertCell().textContent = "Date";
  headerRow.insertCell().textContent = "History";
  headerRow.insertCell().textContent = "Status";
  headerRow.insertCell().textContent = "Transaction";

  last15Days.forEach((result) => {
    let newRow = tbl.insertRow();
    newRow.classList.add("mainData");

    var mainResultTitleContainer = document.createElement("div");
    mainResultTitleContainer.classList.add("maintitleContainer");
    var mainResultTitle = new Image();
    mainResultTitle.src = result.img;
    mainResultTitleContainer.appendChild(mainResultTitle);
    let mainResultTitleText = document.createElement("div");
    mainResultTitleText.classList.add("mainTitleText");
    var mainTitleHeading = document.createElement("h2");
    // var mainTitleDetail = document.createElement("p");
    mainTitleHeading.textContent = result.title;
    // mainTitleDetail.textContent = result.detail;
    mainResultTitleText.appendChild(mainTitleHeading);
    // mainResultTitleText.appendChild(mainTitleDetail);
    mainResultTitleContainer.appendChild(mainResultTitleText);

    newRow.insertCell().appendChild(mainResultTitleContainer);

    var mainResultDate = document.createElement("div");
    mainResultDate.classList.add("tableData");
    var mainResultDateText = document.createElement("h2");
    mainResultDateText.textContent = result.date;
    mainResultDate.appendChild(mainResultDateText);
    newRow.insertCell().appendChild(mainResultDate);

    var mainResultHistory = document.createElement("div");
    mainResultHistory.classList.add("tableData");
    var mainResultHistoryText = document.createElement("h2");
    mainResultHistoryText.textContent = result.history;
    mainResultHistory.appendChild(mainResultHistoryText);
    newRow.insertCell().appendChild(mainResultHistory);

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

    var mainResultTransaction = document.createElement("div");
    mainResultTransaction.classList.add("maintransactionContainer");
    var mainResultTransactionText = document.createElement("h2");
    var mainResultTransactionDetailText = document.createElement("p");
    mainResultTransactionText.textContent = result.transaction;
    mainResultTransactionDetailText.textContent = result.transactionDetail;
    mainResultTransaction.appendChild(mainResultTransactionText);
    mainResultTransaction.appendChild(mainResultTransactionDetailText);

    newRow.insertCell().appendChild(mainResultTransaction);
  });

  last10Days.forEach((result) => {
    let newRow = tbl.insertRow();
    newRow.classList.add("mainData");

    var mainResultTitleContainer = document.createElement("div");
    mainResultTitleContainer.classList.add("maintitleContainer");
    var mainResultTitle = new Image();
    mainResultTitle.src = result.img;
    mainResultTitleContainer.appendChild(mainResultTitle);
    let mainResultTitleText = document.createElement("div");
    mainResultTitleText.classList.add("mainTitleText");
    var mainTitleHeading = document.createElement("h2");
    // var mainTitleDetail = document.createElement("p");
    mainTitleHeading.textContent = result.title;
    // mainTitleDetail.textContent = result.detail;
    mainResultTitleText.appendChild(mainTitleHeading);
    // mainResultTitleText.appendChild(mainTitleDetail);
    mainResultTitleContainer.appendChild(mainResultTitleText);

    newRow.insertCell().appendChild(mainResultTitleContainer);

    var mainResultDate = document.createElement("div");
    mainResultDate.classList.add("tableData");
    var mainResultDateText = document.createElement("h2");
    mainResultDateText.textContent = result.date;
    mainResultDate.appendChild(mainResultDateText);
    newRow.insertCell().appendChild(mainResultDate);

    var mainResultHistory = document.createElement("div");
    mainResultHistory.classList.add("tableData");
    var mainResultHistoryText = document.createElement("h2");
    mainResultHistoryText.textContent = result.history;
    mainResultHistory.appendChild(mainResultHistoryText);
    newRow.insertCell().appendChild(mainResultHistory);

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

    var mainResultTransaction = document.createElement("div");
    mainResultTransaction.classList.add("maintransactionContainer");
    var mainResultTransactionText = document.createElement("h2");
    var mainResultTransactionDetailText = document.createElement("p");
    mainResultTransactionText.textContent = result.transaction;
    mainResultTransactionDetailText.textContent = result.transactionDetail;
    mainResultTransaction.appendChild(mainResultTransactionText);
    mainResultTransaction.appendChild(mainResultTransactionDetailText);

    newRow.insertCell().appendChild(mainResultTransaction);
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
    td = tr[i].getElementsByTagName("td")[0];
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

let storedTokenValue = JSON.parse(localStorage.getItem("tokenValue")) || [];
let storedTokenData = document.getElementById("storedTokenData");

storedTokenValue.forEach((token) => {
  const tokenCard = document.createElement("li");
  tokenCard.classList.add("selectedBtn", "addMoreSelectButton");
  tokenCard.id = "selectedCoin";
  tokenCard.innerHTML = `
      <div class="mainTokenDataContainer justify-between w-full">
        <div class="flex gap-3 items-center">
          <img src="${token.image}" alt="tokenImage" class="w-12 h-12 rounded-full"/>
          <div class="flex flex-col gap-1">
            <h2 class="text-lg text-white Gilroy-medium text-left">${token.category}</h2>
            <span class="text-base text-white Gilroy-normal">${token.name}</span>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-lg text-white Gilroy-medium text-left">${token.price} ${token.currency}</h2>
          <div class="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p class="text-sm sm:text-base Gilroy-normal growthColor pt-0.5">${token.growth}%</p>
          </div>
        </div>
      </div>`;

  // Apply growth color
  const svgPath = tokenCard.querySelector("svg path");
  const growthText = tokenCard.querySelector(".growthColor");

  if (token.growth < 70) {
    svgPath.style.stroke = "#ff6161";
    growthText.style.color = "#ff6161";
  } else if (token.growth < 100) {
    svgPath.style.stroke = "#ffc861";
    growthText.style.color = "#ffc861";
  } else {
    svgPath.style.stroke = "#00A385";
    growthText.style.color = "#00A385";
  }

  storedTokenData.appendChild(tokenCard);
});

const searchCoin = document.getElementById("searchCoin");

searchCoin.addEventListener("input", (e) => {
  const filter = e.target.value.toUpperCase();
  const li = document.querySelectorAll("#storedTokenData li");

  li.forEach((item) => {
    const name = item.querySelector("span").textContent.toUpperCase() || "";
    const category = item.querySelector("h2").textContent.toUpperCase() || "";
    const combined = `${name} ${category}`;

    item.style.display = combined.includes(filter) ? "" : "none";
  });
});
let selectedBtns = document.querySelectorAll(".selectedBtn");

selectedBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedBtns.forEach((button) => {
      button.style.backgroundColor = "transparent";
      button.style.color = "#E9901A";
    });

    btn.style.backgroundColor = "#E9901A";
    btn.style.color = "white";
  });
});

function mangeTokenButton() {
  let selectedCoin = document.getElementById("selectedCoin");
  console.log(selectedCoin);
}
