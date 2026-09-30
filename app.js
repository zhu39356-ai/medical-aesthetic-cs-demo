
const TAGS = ["價格","預算有限","優惠／活動","效果","恢復期","疼痛","安全性","醫師經驗","診所環境","地點／交通","可預約時間","比較其他診所","需討論","第一次醫美"];

const TREATMENT_CATEGORIES = ["全部","再生／注射","電波","音波","雷射","玻尿酸／膚質","再生保養"];

const TREATMENTS = [
  {
    id:"profhilo", name:"PROFHILO® 逆時針", alias:"璞菲洛高低分子玻尿酸皮下植入劑", category:"再生／注射",
    keywords:["鬆弛","乾燥","缺水","彈性","細紋","粗糙","頸紋","膚質","自然","不想填充","玻尿酸","生物重塑"],
    summary:"以高低分子量透明質酸為核心的生物重塑注射概念，重點偏向膚質、彈性與整體肌膚狀態，而非傳統體積填補。",
    quickFacts:[
      "公司公開資訊將 PROFHILO 定位為生物重塑類注射，與一般以體積塑形為主的玻尿酸填充概念不同。",
      "公開頁面提到常見關注包含乾燥、彈性下降、細紋、鬆弛與粗糙等。",
      "臉部常見為固定注射點設計；實際施作部位、劑量與療程安排需由醫師評估。"
    ],
    questions:[
      ["這跟玻尿酸填充一樣嗎？","可先說明：公司公開資訊將它定位為「生物重塑」，重點偏膚質與張力，不以輪廓體積填補為主要目的；實際差異與適合程度由醫師評估。"],
      ["做完會不會腫？","公司公開頁面提到注射點可能短暫出現腫脹、隆起、壓痛或瘀青；若有明顯或持續異常，應轉醫療人員。"],
      ["多久做一次？","客服可依公司最新教育資料說明一般安排，但不自行承諾固定次數或效果。"]
    ],
    canAnswer:["公司公開療程定位與一般流程","公開的院所／預約方式","一般性的常見短暫反應（避免保證）"],
    mustRefer:["客戶是否適合施打","孕期、疾病、過敏、藥物等個人條件","注射後異常腫痛、感染或其他疑似併發症","效果保證、精確劑量與注射部位"],
    sources:[["美無極：PROFHILO® 逆時針","https://www.timelessbeauty.com.tw/profhilo/"]]
  },
  {
    id:"density", name:"Density RF 無雙電波", alias:"Jeisys Density RF", category:"電波",
    keywords:["鬆弛","緊實","拉提","輪廓","細紋","毛孔","怕痛","電波","眼周","下顎線","恢復期"],
    summary:"非侵入式電波緊實療程。美無極公開內容強調單極＋雙極交替、不同層次加熱與舒適度設計。",
    quickFacts:[
      "屬非侵入式電波能量療程，重點為緊實、拉提與膚質相關訴求。",
      "公司頁面將它與鳳凰電波比較，強調能量模式、加熱層次與舒適度差異。",
      "一般非侵入式緊膚設備可使用射頻或超音波等能量加熱較深層組織；實際療程次數與效果依設備、部位與個人條件不同。"
    ],
    questions:[
      ["跟鳳凰電波差在哪？","可以依公司公開比較說明兩者能量設計與療程體驗不同，但不要自行判斷哪個一定比較適合客戶。"],
      ["需要恢復期嗎？","公司公開頁面提到多數人可能只有短暫紅腫或壓痛；實際反應仍有個體差異。"],
      ["怕痛可以做嗎？","可說明公司頁面有強調舒適度設計，但疼痛感受因人而異，能量設定仍由專業人員評估。"]
    ],
    canAnswer:["公開設備特色與療程分類","公司公開的一般恢復反應","院所與預約方式"],
    mustRefer:["電波能量設定","客戶是否適合施作","植入物、皮膚狀況、疾病等禁忌判斷","異常疼痛或術後反應"],
    sources:[
      ["美無極：Density RF 無雙電波","https://www.timelessbeauty.com.tw/density-rf/"],
      ["ASDS：非侵入式緊膚療程概念","https://www.asds.net/skin-experts/skin-treatments/non-invasive-skin-tightening-treatments"]
    ]
  },
  {
    id:"thermage", name:"Thermage® FLX 鳳凰電波", alias:"鳳凰電波", category:"電波",
    keywords:["鬆弛","緊實","拉提","輪廓","皺紋","電波","下顎線","眼周","膠原蛋白"],
    summary:"以單極射頻為核心的非侵入式緊膚療程，公司公開資訊著重深層加熱、緊實與輪廓改善。",
    quickFacts:[
      "公司公開頁面將鳳凰電波描述為單極電波緊膚療程。",
      "與音波的能量來源不同：電波主要使用射頻能量；音波使用聚焦超音波。",
      "非侵入式緊膚療程可能出現短暫紅、腫、瘀青等反應，恢復情況依個人與療程而異。"
    ],
    questions:[
      ["跟音波一樣嗎？","不是同一種能量。電波主要使用射頻能量；音波使用聚焦超音波。兩者實際適合情況需醫師評估。"],
      ["一次就有效嗎？","效果與出現時間會因人、設備與療程規劃不同，不應保證一次達到特定效果。"],
      ["會很痛嗎？","可說明療程感受因人而異，設備有舒適度設計，但不應保證無痛。"]
    ],
    canAnswer:["電波與音波的基本能量差異","公司公開設備名稱與一般療程定位","預約與院所資訊"],
    mustRefer:["客製能量與發數","個人適應性與禁忌","治療部位與實際效果判斷","術後異常反應"],
    sources:[
      ["美無極：Thermage® FLX 鳳凰電波","https://www.timelessbeauty.com.tw/thermage-flx/"],
      ["ASDS：非侵入式緊膚療程概念","https://www.asds.net/skin-experts/skin-treatments/non-invasive-skin-tightening-treatments"]
    ]
  },
  {
    id:"ultraformer", name:"Ultraformer MPT 海芙音波媚必提", alias:"MPT 海芙音波", category:"音波",
    keywords:["鬆弛","拉提","下顎線","雙下巴","音波","輪廓","緊實","身體","怕痛","探頭"],
    summary:"聚焦式超音波緊實療程。公司公開頁面強調 MPT 微脈衝、不同深度探頭與臉部／身體的多部位應用。",
    quickFacts:[
      "能量來源為聚焦式超音波，與射頻電波不同。",
      "公司公開資訊提到多種探頭深度與模式，實際搭配由專業人員依部位與需求規劃。",
      "一般非侵入式緊膚療程的治療次數、效果與恢復狀況會依設備與個人需求不同。"
    ],
    questions:[
      ["音波跟電波怎麼選？","可先解釋兩者能量來源不同；哪一種更適合要看鬆弛程度、部位與個人條件，應交由醫師評估。"],
      ["可以打身體嗎？","公司公開頁面列有臉部與身體部位應用，但實際部位與療程安排仍由專業人員評估。"],
      ["做完多久有效？","公司頁面描述效果可能逐步出現，但每個人的反應不同，客服不應承諾固定時間或幅度。"]
    ],
    canAnswer:["音波與電波基本差異","公司公開設備特色與部位分類","一般預約流程"],
    mustRefer:["客戶是否適合","探頭深度、能量與發數","金屬／電子植入物等禁忌問題","術後異常疼痛、麻木或其他異常"],
    sources:[
      ["美無極：Ultraformer MPT 海芙音波媚必提","https://www.timelessbeauty.com.tw/ultraformer-mpt/"],
      ["ASDS：非侵入式緊膚療程概念","https://www.asds.net/skin-experts/skin-treatments/non-invasive-skin-tightening-treatments"]
    ]
  },
  {
    id:"picosure", name:"PicoSure 755 蜂巢皮秒雷射", alias:"755nm 皮秒", category:"雷射",
    keywords:["斑","色素","暗沉","毛孔","痘疤","凹疤","細紋","刺青","皮秒","雷射","膚色不均","恢復期"],
    summary:"755nm 皮秒雷射。公司公開頁面列出色素、暗沉、毛孔、痘疤／凹疤與細紋等常見諮詢方向。",
    quickFacts:[
      "皮秒指極短脈衝時間；不同雷射波長、模式與治療目標不同。",
      "公司公開頁面將 PicoSure 755 用於多種色素與膚質相關訴求。",
      "雷射治療需要依膚色、皮膚狀況、用藥與既往病史評估；術前術後防曬很重要。"
    ],
    questions:[
      ["可以打肝斑嗎？","公司公開頁面列有肝斑等色素問題，但肝斑成因與治療反應複雜，客服不應直接承諾適合或效果，應轉醫師評估。"],
      ["毛孔、痘疤可以改善嗎？","可說明公司公開療程資訊有列入相關訴求，但實際疤痕類型與治療組合需專業評估。"],
      ["做完會反黑嗎？","色素變化與個人膚色、日曬及治療設定有關，需由專業人員評估與說明；客服可提醒依醫囑做好術後照護與防曬。"]
    ],
    canAnswer:["公開療程可查詢的常見訴求","一般術前術後需重視防曬","院所與預約流程"],
    mustRefer:["斑種判斷與是否適合雷射","膚色、病史、用藥與療程設定","術後水泡、持續疼痛、明顯色素變化等異常","治療次數與效果保證"],
    sources:[
      ["美無極：PicoSure 755 蜂巢皮秒雷射","https://www.timelessbeauty.com.tw/picosure-755/"],
      ["AAD：雷射治療前的重要評估與防曬","https://www.aad.org/public/cosmetic/scars-stretch-marks/laser-treatment-scar"]
    ]
  },
  {
    id:"juvederm", name:"Juvéderm® 喬雅登玻尿酸", alias:"玻尿酸填充", category:"玻尿酸／膚質",
    keywords:["玻尿酸","凹陷","輪廓","法令紋","下巴","唇","淚溝","填充","微整","腫","瘀青","自然"],
    summary:"透明質酸（HA）填充劑系列，可依不同產品與核准用途處理體積、輪廓或皺褶等需求；實際產品與施打部位需醫師評估。",
    quickFacts:[
      "透明質酸是常見的可吸收型填充材料；不同產品有不同核准用途與特性。",
      "常見短暫反應可包括紅、腫、瘀青、疼痛或壓痛。",
      "填充注射有少見但嚴重的血管相關風險，因此必須由受過訓練的醫療專業人員評估與施作。"
    ],
    questions:[
      ["玻尿酸可以打哪裡？","可以依公司公開產品資訊說明常見用途，但不是「哪裡凹就一定能打」；實際部位與產品選擇由醫師評估。"],
      ["會不會很腫？","常見可有短暫紅腫、瘀青或疼痛，程度因人而異；持續或嚴重異常應立即回診。"],
      ["可以維持多久？","不同產品、部位、劑型與個人體質差異很大，不應用單一數字對所有客戶保證。"]
    ],
    canAnswer:["透明質酸填充的基本概念","公司公開產品系列與一般用途","常見短暫注射反應"],
    mustRefer:["實際施打部位、產品與劑量","疾病、過敏、藥物等風險評估","劇痛、皮膚顏色異常、視力異常等緊急警訊","效果與維持時間保證"],
    sources:[
      ["美無極：Juvéderm 喬雅登","https://www.timelessbeauty.com.tw/juvederm/"],
      ["FDA：Dermal Fillers","https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers"]
    ]
  },
  {
    id:"skinvive", name:"SKINVIVE® 聚光針", alias:"Juvéderm SKINVIVE", category:"玻尿酸／膚質",
    keywords:["乾燥","補水","光澤","膚質","細紋","玻尿酸","聚光針","保濕","平滑","不想改臉型"],
    summary:"偏向膚質與保水訴求的透明質酸微滴注射概念，公司公開頁面強調平滑、水潤與光澤，而非大幅改變臉部體積。",
    quickFacts:[
      "屬透明質酸注射產品，訴求偏向膚質與保水，而非傳統輪廓填充。",
      "公司公開頁面有列出面部、手部、頸部與胸口等資訊，但實際適用部位依仿單及醫師評估。",
      "注射類產品仍有紅腫、瘀青、疼痛與少見嚴重併發症風險。"
    ],
    questions:[
      ["跟一般玻尿酸差在哪？","可說明公司將 SKINVIVE 定位在膚質改善／保水方向，而一般填充劑可偏向結構與體積；實際產品選擇由醫師評估。"],
      ["可以跟其他療程一起做嗎？","公司公開頁面有提到部分療程搭配資訊，但同日施作與間隔需依醫師評估，客服不應自行安排醫療組合。"],
      ["做完可以化妝嗎？","公司公開頁面有術後注意資訊；實際仍應以診所當次衛教為準。"]
    ],
    canAnswer:["公司公開療程定位與一般術後衛教","與傳統填充概念的基本差異","院所與預約流程"],
    mustRefer:["是否可與其他療程同日施作","客戶個人適合程度","注射後持續／嚴重異常","精確部位、劑量與效果"],
    sources:[
      ["美無極：SKINVIVE® 聚光針","https://www.timelessbeauty.com.tw/skinvive/"],
      ["FDA：Dermal Fillers","https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/dermal-fillers-soft-tissue-fillers"]
    ]
  },
  {
    id:"exosome", name:"外泌體相關療程／產品", alias:"Exosome", category:"再生保養",
    keywords:["外泌體","修護","術後","再生","保養","膚質","ExoCake","Exovia","ASCE"],
    summary:"美無極官網有多項外泌體相關內容。此類資訊較容易隨產品、法規與公司教育更新，客服速查應以「公司目前核准說法」為主。",
    quickFacts:[
      "外泌體是細胞釋放的細胞外囊泡，研究領域涉及細胞間訊息傳遞。",
      "醫美市場中的外泌體產品來源、法規定位與施作方式差異很大，不應只用「外泌體」三個字概括安全性或效果。",
      "Demo 建議只整理公司目前實際使用產品、公開用途與客服可說範圍，不做療效保證。"
    ],
    questions:[
      ["外泌體是什麼？","可以簡單說明為細胞釋放的微小囊泡、可攜帶多種訊息分子；實際產品用途與療程內容要依公司現行資料。"],
      ["是不是可以修復所有問題？","不應這樣回答。產品與證據、用途差異很大，需以實際產品及專業評估為準。"],
      ["跟雷射一起做嗎？","是否搭配、順序與間隔屬療程規劃問題，應轉醫師或專業諮詢人員。"]
    ],
    canAnswer:["公司目前公開的產品名稱與一般介紹","預約流程","最新公司衛教中允許客服說明的內容"],
    mustRefer:["療效保證","與其他療程的搭配與施作方式","皮膚異常或術後問題","產品來源、法規與適應性判斷"],
    sources:[
      ["美無極：訊聯次世代外泌體","https://www.timelessbeauty.com.tw/exosome/"],
      ["美無極：ExoCake 次世代","https://www.timelessbeauty.com.tw/exocake/"]
    ]
  }
];

const STORAGE_KEY = "med_aesthetic_cs_demo_v2";
const SHIFT_KEY = "med_aesthetic_shift_v1";
const SHIFT_HISTORY_KEY = "med_aesthetic_shift_history_v1";

let selectedId = null;
let quickSelectedId = null;
let quickChannel = "LINE";
let statsPeriod = "today";
let installPrompt = null;
let knowledgeSelectedId = "profhilo";
let knowledgeCategory = "全部";
let knowledgeQuery = "";
let state;
state = loadState();

function nowISO(){ return new Date().toISOString(); }
function fmt(ts){
  if(!ts) return "—";
  return new Date(ts).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});
}
function fmtFull(ts){
  if(!ts) return "—";
  return new Date(ts).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"});
}
function sameDay(ts){
  const d = new Date(ts), n = new Date();
  return d.getFullYear()===n.getFullYear() && d.getMonth()===n.getMonth() && d.getDate()===n.getDate();
}
function mins(ms){ return Math.max(0, Math.round(ms/60000)); }
function hms(ms){
  const sec = Math.max(0, Math.floor(ms/1000));
  const h = String(Math.floor(sec/3600)).padStart(2,"0");
  const m = String(Math.floor((sec%3600)/60)).padStart(2,"0");
  const s = String(sec%60).padStart(2,"0");
  return `${h}:${m}:${s}`;
}

function seedData(){
  const t = Date.now();
  const m = x => new Date(t - x*60000).toISOString();
  state = {
    cases:[
      {id:"IG-0281",channel:"Instagram",customer:"王小姐",category:"皮秒／雷射",tags:["價格","恢復期","第一次醫美"],gender:"女性",age:"30–39",notes:"預算約1萬元，希望週六下午。怕反黑，想先比較。",status:"等待客戶",createdAt:m(86),serviceStartedAt:m(84),activeMs:8*60000,waitStartedAt:m(76),closedAt:null,appointment:null,visited:null,treatment:null,events:[
        {at:m(86),text:"建立案件"},
        {at:m(84),text:"開始服務"},
        {at:m(76),text:"切換為等待客戶"}
      ]},
      {id:"LINE-0148",channel:"LINE",customer:"陳小姐",category:"除毛",tags:["價格","優惠／活動"],gender:"女性",age:"20–29",notes:"在意包堂價格與是否有活動。",status:"處理中",createdAt:m(25),serviceStartedAt:m(23),activeMs:0,waitStartedAt:null,closedAt:null,appointment:null,visited:null,treatment:null,events:[
        {at:m(25),text:"建立案件"},
        {at:m(23),text:"開始服務"}
      ]},
      {id:"FB-0093",channel:"Facebook",customer:"林先生",category:"音波／電波",tags:["效果","醫師經驗"],gender:"男性",age:"40–49",notes:"希望改善下顎線，在意醫師經驗。",status:"已預約",createdAt:m(210),serviceStartedAt:m(205),activeMs:14*60000,waitStartedAt:null,closedAt:m(187),appointment:new Date(t+2*86400000).toISOString(),visited:null,treatment:null,events:[
        {at:m(210),text:"建立案件"},
        {at:m(205),text:"開始服務"},
        {at:m(187),text:"完成服務，結果：已預約"}
      ]},
      {id:"WEB-0034",channel:"官網",customer:"匿名訪客 #34",category:"價格／優惠",tags:["預算有限","價格"],gender:"未知／未提供",age:"未知／未提供",notes:"只詢問目前活動方案。",status:"待追蹤",createdAt:m(360),serviceStartedAt:m(355),activeMs:7*60000,waitStartedAt:null,closedAt:m(340),followAt:new Date(t+86400000).toISOString(),appointment:null,visited:null,treatment:null,events:[
        {at:m(360),text:"建立案件"},
        {at:m(355),text:"開始服務"},
        {at:m(340),text:"完成服務，結果：待追蹤"}
      ]},
      {id:"IG-0279",channel:"Instagram",customer:"小安",category:"微整注射",tags:["自然效果","疼痛"].filter(Boolean),gender:"女性",age:"20–29",notes:"詢問自然感、怕痛。",status:"已結案",createdAt:m(500),serviceStartedAt:m(496),activeMs:11*60000,waitStartedAt:null,closedAt:m(480),appointment:null,visited:false,treatment:false,events:[
        {at:m(500),text:"建立案件"},
        {at:m(496),text:"開始服務"},
        {at:m(480),text:"完成服務，結果：暫不考慮"}
      ]}
    ],
    counter:300
  };
  saveState();
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  seedData();
  return state;
}
function saveState(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); renderAll(); }

function currentActiveMs(c){
  let total = c.activeMs || 0;
  if(c.status==="處理中" && c.serviceStartedAt) total += Date.now()-new Date(c.serviceStartedAt).getTime();
  return total;
}

function getShift(){
  try{
    const raw = localStorage.getItem(SHIFT_KEY);
    return raw ? JSON.parse(raw) : {active:false};
  }catch(e){ return {active:false}; }
}
function getShiftHistory(){
  try{
    return JSON.parse(localStorage.getItem(SHIFT_HISTORY_KEY) || "[]");
  }catch(e){ return []; }
}
function saveShiftHistory(items){
  localStorage.setItem(SHIFT_HISTORY_KEY,JSON.stringify(items));
}
function shiftSnapshot(){
  const today = state.cases.filter(c=>sameDay(c.createdAt));
  return {
    received: today.length,
    active: state.cases.filter(c=>c.status==="處理中").length,
    waiting: state.cases.filter(c=>c.status==="等待客戶").length,
    follow: state.cases.filter(c=>c.status==="待追蹤").length,
    appointment: state.cases.filter(c=>c.status==="已預約"||c.appointment).length,
    closed: state.cases.filter(c=>c.closedAt && sameDay(c.closedAt)).length
  };
}

function setTabs(){
  document.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      document.querySelectorAll(".tabpage").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab+"Tab").classList.add("active");
      renderAll();
    });
  });
}

function renderShift(){
  const shift = getShift();
  const history = getShiftHistory();
  const on = !!shift.active;
  document.getElementById("shiftDot").classList.toggle("on",on);
  document.getElementById("shiftStatus").textContent = on ? "班次進行中" : "尚未開始班次";
  document.getElementById("shiftSince").textContent = on ? `開始：${fmtFull(shift.startedAt)}` : "開始：—";
  document.getElementById("shiftBtn").textContent = on ? "結束班次" : "開始班次";
  const last = history[0];
  document.getElementById("lastShiftEnd").textContent = `上次結束：${last ? fmtFull(last.endedAt) : "—"}`;
  updateLiveTime();
}

document.getElementById("shiftBtn").addEventListener("click",()=>{
  const s = getShift();
  const now = nowISO();

  if(s.active){
    const record = {
      startedAt: s.startedAt,
      endedAt: now,
      durationMs: Date.now() - new Date(s.startedAt).getTime(),
      summary: shiftSnapshot()
    };
    const history = getShiftHistory();
    history.unshift(record);
    saveShiftHistory(history);
    localStorage.setItem(SHIFT_KEY,JSON.stringify({active:false,lastEndedAt:now}));
  }else{
    localStorage.setItem(SHIFT_KEY,JSON.stringify({active:true,startedAt:now}));
  }
  renderAll();
});

function createKpi(label,value,small=""){
  return `<div class="kpi"><div class="label">${label}</div><div class="value">${value}</div><div class="small">${small}</div></div>`;
}
function renderWorkKpis(){
  const today = state.cases.filter(c=>sameDay(c.createdAt));
  const active = state.cases.filter(c=>c.status==="處理中").length;
  const waiting = state.cases.filter(c=>c.status==="等待客戶").length;
  const follow = state.cases.filter(c=>c.status==="待追蹤").length;
  const appt = state.cases.filter(c=>c.status==="已預約").length;
  document.getElementById("workKpis").innerHTML =
    createKpi("今日新進",today.length,"所有來源")+
    createKpi("處理中",active,"目前正在服務")+
    createKpi("等待客戶",waiting,"可同時保留案件")+
    createKpi("待追蹤",follow,"後續提醒")+
    createKpi("已預約",appt,"等待到店確認");
}
function badgeClass(s){
  if(s==="處理中") return "active";
  if(s==="等待客戶"||s==="待追蹤") return "wait";
  return "";
}
function renderCases(){
  const filter = document.getElementById("caseFilter").value;
  const list = state.cases
    .filter(c=>filter==="all" || c.status===filter)
    .sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  document.getElementById("caseList").innerHTML = list.map(c=>`
    <div class="case-card ${selectedId===c.id?"active":""}" data-id="${c.id}">
      <div class="case-title">
        <strong>${c.customer}</strong>
        <span class="badge ${badgeClass(c.status)}">${c.status}</span>
      </div>
      <div class="meta">
        <span>${c.channel}</span><span>·</span><span>${c.category}</span><span>·</span>
        <span ${c.status==="處理中" ? `data-case-timer="${c.id}"` : ""}>${c.status==="處理中" ? `服務 ${hms(currentActiveMs(c))}` : fmt(c.createdAt)}</span>
      </div>
    </div>
  `).join("") || `<div class="empty"><p>目前沒有符合條件的案件。</p></div>`;
  document.querySelectorAll(".case-card").forEach(el=>el.addEventListener("click",()=>{ selectedId=el.dataset.id; renderAll(); }));
}

function renderDetail(){
  const panel = document.getElementById("detailPanel");
  const c = state.cases.find(x=>x.id===selectedId);
  if(!c){ panel.innerHTML=`<div class="empty"><div><h3>選擇一筆案件</h3><p>查看客戶資訊、服務狀態與轉化結果。</p></div></div>`; return; }
  panel.innerHTML = `
    <div class="detail-top">
      <div>
        <div class="eyebrow">${c.channel} · ${c.id}</div>
        <h2>${c.customer}</h2>
        <div class="meta"><span class="badge ${badgeClass(c.status)}">${c.status}</span><span>${c.category}</span></div>
      </div>
      <div class="muted">建立 ${fmt(c.createdAt)}</div>
    </div>

    <div class="detail-actions">
      ${c.status!=="處理中" && !["已結案","已預約"].includes(c.status) ? `<button class="btn primary" data-act="resume">開始／繼續服務</button>`:""}
      ${c.status==="處理中" ? `<button class="btn" data-act="wait">等待客戶</button>`:""}
      ${!["已結案","已預約"].includes(c.status) ? `<button class="btn" data-act="close">完成服務</button>`:""}
      ${c.status==="已預約" ? `<button class="btn" data-act="visit">確認到店</button>`:""}
    </div>

    <div class="detail-grid">
      <div class="info-box"><div class="label">累積實際服務時間</div><strong ${c.status==="處理中" ? `data-detail-timer="${c.id}"` : ""}>${hms(currentActiveMs(c))}</strong></div>
      <div class="info-box"><div class="label">性別 / 年齡</div><strong>${c.gender} · ${c.age}</strong></div>
      <div class="info-box"><div class="label">標籤</div><div class="tags">${(c.tags||[]).map(t=>`<span class="badge">${t}</span>`).join("") || "—"}</div></div>
      <div class="info-box"><div class="label">轉化</div><strong>${c.visited===true?"已到店":c.status==="已預約"?"已預約":c.visited===false?"未到店":"尚未確認"}</strong></div>
    </div>

    <div class="info-box" style="margin-top:14px">
      <div class="label">客服備註</div>
      <textarea class="inline-note" id="detailNote" rows="4">${c.notes||""}</textarea>
      <div style="margin-top:8px"><button class="btn" data-act="saveNote">儲存備註</button></div>
    </div>

    <div class="info-box" style="margin-top:14px">
      <div class="label">案件時間軸</div>
      <div class="timeline">
        ${(c.events||[]).slice().reverse().map(e=>`<div class="event"><div>${e.text}</div><time>${fmt(e.at)}</time></div>`).join("")}
      </div>
    </div>
  `;
  panel.querySelectorAll("[data-act]").forEach(btn=>btn.addEventListener("click",()=>handleAction(c,btn.dataset.act)));
}

function handleAction(c,act){
  const now = nowISO();
  if(act==="resume"){
    c.status="處理中"; c.serviceStartedAt=now; c.waitStartedAt=null;
    c.events.push({at:now,text:"開始／繼續服務"});
  } else if(act==="wait"){
    c.activeMs = currentActiveMs(c);
    c.serviceStartedAt=null; c.status="等待客戶"; c.waitStartedAt=now;
    c.events.push({at:now,text:"切換為等待客戶"});
  } else if(act==="close"){
    if(c.status==="處理中"){
      c.activeMs=currentActiveMs(c); c.serviceStartedAt=null;
    }
    const result = prompt("結案結果：輸入「已預約 / 待追蹤 / 考慮中 / 無效詢問 / 暫不考慮」","已預約");
    if(!result) return;
    if(result==="已預約"){
      c.status="已預約";
      c.appointmentCreatedAt=now;
      const d = prompt("預約日期時間（例如 2026-10-03 14:30，可先留空）","");
      if(d) c.appointment = new Date(d.replace(" ","T")).toISOString();
    } else if(result==="待追蹤"||result==="考慮中"){
      c.status="待追蹤";
      const d = prompt("追蹤日期（例如 2026-10-02，可留空）","");
      if(d) c.followAt = new Date(d+"T10:00:00").toISOString();
    } else {
      c.status="已結案";
    }
    c.closedAt=now;
    c.events.push({at:now,text:`完成服務，結果：${result}`});
  } else if(act==="visit"){
    const yes = confirm("客戶有實際到店嗎？按「確定」= 已到店；「取消」= 未到店");
    c.visited = yes;
    c.visitConfirmedAt=now;
    c.status = "已結案";
    c.events.push({at:now,text:yes?"確認：已到店":"確認：未到店"});
    if(yes){
      const treated = confirm("是否有實際進行療程？");
      c.treatment = treated;
      c.treatmentConfirmedAt=now;
      c.events.push({at:now,text:treated?"完成療程":"到店但未做療程"});
    }
  } else if(act==="saveNote"){
    c.notes=document.getElementById("detailNote").value;
    c.events.push({at:now,text:"更新客服備註"});
  }
  saveState();
}

function statsCounts(items,key,unknown="未知／未提供"){
  const out={};
  items.forEach(c=>{
    const v=c[key] || unknown;
    out[v]=(out[v]||0)+1;
  });
  return out;
}
function renderBars(elId,obj){
  const entries=Object.entries(obj).sort((a,b)=>b[1]-a[1]);
  const max=Math.max(1,...entries.map(x=>x[1]));
  document.getElementById(elId).innerHTML=entries.map(([k,v])=>`
    <div class="bar-row">
      <div>${k}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${v/max*100}%"></div></div>
      <strong>${v}</strong>
    </div>
  `).join("") || `<p class="muted">尚無資料</p>`;
}
function startOfToday(){const d=new Date();d.setHours(0,0,0,0);return d;}
function getStatsRange(){const today=startOfToday();if(statsPeriod==="yesterday"){const s=new Date(today);s.setDate(s.getDate()-1);return{start:s,end:today,label:"昨日營運概況"};}if(statsPeriod==="7days"){const s=new Date(today);s.setDate(s.getDate()-6);const e=new Date(today);e.setDate(e.getDate()+1);return{start:s,end:e,label:"近 7 天營運概況"};}if(statsPeriod.startsWith("date:")){const v=statsPeriod.slice(5),s=new Date(v+"T00:00:00"),e=new Date(s);e.setDate(e.getDate()+1);return{start:s,end:e,label:v+" 營運紀錄"};}const e=new Date(today);e.setDate(e.getDate()+1);return{start:today,end:e,label:"今日營運概況"};}
function inRange(ts,r){if(!ts)return false;const t=new Date(ts);return t>=r.start&&t<r.end;}
function renderStats(){const all=state.cases,r=getStatsRange();document.getElementById("statsTitle").textContent=r.label;const entered=all.filter(c=>inRange(c.createdAt,r));const completed=all.filter(c=>inRange(c.closedAt,r));const avg=completed.length?Math.round(completed.reduce((s,c)=>s+(c.activeMs||0),0)/completed.length/60000):0;const appt=all.filter(c=>inRange(c.appointmentCreatedAt||(c.appointment?c.closedAt:null),r)).length;const visited=all.filter(c=>c.visited===true&&inRange(c.visitConfirmedAt||c.closedAt,r)).length;const treated=all.filter(c=>c.treatment===true&&inRange(c.treatmentConfirmedAt||c.closedAt,r)).length;document.getElementById("statsKpis").innerHTML=createKpi("進線",entered.length,"依案件建立時間")+createKpi("平均服務時間",avg+" 分","期間內完成案件")+createKpi("已預約",appt,"依預約成立日期")+createKpi("已到店",visited,"依到店確認日期")+createKpi("完成療程",treated,"依療程確認日期");renderBars("channelStats",statsCounts(entered,"channel"));renderBars("categoryStats",statsCounts(entered,"category"));const tags={};entered.forEach(c=>(c.tags||[]).forEach(t=>tags[t]=(tags[t]||0)+1));renderBars("tagStats",tags);renderBars("genderStats",statsCounts(entered,"gender"));renderBars("ageStats",statsCounts(entered,"age"));}

function renderShiftHistory(){
  const history = getShiftHistory();
  const el = document.getElementById("shiftHistory");
  if(!history.length){
    el.innerHTML = `<div class="panel empty"><div><h3>目前還沒有班次紀錄</h3><p>完成一次「開始班次 → 結束班次」後，就會自動留下紀錄。</p></div></div>`;
    return;
  }
  el.innerHTML = history.map(r=>`
    <div class="shift-record">
      <div class="period">
        <strong>${fmtFull(r.startedAt)} → ${fmtFull(r.endedAt)}</strong>
        <span>本班時長 ${hms(r.durationMs||0)}</span>
      </div>
      <div class="shift-summary">
        <div><small>今日新進</small><strong>${r.summary?.received ?? 0}</strong></div>
        <div><small>處理中</small><strong>${r.summary?.active ?? 0}</strong></div>
        <div><small>等待客戶</small><strong>${r.summary?.waiting ?? 0}</strong></div>
        <div><small>待追蹤</small><strong>${r.summary?.follow ?? 0}</strong></div>
        <div><small>已預約</small><strong>${r.summary?.appointment ?? 0}</strong></div>
      </div>
    </div>
  `).join("");
}

function renderQuick(){const active=state.cases.filter(c=>c.status==="處理中").sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));const waiting=state.cases.filter(c=>["等待客戶","待追蹤"].includes(c.status)).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));const item=c=>`<div class="quick-item ${quickSelectedId===c.id?"active":""}" data-qid="${c.id}"><div class="main"><strong>${c.customer}</strong><span>${c.channel} · ${c.category}</span></div><div class="timer" ${c.status==="處理中"?`data-q-timer="${c.id}"`:""}>${c.status==="處理中"?hms(currentActiveMs(c)):c.status}</div></div>`;document.getElementById("quickActiveList").innerHTML=active.map(item).join("")||'<p class="muted">目前沒有正在服務的案件。</p>';document.getElementById("quickWaitingList").innerHTML=waiting.map(item).join("")||'<p class="muted">目前沒有等待或待追蹤案件。</p>';document.querySelectorAll("[data-qid]").forEach(el=>el.addEventListener("click",()=>{quickSelectedId=el.dataset.qid;renderQuick();}));renderQuickDetail();}
function renderQuickDetail(){const el=document.getElementById("quickDetail"),c=state.cases.find(x=>x.id===quickSelectedId);if(!c){el.innerHTML='<div class="empty small-empty"><div><h3>選擇一位客戶</h3><p>可快速加標籤、補備註、等待、追蹤、預約或結案。</p></div></div>';return;}el.innerHTML=`<div class="quick-customer-head"><div><div class="eyebrow">${c.channel} · ${c.id}</div><h3>${c.customer}</h3><div class="meta"><span>${c.category}</span><span>·</span><span>${c.status}</span></div></div><strong data-q-detail-timer="${c.id}">${c.status==="處理中"?hms(currentActiveMs(c)):c.status}</strong></div><div class="quick-tag-grid">${TAGS.map(t=>`<button class="quick-tag ${(c.tags||[]).includes(t)?"on":""}" data-qtag="${t}">${t}</button>`).join("")}</div><textarea id="quickNote" class="quick-note" placeholder="備註會自動保存">${c.notes||""}</textarea><div class="quick-actions">${c.status==="處理中"?'<button class="btn" data-qact="wait">等待客戶</button>':'<button class="btn primary" data-qact="resume">繼續服務</button>'}<button class="btn" data-qact="follow">待追蹤</button><button class="btn" data-qact="appoint">已預約</button><button class="btn" data-qact="done">結案</button></div>`;el.querySelectorAll("[data-qtag]").forEach(b=>b.addEventListener("click",()=>{c.tags=c.tags||[];const t=b.dataset.qtag;c.tags=c.tags.includes(t)?c.tags.filter(x=>x!==t):[...c.tags,t];c.events.push({at:nowISO(),text:"更新標籤："+t});saveState();}));const note=document.getElementById("quickNote");let timer;note.addEventListener("input",()=>{clearTimeout(timer);timer=setTimeout(()=>{c.notes=note.value;localStorage.setItem(STORAGE_KEY,JSON.stringify(state));},250);});el.querySelectorAll("[data-qact]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.qact,now=nowISO();if(a==="wait"){if(c.status==="處理中"){c.activeMs=currentActiveMs(c);c.serviceStartedAt=null;}c.status="等待客戶";c.waitStartedAt=now;c.events.push({at:now,text:"快速模式：等待客戶"});}else if(a==="resume"){c.status="處理中";c.serviceStartedAt=now;c.waitStartedAt=null;c.events.push({at:now,text:"快速模式：繼續服務"});}else if(a==="follow"){if(c.status==="處理中"){c.activeMs=currentActiveMs(c);c.serviceStartedAt=null;}c.status="待追蹤";c.closedAt=now;const d=prompt("追蹤日期（例如 2026-10-02，可留空）","");if(d)c.followAt=new Date(d+"T10:00:00").toISOString();c.events.push({at:now,text:"快速模式：待追蹤"});}else if(a==="appoint"){if(c.status==="處理中"){c.activeMs=currentActiveMs(c);c.serviceStartedAt=null;}c.status="已預約";c.closedAt=now;c.appointmentCreatedAt=now;const d=prompt("預約日期時間（例如 2026-10-03 14:30，可留空）","");if(d)c.appointment=new Date(d.replace(" ","T")).toISOString();c.events.push({at:now,text:"快速模式：已預約"});}else if(a==="done"){if(c.status==="處理中"){c.activeMs=currentActiveMs(c);c.serviceStartedAt=null;}c.status="已結案";c.closedAt=now;c.events.push({at:now,text:"快速模式：結案"});}saveState();}));}
document.querySelectorAll(".quick-channel").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".quick-channel").forEach(x=>x.classList.remove("active"));b.classList.add("active");quickChannel=b.dataset.qchannel;}));document.getElementById("quickStartBtn").addEventListener("click",()=>{const customer=document.getElementById("quickCustomer").value.trim(),category=document.getElementById("quickCategory").value;if(!customer||!category){alert("請先輸入客戶識別與諮詢主題。");return;}const prefix={LINE:"LINE",Instagram:"IG",Facebook:"FB","官網":"WEB"}[quickChannel]||"CASE";state.counter=(state.counter||300)+1;const now=nowISO(),c={id:`${prefix}-${String(state.counter).padStart(4,"0")}`,channel:quickChannel,customer,category,tags:[],gender:"未知／未提供",age:"未知／未提供",notes:"",status:"處理中",createdAt:now,serviceStartedAt:now,activeMs:0,waitStartedAt:null,closedAt:null,appointment:null,visited:null,treatment:null,events:[{at:now,text:"快速模式：建立案件並開始服務"}]};state.cases.push(c);quickSelectedId=c.id;document.getElementById("quickCustomer").value="";document.getElementById("quickCategory").value="";saveState();});document.getElementById("quickCustomer").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("quickStartBtn").click();});

function openDialog(channel){
  document.getElementById("channelInput").value=channel;
  document.getElementById("dialogTitle").textContent=`新增 ${channel} 案件`;
  document.getElementById("caseForm").reset();
  document.getElementById("channelInput").value=channel;
  document.getElementById("caseDialog").showModal();
}
document.querySelectorAll(".channel-btn").forEach(b=>b.addEventListener("click",()=>openDialog(b.dataset.channel)));

document.getElementById("tagChoices").innerHTML = TAGS.map(t=>`<label class="chip-choice"><input type="checkbox" value="${t}"> ${t}</label>`).join("");

document.getElementById("createCaseBtn").addEventListener("click",(e)=>{
  const customer=document.getElementById("customerInput").value.trim();
  const category=document.getElementById("categoryInput").value;
  if(!customer||!category){ e.preventDefault(); alert("請填寫客戶識別與諮詢主題。"); return; }
  const channel=document.getElementById("channelInput").value;
  const prefix={LINE:"LINE",Instagram:"IG",Facebook:"FB","官網":"WEB"}[channel]||"CASE";
  state.counter=(state.counter||300)+1;
  const now=nowISO();
  const tags=[...document.querySelectorAll("#tagChoices input:checked")].map(x=>x.value);
  const c={
    id:`${prefix}-${String(state.counter).padStart(4,"0")}`,
    channel,customer,category,tags,
    gender:document.getElementById("genderInput").value,
    age:document.getElementById("ageInput").value,
    notes:document.getElementById("notesInput").value.trim(),
    status:"處理中",createdAt:now,serviceStartedAt:now,activeMs:0,waitStartedAt:null,closedAt:null,
    appointment:null,visited:null,treatment:null,
    events:[{at:now,text:"建立案件並開始服務"}]
  };
  state.cases.push(c); selectedId=c.id; saveState();
});

document.getElementById("caseFilter").addEventListener("change",renderCases);
document.getElementById("seedBtn").addEventListener("click",()=>{ if(confirm("要重設為預設模擬資料嗎？")) seedData(); });

function updateLiveTime(){
  const now = new Date();
  const dateEl = document.getElementById("liveDate");
  const clockEl = document.getElementById("liveClock");
  if(dateEl) dateEl.textContent = now.toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"});
  if(clockEl) clockEl.textContent = now.toLocaleTimeString("zh-TW",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"});

  const shift = getShift();
  const elapsedEl = document.getElementById("shiftElapsed");
  if(elapsedEl){
    elapsedEl.textContent = shift.active && shift.startedAt
      ? `本班 ${hms(Date.now()-new Date(shift.startedAt).getTime())}`
      : "本班 00:00:00";
  }

  document.querySelectorAll("[data-case-timer]").forEach(el=>{
    const c = state.cases.find(x=>x.id===el.dataset.caseTimer);
    if(c) el.textContent = `服務 ${hms(currentActiveMs(c))}`;
  });
  document.querySelectorAll("[data-detail-timer]").forEach(el=>{
    const c = state.cases.find(x=>x.id===el.dataset.detailTimer);
    if(c) el.textContent = hms(currentActiveMs(c));
  });
  const qc=document.getElementById("quickClock");if(qc)qc.textContent=now.toLocaleTimeString("zh-TW",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"});document.querySelectorAll("[data-q-timer]").forEach(el=>{const c=state.cases.find(x=>x.id===el.dataset.qTimer);if(c)el.textContent=hms(currentActiveMs(c));});document.querySelectorAll("[data-q-detail-timer]").forEach(el=>{const c=state.cases.find(x=>x.id===el.dataset.qDetailTimer);if(c)el.textContent=c.status==="處理中"?hms(currentActiveMs(c)):c.status;});
}

document.querySelectorAll(".period-btn").forEach(b=>b.addEventListener("click",()=>{statsPeriod=b.dataset.period;document.querySelectorAll(".period-btn").forEach(x=>x.classList.toggle("active",x===b));document.getElementById("statsDate").value="";renderStats();}));document.getElementById("statsDate").addEventListener("change",e=>{if(!e.target.value)return;statsPeriod="date:"+e.target.value;document.querySelectorAll(".period-btn").forEach(x=>x.classList.remove("active"));renderStats();});window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;const b=document.getElementById("installBtn");if(b)b.hidden=false;});document.getElementById("installBtn").addEventListener("click",async()=>{if(installPrompt){installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;document.getElementById("installBtn").hidden=true;}else{alert("iPhone/iPad：Safari → 分享 → 加入主畫面。Android：Chrome → 安裝應用程式／加入主畫面。需使用 HTTPS 網址開啟。");}});


function treatmentSearchText(t){
  return [t.name,t.alias,t.category,t.summary,...(t.keywords||[]),...(t.quickFacts||[]),...(t.canAnswer||[]),...(t.mustRefer||[]),...((t.questions||[]).flat())].join(" ").toLowerCase();
}
function filteredTreatments(){
  const q=knowledgeQuery.trim().toLowerCase();
  return TREATMENTS.filter(t=>(knowledgeCategory==="全部"||t.category===knowledgeCategory)&&(!q||treatmentSearchText(t).includes(q)));
}
function renderKnowledgeFilters(){
  const el=document.getElementById("knowledgeFilters");
  if(!el)return;
  el.innerHTML=TREATMENT_CATEGORIES.map(c=>`<button class="knowledge-filter ${knowledgeCategory===c?"active":""}" data-kcat="${c}">${c}</button>`).join("");
  el.querySelectorAll("[data-kcat]").forEach(btn=>btn.addEventListener("click",()=>{knowledgeCategory=btn.dataset.kcat;renderKnowledge();}));
}
function renderKnowledge(){
  const listEl=document.getElementById("knowledgeList"),detailEl=document.getElementById("knowledgeDetail"),countEl=document.getElementById("knowledgeResultCount");
  if(!listEl||!detailEl)return;
  renderKnowledgeFilters();
  const rows=filteredTreatments();
  if(countEl)countEl.textContent=`找到 ${rows.length} 個項目`;
  if(rows.length&&!rows.some(t=>t.id===knowledgeSelectedId))knowledgeSelectedId=rows[0].id;
  listEl.innerHTML=rows.map(t=>`
    <article class="knowledge-card ${knowledgeSelectedId===t.id?"active":""}" data-treatment="${t.id}">
      <div class="knowledge-card-top"><div><h4>${t.name}</h4><div class="subname">${t.alias||""}</div></div><span class="knowledge-tag">${t.category}</span></div>
      <div class="summary">${t.summary}</div>
      <div class="knowledge-tags">${(t.keywords||[]).slice(0,5).map(k=>`<span class="knowledge-tag">${k}</span>`).join("")}</div>
    </article>`).join("")||`<div class="empty small-empty"><div><h3>沒有符合的項目</h3><p>可以改用較短的關鍵字，例如「毛孔」「鬆弛」「乾燥」「怕痛」。</p></div></div>`;
  listEl.querySelectorAll("[data-treatment]").forEach(card=>card.addEventListener("click",()=>{knowledgeSelectedId=card.dataset.treatment;renderKnowledge();}));
  const t=TREATMENTS.find(x=>x.id===knowledgeSelectedId);
  if(!t||!rows.some(x=>x.id===t.id)){detailEl.innerHTML=`<div class="empty knowledge-empty"><div><h3>選擇一個療程</h3><p>查看快速摘要與客服回答界線。</p></div></div>`;return;}
  detailEl.innerHTML=`
    <div class="knowledge-detail-top">
      <div><div class="eyebrow">${t.category}</div><h2>${t.name}</h2><div class="category">${t.alias||""}</div></div>
      <div class="knowledge-actions"><button class="btn" id="copyTreatmentBtn">複製速查摘要</button></div>
    </div>
    <div class="knowledge-detail-grid">
      <section class="knowledge-block full"><h3>30 秒看懂</h3><p>${t.summary}</p><ul>${(t.quickFacts||[]).map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="knowledge-block"><h3>常見客問</h3><div class="knowledge-qa">${(t.questions||[]).map(([q,a])=>`<div class="knowledge-qa-item"><div class="knowledge-q">Q：${q}</div><div class="knowledge-a">${a}</div></div>`).join("")}</div></section>
      <section class="knowledge-block"><h3>困擾／關鍵字</h3><div class="knowledge-tags">${(t.keywords||[]).map(k=>`<span class="knowledge-tag">${k}</span>`).join("")}</div></section>
      <section class="knowledge-block knowledge-safe"><h3>客服可以先回答</h3><ul>${(t.canAnswer||[]).map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="knowledge-block knowledge-warning"><h3>需要轉醫師／專業諮詢</h3><ul>${(t.mustRefer||[]).map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="knowledge-block full"><h3>資料來源</h3><div class="knowledge-source-list">${(t.sources||[]).map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">↗ ${label}</a>`).join("")}</div><div class="knowledge-updated">示範資料整理日期：2026/09/30。公司活動、價格、產品、院所與衛教內容可能變動，實際使用前應依最新內部資料更新。</div></section>
    </div>`;
  const copyBtn=document.getElementById("copyTreatmentBtn");
  if(copyBtn)copyBtn.addEventListener("click",async()=>{const text=[t.name,t.summary,"","客服可先回答："+(t.canAnswer||[]).join("、"),"需轉專業："+(t.mustRefer||[]).join("、")].join("\n");try{await navigator.clipboard.writeText(text);copyBtn.textContent="已複製";setTimeout(()=>copyBtn.textContent="複製速查摘要",1200);}catch(e){alert(text);}});
}
const knowledgeSearchEl=document.getElementById("knowledgeSearch");
if(knowledgeSearchEl)knowledgeSearchEl.addEventListener("input",e=>{knowledgeQuery=e.target.value;renderKnowledge();});
const knowledgeClearEl=document.getElementById("knowledgeClear");
if(knowledgeClearEl)knowledgeClearEl.addEventListener("click",()=>{knowledgeQuery="";knowledgeCategory="全部";if(knowledgeSearchEl)knowledgeSearchEl.value="";renderKnowledge();});

function renderAll(){
  renderShift();
  renderQuick();
  renderKnowledge();
  renderWorkKpis();
  renderCases();
  renderDetail();
  renderStats();
  renderShiftHistory();
  updateLiveTime();
}
setTabs();
renderAll();
setInterval(updateLiveTime,1000);

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
