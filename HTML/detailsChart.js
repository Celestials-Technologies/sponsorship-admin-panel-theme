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
