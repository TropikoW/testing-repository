<template>
  <div>
    <div class="inline-block rounded bg-gray-100 shadow-2xl p-3">
      <div class="flex flex-col">
        <h2>Statistics</h2>
        <div class="bg-white w-60 rounded">
          <ChartsBarChart :data="barDataFalse"/>
        </div>
        <ButtonsToPage to="/statistics" placeHolder="Go" class="mt-2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>