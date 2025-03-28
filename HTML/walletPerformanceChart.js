fetch("chartData.json")
  .then((response) => response.json())
  .then((data) => {
    const ctx = document.getElementById("myChart").getContext("2d");

    function updateChart() {
      let selectedData =
        performancetext.textContent === "Last 10 days"
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
        type: "line",
        data: {
          labels: data.xValues,
          datasets: selectedData,
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
    }
    updateChart();

    const observer = new MutationObserver(updateChart);
    observer.observe(performancetext, { childList: true });
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
  $.getJSON("wallet.json", function (data) {
    const assets = JSON.parse(localStorage.getItem("assets")) || [];

    if (assets && assets.length > 0) {
      console.log("Assets Data:", assets);

      assets.forEach((asset) => {
        if (asset && asset.category) { // Check if asset is not null and has a category
          data.last10Days.push({
            title: asset.category,
            img: asset.coverImage,
            date: asset.date,
            history: "0df3635...eq23",
            status: asset.status,
            transaction: `+${asset.amount}`,
            currency: asset.convertCurrency,
            transactionDetail: `+$${asset.amount * 10}`,
          });
        }
      });
    } else {
      console.log("No assets found in local storage.");
    }
    makeResultsTable(data.last10Days.reverse(), data.last15Days.reverse());
  });
}

function handleLast15Days() {
  $.getJSON("wallet.json", function (data) {
    const assets = JSON.parse(localStorage.getItem("assets")) || [];

    if (assets && assets.length > 0) {
      console.log("Assets Data:", assets);

      assets.forEach((asset) => {
        if (asset && asset.category) { // Check if asset is not null and has a category
          data.last15Days.push({
            title: asset.category,
            img: asset.coverImage,
            date: asset.date,
            history: "0df3635...eq23",
            status: asset.status,
            transaction: `+${asset.amount}`,
            currency: asset.convertCurrency,
            transactionDetail: `+$${asset.amount * 10}`,
          });
        }
      });
    } else {
      console.log("No assets found in local storage.");
    }
    makeResultsTable(data.last15Days.reverse(), data.last10Days.reverse());
  });
}

$.getJSON("wallet.json", function (data) {
  console.log("Data loaded:", data);

  const assets = JSON.parse(localStorage.getItem("assets")) || [];

  if (assets && assets.length > 0) {
    console.log("Assets Data:", assets);

    assets.forEach((asset) => {
      if (asset && asset.category) {
        if (asset.date > new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)) {
          data.last15Days.push({
            title: asset.category,
            img: asset.coverImage,
            date: asset.date,
            history: "0df3635...eq23",
            status: asset.status,
            transaction: `+${asset.amount}`,
            currency: asset.convertCurrency,
            transactionDetail: `+$${asset.amount * 10}`,
          });
        } else {
          data.last10Days.push({
            title: asset.category,
            img: asset.coverImage,
            date: asset.date,
            history: "0df3635...eq23",
            status: asset.status,
            transaction: `+${asset.amount}`,
            currency: asset.convertCurrency,
            transactionDetail: `+$${asset.amount * 10}`,
          });
        }
      }
    });
  } else {
    console.log("No assets found in local storage.");
  }

  let last15Days = data.last15Days.reverse();
  let last10Days = data.last10Days.reverse();
  makeResultsTable(last15Days, last10Days);
});

// Your existing makeResultsTable function remains unchanged
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

    // Title and image
    var mainResultTitleContainer = document.createElement("div");
    mainResultTitleContainer.classList.add("maintitleContainer");
    var mainResultTitle = new Image();
    mainResultTitle.src = result.img;
    mainResultTitleContainer.appendChild(mainResultTitle);
    let mainResultTitleText = document.createElement("div");
    mainResultTitleText.classList.add("mainTitleText");
    var mainTitleHeading = document.createElement("h2");
    mainTitleHeading.textContent = result.title;
    mainResultTitleText.appendChild(mainTitleHeading);
    mainResultTitleContainer.appendChild(mainResultTitleText);
    newRow.insertCell().appendChild(mainResultTitleContainer);

    // Date
    var mainResultDate = document.createElement("div");
    mainResultDate.classList.add("tableData");
    var mainResultDateText = document.createElement("h2");
    mainResultDateText.textContent = result.date;
    mainResultDate.appendChild(mainResultDateText);
    newRow.insertCell().appendChild(mainResultDate);

    // History
    var mainResultHistory = document.createElement("div");
    mainResultHistory.classList.add("tableData");
    var mainResultHistoryText = document.createElement("h2");
    mainResultHistoryText.textContent = result.history;
    mainResultHistory.appendChild(mainResultHistoryText);
    newRow.insertCell().appendChild(mainResultHistory);

    // Status
    var mainResultStatus = document.createElement("div");
    var mainResultStatusText = document.createElement("h2");
    mainResultStatusText.textContent = result.status;
    if (result.status === "Successful") {
      mainResultStatus.classList.add("succesfullStatusBox");
    } else if (result.status === "Pending") {
      mainResultStatus.classList.add("pendingStatusBox");
    } else if (result.status === "Cancelled") {
      mainResultStatus.classList.add("canceledStatusBox");
    }
    mainResultStatus.appendChild(mainResultStatusText);
    newRow.insertCell().appendChild(mainResultStatus);

    // Transaction details
    var mainResultTransaction = document.createElement("div");
    mainResultTransaction.classList.add("maintransactionContainer");
    var mainResultTransactionText = document.createElement("h2");
    var mainResultTransactionDetailText = document.createElement("p");
    mainResultTransactionText.textContent =
      result.transaction + " " + result.currency;
    mainResultTransactionDetailText.textContent = result.transactionDetail;
    mainResultTransaction.appendChild(mainResultTransactionText);
    mainResultTransaction.appendChild(mainResultTransactionDetailText);
    newRow.insertCell().appendChild(mainResultTransaction);
  });

  last10Days.forEach((result) => {
    let newRow = tbl.insertRow();
    newRow.classList.add("mainData");

    // Title and image
    var mainResultTitleContainer = document.createElement("div");
    mainResultTitleContainer.classList.add("maintitleContainer");
    var mainResultTitle = new Image();
    mainResultTitle.src = result.img;
    mainResultTitleContainer.appendChild(mainResultTitle);
    let mainResultTitleText = document.createElement("div");
    mainResultTitleText.classList.add("mainTitleText");
    var mainTitleHeading = document.createElement("h2");
    mainTitleHeading.textContent = result.title;
    mainResultTitleText.appendChild(mainTitleHeading);
    mainResultTitleContainer.appendChild(mainResultTitleText);
    newRow.insertCell().appendChild(mainResultTitleContainer);

    // Date
    var mainResultDate = document.createElement("div");
    mainResultDate.classList.add("tableData");
    var mainResultDateText = document.createElement("h2");
    mainResultDateText.textContent = result.date;
    mainResultDate.appendChild(mainResultDateText);
    newRow.insertCell().appendChild(mainResultDate);

    // History
    var mainResultHistory = document.createElement("div");
    mainResultHistory.classList.add("tableData");
    var mainResultHistoryText = document.createElement("h2");
    mainResultHistoryText.textContent = result.history;
    mainResultHistory.appendChild(mainResultHistoryText);
    newRow.insertCell().appendChild(mainResultHistory);

    // Status
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

    // Transaction details
    var mainResultTransaction = document.createElement("div");
    mainResultTransaction.classList.add("maintransactionContainer");
    var mainResultTransactionText = document.createElement("h2");
    var mainResultTransactionDetailText = document.createElement("p");
    mainResultTransactionText.textContent =
      result.transaction + " " + result.currency;
    mainResultTransactionDetailText.textContent = result.transactionDetail;
    mainResultTransaction.appendChild(mainResultTransactionText);
    mainResultTransaction.appendChild(mainResultTransactionDetailText);
    newRow.insertCell().appendChild(mainResultTransaction);
  });

  // Add table to the container
  dataContainer.appendChild(tbl);

  showLess();
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
        document.getElementById("seeLess").style.display = "none";
        document.getElementById("seeAll").style.display = "none";
      }
      if (filter === "") {
        tr[i].style.display = "";
        document.getElementById("seeLess").style.display = "none";
        document.getElementById("seeAll").style.display = "none";
      }
    }
  }
}

function showLess() {
  showLess();
  document.getElementById("seeLess").style.display = "none";
  document.getElementById("seeAll").style.display = "flex";
}

function seeAll() {
  showAll();
  document.getElementById("seeAll").style.display = "none";
  // document.getElementById("seeLess").style.display = "flex";
}

function showLess() {
  const cardsPerPage = 6;
  const cards = Array.from(document.getElementsByClassName("mainData"));
  const currentPage = 1;

  function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
      card.style.display =
        index >= startIndex && index < endIndex ? "table-row" : "none";
    });
  }

  displayPage(currentPage);
}

function showAll() {
  const cards = Array.from(document.getElementsByClassName("mainData"));
  cards.forEach((card) => {
    card.style.display = "table-row";
  });
}
