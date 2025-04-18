function balanceChart() {
    fetch("balanceDetail.json")
      .then(response => response.json())
      .then(jsonData => {
        const xValues = jsonData.xValues;
  
        jsonData.balanceChart.forEach(({ id, data }) => {
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
                    ticks: { display: false },
                    gridLines: { display: false }
                  }
                ],
                yAxes: [
                  {
                    ticks: {
                      display: false
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
  
  balanceChart();




let detailSelectTableText = document.querySelector("#detailSelectTableText");

function changeSelectTableText(text, event) {
  detailSelectTableText.textContent = text;

  if (detailSelectTableText.textContent === "7D") {
    handle7Days();
  } else if (detailSelectTableText.textContent === "1M") {
    handleMDays();
  } else if (detailSelectTableText.textContent === "1Y") {
    handleYDays();
  } else {
    handle24Days();
  }

  closeDropDowns();
}

function handle7Days() {
  $.getJSON("balanceDetail.json", function (data) {
    console.log("Data loaded for Last 7 Days:", data);
    let last7Days = data.last7Days;
    makeResultsTable(last7Days, data.last24Days, data.last1Mounth, data.last1Year);
  });
}

function handleMDays() {
  $.getJSON("balanceDetail.json", function (data) {
    console.log("Data loaded for Last 1 Month:", data);
    let last1Mounth = data.last1Mounth;
    makeResultsTable(last1Mounth, data.last7Days, data.last24Days, data.last1Year);
  });
}

function handleYDays() {
  $.getJSON("balanceDetail.json", function (data) {
    console.log("Data loaded for Last 1 Year:", data);
    let last1Year = data.last1Year;
    makeResultsTable(last1Year, data.last7Days, data.last24Days, data.last1Mounth);
  });
}

function handle24Days() {
  $.getJSON("balanceDetail.json", function (data) {
    console.log("Data loaded for Last 24 Days:", data);
    let last24Days = data.last24Days;
    makeResultsTable(last24Days, data.last7Days, data.last1Mounth, data.last1Year);
  });
}

$.getJSON("balanceDetail.json", function (data) {
  console.log("Data loaded:", data);
  let last7Days = data.last7Days;
  let last24Days = data.last24Days;
  let last1Mounth = data.last1Mounth;
  let last1Year = data.last1Year;
  makeResultsTable(last24Days, last7Days, last1Mounth, last1Year);
});

function makeResultsTable(last24Days, last7Days, last1Mounth, last1Year) {
  let dataContainer = document.getElementById("data-container");
  
  // Clear existing table content
  dataContainer.innerHTML = '';

  let tbl = document.createElement("table");
  tbl.classList.add("w-full");
  tbl.id = "myTable";
  let headerRow = tbl.insertRow();
  headerRow.classList.add("tableHeader");
  headerRow.insertCell().textContent = "Title";
  headerRow.insertCell().textContent = "Price";
  headerRow.insertCell().textContent = "1H";
  headerRow.insertCell().textContent = "24H";
  headerRow.insertCell().textContent = "7D";
  headerRow.insertCell().textContent = "Volume";
  headerRow.insertCell().textContent = "Last 7 days";
  headerRow.insertCell().textContent = "";

  last24Days.forEach((result) => {
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

    var mainResultPrice = document.createElement("div");
    mainResultPrice.classList.add("tableData");
    var mainResultPriceText = document.createElement("h2");
    mainResultPriceText.textContent = result.price;
    mainResultPrice.appendChild(mainResultPriceText);
    newRow.insertCell().appendChild(mainResultPrice);

    var mainResultOneHour = document.createElement("div");
    mainResultOneHour.classList.add("tableData");
    var mainResultOneHourText = document.createElement("h2");
    mainResultOneHourText.textContent = result.oneHour;
    mainResultOneHour.appendChild(mainResultOneHourText);
    newRow.insertCell().appendChild(mainResultOneHour);

    var mainResultTwentyFourHour = document.createElement("div");
    mainResultTwentyFourHour.classList.add("tableData");
    var mainResultTwentyFourHourText = document.createElement("h2");
    mainResultTwentyFourHourText.textContent = result.twentyFourHour;
    mainResultTwentyFourHour.appendChild(mainResultTwentyFourHourText);
    newRow.insertCell().appendChild(mainResultTwentyFourHour);

    var mainResultSevenDay = document.createElement("div");
    mainResultSevenDay.classList.add("tableData");
    var mainResultSevenDayText = document.createElement("h2");
    mainResultSevenDayText.textContent = result.sevenDay;
    mainResultSevenDay.appendChild(mainResultSevenDayText);
    newRow.insertCell().appendChild(mainResultSevenDay);

    var mainResultVolume = document.createElement("div");
    mainResultVolume.classList.add("tableData");
    var mainResultVolumeText = document.createElement("h2");
    mainResultVolumeText.textContent = result.volume;
    mainResultVolume.appendChild(mainResultVolumeText);
    newRow.insertCell().appendChild(mainResultVolume);

    var mainResultLastSevenDays = document.createElement("div");
    mainResultLastSevenDays.classList.add("balanceDetailLastSevenDays");
    var mainResultLastSevenDaysText = document.createElement("h2");
    mainResultLastSevenDaysText.textContent = result.last7Days;
    // add bar according to the percentage
    var resultBarContainer = document.createElement("div");
    resultBarContainer.classList.add("resultBarContainer");
    var mainResultLastSevenDaysBar = document.createElement("div");
    mainResultLastSevenDaysBar.classList.add("balanceDetailLastSevenDaysBar");
    mainResultLastSevenDaysBar.style.width = result.last7Days;
    resultBarContainer.appendChild(mainResultLastSevenDaysBar);
    mainResultLastSevenDays.appendChild(mainResultLastSevenDaysText);
    mainResultLastSevenDays.appendChild(resultBarContainer);
    newRow.insertCell().appendChild(mainResultLastSevenDays);

    var mainResultTrade = document.createElement("button");
    mainResultTrade.classList.add("balanceDetailTrade");
    var mainResultTradeText = document.createElement("p");
    mainResultTradeText.textContent = result.trade;
    mainResultTrade.addEventListener("click", function() {
      window.location.href = "details.html";
      });
    mainResultTrade.appendChild(mainResultTradeText);
    newRow.insertCell().appendChild(mainResultTrade);
    
     });

   last7Days.forEach((result) => {
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

    var mainResultPrice = document.createElement("div");
    mainResultPrice.classList.add("tableData");
    var mainResultPriceText = document.createElement("h2");
    mainResultPriceText.textContent = result.price;
    mainResultPrice.appendChild(mainResultPriceText);
    newRow.insertCell().appendChild(mainResultPrice);

    var mainResultOneHour = document.createElement("div");
    mainResultOneHour.classList.add("tableData");
    var mainResultOneHourText = document.createElement("h2");
    mainResultOneHourText.textContent = result.oneHour;
    mainResultOneHour.appendChild(mainResultOneHourText);
    newRow.insertCell().appendChild(mainResultOneHour);

    var mainResultTwentyFourHour = document.createElement("div");
    mainResultTwentyFourHour.classList.add("tableData");
    var mainResultTwentyFourHourText = document.createElement("h2");
    mainResultTwentyFourHourText.textContent = result.twentyFourHour;
    mainResultTwentyFourHour.appendChild(mainResultTwentyFourHourText);
    newRow.insertCell().appendChild(mainResultTwentyFourHour);

    var mainResultSevenDay = document.createElement("div");
    mainResultSevenDay.classList.add("tableData");
    var mainResultSevenDayText = document.createElement("h2");
    mainResultSevenDayText.textContent = result.sevenDay;
    mainResultSevenDay.appendChild(mainResultSevenDayText);
    newRow.insertCell().appendChild(mainResultSevenDay);

    var mainResultVolume = document.createElement("div");
    mainResultVolume.classList.add("tableData");
    var mainResultVolumeText = document.createElement("h2");
    mainResultVolumeText.textContent = result.volume;
    mainResultVolume.appendChild(mainResultVolumeText);
    newRow.insertCell().appendChild(mainResultVolume);

    var mainResultLastSevenDays = document.createElement("div");
    mainResultLastSevenDays.classList.add("balanceDetailLastSevenDays");
    var mainResultLastSevenDaysText = document.createElement("h2");
    mainResultLastSevenDaysText.textContent = result.last7Days;
    // add bar according to the percentage
    var resultBarContainer = document.createElement("div");
    resultBarContainer.classList.add("resultBarContainer");
    var mainResultLastSevenDaysBar = document.createElement("div");
    mainResultLastSevenDaysBar.classList.add("balanceDetailLastSevenDaysBar");
    mainResultLastSevenDaysBar.style.width = result.last7Days;
    resultBarContainer.appendChild(mainResultLastSevenDaysBar);
    mainResultLastSevenDays.appendChild(mainResultLastSevenDaysText);
    mainResultLastSevenDays.appendChild(resultBarContainer);
    newRow.insertCell().appendChild(mainResultLastSevenDays);

    var mainResultTrade = document.createElement("button");
    mainResultTrade.classList.add("balanceDetailTrade");
    var mainResultTradeText = document.createElement("p");
    mainResultTradeText.textContent = result.trade;
    mainResultTrade.appendChild(mainResultTradeText);
    newRow.insertCell().appendChild(mainResultTrade);
    
     });

     last1Mounth.forEach((result) => {
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
  
      var mainResultPrice = document.createElement("div");
      mainResultPrice.classList.add("tableData");
      var mainResultPriceText = document.createElement("h2");
      mainResultPriceText.textContent = result.price;
      mainResultPrice.appendChild(mainResultPriceText);
      newRow.insertCell().appendChild(mainResultPrice);
  
      var mainResultOneHour = document.createElement("div");
      mainResultOneHour.classList.add("tableData");
      var mainResultOneHourText = document.createElement("h2");
      mainResultOneHourText.textContent = result.oneHour;
      mainResultOneHour.appendChild(mainResultOneHourText);
      newRow.insertCell().appendChild(mainResultOneHour);
  
      var mainResultTwentyFourHour = document.createElement("div");
      mainResultTwentyFourHour.classList.add("tableData");
      var mainResultTwentyFourHourText = document.createElement("h2");
      mainResultTwentyFourHourText.textContent = result.twentyFourHour;
      mainResultTwentyFourHour.appendChild(mainResultTwentyFourHourText);
      newRow.insertCell().appendChild(mainResultTwentyFourHour);
  
      var mainResultSevenDay = document.createElement("div");
      mainResultSevenDay.classList.add("tableData");
      var mainResultSevenDayText = document.createElement("h2");
      mainResultSevenDayText.textContent = result.sevenDay;
      mainResultSevenDay.appendChild(mainResultSevenDayText);
      newRow.insertCell().appendChild(mainResultSevenDay);
  
      var mainResultVolume = document.createElement("div");
      mainResultVolume.classList.add("tableData");
      var mainResultVolumeText = document.createElement("h2");
      mainResultVolumeText.textContent = result.volume;
      mainResultVolume.appendChild(mainResultVolumeText);
      newRow.insertCell().appendChild(mainResultVolume);
  
      var mainResultLastSevenDays = document.createElement("div");
      mainResultLastSevenDays.classList.add("balanceDetailLastSevenDays");
      var mainResultLastSevenDaysText = document.createElement("h2");
      mainResultLastSevenDaysText.textContent = result.last7Days;
      // add bar according to the percentage
      var resultBarContainer = document.createElement("div");
      resultBarContainer.classList.add("resultBarContainer");
      var mainResultLastSevenDaysBar = document.createElement("div");
      mainResultLastSevenDaysBar.classList.add("balanceDetailLastSevenDaysBar");
      mainResultLastSevenDaysBar.style.width = result.last7Days;
      resultBarContainer.appendChild(mainResultLastSevenDaysBar);
      mainResultLastSevenDays.appendChild(mainResultLastSevenDaysText);
      mainResultLastSevenDays.appendChild(resultBarContainer);
      newRow.insertCell().appendChild(mainResultLastSevenDays);
  
      var mainResultTrade = document.createElement("button");
      mainResultTrade.classList.add("balanceDetailTrade");
      var mainResultTradeText = document.createElement("p");
      mainResultTradeText.textContent = result.trade;
      mainResultTrade.appendChild(mainResultTradeText);
      newRow.insertCell().appendChild(mainResultTrade);
      
       });

       last1Year.forEach((result) => {
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
    
        var mainResultPrice = document.createElement("div");
        mainResultPrice.classList.add("tableData");
        var mainResultPriceText = document.createElement("h2");
        mainResultPriceText.textContent = result.price;
        mainResultPrice.appendChild(mainResultPriceText);
        newRow.insertCell().appendChild(mainResultPrice);
    
        var mainResultOneHour = document.createElement("div");
        mainResultOneHour.classList.add("tableData");
        var mainResultOneHourText = document.createElement("h2");
        mainResultOneHourText.textContent = result.oneHour;
        mainResultOneHour.appendChild(mainResultOneHourText);
        newRow.insertCell().appendChild(mainResultOneHour);
    
        var mainResultTwentyFourHour = document.createElement("div");
        mainResultTwentyFourHour.classList.add("tableData");
        var mainResultTwentyFourHourText = document.createElement("h2");
        mainResultTwentyFourHourText.textContent = result.twentyFourHour;
        mainResultTwentyFourHour.appendChild(mainResultTwentyFourHourText);
        newRow.insertCell().appendChild(mainResultTwentyFourHour);
    
        var mainResultSevenDay = document.createElement("div");
        mainResultSevenDay.classList.add("tableData");
        var mainResultSevenDayText = document.createElement("h2");
        mainResultSevenDayText.textContent = result.sevenDay;
        mainResultSevenDay.appendChild(mainResultSevenDayText);
        newRow.insertCell().appendChild(mainResultSevenDay);
    
        var mainResultVolume = document.createElement("div");
        mainResultVolume.classList.add("tableData");
        var mainResultVolumeText = document.createElement("h2");
        mainResultVolumeText.textContent = result.volume;
        mainResultVolume.appendChild(mainResultVolumeText);
        newRow.insertCell().appendChild(mainResultVolume);
    
        var mainResultLastSevenDays = document.createElement("div");
        mainResultLastSevenDays.classList.add("balanceDetailLastSevenDays");
        var mainResultLastSevenDaysText = document.createElement("h2");
        mainResultLastSevenDaysText.textContent = result.last7Days;
        // add bar according to the percentage
        var resultBarContainer = document.createElement("div");
        resultBarContainer.classList.add("resultBarContainer");
        var mainResultLastSevenDaysBar = document.createElement("div");
        mainResultLastSevenDaysBar.classList.add("balanceDetailLastSevenDaysBar");
        mainResultLastSevenDaysBar.style.width = result.last7Days;
        resultBarContainer.appendChild(mainResultLastSevenDaysBar);
        mainResultLastSevenDays.appendChild(mainResultLastSevenDaysText);
        mainResultLastSevenDays.appendChild(resultBarContainer);
        newRow.insertCell().appendChild(mainResultLastSevenDays);
    
        var mainResultTrade = document.createElement("button");
        mainResultTrade.classList.add("balanceDetailTrade");
        var mainResultTradeText = document.createElement("p");
        mainResultTradeText.textContent = result.trade;
        mainResultTrade.appendChild(mainResultTradeText);
        newRow.insertCell().appendChild(mainResultTrade);
        
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