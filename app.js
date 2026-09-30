
const TAGS = ["價格","預算有限","優惠／活動","效果","恢復期","疼痛","安全性","醫師經驗","診所環境","地點／交通","可預約時間","比較其他診所","需討論","第一次醫美"];
const STORAGE_KEY = "med_aesthetic_cs_demo_v2";
const SHIFT_KEY = "med_aesthetic_shift_v1";
const SHIFT_HISTORY_KEY = "med_aesthetic_shift_history_v1";

let selectedId = null;
let quickSelectedId = null;
let quickChannel = "LINE";
let statsPeriod = "today";
let installPrompt = null;
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

function renderAll(){
  renderShift();
  renderQuick();
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
