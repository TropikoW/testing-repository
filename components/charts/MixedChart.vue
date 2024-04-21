<script>
import { Bar, Line } from 'vue-chartjs'
export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>