const Activities = [ // 競賽時程
  {
    content: '報名、初賽繳件截止日',
    timestamp: '2022-10-14 中午12:00'
  }, {
    content: '公布晉級決賽名單',
    timestamp: '2022-10-21'
  }, {
    content: '決賽繳件截止日',
    timestamp: '2022-10-26 中午12:00'
  },
  {
    content: '決賽暨頒獎典禮',
    timestamp: '2022-10-29 中午12:30'
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
const DataC = { // 競賽辦法.初賽評分項目.概念組
  labels: ['作品創作理念', '提案創新性', '市場應用可行性', '預期效益', '報告完整度'],
  datasets: [{
    data: [10, 30, 30, 20, 10],
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
const DataI = { // 競賽辦法.初賽評分項目.實作組
  labels: ['作品創作理念', '作品功能', '市場應用可行性', '成本分析', '實用價值/商業價值'],
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
const DataC2 = { // 競賽辦法.決賽評分項目.概念組
  labels: ['簡報內容', '現場表達能力', '問題回覆', '簡報技巧', '時間控制'],
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
  labels: ['創新想法', '作品穩定性', '作品實用性', '表達能力', '作品完整度'],
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
const CptCaution = [ // 競賽辦法.注意事項
  {
    data: '本競賽分為「概念組」、「實作組」及「大學組」三組，僅能擇一參加，且須依規定繳交資料，如違反上述規定，則取消參賽資格。'
  },
  {
    data: '每隊以2至5位參賽學生為限，可跨校、跨科、跨班組隊參加。需指派1人為隊長(報名系統中的聯絡人)，負責彙整全隊成員資料（著作財產權授權同意書、學生證明、法定代理人同意書、延續性作品說明書）'
  },
  {
    data: '報名：採線上報名，請至https://reurl.cc/ZbQnpg'
  },
  {
    data: '比賽分為初賽與決賽，初賽為書面審查，依繳交的資料給予評分。'
  },
  {
    data: '指導老師以2位為限。'
  },
  {
    data: '主辦單位保有審核及同意報名參賽隊伍資格及對應主題之權利。'
  },
  {
    data: '作品中不可以任何形式洩漏作者、指導老師之單位與姓名，違者取消資格。'
  },
  {
    data: '決賽方式與參加人數限制將遵循衛福部公告之「特殊傳染性肺炎防疫措施」，請隨時留意網站最新消息。'
  },
  {
    data: '主辦單位保有隨時修改及終止本活動之權利，如有任何變更內容或詳細注意事項將以 email 通知，請留意訊息。'
  },
  {
    data: '參賽作品非真正參賽人員不得列入，作品內文應由學生自行製作，指導老師只能以指導者之身分督導學生，不能代為製作，違者取消參賽資格。'
  },
  {
    data: '參賽者繳交之電子資料，均不予退回，應自行備份，徵稿收件截止後，不得對文件進行調整或置換。'
  },
  {
    data: '參賽者寄送之電子資料於徵稿收件截止後，經主辦單位確認該隊確實完成所有上傳事宜，將以電子郵件通知隊長。若完成上述動作後，逾三天仍未收到相關電子郵件通知，請來電詢問。'
  }
]
const AwardInfo = [ // 競賽辦法.獎勵辦法
  {
    data: '獎品項目暫訂，主辦單位得依實際狀況更改之。'
  },
  {
    data: '高中職學生於競賽得獎者，可推薦甄試高雄科技大學商業智慧學院各系，方列為多元表現項目。'
  },
  {
    data: '所有參賽者，皆頒發參賽證明，可上傳作為推薦甄試佐證資料。'
  }
]
const IdeaAward = [ // 競賽辦法.獎勵辦法
  {
    data: '第一名🥇，團體獎金8,000元、每人獎狀一只、團體獎盃一座。'
  },
  {
    data: '第二名🥈，團體獎金5,000元、每人獎狀一只、團體獎盃一座。'
  },
  {
    data: '第三名🥉，團體獎金2,000元、每人獎狀一只、團體獎盃一座。'
  },
  {
    data: '佳作共五名，每人獎狀一只。'
  },
  {
    data: '入圍獎共二名，每人獎狀一只。'
  }
]
export default {
  Activities,
  DataC,
  DataI,
  DataC2,
  DataI2,
  CptCaution,
  AwardInfo,
  IdeaAward
}
