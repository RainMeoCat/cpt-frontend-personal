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
          <div class="main_title">第二屆高科盃<br />全國商業智慧競賽</div>
          <div style="font-size: 3vmin">
            徵稿至 2021-10-7(四)<br />
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
        <i style="font-size: 7vmin" class="el-icon-bottom"></i>
      </div>
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
          <el-collapse
            accordion
            style="border: 0px; padding-bottom: 0px; border-radius: 5px"
          >
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
                  target="_blank"
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
          <el-row style="overflow-y: scroll; overflow-x: hidden" :gutter="20">
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
                <transition name="el-fade-in" mode="out-in">
                  <div key="0" v-if="RuleIndex === 0">
                    <div class="RuleContentTitle">參賽對象</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      全國高中職在學生，不拘科系皆可參加！
                    </div>
                  </div>
                  <div key="1" v-else-if="RuleIndex === 1">
                    <div class="RuleContentTitle">組別說明</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
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
                    </div>
                  </div>
                  <div key="2" v-else-if="RuleIndex === 2">
                    <div class="RuleContentTitle">【初賽】交件說明</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
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
                        target="_blank"
                        >https://forms.gle/coDqU3Nu92N4dvmCA</el-link
                      >
                      <el-divider></el-divider>
                      評審委員在每組中評選16隊晉級決賽(視狀況酌予增減)
                    </div>
                  </div>
                  <div key="3" v-else-if="RuleIndex === 3">
                    <div class="RuleContentTitle">【初賽】評分項目</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
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
                            :chart-data="this.$Global_data.DataC"
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
                            :chart-data="this.$Global_data.DataI"
                            :options="options"
                          ></Pie-chart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div key="4" v-else-if="RuleIndex === 4">
                    <div class="RuleContentTitle">【決賽】交件說明</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      概念組請繳交簡報<el-link
                        type="primary"
                        href="./attach_3.pdf"
                        target="_blank"
                        >(附件三)</el-link
                      ><br />
                      實作組不需繳交資料，若須使用簡報報告大會亦無限定格式，請自行發揮，相關設備也請自行攜帶
                    </div>
                  </div>
                  <div key="5" v-else-if="RuleIndex === 5">
                    <div class="RuleContentTitle">【決賽】競賽規定</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      概念組<br />
                      評審針對參賽者簡報內容及表現進行評分。每隊4分鐘，問答時間3分鐘(統問統答)，簡報統一由大會電腦投影。
                      <el-divider></el-divider>
                      實作組<br />
                      各隊展示、解說作品(展場規定請參照<el-link
                        type="primary"
                        href="./attach_4.pdf"
                        target="_blank"
                        >(附件四)</el-link
                      >)，由評審針對作品及報告進行評分，每隊10分鐘，問答時間5分鐘(統問統答)。
                    </div>
                  </div>
                  <div key="6" v-else-if="RuleIndex === 6">
                    <div class="RuleContentTitle">【決賽】評分項目</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
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
                            :chart-data="this.$Global_data.DataC2"
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
                            :chart-data="this.$Global_data.DataI2"
                            :options="options"
                          ></Pie-chart>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div key="7" v-else-if="RuleIndex === 7">
                    <div class="RuleContentTitle">獎勵方法</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
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
                  <div key="8" v-else-if="RuleIndex === 8">
                    <div class="RuleContentTitle">注意事項</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      <ol>
                        <li
                          v-for="(el, index) in this.$Global_data.CptCaution"
                          :key="index"
                        >
                          {{ el.data }}
                        </li>
                      </ol>
                    </div>
                  </div>
                </transition>
              </el-container>
            </el-col>
          </el-row>
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
          <div class="main_title">歷屆得獎作品</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px;font-size:4vmin">
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-star-on"></i>
                2020年第一屆得獎題目
              </template>
              <span>概念組</span>
              <el-row :gutter="24">
                <el-col :span="4"
                  ><div class="grid-content bg-purple">特優</div></el-col
                >
                <el-col :span="20"
                  ><div class="grid-content bg-purple">
                    減重健康APP LW&H
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="24">
                <el-col :span="4"
                  ><div class="grid-content bg-purple">優等</div></el-col
                >
                <el-col :span="20"
                  ><div class="grid-content bg-purple">
                    與神同行 -鳳山 雙慈殿宗教意象行銷 策略
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="24">
                <el-col :span="4"
                  ><div class="grid-content bg-purple">佳作</div></el-col
                >
                <el-col :span="20"
                  ><div class="grid-content bg-purple">
                    <ul style="padding: 0px; margin: 0px">
                      <li>菱殼炭</li>
                      <li>失塑列車</li>
                      <li>LINE Eats 健康管理聊天機器人</li>
                      <li>行銷賣場-全聯福利中心</li>
                      <li>
                        改善舊衣回收-創造 JOY永續新生活
                        以智能設備改善傳統舊衣回收之問題
                      </li>
                    </ul>
                  </div></el-col
                >
              </el-row>
              <el-divider></el-divider>
              <span>實作組</span>
              <el-row :gutter="24">
                <el-col :span="4"
                  ><div class="grid-content bg-purple">特優</div></el-col
                >
                <el-col :span="20"
                  ><div class="grid-content bg-purple">
                    防疫戰士機器人
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="24">
                <el-col :span="4"
                  ><div class="grid-content bg-purple">優等</div></el-col
                >
                <el-col :span="20"
                  ><div class="grid-content bg-purple">
                    AIOT智能壓縮垃圾桶
                  </div></el-col
                >
              </el-row>
              <el-row :gutter="24">
                <el-col :span="4"
                  ><div class="grid-content bg-purple">佳作</div></el-col
                >
                <el-col :span="20"
                  ><div class="grid-content bg-purple">
                    <ul style="padding: 0px; margin: 0px">
                      <li>商場虛擬機器人</li>
                      <li>LINE BEACON - 尋找東南亞移民的家鄉味</li>
                    </ul>
                  </div></el-col
                >
              </el-row>
            </el-collapse-item>
          </el-collapse>
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
            <el-collapse-item>
              <template slot="title"
                ><i class="header-icon el-icon-info"></i>
                簡章全文
              </template>
              <el-link type="primary" href="./cpt_guide.pdf" target="_blank"
                >點擊下載簡章全文</el-link
              ><br />
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
        '參賽對象', '組別說明', '【初賽】交件說明', '【初賽】評分項目', '【決賽】交件說明', '【決賽】競賽規定', '【決賽】評分項目', '獎勵辦法', '注意事項'
      ]
    }
  },
  metaInfo: {
    title: '高科盃全國商業智慧競賽',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'keywords', content: '高科盃 全國商業智慧競賽 總獎金50000元整 國立高科大 國立高雄科技大學 智慧商務系 nkust ic'
      },
      {
        name: 'description', content: '為引發高中職學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。國立高雄科技大學商業智慧學院暨智慧商務系舉辦「第二屆高科盃全國商業智慧競賽」，期盼能激發學生創意及興趣，並提供全國各校學生相互交流的機會。'
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
      SELF.MenuIndex = '' + Math.round(window.scrollY / parseInt(document.body.clientHeight / 8))// parseInt(document.body.clientHeight / window.scrollY)
      // 滾動監聽，這裡處理側邊懸浮選單的高亮Index，計算現在滾到哪一個section，綁定到MenuIndex。
      switch (Math.round(window.scrollY / parseInt(document.body.clientHeight / 8))) {
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
</style>
