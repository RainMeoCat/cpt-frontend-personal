const Activities = [ // 競賽時程
  {
    content: '報名截止日',
    timestamp: '2222-2-22 (五) 22:22'
  }, {
    content: '公布報名名單',
    timestamp: '2222-2-23 (六)'
  }, {
    content: '貓咪摸摸比賽日',
    timestamp: '2222-2-24 (日) 14:22'
  },
  {
    content: '頒獎典禮',
    timestamp: '2222-2-25 (一) 22:22'
  }
]
const options = { // 圓餅圖選項
  responsive: true,
  legend: {
    display: false
  },
  plugins: { // chartjs-plugin-datalabels設定
    datalabels: {
      formatter: (value, ctx) => { // 圓餅圖上的標籤格式化
        const LEGEND_PERCENTAGE = ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%' // 數值加'%'
        return LEGEND_PERCENTAGE
        // 預留程式碼區塊：可以計算所有數值轉換為百分比後的結果'
        // let sum = 0
        // const dataArr = ctx.chart.data.datasets[0].data
        // dataArr.map(data => {
        //   sum += data
        //   return 0
        // })
        // const percentage = (value * 100 / sum).toFixed(2) + '%'
      },
      color: 'black', // labels設定字體顏色
      align: 'start',
      textAlign: 'center', // labels設定對齊樣式
      font: {
        weight: 'bold',
        size: 16
      },
      offset: -72
    }
  }
}
const DataC2 = { // 競賽辦法.決賽評分項目.概念組
  labels: ['貓咪滿意度', '摸貓技法流暢度', '技法華麗度', '隊員華麗度', '整體流暢度'],
  datasets: [{
    data: [50, 20, 10, 10, 10],
    backgroundColor: [
      'rgb(66, 129, 164)',
      'rgb(72, 169, 166)',
      'rgb(228, 223, 218)',
      'rgb(212, 180, 131)',
      'rgb(193, 102, 107)'
    ],
    borderColor: '#000',
    options: options
  }]
}
const DataI2 = { // 競賽辦法.決賽評分項目.實作組
  labels: ['貓咪滿意度', '摸貓技法流暢度', '技法華麗度', '隊員華麗度', '整體流暢度'],
  datasets: [{
    data: [30, 20, 20, 20, 10],
    backgroundColor: [
      'rgb(21, 96, 100)',
      'rgb(0, 196, 154)',
      'rgb(248, 225, 108)',
      'rgb(255, 194, 180)',
      'rgb(251, 143, 103)'
    ],
    borderColor: '#000',
    options: options
  }]
}

export default {
  Activities,
  DataC2,
  DataI2
}
