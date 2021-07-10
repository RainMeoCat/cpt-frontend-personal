<template>
  <div class="main">
    <div class="content">
      <section class="section1" id="Top">
        <div class="main_title_container">
          <div class="main_title">第二屆高科盃<br />全國商業智慧競賽</div>
          <div style="font-size: 18px; text-align: center">
            徵稿至 2021-10-7日<br />
            總獎金50,000元整
          </div>
          <div style="text-align: center; padding-top: 5vmin">
            <el-button
              type="warning"
              size="medium"
              @click="openUrl('https://nkust-ic.kktix.cc/events/20211024')"
              style="width: 50vmin; font-size: 5vmin"
              round
              >前往報名</el-button
            >
          </div>
        </div>
      </section>
      <section class="section2" id="Info">
        <div class="main_title_container">
          <div class="main_title">關於競賽</div>
          <el-divider></el-divider>
          <span
            >為引發高中職學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。國立高雄科技大學商業智慧學院暨智慧商務系舉辦「第二屆高科盃全國商業智慧競賽」，期盼能激發學生創意及興趣，並提供全國各校學生相互交流的機會。</span
          >
          <el-divider></el-divider>
          <el-row :gutter="24">
            <el-col :span="8"
              ><div class="grid-content bg-purple">主辦單位</div></el-col
            >
            <el-col :span="16"
              ><div class="grid-content bg-purple">
                國立高雄科技大學商業智慧學院暨智慧商務系
              </div></el-col
            >
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8"
              ><div class="grid-content bg-purple">協辦單位</div></el-col
            >
            <el-col :span="16"
              ><div class="grid-content bg-purple">
                <ul style="padding: 0px; margin: 0px">
                  <li>高雄市政府青年局</li>
                  <li>金融資訊系</li>
                  <li>會計資訊系</li>
                </ul>
              </div></el-col
            >
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8"
              ><div class="grid-content bg-purple">贊助單位</div></el-col
            >
            <el-col :span="16"
              ><div class="grid-content bg-purple">
                <ul style="padding: 0px; margin: 0px">
                  <li>華友聯集團</li>
                  <li>智慧商務系系友會</li>
                </ul>
              </div></el-col
            >
          </el-row>
        </div>
      </section>
      <section class="section3" id="News">
        <div class="news_container">
          <div class="main_title">最新消息</div>
          <el-divider></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-info"></i>
                初賽徵稿至 2021-10-7日止
              </template>
              <div>
                概念組請繳交提案說明書<el-link
                  type="primary"
                  href="./attach_1.pdf"
                  target="_blank"
                  >(附件一)</el-link
                ><br />
                實作組請繳交作品說明書<el-link
                  type="primary"
                  href="./attach_2.pdf"
                  target="_blank"
                  >(附件二)</el-link
                >
                <el-divider></el-divider>
                參賽作品只要有參加過國內外相關競賽者，欲以相同或相近內容參與本競賽，無論是否獲獎，皆須填寫延續性作品說明書，連同初賽作品、學生證明、著作財產權授權同意書、法定代理人同意書、請上傳至google表單，不須提供紙本。
                <el-link
                  type="primary"
                  href="https://forms.gle/coDqU3Nu92N4dvmCA"
                  >https://forms.gle/coDqU3Nu92N4dvmCA</el-link
                >
                <el-divider></el-divider>
                評審委員在每組中評選16隊晉級決賽(視狀況酌予增減)
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </section>
      <section class="section4" id="Schedule">
        <div class="main_title_container">
          <div class="main_title">競賽時程</div>
          <el-divider></el-divider>
          <div style="padding-top: 3vmin">
            <el-timeline style="padding-left: 15vmin">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                <div style="color: #ffffff; font-size: 4vmin">
                  {{ activity.content }}
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </section>
      <section class="section5" id="Rule" style="overflow-y: hidden">
        <div class="rule_container">
          <div class="main_title">競賽辦法</div>
          <el-divider></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-info"></i>
                【初賽】組別說明
              </template>
              <div>
                <span>概念組</span>
                <br />
                <span
                  >提供創意的「商業智慧」提案，可以解決或改善商務問題，優化商業行為、商業模式、商業品質上的創意產品，均適合本項競賽。參賽團隊請依照自行設定之主題，進行商業智慧的應用發想，提出產品提案。</span
                >
              </div>
              <el-divider></el-divider>
              <div>
                實作組
                <br />
                實作「商業智慧」作品，包含物聯網、機器人、大數據分析及其他商業資訊技術領域，凡可解決或改善商務問題，優化商業行為之作品，皆符合本競賽。參賽團隊請依照自行設定之主題，進行商業智慧的應用實作。
              </div>
            </el-collapse-item>
            <el-collapse-item title="【初賽】交件說明與評分項目">
              概念組請繳交提案說明書<el-link
                type="primary"
                href="./attach_1.pdf"
                target="_blank"
                >(附件一)</el-link
              ><br />
              實作組請繳交作品說明書<el-link
                type="primary"
                href="./attach_2.pdf"
                target="_blank"
                >(附件二)</el-link
              >
              <el-divider></el-divider>
              參賽作品只要有參加過國內外相關競賽者，欲以相同或相近內容參與本競賽，無論是否獲獎，皆須填寫延續性作品說明書，連同初賽作品、學生證明、著作財產權授權同意書、法定代理人同意書、請上傳至google表單，不須提供紙本。
              <el-link type="primary" href="https://forms.gle/coDqU3Nu92N4dvmCA"
                >https://forms.gle/coDqU3Nu92N4dvmCA</el-link
              >
              <el-divider></el-divider>
              評審委員在每組中評選16隊晉級決賽(視狀況酌予增減)
            </el-collapse-item>
            <el-collapse-item title="【初賽】評分項目">
              <div style="height: 80vh; overflow-y: scroll; overflow-x: hidden">
                <div
                  style="text-align: center; font-size: 16px; font-weight: 900"
                >
                  概念組
                </div>
                <Pie-chart :chart-data="dataC" :options="options"></Pie-chart>
                <div
                  style="text-align: center; font-size: 16px; font-weight: 900"
                >
                  實作組
                </div>
                <Pie-chart :chart-data="dataI" :options="options"></Pie-chart>
              </div>
            </el-collapse-item>
            <el-collapse-item title="【決賽】交件說明與評分項目">
              概念組請繳交簡報<el-link
                type="primary"
                href="./attach_3.pdf"
                target="_blank"
                >(附件三)</el-link
              ><br />
              實作組不須繳交資料，若需使用簡報報告大會亦無限定格式，請自行發揮，相關設備也請自行攜帶
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-star-on"></i>
                獎勵辦法
              </template>
              <div>
                <ol>
                  <li v-for="(el, index) in award_info" :key="index">
                    {{ el.data }}
                  </li>
                </ol>
              </div>
              <el-divider></el-divider>
              <div>
                <ul>
                  <li v-for="(el, index) in idea_award" :key="index">
                    {{ el.data }}
                  </li>
                </ul>
              </div>
            </el-collapse-item>
            <el-collapse-item style="padding-bottom: 0px">
              <template slot="title"
                ><i class="header-icon el-icon-warning"></i>
                注意事項(共八點)
              </template>
              <el-scrollbar style="height: 60vmin" tag="ul">
                <ol style="margin: 0px; padding-left: 0vmin">
                  <li v-for="(el, index) in cpt_caution" :key="index">
                    {{ el.data }}
                  </li>
                </ol>
              </el-scrollbar>
            </el-collapse-item>
          </el-collapse>
        </div>
      </section>
      <section class="section6" id="List">
        <div class="main_title_container">
          <div class="main_title">名單公布</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <span>尚未有任何名單公布</span>
        </div>
      </section>
      <section class="section7" id="Works">
        <div class="main_title_container">
          <div class="main_title">歷屆作品</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <span>尚未有歷屆作品</span>
        </div>
      </section>
      <section class="section8" id="Faq">
        <div class="faq_container">
          <div class="main_title">FAQ</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-info"></i>
                聯絡窗口
              </template>
              <div>
                <span>如有任何問題請先洽詢聯絡窗口或粉絲專頁私訊</span><br />
                <span
                  >國立高雄科技大學智慧商務系杜助理電子郵件：momo@nkust.edu.tw<br />聯絡電話：07-3814526
                  分機：17560</span
                >
              </div>
            </el-collapse-item>
          </el-collapse>
          <span> </span>
        </div>
      </section>
    </div>
    <el-drawer
      title="快速選單"
      :visible.sync="drawer"
      direction="btt"
      size="90%"
      @closed="DrawerClosed()"
    >
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Info')"
          ><i class="el-icon-s-flag" />關於競賽</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('News')"
          ><i class="el-icon-s-platform" />最新消息</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Schedule')"
          ><i class="el-icon-time" />競賽時程</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Rule')"
          ><i class="el-icon-s-check" />競賽辦法</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('List')"
          ><i class="el-icon-tickets" />名單公布</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Works')"
          ><i class="el-icon-s-open" />歷屆作品</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Faq')"
          ><i class="el-icon-question" />FAQ</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button
          type="warning"
          style="height: 20vmin; font-size: 10vmin"
          @click="
            drawer = false;
            openUrl('https://nkust-ic.kktix.cc/events/20211024');
          "
          >前往報名</el-button
        >
      </el-row>
    </el-drawer>
    <div
      style="
        float: bottom;
        z-index: 2;
        position: fixed;
        bottom: 0px;
        width: 100%;
      "
    >
      <el-row :span="10">
        <el-col>
          <el-menu
            class="mobile-navtab"
            default-active="2"
            background-color="#FAFAFA"
            text-color="#9E9E9E"
            active-text-color="#000000"
            mode="horizontal"
            style="height: 13vmin"
          >
            <el-menu-item
              index="1"
              @click="Scroll('News')"
              class="el-top-item"
              style="
                height: 13vmin;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <i class="el-icon-s-platform" />
              <span
                style="
                  height: 18px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  line-height: 13vmin;
                "
              >
                最新消息
              </span>
            </el-menu-item>
            <el-menu-item
              index="2"
              @click="drawer = !drawer"
              style="
                height: 13vmin;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <i class="el-icon-menu" /><span
                style="
                  height: 13vmin;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  line-height: 13vmin;
                "
                >快速選單</span
              >
            </el-menu-item>
            <el-menu-item
              index="3"
              @click="Scroll('Schedule')"
              style="
                height: 13vmin;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <i class="el-icon-time" /><span
                style="
                  height: 13vmin;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  line-height: 13vmin;
                "
                >競賽時程</span
              >
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="js">
import PieChart from './PieChart.js'
export default {
  components: {
    PieChart
  },
  data () {
    return {
      drawer: false,
      LastClick: '',
      activities: [
        {
          content: '報名、初賽繳件截止日',
          timestamp: '2021-10-07'
        }, {
          content: '公布晉級決賽名單',
          timestamp: '2021-10-14'
        }, {
          content: '決賽繳件截止日',
          timestamp: '2021-10-21'
        },
        {
          content: '賽暨頒獎典禮',
          timestamp: '2021-10-24'
        }
      ],
      award_info: [
        {
          data: '獎品項目暫訂，主辦單位得依實際狀況更改之。'
        },
        {
          data: '競賽得獎者，於推薦甄試高雄科技大學商業智慧學院各系，可列為多元表現加分項目。'
        },
        {
          data: '所有參賽者，皆頒發參賽證明，可上傳作為推薦甄試能力佐證資料。'
        }
      ],
      idea_award: [
        {
          data: '特優一名，團體獎金10,000元、每人獎狀一只'
        },
        {
          data: '優等一名，團體獎金5,000元、每人獎狀一只'
        },
        {
          data: '佳作五名，團體獎金2,000元、每人獎狀一只'
        },
        {
          data: '特別獎數名，每人獎狀一只'
        }
      ],
      cpt_caution: [
        {
          data: '本競賽分為「概念組」及「實作組」兩組，概念組或實作組僅能擇一參加，且須依規定繳交資料，如違反上述規定，則取消參賽資格。'
        },
        {
          data: '每隊以2至4位參賽學生為限，可跨校、跨科、跨班組隊參加。需指派1人為隊長(報名系統中的聯絡人)，負責彙整全隊成員資料（著作財產權授權同意書、學生證明、法定代理人同意書、延續性作品說明書）'
        },
        {
          data: '報名：採線上報名，請至https://nkust-ic.kktix.cc/events/20211024'
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
        }
      ],
      options: { // chartjs設定
        rotation: 0.65,
        responsive: true,
        plugins: { // chartjs-plugin-datalabels設定
          datalabels: {
            formatter: (value, ctx) => {
              const LEGEND_PERCENTAGE = value + '%' // 數值加'%'
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
            align: 'end',
            textAlign: 'center', // labels設定對齊樣式
            font: {
              weight: 'bold',
              size: 12
            },
            offset: -6
          }
        }
      },
      dataC: {
        labels: ['作品創作理念', '提案創新性', '市場應用可行性', '預期效益', '報告完整度'],
        datasets: [
          {
            data: [10, 30, 30, 20, 10],
            backgroundColor: [
              'rgb(66, 129, 164)',
              'rgb(72, 169, 166)',
              'rgb(228, 223, 218)',
              'rgb(212, 180, 131)',
              'rgb(193, 102, 107)'
            ],
            borderColor: '#000',
            options: this.options
          }
        ]
      },
      dataI: {
        labels: ['作品創作理念', '作品功能', '市場應用可行性', '成本分析', '實用價值/商業價值'],
        datasets: [
          {
            data: [30, 20, 20, 20, 10],
            backgroundColor: [
              'rgb(21, 96, 100)',
              'rgb(0, 196, 154)',
              'rgb(248, 225, 108)',
              'rgb(255, 194, 180)',
              'rgb(251, 143, 103)'
            ],
            borderColor: '#000',
            options: this.options
          }
        ]
      }
    }
  },
  methods: {
    ScrollProcess (section) {
      this.LastClick = section
      this.drawer = false
    },
    Scroll (section) {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
      }
      console.log('scroll complete')
    },
    DrawerClosed () {
      this.Scroll(this.LastClick)
    },
    openUrl (url) {
      window.open(url, '_blank')
    }
  }
}

</script>

<style>
.contain {
  height: 50%;
  padding: 0px;
}
.el-tabs__header.is-top {
  margin-bottom: 0px;
}
.el-tabs.el-tabs--top {
  background-color: cornsilk;
}
.el-tabs__nav-prev {
  padding-left: 5px;
  background-color: gainsboro;
}
.el-tabs__nav-next {
  padding-right: 5px;
  background-color: gainsboro;
}
.mobile-navtab {
  display: flex;
  justify-content: center;
}
.mobile-drawer {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
}
.el-drawer__header {
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.el-drawer__body {
  padding-left: 10px;
  padding-right: 10px;
}
.el-menu-item {
  height: 13vmin;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section1 {
  background-color: #3c599b;
  background-image: url("../assets/section1_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
}
.section2 {
  background-image: url("../assets/section2_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section3 {
  background-image: url("../assets/section3_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.section4 {
  background-image: url("../assets/section4_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section5 {
  background-image: url("../assets/section5_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.section6 {
  background-image: url("../assets/section6_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
}
.section7 {
  background-image: url("../assets/section7_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
}
.section8 {
  background-image: url("../assets/section8_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
}

.main_title_container {
  text-align: left;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  width: 80vmin;
}

.main_title {
  position: relative;
  z-index: 100;
  font-size: 10vmin;
  font-weight: 900;
  text-align: center;
}
.rule_container {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  width: 93vmin;
  text-align: left;
}
.faq_container {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  width: 93vmin;
  text-align: left;
}
.news_container {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  width: 93vmin;
  text-align: left;
}

.el-collapse-item__content,
.el-collapse-item__header {
  padding-left: 3vmin;
  padding-right: 3vmin;
  padding-bottom: 3px;
}
.el-collapse-item__wrap {
  padding: 0px;
}

.el-divider.el-divider--horizontal {
  margin-top: 2vmin;
  margin-bottom: 2vmin;
  margin-left: 0px;
  margin-right: 0px;
  background-color: rgb(133, 133, 133);
}
.el-collapse-item__content {
  padding-bottom: 0px;
}

section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-drawer__body {
  display: block;
}

.main {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
