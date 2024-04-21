<template>
  <div>
    <div>
      <ButtonsArrowToPage to="/" placeholder="back"/>
    </div>
    <div class="bg-purple-300 w-full h-full">
      <div class="grid grid-cols-2 md:grid-cols-3 md:place-items-center">
        <div class="w-80 bg-gray-200 rounded shadow-2xl">
          <ChartsBarChart :data="barDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 rounded shadow-2xl">
          <ChartsDoubleBarChart :data="doubleBarDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 rounded shadow-2xl">
          <ChartsScatterChart :data="scatterDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 rounded shadow-2xl">
          <ChartsBubbleChart :data="bubbleDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 mt-5 rounded shadow-2xl">
          <ChartsLineChart :data="lineDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 mt-5 rounded shadow-2xl">
          <ChartsPolarChart :data="polarDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 mt-5 rounded shadow-2xl">
          <ChartsRadarChart :data="radarDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 mt-5 rounded shadow-2xl">
          <ChartsAreaChart :data="areaDataFalse" />
        </div>
        <div class="w-80 bg-gray-200 mt-5 rounded shadow-2xl">
          <ChartsMixedChart :data="mixedDataFalse" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Graphics',
  data() {
    return {
      prueba: 20
    }
  },
  computed: {
    barDataFalse() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#f87979',
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70],

        }]
      }
    },
    scatterDataFalse() {
      return {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              { x: -10, y: 0 },
              { x: -5, y: 5 },
              { x: 0, y: 10 },
              { x: 5, y: 15 },
              { x: 10, y: 5 },
              { x: 15, y: 10 },
              { x: 20, y: 15 },
              { x: 25, y: 20 },
              { x: 30, y: 10 },
              { x: 35, y: 15 },
              { x: 40, y: 20 },
              { x: 45, y: 25 }
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      }
    },
    bubbleDataFalse() {
      return {
        datasets: [
          {
            label: 'First Dataset',
            data: [
              {
                x: 0,
                y: 5,
                r: 5
              },
              {
                x: 5,
                y: 10,
                r: 10
              },
              {
                x: 10,
                y: 15,
                r: 15
              },
              {
                x: 15,
                y: 20,
                r: 20
              },
              {
                x: 20,
                y: 25,
                r: 25
              },
              {
                x: 25,
                y: 30,
                r: 1 >= 20 ? 30 : 5
              }
            ],
            backgroundColor: 'rgb(255, 99, 132)'
          }
        ]
      }
    },
    lineDataFalse() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [10, 20, 30, 40, 50, 60, 70],
          }
        ]
      }
    },
    polarDataFalse() {
      return {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ],
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple']
      }
    },
    radarDataFalse() {
      return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First Dataset',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second Dataset',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      }
    },
    areaDataFalse() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [10, 20, 30, 40, 50, 60, 70],
          }
        ]
      }
    },
    doubleBarDataFalse() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [10, 20, 30, 40, 50, 60, 70],
          },
          {
            label: 'Data Two',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [20, 30, 40, 50, 60, 70, 80],
          }
        ]
      }
    },
    mixedDataFalse() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          fill: false,
          data: [10, 30, 39, 20, 25, 35]
        }, {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: 'rgb(255, 99, 132)',
          data: [20, 29, 37, 40, 25, 33]
        }, {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: 'rgb(75, 192, 192)',
          data: [30, 19, 27, 10, 15, 23]
        }]
      }
    }
  }
}
</script>