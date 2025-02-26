//Week Chart
const weekChart = document.getElementById("weekChart").getContext("2d");

const weekValues = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

let weekChartGradient = weekChart.createLinearGradient(0, 0, 0, 300);
new Chart(weekChart, {
  type: "line",
  data: {
    labels: weekValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [40, 29, 60, 80, 74, 90, 55],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: weekChartGradient,
        fill: weekChartGradient,
        lineTension: 0,
        borderWidth: 5,
      },
    ],
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
          gridLines: { display: false },
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

// Day CHart

const dayChart = document.getElementById("dayChart").getContext("2d");

const dayValues = ["1h", "4h", "8h", "12h", "16h", "20h", "24h"];

let dayChartGradient = weekChart.createLinearGradient(0, 0, 0, 300);
new Chart(dayChart, {
  type: "line",
  data: {
    labels: dayValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [34, 54, 78, 64, 67, 54, 82],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: dayChartGradient,
        fill: true,
        lineTension: 0,
        borderWidth: 5,
      },
    ],
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
          gridLines: { display: false },
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

//Mounth Chart

const mounthChart = document.getElementById("mounthChart").getContext("2d");

const mounthValues = [
  "1d",
  "4d",
  "6d",
  "8d",
  "12d",
  "16d",
  "20d",
  "24d",
  "26d",
  "30d",
];

let mounthChartGradient = mounthChart.createLinearGradient(0, 0, 0, 300);
new Chart(mounthChart, {
  type: "line",
  data: {
    labels: mounthValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [25, 10, 15, 15, 30, 55, 43, 80, 76, 60],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: dayChartGradient,
        fill: true,
        lineTension: 0,
        borderWidth: 5,
      },
    ],
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
          gridLines: { display: false },
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

// Year Chart

const yearChart = document.getElementById("yearChart").getContext("2d");

const yearValues = [
  "1mon",
  "2mon",
  "3mon",
  "4mon",
  "5mon",
  "6mon",
  "7mon",
  "8mon",
  "9mon",
  "10mon",
  "11mon",
  "12mon",
];

let yearChartGradient = yearChart.createLinearGradient(0, 0, 0, 300);
new Chart(yearChart, {
  type: "line",
  data: {
    labels: yearValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [0, 20, 15, 35, 40, 38, 55, 44, 60, 60, 45, 90],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: dayChartGradient,
        fill: true,
        lineTension: 0,
        borderWidth: 5,
      },
    ],
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
          gridLines: { display: false },
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

//Hour Chart

const hourChart = document.getElementById("hourChart").getContext("2d");

const hoursValues = ["1m", "12m", "24m", "30m", "48m", "54m", "60m"];

let hoursChartGradient = hourChart.createLinearGradient(0, 0, 0, 300);
new Chart(hourChart, {
  type: "line",
  data: {
    labels: hoursValues,
    datasets: [
      {
        label: "Smooth Line",
        data: [40, 24, 36, 36, 50, 45, 65],
        borderColor: "rgba(138, 43, 226, 1)",
        backgroundColor: dayChartGradient,
        fill: true,
        lineTension: 0,
        borderWidth: 5,
      },
    ],
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
          gridLines: { display: false },
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
