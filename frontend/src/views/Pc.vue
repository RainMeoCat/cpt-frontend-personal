<template>
  <div class="main">
    <!-- 懸浮的div，包著側邊選單和回到頂端按鈕 -->
    <div
      style="
        float: right;
        z-index: 999;
        position: fixed;
        right: 1vmin;
        padding-top: 25vmin;
      "
    >
      <!-- 側邊懸浮選單 -->
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="in-out"
      >
        <el-row :span="10" style="margin-right: 10px" v-show="MenuT">
          <el-col>
            <el-menu
              class="el-menu-vertical-demo"
              text-color="#9E9E9E"
              active-text-color="#409EFF"
              :default-active="MenuIndex"
            >
              <el-menu-item
                index="1"
                @click="Scroll('Info')"
                class="el-top-item"
              >
                <template #title
                  ><i class="el-icon-s-flag"></i><span>關於競賽</span></template
                >
              </el-menu-item>
              <el-menu-item index="2" @click="Scroll('News')">
                <template #title
                  ><i class="el-icon-s-platform"></i
                  ><span>最新消息</span></template
                >
              </el-menu-item>
              <el-menu-item index="3" @click="Scroll('Schedule')">
                <template #title
                  ><i class="el-icon-time"></i><span>競賽時程</span></template
                >
              </el-menu-item>
              <el-menu-item index="4" @click="Scroll('Rule')">
                <template #title
                  ><i class="el-icon-s-check"></i
                  ><span>競賽辦法</span></template
                >
              </el-menu-item>
              <el-menu-item index="5" @click="Scroll('List')">
                <template #title
                  ><i class="el-icon-tickets"></i
                  ><span>名單公布</span></template
                >
              </el-menu-item>

              <el-menu-item index="6" @click="Scroll('Works')">
                <template #title
                  ><i class="el-icon-s-open"></i><span>歷屆作品</span></template
                >
              </el-menu-item>
              <el-menu-item
                index="7"
                @click="Scroll('Faq')"
                class="el-bottom-item"
              >
                <template #title
                  ><i class="el-icon-question"></i><span>FAQ</span></template
                >
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </transition>
      <!-- 回到頂端按鈕 -->
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
      >
        <el-button
          type="primary"
          icon="el-icon-s-home"
          style="
            box-shadow: 2px 2px 5px rgb(50, 50, 50);
            float: right;
            z-index: 999;
            position: fixed;
            right: 2vmin;
            bottom: 2vmin;
            width: 126px;
          "
          @click.native="Scroll('Index')"
          v-show="HomeBtn"
          >回到頂端</el-button
        >
      </transition>
    </div>

    <section class="section1" id="Index">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S1t">
          <div class="main_title">高科盃<br />全國商業智慧競賽</div>
          <div style="font-size: 3vmin">
            徵稿至 2021-10-7 （四）<br />
            總獎金50,000元整
          </div>
          <el-button
            plain
            round
            style="
              margin-top: 10px;
              width: 15vmin;
              font-weight: 900;
              font-size: 20px;
              height: 47px;
              text-align:
              font-family: Microsoft JhengHei
            "
            class="
              animate__animated animate__pulse animate__infinite animate__slower
            "
            onclick="window.open('https://nkust-ic.kktix.cc/events/20211024')"
            target="_blank"
            >立即報名</el-button
          >
        </div>
      </transition>
    </section>
    <section class="section2" id="Info">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S2t">
          <div class="main_title">關於競賽</div>
          <div style="font-size: 2vmin">
            為引發高中職學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。國立高雄科技大學商業智慧學院暨智慧商務系舉辦「第二屆高科盃全國商業智慧競賽」，期盼能激發學生創意及興趣，並提供全國各校學生相互交流的機會。
          </div>
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
        </div></transition
      >
    </section>
    <section class="section3" id="News">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S3t">
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
        </div></transition
      >
    </section>
    <section class="section4" id="Schedule">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S4t">
          <div class="main_title">競賽時程</div>
          <el-divider></el-divider>
          <div style="padding-top: 3vmin">
            <el-timeline style="padding-left: 15vmin">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                <div style="color: #ffffff; font-size: 3vmin">
                  {{ activity.content }}
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div></transition
      >
    </section>
    <section class="section5" id="Rule" style="overflow-y: scroll">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S5t" style="width: 70vw">
          <div class="main_title">競賽辦法</div>
          <el-divider></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
            <el-collapse-item title="參賽對象"
              ><div class="sub-item">
                全國高中職在學生，不拘科系皆可參加！
              </div></el-collapse-item
            >
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-info"></i>
                組別說明
              </template>
              <div class="sub-item">
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
              </div></el-collapse-item
            >
            <el-collapse-item title="【初賽】交件說明"
              ><div class="sub-item">
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
              </div></el-collapse-item
            >
            <el-collapse-item title="【初賽】評分項目"
              ><div class="sub-item">
                <el-row
                  style="overflow-y: scroll; overflow-x: hidden"
                  :gutter="60"
                >
                  <el-col :span="12">
                    <div
                      style="
                        text-align: center;
                        font-size: 3vmin;
                        font-weight: 900;
                      "
                    >
                      概念組
                    </div>
                    <Pie-chart
                      :chart-data="dataC"
                      :options="options"
                    ></Pie-chart>
                  </el-col>
                  <el-col :span="12">
                    <div
                      style="
                        text-align: center;
                        font-size: 3vmin;
                        font-weight: 900;
                      "
                    >
                      實作組
                    </div>
                    <Pie-chart
                      :chart-data="dataI"
                      :options="options"
                    ></Pie-chart>
                  </el-col>
                </el-row></div
            ></el-collapse-item>
            <el-collapse-item title="【決賽】交件說明"
              ><div class="sub-item">
                概念組請繳交簡報<el-link
                  type="primary"
                  href="./attach_3.pdf"
                  target="_blank"
                  >(附件三)</el-link
                ><br />
                實作組不須繳交資料，若需使用簡報報告大會亦無限定格式，請自行發揮，相關設備也請自行攜帶
              </div></el-collapse-item
            >
            <el-collapse-item title="【決賽】評分項目"
              ><div class="sub-item">
                <el-row
                  style="overflow-y: scroll; overflow-x: hidden"
                  :gutter="60"
                >
                  <el-col :span="12">
                    <div
                      style="
                        text-align: center;
                        font-size: 3vmin;
                        font-weight: 900;
                      "
                    >
                      概念組
                    </div>
                    <Pie-chart
                      :chart-data="dataC2"
                      :options="options"
                    ></Pie-chart>
                  </el-col>
                  <el-col :span="12">
                    <div
                      style="
                        text-align: center;
                        font-size: 3vmin;
                        font-weight: 900;
                      "
                    >
                      實作組
                    </div>
                    <Pie-chart
                      :chart-data="dataI2"
                      :options="options"
                    ></Pie-chart>
                  </el-col>
                </el-row></div
            ></el-collapse-item>
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-star-on"></i>
                獎勵辦法
              </template>
              <div class="sub-item">
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
              </div></el-collapse-item
            >
            <el-collapse-item style="padding-bottom: 0px">
              <template slot="title"
                ><i class="header-icon el-icon-warning"></i>
                注意事項（共十二點）
              </template>
              <el-scrollbar style="height: 60vmin" tag="ul">
                <div class="sub-item">
                  <div>
                    <ol style="margin: 0px; padding-left: 0vmin">
                      <li v-for="(el, index) in cpt_caution" :key="index">
                        {{ el.data }}
                      </li>
                    </ol>
                  </div>
                </div>
              </el-scrollbar></el-collapse-item
            >
          </el-collapse>
        </div></transition
      >
    </section>
    <section class="section6" id="List">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S6t">
          <div class="main_title">名單公布</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <span>尚未有任何名單公布</span>
        </div></transition
      >
    </section>
    <section class="section7" id="Works">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S7t">
          <div class="main_title">歷屆作品</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <span>尚未有歷屆作品</span>
        </div></transition
      >
    </section>
    <section class="section8" id="Faq">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div class="main_title_container" v-show="S8t">
          <div class="main_title">FAQ</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-info"></i>
                聯絡窗口
              </template>
              <div class="sub-item">
                <div>
                  <span>如有任何問題請先洽詢聯絡窗口或粉絲專頁私訊</span><br />
                  <span
                    >國立高雄科技大學智慧商務系杜助理電子郵件：momo@nkust.edu.tw<br />聯絡電話：07-3814526
                    分機：17560<br
                  /></span>
                  <span
                    style="
                      color: linear-gradient(
                        to right,
                        orange,
                        yellow,
                        green,
                        cyan,
                        blue,
                        violet
                      );
                      width: 100%;
                    "
                    >開發團隊/網頁維護：ITALAB</span
                  >
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </transition>
    </section>
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
      HomeBtn: false, // 回到首頁按鈕
      MenuIndex: '0', // 側邊懸浮選單高亮Index(滾動綁定)
      LoadingV: '', // 載入動畫，預先在這裡宣告，以供在不同的實例下取得這個參數
      MenuT: false, // 側邊懸浮選單進入動畫
      S1t: false, // 滾動進入動畫：section1(index 首頁)
      S2t: false, // 滾動進入動畫：section2(Info 關於競賽)
      S3t: false, // 滾動進入動畫：section3(News 最新消息)
      S4t: false, // 滾動進入動畫：section4(Schedule 競賽時程)
      S5t: false, // 滾動進入動畫：section5(Rule 競賽辦法)
      S6t: false, // 滾動進入動畫：section6(List 名單公布)
      S7t: false, // 滾動進入動畫：section7(Works 歷屆作品)
      S8t: false, // 滾動進入動畫：section8(Faq)
      options: { // 圓餅圖選項
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
      },
      activities: [ // 競賽時程
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
          content: '決賽暨頒獎典禮',
          timestamp: '2021-10-24'
        }
      ],
      dataC: { // 競賽辦法.初賽評分項目.概念組
        labels: ['作品創作理念', '提案創新性', '市場應用可行性', '報告完整度', '預期效益'],
        datasets: [
          {
            data: [10, 30, 30, 10, 20],
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
      dataI: { // 競賽辦法.初賽評分項目.實作組
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
      },
      dataC2: { // 競賽辦法.決賽評分項目.概念組
        labels: ['簡報內容', '現場表達能力', '問題回覆', '簡報技巧', '時間控制'],
        datasets: [
          {
            data: [50, 20, 10, 10, 10],
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
      dataI2: { // 競賽辦法.決賽評分項目.實作組
        labels: ['創新想法', '作品穩定性', '作品實用性', '表達能力', '作品完整度'],
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
      },
      cpt_caution: [ // 競賽辦法.注意事項
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
      ],
      award_info: [ // 競賽辦法.獎勵辦法
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
      idea_award: [ // 競賽辦法.獎勵辦法
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
      ]
    }
  },
  methods: {
    Scroll (section) {
      // 由側邊懸浮選單觸發，傳入section的id，以此宣告常數EL
      // 並呼叫document的method:scrollIntoView捲動卷軸直到該元素可見。
      const EL = document.getElementById(section)
      if (EL) {
        EL.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  },
  mounted () {
    const SELF = this
    // 這裡的this是vue
    // 因為callback中的這個繫結沒有指向vue實例。
    // 為解決這個問題，在建立的hook中定義一個變數var SELF = this，指向vue實例，在callback中使用SELF引用資料屬性。
    window.addEventListener('scroll', function () {
      SELF.s2t = true
      if (window.scrollY > 800) {
        SELF.HomeBtn = true
      } else {
        SELF.HomeBtn = false
      }
      // 滾動監聽，這裡處理回到頂端，當滾動量大於800時讓HomeBtn出現
      SELF.MenuIndex = '' + Math.round(window.scrollY / parseInt(document.body.clientHeight / 8))// parseInt(document.body.clientHeight / window.scrollY)
      // 滾動監聽，這裡處理側邊懸浮選單的高亮Index，計算現在滾到哪一個section，綁定到MenuIndex。
      switch (Math.round(window.scrollY / parseInt(document.body.clientHeight / 8))) {
        case (0): {
          SELF.S2t = true
          SELF.$router.push('')
          break
        }
        case (1): {
          SELF.S2t = true
          SELF.$router.push('#Info')
          break
        }
        case (2): {
          SELF.S3t = true
          SELF.$router.push('#News')
          break
        }
        case (3): {
          SELF.S4t = true
          SELF.$router.push('#Schedule')
          break
        }
        case (4): {
          SELF.S5t = true
          SELF.$router.push('#Rules')
          break
        }
        case (5): {
          SELF.S6t = true
          SELF.$router.push('#List')
          break
        }
        case (6): {
          SELF.S7t = true
          SELF.$router.push('#Works')
          break
        }
        case (7): {
          SELF.S8t = true
          SELF.$router.push('#Faq')
          break
        }
        // 滾動監聽，這裡處理進入動畫和網址的更新，計算現在滾到哪一個section，逐一讓一個個section出現，同時推入section的id到網址。
      }
    })
    window.addEventListener('load', function (event) {
      SELF.LoadingV.close()
      setTimeout(() => {
        SELF.MenuT = true
        SELF.S1t = true
      }, 500)
    })
    // 頁面載入監聽，除了使全屏載入畫面關閉，也呼叫位在第一個Section的動畫出現。
  },
  created () {
    this.LoadingV = this.$loading({
      lock: true,
      text: '載入中...',
      spinner: 'el-icon-loading',
      background: 'rgb(255, 255, 255)'
    })
    // 在Vue生命週期:created階段建立一個element ui Loading實例，並在Mounted階段將關閉的呼叫加入頁面載入完成的監聽器。
  }
}
</script>

<style scoped>
.el-menu {
  box-shadow: 2px 2px 5px rgb(50, 50, 50);
  border-radius: 5px;
}

.el-menu-item {
  text-align: left;
  height: 55px;
}

.el-top-item {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.el-collapse-item__header {
  font-size: 16px;
}
.el-bottom-item {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.section1 {
  background-image: url("../assets/section1_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section2 {
  background-image: url("../assets/section2_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section3 {
  background-image: url("../assets/section3_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section4 {
  background-image: url("../assets/section4_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section5 {
  background-image: url("../assets/section5_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section6 {
  background-image: url("../assets/section6_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section7 {
  background-image: url("../assets/section7_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section8 {
  background-image: url("../assets/section8_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.main_title_container {
  text-align: left;
  padding: 50px;
  background: linear-gradient(
    to bottom,
    rgba(30, 87, 153, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  /* mix-blend-mode:color-burn; */
  color: rgb(255, 255, 255);
  width: 50vw;
}

.main_title {
  position: relative;
  z-index: 100;
  font-size: 10vmin;
  font-weight: 900;
  text-align: left;
}

section {
  height: 100vh;
  display: block;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: #a6a6a6;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
  border-radius: 10px;
}

.section1,
.section2,
.section3,
.section4,
.section5,
.section6,
.section7,
.section8 {
  display: flex;
  justify-content: left;
  align-items: center;
}
.sub-item {
  font-size: 2vmin;
}
.main {
  font-family: Microsoft JhengHei;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
