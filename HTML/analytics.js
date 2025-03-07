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
