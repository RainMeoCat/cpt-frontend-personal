import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData 在 mixin 建立.
    // 如果你需要替換 options , 請建立本地的 options 物件
    this.renderChart(this.chartData, this.options)
  }
}
