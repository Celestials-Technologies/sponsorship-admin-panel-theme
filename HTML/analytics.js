fetch("analytics.json")
  .then((response) => response.json())
  .then((data) => {
    const ctx = document.getElementById("myChart").getContext("2d");

    function updateChart() {
      let selectedData =
        ADCtoUSDtext.textContent === "Last 10 days"
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
    observer.observe(ADCtoUSDtext, { childList: true });
  })
  .catch(() => console.error("Error loading chart data:"));

fetch("analytics.json")
  .then((response) => response.json())
  .then((data) => {
    const ctx2 = document.getElementById("myChart2").getContext("2d");

    function updateBTCChart() {
      console.log("Current mainText:", mainText.textContent);
      let selectedData2 =
        mainText.textContent === "Last 10 days"
          ? data.btcToEur10Days
          : data.btcToEur15Days;

      console.log("Selected Data:", selectedData2);

      let gradient = ctx2.createLinearGradient(0, 0, 0, 600);
      gradient.addColorStop(0, "rgba(138, 43, 226, 0.5)");
      gradient.addColorStop(1, "rgba(138, 43, 226, 0)");

      selectedData2 = selectedData2.map((dataset) => {
        if (dataset.label === "Smooth Line") {
          return { ...dataset, backgroundColor: gradient };
        }
        return dataset;
      });

      new Chart(ctx2, {
        type: "bar",
        data: {
          labels: data.xValues,
          datasets: selectedData2,
        },
        options: {
          legend: {
            display: false,
            labels: { fontColor: "white" },
          },
          scales: {
            xAxes: [
              {
                maxBarThickness: 10,
                barPercentage: 0.5,
                
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
                gridLines: { display: false },
              },
            ],
          },
        },
      });
    }
    updateBTCChart();

    const observer2 = new MutationObserver(updateBTCChart);
    observer2.observe(mainText, { childList: true });
  })
  .catch(() => console.error("Error loading chart data:"));



  function coinsChart() {
    fetch("analytics.json")
      .then(response => response.json())
      .then(jsonData => {
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
                  borderWidth: 3
                }
              ]
            },
            options: {
              legend: { display: false },
              scales: {
                xAxes: [
                  {
                ticks: { display: false },
                gridLines: { display: false }

                  }
                ],
                yAxes: [
                  {
                ticks: {
                  display: false,
                  stepSize: 20,
                  min: 0,
                  max: 100
                },
                gridLines: { display: false },

                     
                  }
                ],
                y : {
                  display:false,
                }
                
                
              }
            }
          });
        });
      })
      .catch(error => console.error("Error loading charts:", error));
  }
  
  coinsChart();


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
  $.getJSON("analytics.json", function (data) {
    console.log("Data loaded for Last 10 Days:", data);
    let last10Days = data.last10Days;
    makeResultsTable(last10Days, data.last15Days);
  });
}

function handleLast15Days() {
  $.getJSON("analytics.json", function (data) {
    console.log("Data loaded for Last 15 Days:", data);
    let last15Days = data.last15Days;
    makeResultsTable(last15Days, data.last10Days);
  });
}

$.getJSON("analytics.json", function (data) {
  console.log("Data loaded:", data);
  let last15Days = data.last15Days;
  let last10Days = data.last10Days;
  makeResultsTable(last15Days, last10Days);
});

function makeResultsTable(last15Days, last10Days) {
  let dataContainer = document.getElementById("data-container");
  
  // Clear existing table content
  dataContainer.innerHTML = '';

  let tbl = document.createElement("table");
  tbl.classList.add("w-full");
  let headerRow = tbl.insertRow();
  headerRow.classList.add("tableHeader");
  headerRow.insertCell().textContent = "Title";
  // headerRow.insertCell().textContent = "Date";
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

    // var mainResultDate = document.createElement("div");
    // mainResultDate.classList.add("tableData");
    // var mainResultDateText = document.createElement("h2");
    // mainResultDateText.textContent = result.date;
    // mainResultDate.appendChild(mainResultDateText);
    // newRow.insertCell().appendChild(mainResultDate);

    var mainResultHistory = document.createElement("div");
    mainResultHistory.classList.add("tableData");
    var mainResultHistoryText = document.createElement("h2");
    mainResultHistoryText.textContent = result.history;
    mainResultHistory.appendChild(mainResultHistoryText);
    newRow.insertCell().appendChild(mainResultHistory);

    var mainResultStatus = document.createElement("div");
    var mainResultStatusText = document.createElement("h2");
    mainResultStatusText.textContent = result.status;
    if(result.status === "Successful"){
      mainResultStatus.classList.add("succesfullStatusBox");
    }else if(result.status === "Pending"){
      mainResultStatus.classList.add("pendingStatusBox");
    }else if(result.status === "Canceled"){
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
    if(result.status === "Successful"){
      mainResultStatus.classList.add("succesfullStatusBox");
    }else if(result.status === "Pending"){
      mainResultStatus.classList.add("pendingStatusBox");
    }else if(result.status === "Canceled"){
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


let detailSelectAssetText = document.querySelector("#detailSelectAssetText");

function changeSelectAssetText(text, event) {
  detailSelectAssetText.textContent = text;
  if(detailSelectAssetText.textContent === "Last 10 days"){
    assetLast10Days();
  }else {
    assetLast15Days();
  }

  closeDropDowns();
}

function assetLast10Days() {
  $.getJSON("analytics.json", function (data) {
    console.log("Data loaded for Last 10 Days:", data);
    let assetLast10Days = data.assetsLast10Days;
    makeAssetsDataList(assetLast10Days, data.assetsLast15Days);
  });
}

function assetLast15Days() {
  $.getJSON("analytics.json", function (data) {
    console.log("Data loaded for Last 15 Days:", data);
    let assetLast15Days = data.assetsLast15Days;
    makeAssetsDataList(assetLast15Days, data.assetsLast10Days);
  });
}
$.getJSON("analytics.json", function (data) {
  console.log("Data loaded:", data);
  let assetLast15Days = data.assetsLast15Days;
  let assetLast10Days = data.assetsLast10Days;
  makeAssetsDataList(assetLast15Days, assetLast10Days);
});

function makeAssetsDataList(assetLast15Days, assetLast10Days) {
  let dataContainerAssets = document.getElementById("data-container-assets");
  dataContainerAssets.innerHTML = '';

  let maindiv = document.createElement("div");
  maindiv.classList.add("mainAssets");

  assetLast15Days.forEach((result) => {
    let listCardContainer = document.createElement("div");
    listCardContainer.classList.add("listCardContainer");
    let listCardImage = document.createElement("img");
    listCardImage.src = result.img;
    listCardImage.classList.add("listCardImage");
    listCardContainer.appendChild(listCardImage);

    let listCardDataMain = document.createElement("div");
    listCardDataMain.classList.add("listCardDataMain");
    let listCardTitleContainer = document.createElement("div");
    listCardTitleContainer.classList.add("listCardTitleContainer");
    let listCardTitle = document.createElement("div");
    listCardTitle.classList.add("listCardTitle");
    listCardTitle.textContent = result.title;
    let listCardPercentage = document.createElement("div");
    listCardPercentage.classList.add("listCardPercentage");
    listCardPercentage.textContent = result.percentage;
    listCardTitleContainer.appendChild(listCardTitle);
    listCardTitleContainer.appendChild(listCardPercentage);
    listCardDataMain.appendChild(listCardTitleContainer);

    let listCardBarContainer = document.createElement("div");
    listCardBarContainer.classList.add("listCardBarContainer");
    let listCardBar = document.createElement("div");
    listCardBar.classList.add("listCardBar");
    listCardBar.style.width = result.percentage;
    listCardBarContainer.appendChild(listCardBar);
    listCardDataMain.appendChild(listCardBarContainer);
    listCardContainer.appendChild(listCardDataMain);

    let listCardPricesAndValuesContainer = document.createElement("div");
    listCardPricesAndValuesContainer.classList.add("listCardPricesAndValuesContainer");
    let listCardPrice = document.createElement("div");
    listCardPrice.classList.add("listCardPrice");
    listCardPrice.textContent = `Price: ${result.price}`;
    let listCardValue = document.createElement("div");
    listCardValue.classList.add("listCardValue");
    listCardValue.textContent = `Value: ${result.value}`;
    listCardDataMain.appendChild(listCardPricesAndValuesContainer);
    listCardPricesAndValuesContainer.appendChild(listCardPrice);
    listCardPricesAndValuesContainer.appendChild(listCardValue);

    maindiv.appendChild(listCardContainer);
  });
  assetLast10Days.forEach((result) => {
    let listCardContainer = document.createElement("div");
    listCardContainer.classList.add("listCardContainer");
    let listCardImage = document.createElement("img");
    listCardImage.src = result.img;
    listCardImage.classList.add("listCardImage");
    listCardContainer.appendChild(listCardImage);

    let listCardDataMain = document.createElement("div");
    listCardDataMain.classList.add("listCardDataMain");
    let listCardTitleContainer = document.createElement("div");
    listCardTitleContainer.classList.add("listCardTitleContainer");
    let listCardTitle = document.createElement("div");
    listCardTitle.classList.add("listCardTitle");
    listCardTitle.textContent = result.title;
    let listCardPercentage = document.createElement("div");
    listCardPercentage.classList.add("listCardPercentage");
    listCardPercentage.textContent = result.percentage;
    listCardTitleContainer.appendChild(listCardTitle);
    listCardTitleContainer.appendChild(listCardPercentage);
    listCardDataMain.appendChild(listCardTitleContainer);

    let listCardBarContainer = document.createElement("div");
    listCardBarContainer.classList.add("listCardBarContainer");
    let listCardBar = document.createElement("div");
    listCardBar.classList.add("listCardBar");
    listCardBar.style.width = result.percentage;
    listCardBarContainer.appendChild(listCardBar);
    listCardDataMain.appendChild(listCardBarContainer);
    listCardContainer.appendChild(listCardDataMain);

    let listCardPricesAndValuesContainer = document.createElement("div");
    listCardPricesAndValuesContainer.classList.add("listCardPricesAndValuesContainer");
    let listCardPrice = document.createElement("div");
    listCardPrice.classList.add("listCardPrice");
    listCardPrice.textContent = `Price: ${result.price}`;
    let listCardValue = document.createElement("div");
    listCardValue.classList.add("listCardValue");
    listCardValue.textContent = `Value: ${result.value}`;
    listCardDataMain.appendChild(listCardPricesAndValuesContainer);
    listCardPricesAndValuesContainer.appendChild(listCardPrice);
    listCardPricesAndValuesContainer.appendChild(listCardValue);


    maindiv.appendChild(listCardContainer);
  });

  dataContainerAssets.appendChild(maindiv);

  showLess();
}

function showLess(){
  showLess();
  document.getElementById("seeLess").style.display = "none";
  document.getElementById("seeAll").style.display = "flex";
}

function seeAll(){
  showAll();
  document.getElementById("seeAll").style.display = "none";
  // document.getElementById("seeLess").style.display = "flex";
}

function showLess(){
  const cardsPerPage = 9;
  const cards = Array.from(document.getElementsByClassName("listCardContainer"));
  const currentPage = 1;

  function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
      card.style.display =
        index >= startIndex && index < endIndex ? "flex" : "none";
    });
  }

  

  displayPage(currentPage);
}


function showAll() {
  const cards = Array.from(document.getElementsByClassName("listCardContainer"));
  cards.forEach((card) => {
    card.style.display = "flex";
  });
}