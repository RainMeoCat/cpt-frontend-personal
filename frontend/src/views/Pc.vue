<template>
  <div class="main">
    <Pie-chart
      :chart-data="dataC"
      :options="options"
      style="max-width: 600px; margin: 150px auto"
    ></Pie-chart>
    <div
      style="
        float: right;
        z-index: 999;
        position: fixed;
        right: 1vmin;
        height: 100vh;
        padding-top: 25vmin;
      "
    >
      <el-row :span="10" style="margin-right: 10px; height: 100vh">
        <el-col>
          <el-menu
            class="el-menu-vertical-demo"
            text-color="#9E9E9E"
            active-text-color="#409EFF"
            :default-active="MenuIndex"
          >
            <el-menu-item index="1" @click="Scroll('Info')" class="el-top-item">
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
                ><i class="el-icon-s-check"></i><span>競賽辦法</span></template
              >
            </el-menu-item>
            <el-menu-item index="5" @click="Scroll('List')">
              <template #title
                ><i class="el-icon-tickets"></i><span>名單公布</span></template
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
      <div class="main_title_container">
        <div class="main_title">高科盃<br />全國商業智慧競賽</div>
        <div style="font-size: 4vmin">
          徵稿至 2021-10-7日<br />
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
            height: 5vmin;
          "
          class="
            animate__animated animate__pulse animate__infinite animate__slower
          "
          onclick="window.open('https://www.youtube.com/watch?v=o-YBDTqX_ZU')"
          target="_blank"
          >立即報名</el-button
        >
      </div>
    </section>
    <section class="section2" id="Info">
      <div class="main_title_container">
        <div class="main_title">關於競賽</div>
        <div style="font-size: 3vmin">
          為引發高中職學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。國立高雄科技大學商業智慧學院暨智慧商務系舉辦「第二屆高科盃全國商業智慧競賽」，期盼能激發學生創意及興趣，並提供全國各校學生相互交流的機會。
        </div>
      </div>
    </section>
    <section class="section3" id="News">
      <div class="main_title_container">
        <div class="main_title" style="font-size: 5vmin">
          初賽徵稿至 2021-10-7日止
        </div>
        <div style="font-size: 2vmin">
          <span
            >概念組請繳交提案說明書(附件一)；實作組請繳交作品說明書(附件二)。</span
          >
          <el-divider></el-divider>
          <span
            >參賽作品只要有參加過國內外相關競賽者，欲以相同或相近內容參與本競賽，無論是否獲獎，皆須填寫延續性作品說明書，連同初賽作品、學生證明、著作財產權授權同意書、法定代理人同意書、請上傳至google表單，不須提供紙本。(https://forms.gle/coDqU3Nu92N4dvmCA)</span
          >
          <el-divider></el-divider>
          <span>評審委員在每組中評選16隊晉級決賽(視狀況酌予增減)</span>
        </div>
      </div>
    </section>
    <section class="section4" id="Schedule">
      <el-empty description="現在空空的，是在哭？"></el-empty>
    </section>
    <section class="section5" id="Rule"></section>
    <section class="section6" id="List">
      <el-empty description="現在空空的，是在哭？"></el-empty>
    </section>
    <section class="section7" id="Works">
      <el-empty description="現在空空的，是在哭？"></el-empty>
    </section>
    <section class="section8" id="Faq">
      <el-empty description="現在空空的，是在哭？"></el-empty>
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
      HomeBtn: false,
      MenuIndex: '0',
      dataC: {},
      options: {
        rotation: 0.65,
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    show () {
      this.HomeBtn = !this.HomeBtn
    },
    Scroll (section) {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    fillData () {
      this.dataC = {
        labels: ['金字塔的亮面', '金字塔的暗面', '天空'],
        datasets: [
          {
            label: 'Data One',
            data: [100, 35, 300],
            backgroundColor: [
              'rgb(249, 223, 137)',
              'rgb(219, 154, 89)',
              'rgb(102, 204, 255)'
            ],
            options: this.options
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  mounted () {
    this.fillData()
    const self = this// 這裡的this是vueco
    // 因為callback中的這個繫結沒有指向vue實例。
    // 為解決這個問題，在建立的hook中定義一個變數var self = this，指向vue實例，在callback中使用self引用資料屬性。
    window.addEventListener('scroll', function () {
      if (window.scrollY > 800) {
        self.HomeBtn = true
      } else {
        self.HomeBtn = false
      }
      self.MenuIndex = '' + Math.round(window.scrollY / parseInt(document.body.clientHeight / 8))// parseInt(document.body.clientHeight / window.scrollY)
    })
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
}

.el-top-item {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.el-bottom-item {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.section1 {
  background-color: #3c599b;
  background-image: url("../assets/section1_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section2 {
  background-color: #3c599b;
  background-image: url("../assets/section2_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section3 {
  background-color: #3c599b;
  background-image: url("../assets/section3_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section4 {
  background-color: #3c599b;
  background-image: url("../assets/section4_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section5 {
  background-color: #3c599b;
  background-image: url("../assets/section5_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section6 {
  background-color: #3c599b;
  background-image: url("../assets/section6_background.jpg");
  background-size: cover;
  filter: grayscale(100%);
  background-repeat: no-repeat;
  position: relative;
}
.section7 {
  background-color: #3c599b;
  background-image: url("../assets/section7_background.jpg");
  background-size: cover;
  filter: grayscale(100%);
  background-repeat: no-repeat;
  position: relative;
}
.section8 {
  background-color: #3c599b;
  background-image: url("../assets/section8_background.jpg");
  background-size: cover;
  filter: grayscale(100%);
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
  background-color: #ffa43c;
}

.main {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
