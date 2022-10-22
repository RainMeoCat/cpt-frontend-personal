<template>
  <div class="main">
    <a
      href="https://github.com/RainMeoCat/cpt-frontend-personal"
      class="github-corner"
      target="_blank"
      aria-label="View source on GitHub"
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 250 250"
        class="octocat"
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px;"
          class="octo-arm"
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        />
      </svg>
    </a>
    <!-- 懸浮的div，包著側邊選單和回到頂端按鈕 -->
    <div style="
        float: right;
        z-index: 2;
        position: fixed;
        right: 1vmin;
        padding-top: 15vmin;
      ">
      <!-- 側邊懸浮選單 -->
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="in-out"
      >
        <el-row
          :span="10"
          style="margin-right: 10px"
          v-show="MenuT"
        >
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
                <template #title><i class="el-icon-s-flag"></i><span>關於競賽</span></template>
              </el-menu-item>
              <el-menu-item
                index="2"
                @click="Scroll('News')"
              >
                <template #title><i class="el-icon-s-platform"></i><span>最新消息</span></template>
              </el-menu-item>
              <el-menu-item
                index="3"
                @click="Scroll('Schedule')"
              >
                <template #title><i class="el-icon-time"></i><span>競賽時程</span></template>
              </el-menu-item>
              <el-menu-item
                index="4"
                @click="Scroll('Rule')"
              >
                <template #title><i class="el-icon-s-check"></i><span>競賽辦法</span></template>
              </el-menu-item>
              <el-menu-item
                index="5"
                @click="Scroll('List')"
              >
                <template #title><i class="el-icon-tickets"></i><span>名單公布</span></template>
              </el-menu-item>

              <el-menu-item
                index="6"
                @click="Scroll('Works')"
              >
                <template #title><i class="el-icon-s-open"></i><span>歷屆作品</span></template>
              </el-menu-item>

              <el-menu-item
                index="7"
                @click="Scroll('Activities')"
              >
                <template #title><i class="el-icon-camera"></i><span>活動花絮</span></template>
              </el-menu-item>

              <el-menu-item
                index="8"
                @click="Scroll('Faq')"
              >
                <template #title><i class="el-icon-question"></i><span>FAQ</span></template>
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
            width: 145px;
          "
          @click.native="Scroll('Index')"
          v-show="HomeBtn"
        >回到頂端</el-button>
      </transition>
    </div>

    <section
      class="section1"
      id="Index"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S1t"
        >
          <div class="main_title">第〇屆貓貓盃<br />全國摸貓競賽</div>
          <div style="font-size: 3vmin">
            徵稿至 2222-2-22(五) 22:22<br />
            總獎金 22,222 元整
          </div>
          <el-button
            plain
            round
            style="
              margin-top: 10px;
              width: 20vmin;
              font-weight: 900;
              font-size: 20px;
              height: 47px;
              text-align:
              font-family: Microsoft JhengHei
            "
            class="
              animate__animated animate__pulse animate__infinite animate__slower
            "
            onclick="window.open('https://www.youtube.com/watch?v=8dVQ0813KVM')"
            target="_blank"
          >立即報名</el-button>
        </div>
      </transition>
      <div
        style="
          color: white;
          font-size: 2vmin;
          position: absolute;
          bottom: 50px;
          width: 100%;
          text-align: center;
          font-weight: bold;
          filter: drop-shadow(3px 3px 2px #000000);
        "
        class="float"
      >
        向下捲動以查看更多<br />
        <i
          style="font-size: 7vmin"
          class="el-icon-bottom"
        ></i>
      </div>
    </section>
    <section
      class="section2"
      id="Info"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S2t"
        >
          <div class="main_title">關於競賽</div>
          <div style="font-size: 2vmin">
            <loremIpsum add="1p" />
          </div>
          <el-divider></el-divider>
          <el-row :gutter="24">
            <el-col :span="8">
              <div class="grid-content bg-purple">主辦單位</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <a
                  href="https://imgur.com/MBDRtdr.jpg"
                  target="_blank"
                  style="text-decoration:none;color:#ffffff"
                >貓貓國王</a>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <div class="grid-content bg-purple">協辦單位</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <ul style="padding: 0px; margin: 0px">
                  <li>金融貓咪系</li>
                  <li>會計貓咪系</li>
                  <li>貓咪金融科技中心</li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </transition>
    </section>
    <section
      class="section3"
      id="News"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S3t"
        >
          <div class="main_title">最新消息</div>
          <el-divider></el-divider>
          <el-collapse
            accordion
            style="border: 0px; padding-bottom: 0px; border-radius: 5px"
          >
            <el-collapse-item>
              <template slot="title"><i class="header-icon el-icon-info"></i>
                初賽徵稿至 2222-2-2 (五) 22:22止
              </template>
              <div>
                <loremIpsum add="8s" />
                <el-divider></el-divider>
                <loremIpsum add="8s" />

                <el-divider></el-divider>
                評審委員在每組中評選10隊晉級決賽(視狀況酌予增減)
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </transition>
    </section>
    <section
      class="section4"
      id="Schedule"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S4t"
        >
          <div class="main_title">競賽時程</div>
          <el-divider></el-divider>
          <div style="padding-top: 3vmin">
            <el-timeline style="padding-left: 15vmin">
              <el-timeline-item
                v-for="(activity, index) in this.$Global_data.Activities"
                :key="index"
                :timestamp="activity.timestamp"
              >
                <div style="color: #ffffff; font-size: 3vmin">
                  {{ activity.content }}
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </transition>
    </section>
    <section
      class="section5"
      id="Rule"
      style="overflow-y: scroll"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S5t"
          style="width: 70vw"
        >
          <div class="main_title">競賽辦法</div>
          <el-divider></el-divider>
          <el-row
            style="overflow-y: scroll; overflow-x: hidden"
            :gutter="20"
          >
            <el-col :span="6">
              <el-container class="RuleTitleContainer">
                <div
                  v-for="(el, index) in this.Rules"
                  :key="index"
                  class="RuleTitle"
                  :class="{ RuleIndexActive: RuleIndex === index }"
                  @click="RuleIndex = index"
                >
                  {{ el }}
                </div>
              </el-container>
            </el-col>
            <el-col :span="18">
              <el-container class="RuleContentContainer">
                <transition
                  name="el-fade-in"
                  mode="out-in"
                >
                  <div
                    key="0"
                    v-if="RuleIndex === 0"
                  >
                    <div class="RuleContentTitle">參賽對象</div>
                    <el-divider style="margin-top: 1vmin; margin-bottom: 1vmin"></el-divider>
                    <div class="RuleContent">
                      人類皆可參加！
                    </div>
                  </div>
                  <div
                    key="1"
                    v-else-if="RuleIndex === 1"
                  >
                    <div class="RuleContentTitle">組別說明</div>
                    <el-divider style="margin-top: 1vmin; margin-bottom: 1vmin"></el-divider>
                    <div class="RuleContent">
                      <div>
                        <span>職業組</span>
                        <br />
                        <span>超級職業摸貓團隊，給你最賞心悅目和刺激的摸貓比賽觀賞體驗!</span>
                      </div>
                      <el-divider></el-divider>
                      <div>
                        業餘組
                        <br />
                        不輸職業組的業餘摸貓團隊，給你最平易近人又搞笑的摸貓比賽觀賞體驗!
                      </div>
                    </div>
                  </div>
                  <div
                    key="2"
                    v-else-if="RuleIndex === 2"
                  >
                    <div class="RuleContentTitle">【決賽】競賽規定</div>
                    <el-divider style="margin-top: 1vmin; margin-bottom: 1vmin"></el-divider>
                    <div class="RuleContent">
                      <loremIpsum add="7s" />
                      <el-divider></el-divider>
                      <loremIpsum add="7s" />
                      <el-divider></el-divider>
                      <loremIpsum add="6s" />
                    </div>
                  </div>
                  <div
                    key="3"
                    v-else-if="RuleIndex === 3"
                  >
                    <div class="RuleContentTitle">【決賽】評分項目</div>
                    <el-divider style="margin-top: 1vmin; margin-bottom: 1vmin"></el-divider>
                    <div class="RuleContent">
                      <el-row
                        style="overflow-y: scroll; overflow-x: hidden"
                        :gutter="60"
                      >
                        <el-col :span="12">
                          <div style="
                              text-align: center;
                              font-size: 3vmin;
                              font-weight: 900;
                            ">
                            職業組
                          </div>
                          <Pie-chart
                            :chart-data="this.$Global_data.DataC2"
                            :options="options"
                          ></Pie-chart>
                        </el-col>
                        <el-col :span="12">
                          <div style="
                              text-align: center;
                              font-size: 3vmin;
                              font-weight: 900;
                            ">
                            業餘組
                          </div>
                          <Pie-chart
                            :chart-data="this.$Global_data.DataI2"
                            :options="options"
                          ></Pie-chart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div
                    key="4"
                    v-else-if="RuleIndex === 4"
                  >
                    <div class="RuleContentTitle">獎勵方法</div>
                    <el-divider style="margin-top: 1vmin; margin-bottom: 1vmin"></el-divider>
                    <div class="RuleContent">
                      <ol>
                        <li
                          v-for="(el, index) in this.$Global_data.AwardInfo"
                          :key="index"
                        >
                          {{ el.data }}
                        </li>
                      </ol>
                      <el-divider></el-divider>
                      <ul>
                        <li
                          v-for="(el, index) in this.$Global_data.IdeaAward"
                          :key="index"
                        >
                          {{ el.data }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    key="5"
                    v-else-if="RuleIndex === 5"
                  >
                    <div class="RuleContentTitle">注意事項</div>
                    <el-divider style="margin-top: 1vmin; margin-bottom: 1vmin"></el-divider>
                    <div class="RuleContent">
                      <loremIpsum add="3p" />
                    </div>
                  </div>
                </transition>
              </el-container>
            </el-col>
          </el-row>
        </div>
      </transition>
    </section>
    <section
      class="section6"
      id="List"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S6t"
        >
          <div class="main_title">名單公布</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <div style="color:white">
            <loremIpsum add="2p" />
          </div>
        </div>
      </transition>
    </section>
    <section
      class="section7"
      id="Works"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S7t"
        >
          <div class="main_title">歷屆得獎人</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-container class="RuleContentContainer">
            <h2 class="el-icon-star-on">2020年第一屆得獎人</h2>
            <el-collapse accordion>
              <el-collapse-item
                title="職業組"
                name="1"
              >
                <el-row style="width:85%">
                  <el-col :span="24">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />Bessie O'Quinn
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />Tahir Ruiz
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Bradlee Dillon
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Greg Hoffman
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                title="業餘組"
                name="2"
              >
                <el-row style="width:85%">
                  <el-col :span="24">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />Jaya Blundell
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />Nicholas Delacruz
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Dahlia Almond
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Tobey Bonilla
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Aled Bass
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Lillie-Mae Crane
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Charles Mcfarlane
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
            <h2 class="el-icon-star-on">2021年第二屆得獎名單</h2>
            <el-collapse accordion>
              <el-collapse-item
                title="職業組"
                name="1"
              >
                <el-row style="width:70%">
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />Clara Leal
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />Ruby-May Barnett
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Caden Ferry
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Renee Burke
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Zakary Perez
                      </li>
                    </ul>
                  </el-col>
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Serenity Gray
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Teejay Sullivan
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Shania Talley
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Huda Cantrell
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Tanya Sloan
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                title="業餘組"
                name="2"
              >
                <el-row style="width:70%">
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />Leandro Holden
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />Darien Roach
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Alison Hammond
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Zofia Chamberlain
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Ann Tillman
                      </li>
                    </ul>
                  </el-col>
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Amman Lyon
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />Neive Goldsmith
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Meadow Morton
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Poppy-Mae Sullivan
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Yasir Witt
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </el-container>
        </div>
      </transition>
    </section>
    <section
      class="section8"
      id="Activities"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S8t"
          style="width: 60vw"
        >
          <div class="main_title">活動花絮</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-container class="RuleContentContainer">
            <h2 class="el-icon-camera">2021年第二屆活動花絮</h2>
            <el-collapse accordion>
              <el-collapse-item
                title="活動影片"
                name="1"
              >
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/cwyTleTL06Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-container>
        </div>
      </transition>
    </section>
    <section
      class="section9"
      id="Faq"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <div
          class="main_title_container"
          v-show="S9t"
        >
          <div class="main_title">FAQ</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-collapse
            accordion
            style="border: 0px; padding-bottom: 0px"
          >
            <el-collapse-item>
              <template slot="title"><i class="header-icon el-icon-info"></i>
                聯絡窗口
              </template>
              <div class="sub-item">
                <div>
                  <span>如有任何問題請不要問我</span><br />
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title"><i class="header-icon el-icon-info"></i>
                簡章全文
              </template>
              <el-link
                type="primary"
                href="https://www.youtube.com/watch?v=w3Fq7D_iBiE"
                target="_blank"
              >點擊下載簡章全文</el-link><br />
            </el-collapse-item>
          </el-collapse>
        </div>
      </transition>
    </section>
  </div>
</template>

<script lang="js">
import PieChart from './PieChart.js'
import LoremIpsum from 'vue-lorem-ipsum'
export default {
  components: {
    PieChart,
    LoremIpsum
  },
  data () {
    return {
      waringdialogVisible: true,
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
      S8t: false, // 滾動進入動畫：section8(活動花絮)
      S9t: false, // 滾動進入動畫：section9(Faq)
      RuleIndex: 0,
      RuleFirstTip: true,
      options: { // 圓餅圖選項
        responsive: true,
        plugins: { // chartjs-plugin-datalabels設定
          datalabels: {
            formatter: (value, ctx) => { // 圓餅圖上的標籤格式化
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
            align: 'start',
            textAlign: 'center', // labels設定對齊樣式
            font: {
              weight: 'bold',
              size: 18
            },
            offset: -40
          }
        }
      },
      Rules: [
        '參賽對象', '組別說明', '【決賽】競賽規定', '【決賽】評分項目', '獎勵辦法', '注意事項'
      ]
    }
  },
  metaInfo: {
    title: '貓貓盃全國摸貓競賽',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'keywords', content: '貓咪 作品集 迷因'
      },
      {
        name: 'description', content: '貓貓盃全國摸貓競賽，摸貓貓 摸貓貓'
      }
    ]
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
      SELF.MenuIndex = '' + Math.round(window.scrollY / parseInt(document.body.clientHeight / 9))// parseInt(document.body.clientHeight / window.scrollY)
      // 滾動監聽，這裡處理側邊懸浮選單的高亮Index，計算現在滾到哪一個section，綁定到MenuIndex。
      switch (Math.round(window.scrollY / parseInt(document.body.clientHeight / 9))) {
        case (0): {
          SELF.S2t = true
          SELF.$router.push('').catch(() => {})
          break
        }
        case (1): {
          SELF.S2t = true
          SELF.$router.push('#Info').catch(() => {})
          break
        }
        case (2): {
          SELF.S3t = true
          SELF.$router.push('#News').catch(() => {})
          break
        }
        case (3): {
          SELF.S4t = true
          SELF.$router.push('#Schedule').catch(() => {})
          break
        }
        case (4): {
          SELF.S5t = true
          if (SELF.RuleFirstTip) {
            SELF.$message.success('點擊左邊的項目來查看詳細內容！')
            SELF.RuleFirstTip = false
          }
          SELF.$router.push('#Rules').catch(() => {})
          break
        }
        case (5): {
          SELF.S6t = true
          SELF.$router.push('#List').catch(() => {})
          break
        }
        case (6): {
          SELF.S7t = true
          SELF.$router.push('#Works').catch(() => {})
          break
        }
        case (7): {
          SELF.S8t = true
          SELF.$router.push('#Activites').catch(() => {})
          break
        }
        case (8): {
          SELF.S9t = true
          SELF.$router.push('#Faq').catch(() => {})
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
.el-bottom-item {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.final-li {
  list-style: none;
}
.final-li > li {
  padding-left: 1rem;
  text-indent: -0.7rem;
}
.final-li > li::before {
  content: "🏅 ";
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
  background-image: url("../assets/section1_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.section9 {
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

.CarouselImg {
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
.section8,
.section9 {
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
.RuleTitle {
  color: #303133;
  padding: 5px;
  border-radius: 5px;
  transition: all 500ms;
}
.RuleTitle:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 500ms;
}
.RuleTitleContainer {
  text-align: left;
  font-size: 2.5vmin;
  font-weight: 900;
  height: 60vh;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  overflow-y: scroll;
}
.RuleContentContainer {
  text-align: left;
  font-size: 2vmin;
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  color: #303133;
}
.RuleContentTitle {
  text-align: left;
  font-size: 3vmin;
  font-weight: 900;
  color: #303133;
}
.RuleContent {
  text-align: left;
  font-size: 2vmin;
  color: #303133;
}
.RuleIndexActive {
  color: #409eff;
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.float {
  animation: float 6s ease-in-out infinite;
}
.el-collapse >>> .el-collapse-item__header {
  padding-left: 15px;
}
.el-collapse >>> .el-collapse-item__content {
  padding-left: 15px;
}
.octocat {
  fill: #ffffff3a;
  mix-blend-mode: hard-light;
  color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  border: 0;
  right: 0;
  z-index: 5;
}
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
