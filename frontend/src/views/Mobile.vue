<template>
  <div class="main">
    <div class="content">
      <section class="section1" id="Top">
        <div class="main_title_container">
          <div class="main_title">第三屆高科盃<br />全國商業智慧競賽</div>
          <div style="font-size: 18px; text-align: center">
            徵稿至 2022-10-14(五) 中午12:00<br />
            總獎金 45,000 元整
          </div>
          <div style="text-align: center; padding-top: 5vmin">
            <el-button
              type="warning"
              size="medium"
              @click="openUrl('https://nkust-ic.kktix.cc/events/20211024-copy-1')"
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
            >為引發高中職及大學部學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。<br />順應新課綱強調專題實作與實習科目學習成果，鼓勵同學將上述成果延伸本競賽，展現同學在課綱核心素養的具體實現，與活用專業知識與技能的能力，並增加未來在職場創就業之競爭力。<br />國立高雄科技大學商業智慧學院及智慧商務系舉辦「第三屆高科盃全國商業智慧競賽」，期盼能激發學生創意興趣及增加未來在職場創就業之競爭力，並提供全國各校學生相互交流的機會。</span
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
                  <li>金融資訊系</li>
                  <li>會計資訊系</li>
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
                初賽徵稿至 2022-10-14 (五) 中午12:00止
              </template>
              <div>
                概念組請繳交提案說明書 <el-link
                  type="primary"
                  href="./attach_1.pdf"
                  target="_blank"
                  >(附件一)</el-link
                ><br />
                實作組請繳交作品說明書 <el-link
                  type="primary"
                  href="./attach_2.pdf"
                  target="_blank"
                  >(附件二)</el-link
                ><br />
                大學組請繳交提案說明書 <el-link
                  type="primary"
                  href="./attach_3.pdf"
                  target="_blank"
                >(附件三)</el-link>
                <el-divider></el-divider>
                參賽作品只要有參加過國內外相關競賽者，欲以相同或相近內容參與本競賽，無論是否獲獎，皆須填寫延續性作品說明書，連同初賽作品、學生證明、著作財產權授權同意書、法定代理人同意書、請上傳至google表單，不須提供紙本。<br />
                <el-link
                  type="primary"
                  href="https://forms.gle/coDqU3Nu92N4dvmCA"
                  target="_blank"
                >初賽繳件Google表單</el-link><br />
                <el-link
                  type="primary"
                  href="https://reurl.cc/WEzYee"
                  target="_blank"
                >表單下載</el-link>
                <el-divider></el-divider>
                評審委員在每組中評選10隊晉級決賽(視狀況酌予增減)
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
                v-for="(activity, index) in this.$Global_data.Activities"
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
          <div class="RuleTitleContainer">
            <div
              v-for="(el, index) in this.Rules"
              :key="index"
              class="RuleTitle"
              @click="RuleOpen(index)"
            >
              {{ el }}
            </div>
          </div>
        </div>
        <transition name="el-fade-in">
          <div
            style="
              background-color: rgba(0, 0, 0, 0.8);
              position: fixed;
              top: 0px;
              left: 0px;
              width: 100vw;
              height: 100vh;
              box-sizing: border-box;
              padding: 10px;
              z-index: 3;
            "
            v-show="dialogVisible"
          >
            <div class="RuleTitleContainer" style="padding-top: 10vmin">
              <div>
                <transition name="el-zoom-in-top" mode="out-in">
                  <div key="0" v-if="RuleIndex === 0">
                    <div class="RuleContentTitle">參賽對象</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      全國高中職及大學在學生，不拘科皆可參加！
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
                        <span>提供創意的「商業智慧」提案，可以解決或改善商務問題，優化商業行為、商業模式、商業品質上的創意產品，均適合本項競賽。參賽團隊請依照自行設定之主題，進行商業智慧的應用發想，提出產品提案。</span>
                      </div>
                      <el-divider></el-divider>
                      <div>
                        實作組
                        <br />
                        實作「商業智慧」作品，包含物聯網、機器人、大數據分析及其他商業資訊技術領域，凡可解決或改善商務問題，優化商業行為之作品，皆符合本競賽。參賽團隊請依照自行設定之主題，進行商業智慧的應用實作。
                      </div>
                      <el-divider></el-divider>
                      <div>
                        大學組
                        <br />
                        以智慧科技，創新服務流程，創新經營模式，創新產品應用於新世代之下的數位轉型，智慧商務，財務管理科技，金融科技，品牌行銷，休閒光觀事業，文化創意產業或是新式商業模式與元宇宙等議題皆可依主題進行應用發想並且提出具備創意與可行的企劃書或構想書。
                      </div>
                    </div>
                  </div>
                  <div key="2" v-else-if="RuleIndex === 2">
                    <div class="RuleContentTitle">【初賽】交件說明</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      概念組請繳交提案說明書 <el-link
                        type="primary"
                        href="./attach_1.pdf"
                        target="_blank"
                      >(附件一)</el-link><br />
                      實作組請繳交作品說明書 <el-link
                        type="primary"
                        href="./attach_2.pdf"
                        target="_blank"
                      >(附件二)</el-link><br />
                      大學組請繳交提案說明書 <el-link
                        type="primary"
                        href="./attach_3.pdf"
                        target="_blank"
                      >(附件三)</el-link>
                      <el-divider></el-divider>
                      參賽作品只要有參加過國內外相關競賽者，欲以相同或相近內容參與本競賽，無論是否獲獎，皆須填寫延續性作品說明書，連同初賽作品、學生證明、著作財產權授權同意書、法定代理人同意書、請上傳至google表單，不須提供紙本。<br />
                      <el-link
                        type="primary"
                        href="https://forms.gle/coDqU3Nu92N4dvmCA"
                        target="_blank"
                      >初賽繳件Google表單</el-link><br />
                      <el-link
                        type="primary"
                        href="https://reurl.cc/WEzYee"
                        target="_blank"
                      >表單下載</el-link>
                      <el-divider></el-divider>
                      評審委員在每組中評選10隊晉級決賽(視狀況酌予增減)
                    </div>
                  </div>
                  <div key="3" v-else-if="RuleIndex === 3">
                    <div class="RuleContentTitle">【初賽】評分項目</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      <div
                        style="
                          text-align: center;
                          font-size: 16px;
                          font-weight: 900;
                        "
                      >
                        概念組/大學組
                      </div>
                      <div>
                        <span>提案創新性</span>
                        <el-progress :percentage="30"></el-progress>
                      </div>
                      <div>
                        <span>市場應用可行性</span>
                        <el-progress :percentage="30"></el-progress>
                      </div>
                      <div>
                        <span>預期效益</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>報告完整度</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
                      <div>
                        <span>作品創作理念</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
                      <div
                        style="
                          text-align: center;
                          font-size: 16px;
                          font-weight: 900;
                        "
                      >
                        實作組
                      </div>
                      <div>
                        <span>作品創作理念</span>
                        <el-progress :percentage="30"></el-progress>
                      </div>
                      <div>
                        <span>作品功能</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>市場應用可行性</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>成本分析</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>實用價值/商業價值</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
                    </div>
                  </div>
                  <div key="4" v-else-if="RuleIndex === 4">
                    <div class="RuleContentTitle">【決賽】交件說明</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      概念組、實作組及大學組請繳交簡報<el-link
                        type="primary"
                        href="./attach_4.pdf"
                        target="_blank"
                        >(附件四)</el-link
                      ><br />
                      實作組需準備海報(格式於入圍時會公告)，若需使用相關設備也請自行攜帶。
                    </div>
                  </div>
                  <div key="5" v-else-if="RuleIndex === 5">
                    <div class="RuleContentTitle">【決賽】競賽規定</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      概念組<br />
                      評審針對參賽者簡報內容及表現進行評分。每隊7分鐘，問答時間3分鐘(統問統答)，簡報統一由大會電腦投影。
                      <el-divider></el-divider>
                      實作組<br />
                      各隊展示、解說作品，評審針對參賽者簡報內容及表現進行評分。每隊7分鐘，問答時間3分鐘(統問統答)，簡報統一由大會電腦投影。
                      <el-divider></el-divider>
                      大學組<br />
                      評審針對參賽者簡報內容及表現進行評分。每隊7分鐘，問答時間3分鐘(統問統答)，簡報統一由大會電腦投影。
                    </div>
                  </div>
                  <div key="6" v-else-if="RuleIndex === 6">
                    <div class="RuleContentTitle">【決賽】評分項目</div>
                    <el-divider
                      style="margin-top: 1vmin; margin-bottom: 1vmin"
                    ></el-divider>
                    <div class="RuleContent">
                      <div
                        style="
                          text-align: center;
                          font-size: 16px;
                          font-weight: 900;
                        "
                      >
                        概念組/大學組
                      </div>
                      <div>
                        <span>簡報內容</span>
                        <el-progress :percentage="50"></el-progress>
                      </div>
                      <div>
                        <span>現場表達能力</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>問題回覆</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
                      <div>
                        <span>簡報技巧</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
                      <div>
                        <span>時間控制</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
                      <div
                        style="
                          text-align: center;
                          font-size: 16px;
                          font-weight: 900;
                        "
                      >
                        實作組
                      </div>
                      <div>
                        <span>創新想法</span>
                        <el-progress :percentage="30"></el-progress>
                      </div>
                      <div>
                        <span>作品穩定性</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>作品實用性</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>表達能力</span>
                        <el-progress :percentage="20"></el-progress>
                      </div>
                      <div>
                        <span>作品完整度</span>
                        <el-progress :percentage="10"></el-progress>
                      </div>
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
                <div style="position: fixed; bottom: 20px; right: 20px">
                  <el-button
                    :disabled="RulePreviousBtnDisabled"
                    @click="RuleMove('previous')"
                    >上一頁</el-button
                  >
                  <el-button
                    :disabled="RuleNextBtnDisabled"
                    @click="RuleMove('next')"
                    >下一頁</el-button
                  >
                  <el-button type="primary" @click="RuleClose()"
                    >確 定</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </transition>
      </section>
      <section class="section6" id="List">
        <div class="main_title_container" style="padding:15px">
          <div class="main_title">名單公布</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <div>
          </div>
        </div>
      </section>
      <section class="section7" id="Works">
        <div class="works_container">
          <div class="main_title">歷屆得獎作品</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
          <div>
          <h2 class="el-icon-star-on">2020年第一屆得獎題目</h2>
            <el-collapse accordion>
              <el-collapse-item
                title="實作組"
                name="1"
              >
                <el-row style="width:100%">
                  <el-col :span="24">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />防疫戰士機器人
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />AIOT智能壓縮垃圾桶
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />商場虛擬機器人
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />LINE BEACON - 尋找東南亞移民的家鄉味
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                title="概念組"
                name="2"
              >
                <el-row style="width:100%">
                  <el-col :span="24">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />減重健康APP LW&H
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />與神同行 -鳳山 雙慈殿宗教意象行銷 策略
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />菱殼炭
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />失塑列車
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />LINE Eats 健康管理聊天機器人
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />行銷賣場-全聯福利中心
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />改善舊衣回收-創造 JOY永續新生活 以智能設備改善傳統舊衣回收之問題
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          <h2 class="el-icon-star-on">2021年第二屆得獎名單</h2>
            <el-collapse accordion>
              <el-collapse-item
                title="實作組"
                name="1"
              >
                <el-row style="width:100%">
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />漫步彩虹
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />汪汪隊
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />AI疫把罩
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />no P K
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />漫步雲端
                      </li>
                    </ul>
                  </el-col>
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />漫漫星斗
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />鑫森淼焱壵
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />Plan A
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />漫步青雲
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />漫星雲彩
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
              <el-collapse-item
                title="概念組"
                name="2"
              >
                <el-row style="width:100%">
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;特優
                        <el-divider direction="vertical" />Pass kids
                      </li>
                      <li>&emsp;優等
                        <el-divider direction="vertical" />只想吃烤肉
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />車車我來了
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />新森南路
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />烏龜立大功
                      </li>
                    </ul>
                  </el-col>
                  <el-col :span="12">
                    <ul class="final-li">
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />動腦筋
                      </li>
                      <li>&emsp;佳作
                        <el-divider direction="vertical" />聞雞魚
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />你說對不隊
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />今天吃什麼
                      </li>
                      <li>入圍獎
                        <el-divider direction="vertical" />翱翔天際
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </div>
          </el-collapse>
        </div>
      </section>
      <section class="section8" id="Activities">
        <div class="activities_container">
          <div class="main_title">活動花絮</div>
          <el-divider style="background-color: #ffffff"></el-divider>
          <el-collapse accordion style="border: 0px; padding-bottom: 0px">
            <div>
              <h2 class="el-icon-camera">2021年第二屆活動照片</h2>
              <el-collapse accordion>
              <el-collapse-item
              title="大合照"
              name="1"
              >
              <div>
                <template>
                  <el-carousel :interval="3000">
                    <el-carousel-item v-for="(img,index) in GroupImgList" :key="index">
                      <img class="CarouselImg" v-bind:src="img.url" loading=”lazy”>
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
              </el-collapse-item>
              <el-collapse-item
              title="實作組頒獎合影"
              name="2"
              >
              <div>
                <template>
                  <el-carousel :interval="3000">
                    <el-carousel-item v-for="(img,index) in ImplementAwardImgList" :key="index">
                      <img class="CarouselImg" v-bind:src="img.url" loading=”lazy”>
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
              </el-collapse-item>
              <el-collapse-item
              title="概念組頒獎合影"
              name="3"
              >
              <div>
                <template>
                  <el-carousel :interval="3000">
                    <el-carousel-item v-for="(img,index) in ConceptAwardImgList" :key="index">
                      <img class="CarouselImg" v-bind:src="img.url" loading=”lazy”>
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
              </el-collapse-item>
              <el-collapse-item
              title="實作組"
              name="4"
              >
              <div>
                <template>
                  <el-carousel :interval="3000" indicator-position="none">
                    <el-carousel-item v-for="(img,index) in ImplementImgList" :key="index">
                      <img class="CarouselImg" v-bind:src="img.url" loading=”lazy”>
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
              </el-collapse-item>
              <el-collapse-item
              title="概念組"
              name="5"
              >
              <div>
                <template>
                  <el-carousel :interval="3000" indicator-position="none">
                    <el-carousel-item v-for="(img,index) in ConceptImgList" :key="index">
                      <img class="CarouselImg" v-bind:src="img.url" loading=”lazy”>
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
              </el-collapse-item>
              </el-collapse>
            </div>
          </el-collapse>
        </div>
      </section>
      <section class="section9" id="Faq">
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
                  >國立高雄科技大學智慧商務系 杜助理<br />電子郵件：momoheui@gmail.com<br />聯絡電話：07-3814526
                  分機：17560<br /></span>
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
          ><i class="el-icon-s-open" />歷屆得獎作品</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Activities')"
          ><i class="el-icon-camera" />活動花絮</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button type="primary" plain @click="ScrollProcess('Faq')"
          ><i class="el-icon-question" />FAQ</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button
          type="success" plain
          @click="
            drawer = false
            openUrl('https://ic.nkust.edu.tw/')
          "
          ><i class="el-icon-school" />智慧商務系</el-button
        >
      </el-row>
      <el-row class="mobile-drawer">
        <el-button
          type="warning"
          style="height: 20vmin; font-size: 10vmin"
          @click="
            drawer = false
            openUrl('https://nkust-ic.kktix.cc/events/20211024-copy-1')
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
export default {
  data () {
    return {
      drawer: false, // 快速選單
      LastClick: '', // 快速選單捲動動作用，記錄選單關閉前所點擊的選項
      RuleIndex: 0,
      waringdialogVisible: true,
      RulePreviousBtnDisabled: false,
      RuleNextBtnDisabled: false,
      dialogVisible: false,
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
      ],
      ImplementAwardImgList: [
        { url: require('../assets/Implement_1.jpg') },
        { url: require('../assets/Implement_2.jpg') },
        { url: require('../assets/Implement_3.jpg') },
        { url: require('../assets/Implement_4.jpg') },
        { url: require('../assets/Implement_5.jpg') },
        { url: require('../assets/Implement_6.jpg') },
        { url: require('../assets/Implement_7.jpg') }
      ],
      ConceptAwardImgList: [
        { url: require('../assets/Concept_1.jpg') },
        { url: require('../assets/Concept_2.jpg') },
        { url: require('../assets/Concept_3.jpg') },
        { url: require('../assets/Concept_4.jpg') },
        { url: require('../assets/Concept_5.jpg') },
        { url: require('../assets/Concept_6.jpg') },
        { url: require('../assets/Concept_7.jpg') }
      ],
      GroupImgList: [
        { url: require('../assets/Group_1.jpg') },
        { url: require('../assets/Group_2.jpg') },
        { url: require('../assets/Group_3.jpg') }
      ],
      ImplementImgList: [
        { url: require('../assets/Implement_8.jpg') },
        { url: require('../assets/Implement_9.jpg') },
        { url: require('../assets/Implement_10.jpg') },
        { url: require('../assets/Implement_11.jpg') },
        { url: require('../assets/Implement_12.jpg') },
        { url: require('../assets/Implement_13.jpg') },
        { url: require('../assets/Implement_14.jpg') },
        { url: require('../assets/Implement_15.jpg') },
        { url: require('../assets/Implement_16.jpg') },
        { url: require('../assets/Implement_17.jpg') },
        { url: require('../assets/Implement_18.jpg') },
        { url: require('../assets/Implement_19.jpg') },
        { url: require('../assets/Implement_20.jpg') }
      ],
      ConceptImgList: [
        { url: require('../assets/Concept_8.jpg') },
        { url: require('../assets/Concept_9.jpg') },
        { url: require('../assets/Concept_10.jpg') },
        { url: require('../assets/Concept_11.jpg') },
        { url: require('../assets/Concept_12.jpg') },
        { url: require('../assets/Concept_13.jpg') },
        { url: require('../assets/Concept_14.jpg') },
        { url: require('../assets/Concept_15.jpg') },
        { url: require('../assets/Concept_16.jpg') },
        { url: require('../assets/Concept_17.jpg') }
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
        name: 'keywords', content: '高科盃 全國商業智慧競賽 總獎金45000元整 國立高科大 國立高雄科技大學 智慧商務系 nkust ic'
      },
      {
        name: 'description', content: '為引發高中職及大學部學生對於「智慧商務」之創意構想，培養跨領域之專業人才，鼓勵學生積極嘗試與發想，提高創新思考能力，並提昇知識整合、實作及人際溝通合作之能力。國立高雄科技大學商業智慧學院暨智慧商務系舉辦「第三屆高科盃全國商業智慧競賽」，期盼能激發學生創意及興趣及增加未來在職場創就業之競爭力，並提供全國各校學生相互交流的機會。'
      }
    ]
  },
  methods: {
    ScrollProcess (section) {
      this.LastClick = section
      this.drawer = false
    },
    // 因為Vue在同時渲染的處理方式，兩次渲染一次只能渲染出一個，所以把兩個渲染步驟拆分開來
    // 由快速選單內的點擊觸發，傳入點擊的section id，使用LastClick記錄下來，接著呼叫快速選單關閉(drawer)，這是第一次渲染
    // 在快速選單(drawer)關閉之後能夠觸發element ui 抽屜組件的DrawerClosed event，此時就可以用剛剛記錄下來的section id(LastClick)去呼叫document的method:scrollIntoView捲動卷軸直到該元素可見。
    Scroll (section) {
      // 傳入section的id，以此宣告常數EL
      // 並呼叫document的method:scrollIntoView捲動卷軸直到該元素可見。
      const EL = document.getElementById(section)
      if (EL) {
        EL.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    DrawerClosed () {
      this.Scroll(this.LastClick)
      // 在快速選單(drawer)關閉之後能夠觸發element ui 抽屜組件的DrawerClosed event，此時就可以用剛剛記錄下來的section id(LastClick)去呼叫document的method:scrollIntoView捲動卷軸直到該元素可見。
    },
    openUrl (url) {
      window.open(url, '_blank')
    },
    RuleOpen (index) {
      if (index === 0) {
        this.RulePreviousBtnDisabled = true
        this.RuleNextBtnDisabled = false
      } else if (index === this.Rules.length - 1) {
        this.RulePreviousBtnDisabled = false
        this.RuleNextBtnDisabled = true
      } else {
        this.RulePreviousBtnDisabled = false
        this.RuleNextBtnDisabled = false
      }
      this.dialogVisible = true
      this.RuleIndex = index
      document.body.style.height = '100%'
      document.body.style.overflowY = 'hidden'
    },
    RuleClose () {
      this.dialogVisible = false
      document.body.style.height = ''
      document.body.style.overflowY = ''
    },
    RuleMove (action) {
      switch (action) {
        case 'previous':
          this.RuleIndex--
          break
        case 'next':
          this.RuleIndex++
          break
      }
      if (this.RuleIndex === 0) {
        this.RulePreviousBtnDisabled = true
        this.RuleNextBtnDisabled = false
      } else if (this.RuleIndex === this.Rules.length - 1) {
        this.RulePreviousBtnDisabled = false
        this.RuleNextBtnDisabled = true
      } else {
        this.RulePreviousBtnDisabled = false
        this.RuleNextBtnDisabled = false
      }
    }
  },
  mounted () {
    const self = this// 這裡的this是vue
    // 因為callback中的這個繫結沒有指向vue實例。
    // 為解決這個問題，在建立的hook中定義一個變數var self = this，指向vue實例，在callback中使用self引用資料屬性。
    window.addEventListener('scroll', function () {
      switch (Math.round(window.scrollY / parseInt(document.body.clientHeight / 9))) {
        case (0): {
          self.$router.push('').catch(() => {})
          break
        }
        case (1): {
          self.$router.push('#Info').catch(() => {})
          break
        }
        case (2): {
          self.$router.push('#News').catch(() => {})
          break
        }
        case (3): {
          self.$router.push('#Schedule').catch(() => {})
          break
        }
        case (4): {
          self.$router.push('#Rules').catch(() => {})
          break
        }
        case (5): {
          self.$router.push('#List').catch(() => {})
          break
        }
        case (6): {
          self.$router.push('#Works').catch(() => {})
          break
        }
        case (7): {
          self.$router.push('#Activities').catch(() => {})
          break
        }
        case (8): {
          self.$router.push('#Faq').catch(() => {})
          break
        }
      }
      // 滾動監聽，這裡處理網址的更新，計算現在滾到哪一個section，推入section的id到網址。
    })
    window.addEventListener('load', function (event) {
      self.LoadingV.close()
    })
    // 頁面載入監聽，使全屏載入畫面關閉。
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
.contain {
  height: 50%;
  padding: 0px;
}
.final-li {
  list-style: none;
  padding-left: 10px;
}
.final-li > li {
  padding-left: 1rem;
  text-indent: -0.7rem;
}
.final-li > li::before {
  content: "🏅 ";
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
  background-image: url('../assets/section1_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position: center;
}
.section2 {
  background-image: url('../assets/section2_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section3 {
  background-image: url('../assets/section3_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.section4 {
  background-image: url('../assets/section4_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section5 {
  background-image: url('../assets/section5_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.section6 {
  background-image: url('../assets/section6_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section7 {
  background-image: url('../assets/section7_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section8 {
  background-image: url('../assets/section1_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.section9 {
  background-image: url('../assets/section8_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
.works_container {
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  width: 100vmin;
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
.activities_container {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: rgb(255, 255, 255);
  width: 93vmin;
  text-align: left;
}

.el-collapse-item__wrap {
  padding: 0px;
}

.el-collapse >>> .el-collapse-item__header {
  padding-left: 10px;
  padding-right: 10px;
  border: 0px;
}
.el-collapse >>> .el-collapse-item__content {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
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

.CarouselImg{
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-drawer__body {
  display: block;
}

.main {
  font-family: Microsoft JhengHei;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
}
.RuleTitle {
  color: #303133;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 5px;
  margin: 5px;
  font-size: 4vmin;
  border-radius: 5px;
  transition: background-color 500ms;
}
.RuleTitleContainer {
  text-align: left;
  font-weight: 900;
  height: 60vh;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  height: 100%;
  box-sizing: border-box;
}
.RuleContentTitle {
  text-align: left;
  font-size: 6vmin;
  font-weight: 900;
  color: #303133;
}
.RuleContent {
  text-align: left;
  font-size: 4vmin;
  color: #303133;
  margin-top: 8vmin;
  height: calc(80vh - 50px);
  overflow-y: scroll;
}
.mobile-drawer {
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
