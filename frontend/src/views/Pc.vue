<template>
  <div class="main">
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
            default-active="1"
            text-color="#9E9E9E"
            active-text-color="#409EFF"
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
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
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
        <div style="font-size: 3vmin">
          徵稿至 2021-10-7日<br />
          總獎金50,000元整
        </div>
      </div>
    </section>
    <section class="section2" id="Info">
      <el-empty description="現在空空的，是在哭？"></el-empty>
    </section>
    <section class="section3" id="News">
      <el-empty description="現在空空的，是在哭？"></el-empty>
    </section>
    <section class="section4" id="Schedule">
      <el-empty description="現在空空的，是在哭？"></el-empty>
    </section>
    <section class="section5" id="Rule">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/y9K18CGEeiI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
</template>

<script lang="js">
export default {
  data () {
    return {
      HomeBtn: false
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
    }
  },
  created () {
    const self = this// 這裡的this是vue
    // 因為callback中的這個繫結沒有指向vue實例。
    // 為解決這個問題，在建立的hook中定義一個變數var self = this，指向vue實例，在callback中使用self引用資料屬性。
    window.addEventListener('scroll', function () {
      if (window.scrollY > 800) {
        self.HomeBtn = true
      } else {
        self.HomeBtn = false
      }
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

.main_title_container {
  text-align: left;
  padding: 50px;
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
  text-align: left;
}

section {
  height: 100vh;
  display: block;
}

.section1,
.section4,
.section7 {
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #ffa43c;
}

.section2,
.section5,
.section8 {
  background-color: #527415;
}

.section3,
.section6 {
  background-color: #ff3c00;
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
