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
          為引發高中職學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。國立高雄科技大學商業智慧學院暨智慧商務系舉辦「第二屆高科盃全國商業智慧競賽」，期盼能激發學生創意及興趣，並提供全國各校學生相互交流的機會。
        </div>
      </section>
      <section class="section3" id="News">
        <div class="main_title_container">
          <div class="main_title">初賽徵稿至 2021-10-7日止</div>
          <div>
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
        <div class="main_title_container">
          <div class="main_title">競賽時程</div>
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
      <section class="section5" id="Rule">
        <el-empty description="現在空空的，是在哭？"></el-empty>
      </section>
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
    <el-drawer
      title="快速選單"
      :visible.sync="drawer"
      direction="btt"
      size="80%"
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
          style="height: 100px; font-weight: 900; font-size: 20px"
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
          >
            <el-menu-item index="1" @click="Scroll('Info')" class="el-top-item">
              <template #title
                ><i class="el-icon-s-platform"></i
                ><span>最新消息</span></template
              >
            </el-menu-item>
            <el-menu-item index="2" @click="drawer = !drawer">
              <template #title
                ><i class="el-icon-menu"></i><span>快速選單</span></template
              >
            </el-menu-item>
            <el-menu-item index="3" @click="Scroll('Schedule')">
              <template #title
                ><i class="el-icon-time"></i><span>競賽時程</span></template
              >
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="js">
export default {
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
      ]
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

.section1 {
  background-color: #3c599b;
  background-image: url("../assets/section1_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section2 {
  background-image: url("../assets/section2_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.section3 {
  background-image: url("../assets/section2_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.section4 {
  background-image: url("../assets/section2_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
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

section {
  height: 100vh;
  display: block;
}

.section1,
.section4,
.section7 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa43c;
}

.section2,
.section5,
.section8 {
  background-color: #527415;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section3,
.section6 {
  background-color: #ff3c00;
  display: flex;
  justify-content: center;
  align-items: center;
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
