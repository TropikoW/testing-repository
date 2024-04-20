<template>
  <div>
    <ChartsBarChart type="Bar" :chartData="dataBar"/>
  </div>
</template>

<script>
  export default{
    computed:{
      dataBar() {
        return {
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12] } ]
        }
      }
    }
  }
</script>