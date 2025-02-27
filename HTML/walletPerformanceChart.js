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
