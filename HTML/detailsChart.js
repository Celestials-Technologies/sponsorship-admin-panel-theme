function detailPageCharts() {
  fetch("detailChart.json")
    .then(response => response.json())
    .then(jsonData => {
      const xValues = jsonData.xValues;

      jsonData.charts.forEach(({ id, data , borderColor , backgroundColor }) => {
        const ctx = document.getElementById(id).getContext("2d");

        // let gradient = ctx.createLinearGradient(0, 0, 0, 300);
        // gradient.addColorStop(0, "rgba(138, 43, 226, 0.5)");
        // gradient.addColorStop(1, "rgba(138, 43, 226, 0)");

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [
              {
                label: "Smooth Line",
                data: data,
                borderColor: borderColor,
                backgroundColor: backgroundColor,
              }
            ]
          },
          options: {
            legend: { display: false },
            scales: {
              xAxes: [
                {
                  ticks: { fontColor: "white" },
                  gridLines: { display: false }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    stepSize: 20,
                    min: 0,
                    max: 100
                  },
                  gridLines: { color: "white" },
                
                  beginAtZero: true
                  
                }
              ]
            }
          }
        });
      });
    })
    .catch(error => console.error("Error loading charts:", error));
}

detailPageCharts();

function coinsChart() {
  fetch("detailChart.json")
    .then(response => response.json())
    .then(jsonData => {
      const xValues = jsonData.xValues;

      jsonData.coinsChart.forEach(({ id, data }) => {
        const ctx = document.getElementById(id).getContext("2d");

        let gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(138, 43, 226, 0.5)");
        gradient.addColorStop(1, "rgba(138, 43, 226, 0)");

        new Chart(ctx, {
          type: "line",
          data: {
            labels: xValues,
            datasets: [
              {
                label: "Smooth Line",
                data: data,
                borderColor: gradient, 
                backgroundColor: gradient, 
                fill: true,
                lineTension: 0.4,
                borderWidth: 3
              }
            ]
          },
          options: {
            legend: { display: false },
            scales: {
              xAxes: [
                {
                  ticks: { fontColor: "white" },
                  gridLines: { display: false }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    stepSize: 20,
                    min: 0,
                    max: 100
                  },
                  gridLines: { display: false },
                  
                  
                }
              ]
            }
          }
        });
      });
    })
    .catch(error => console.error("Error loading charts:", error));
}

coinsChart();


$.getJSON('detailChart.json', function(data) {
  console.log(data.result);
  makeResultsTable(data.results);
}); 

function makeResultsTable(results) {
  let tbl = document.createElement("table");
  tbl.classList.add("w-full");
  let headerRow = tbl.insertRow();
  headerRow.classList.add("tableHeader");
  headerRow.insertCell().textContent = "Title";
  headerRow.insertCell().textContent = "Transaction";

  results.forEach(result => {
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
    var mainTitleDetail = document.createElement("p");
    mainTitleHeading.textContent = result.title;
    mainTitleDetail.textContent = result.detail;
    mainResultTitleText.appendChild(mainTitleHeading);
    mainResultTitleText.appendChild(mainTitleDetail);
    mainResultTitleContainer.appendChild(mainResultTitleText);

    newRow.insertCell().appendChild(mainResultTitleContainer);

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

  // Append the table to the element with ID target1
  let dataContainer = document.getElementById("data-container");
  dataContainer.appendChild(tbl);

  // Initialize Pagination After Table is Created
  initPagination();
}

function initPagination() {
  const cardsPerPage = 4;
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

    pageToTotalPage.innerHTML = `Showing ${currentPage} to ${totalPages} of ${cards.length} entries`;

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

if (detailSelectTableText.textContent === "Last 10 days") {
  displayPage(3);
  updatePagination();
} 

  // Initialize pagination
  generatePagination();
  displayPage(currentPage);
  updatePagination();
}
