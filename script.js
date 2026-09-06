/* ============================================================
   PHOSPHOR OS v4 — Ainesh Sabharwal
   Fullscreen snap "apps". Edit everything in DATA.
   ============================================================ */

const DATA = {
  name: "Ainesh Sabharwal",
  role: "CS @ UC Berkeley",
  tagline: "I build systems that feel tactile — compression trees, audio synths,\non-device AI, native apps that mirror between your devices.",
  resumeFile: "Ainesh_Sabharwal_Resume.pdf",

  ascii: [
    "  █████╗ ██╗███╗   ██╗███████╗███████╗██╗  ██╗",
    " ██╔══██╗██║████╗  ██║██╔════╝██╔════╝██║  ██║",
    " ███████║██║██╔██╗ ██║█████╗  ███████╗███████║",
    " ██╔══██║██║██║╚██╗██║██╔══╝  ╚════██║██╔══██║",
    " ██║  ██║██║██║ ╚████║███████╗███████║██║  ██║",
    " ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝",
  ].join("\n"),

  about: [
    { c: "cm", t: "// about.txt — last saved: today" },
    { c: "", t: "" },
    { c: "kw", t: "const ", x: 'name = "Ainesh Sabharwal";' },
    { c: "kw", t: "const ", x: 'school = "UC Berkeley — Computing, Data Science & Society";' },
    { c: "kw", t: "const ", x: "gradYear = 2030;" },
    { c: "", t: "" },
    { c: "cm", t: "// Graduated Bridgeland HS (Cypress, TX) ranked 2 of 921." },
    { c: "cm", t: "// Got here by building things that fight back —" },
    { c: "cm", t: "// Huffman trees, Karplus-Strong synths, a peer-to-peer notes app." },
    { c: "", t: "" },
    { c: "kw", t: "focus", x: " = ['on-device AI', 'retrieval systems', 'native apps'];" },
    { c: "kw", t: "also", x: "  = ['Eagle Scout', 'Taekwondo black belt'];" },
    { c: "", t: "" },
    { c: "cm", t: "// status: open to internships" },
  ],

  skills: [
    { g: "lang",  pct: 92, v: "Java · TypeScript · Python · Swift" },
    { g: "web",   pct: 84, v: "HTML/CSS · full-stack apps · dashboards & analytics" },
    { g: "ai/ml", pct: 78, v: "RAG · on-device LLM inference · summarization · Vision/Speech/CoreML" },
    { g: "ds&a",  pct: 88, v: "stacks · queues · ring buffers · priority queues · trees · greedy" },
    { g: "tools", pct: 80, v: "Git / GitHub · Xcode · Eclipse" },
  ],

  tapes: [
    { role: "Lead Instructor", org: "iCode", when: "Oct 2025 – Mar 2026",
      note: "Taught programming fundamentals to K-12 through hands-on projects; guided students building and debugging their own software and hardware." },
    { role: "Student Researcher", org: "Algoverse AI Research Program", when: "Aug 2024 – May 2025",
      note: "Applied research on Retrieval-Augmented Generation for grounded QA — retrieval, embeddings, and prompting strategies to raise answer accuracy over source docs." },
    { role: "B.A. Computer Science", org: "UC Berkeley (CDSS)", when: "Class of 2030",
      note: "College of Computing, Data Science & Society. Currently: CS 61A, linear algebra & differential equations behind me." },
    { role: "Bridgeland High School", org: "Cypress, TX", when: "Class of 2026",
      note: "Rank 2 of 921. Data structures & algorithms in Java, AP Physics C, FBLA, TSA." },
  ],

  projects: [
    { name: "Drawly", tag: "Swift / SwiftUI", meta: "in progress",
      body: "Native iPhone + Mac notes app. Typing and sketches mirror live between paired\ndevices over a direct peer-to-peer link (MultipeerConnectivity), iCloud as backup.\n\nOn-device OCR, speech transcription, and summarization (Vision, Speech, Core ML).\nExports PencilKit sketches to vector SVG.", link: "" },
    { name: "ApathyAI", tag: "Python · contributor", meta: "on-device copilot",
      body: "Desktop AI assistant that runs fully on-device inside a user's existing workflow.\nReads on-screen context to auto-summarize long documents and suggest\nspreadsheet / form fills.", link: "https://github.com/qurashisohaib/ApathyAI" },
    { name: "HuddleHub", tag: "TypeScript", meta: "FBLA 25-26",
      body: "Full-stack platform to browse, search, review, and bookmark local businesses.\nOwner dashboard for managing listings and tracking engagement analytics.", link: "" },
    { name: "Bridgeland Arena Hub", tag: "TypeScript", meta: "3rd place, FBLA Nationals",
      body: "Event ticketing and box-office platform for a school venue.\n3rd place in Website Design at the FBLA National Leadership Conference (2025).", link: "" },
    { name: "DS&A Labs", tag: "Java", meta: "github.com/sabharwalainesh",
      body: "Greedy-Huffman: file compression — min-priority-queue code tree, bit-packed to disk.\n20 Questions: guessing game on a binary question tree that learns via recursion + I/O.\nGuitar Hero: real-time plucked-string synthesis (Karplus-Strong) on a ring buffer.\nImage Enhancer: Swing editor with filters and full undo/redo on an array-based stack.",
      link: "https://github.com/sabharwalainesh" },
  ],

  honors: [
    { ico: "①", b: "Class Rank 2 of 921", s: "Bridgeland High School" },
    { ico: "▮", b: "3rd Place — Website Design", s: "FBLA National Leadership Conference" },
    { ico: "⇡", b: "Eagle Scout", s: "Boy Scouts of America" },
    { ico: "◆", b: "Black Belt", s: "Taekwondo" },
  ],

  contact: {
    email: "aineshsab@berkeley.edu",
    github: "https://github.com/sabharwalainesh",
    linkedin: "https://www.linkedin.com/in/ainesh-sabharwal",
    phone: "832-302-6497",
  },

  ticker: [
    ["status", "open to internships"],
    ["loc", "Berkeley, CA / Cypress, TX"],
    ["now playing", "CS 61A"],
    ["stack", "Java · TS · Python · Swift"],
    ["award", "3rd @ FBLA Nationals — Website Design"],
    ["rank", "2 / 921"],
    ["fact", "Eagle Scout · TKD black belt"],
    ["uptime", "since 2008"],
  ],
};

/* ============================================================
   SFX — WebAudio synth, no files. Off by default; toggle in menubar.
   ============================================================ */
const SFX = (() => {
  let ctx = null, master = null, enabled = false, humOsc = null;
  const ensure = () => {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.16;
      master.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
  };
  const env = (g, t, a = 0.002, d = 0.08, peak = 1) => {
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  };
  const blip = (freq = 900, dur = 0.05, type = "square", vol = 0.5) => {
    if (!enabled) return; ensure();
    const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    env(g, t, 0.002, dur, vol);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.05);
  };
  const sweep = (f0, f1, dur = 0.18, type = "sawtooth", vol = 0.35) => {
    if (!enabled) return; ensure();
    const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    env(g, t, 0.004, dur, vol);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.05);
  };
  const noise = (dur = 0.12, vol = 0.3, lp = 3000) => {
    if (!enabled) return; ensure();
    const t = ctx.currentTime;
    const len = (dur + 0.05) * ctx.sampleRate;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = lp;
    const g = ctx.createGain();
    env(g, t, 0.003, dur, vol);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t); src.stop(t + dur + 0.05);
  };
  return {
    get on() { return enabled; },
    toggle() {
      enabled = !enabled;
      if (enabled) { ensure(); this.hum(true); this.ding(); } else this.hum(false);
      return enabled;
    },
    /* vocabulary */
    key:    () => blip(1100 + Math.random() * 500, 0.018, "square", 0.16),   // typewriter tick
    hover:  () => blip(720, 0.03, "square", 0.12),
    click:  () => { blip(400, 0.04, "square", 0.4); blip(1300, 0.02, "square", 0.2); },
    open:   () => sweep(220, 880, 0.16, "triangle", 0.4),                    // window in
    whoosh: () => { noise(0.22, 0.2, 1200); sweep(600, 150, 0.22, "sine", 0.18); }, // section change
    ding:   () => { blip(1318, 0.18, "sine", 0.5); setTimeout(() => blip(1760, 0.25, "sine", 0.4), 90); }, // trophy
    clunk:  () => { noise(0.06, 0.5, 500); blip(90, 0.09, "sine", 0.7); },   // VHS mech
    eject:  () => { sweep(300, 80, 0.3, "sawtooth", 0.35); noise(0.25, 0.3, 800); },
    dial:   () => {  // dial-up chirp burst
      [1200, 2100, 980, 1700, 2400].forEach((f, i) => setTimeout(() => blip(f, 0.07, "sine", 0.3), i * 90));
      setTimeout(() => noise(0.3, 0.15, 4000), 480);
    },
    glitch: () => noise(0.08, 0.25, 6000),
    err:    () => { blip(160, 0.14, "sawtooth", 0.45); },
    hum(onoff) {
      if (!ctx) return;
      if (onoff && !humOsc && enabled) {
        humOsc = ctx.createOscillator();
        const g = ctx.createGain();
        humOsc.type = "sine"; humOsc.frequency.value = 60;
        g.gain.value = 0.012;
        humOsc.connect(g); g.connect(master);
        humOsc.start();
        humOsc._g = g;
      } else if (!onoff && humOsc) { humOsc.stop(); humOsc = null; }
    },
  };
})();

/* ---------- helpers ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

async function typeInto(el, text, speed = 16, alive = () => true) {
  if (reduced) { el.append(text); return; }
  for (const ch of text) {
    if (!alive()) return;
    el.append(ch);
    await sleep(ch === "\n" ? speed * 5 : speed + Math.random() * speed);
  }
}
async function decodeTo(el) {
  const final = el.dataset.text || el.textContent;
  if (reduced) { el.textContent = final; return; }
  const glyphs = "!<>-_\\/[]{}=+*^?#01";
  for (let s = 0; s <= 14; s++) {
    el.textContent = [...final].map((ch, i) =>
      ch === " " ? " " : i < (final.length * s) / 14 ? ch : glyphs[(Math.random() * glyphs.length) | 0]).join("");
    await sleep(38);
  }
  el.textContent = final;
}

/* ============================================================
   BOOT
   ============================================================ */
async function boot() {
  const el = $("#bootLog"), bar = $("#bootBar"), bootEl = $("#boot");
  const lines = [
    "PHOSPHOR OS  v4.0   (c) ainesh sabharwal",
    "",
    "CPU ......... 1 x undergrad @ 3am",
    "MEM ......... coffee: ok",
    "DISK ........ mount /home/ainesh ................ ok",
    "NET ......... berkeley.edu link up",
    "VIDEO ....... PHOSPHOR VIDEO deck detected",
    "",
    "spawning apps: shell nano monitor vhs finder modem ...",
    "ready.",
  ];
  const finish = () => {
    bootEl.classList.add("done");
    const p = $("#crtPower");
    if (!reduced) { p.classList.add("fire"); p.addEventListener("animationend", () => p.classList.remove("fire"), { once: true }); }
    activate($("#hero"));
  };
  const skip = () => { removeEventListener("keydown", skip); removeEventListener("click", skip); finish(); };
  addEventListener("keydown", skip); addEventListener("click", skip);

  if (reduced) { el.textContent = lines.join("\n"); bar.style.width = "100%"; await sleep(300); finish(); return; }
  for (let i = 0; i < lines.length; i++) {
    el.textContent += (i ? "\n" : "") + lines[i];
    bar.style.width = Math.round(((i + 1) / lines.length) * 100) + "%";
    await sleep(lines[i] === "" ? 50 : 110 + Math.random() * 90);
  }
  await sleep(360); finish();
}

/* ============================================================
   CLOCK / SPOTLIGHT
   ============================================================ */
function clock() {
  const el = $("#clock");
  const tick = () => { const d = new Date(); el.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, "0")).join(":"); };
  tick(); setInterval(tick, 1000);
}
function spotlight() {
  const sp = $("#spotlight");
  addEventListener("pointermove", (e) => {
    sp.style.setProperty("--mx", e.clientX + "px");
    sp.style.setProperty("--my", e.clientY + "px");
  }, { passive: true });
}

/* ============================================================
   HERO — ascii banner + typed sub + shell
   ============================================================ */
let heroDone = false;
async function runHero() {
  if (heroDone) return; heroDone = true;
  const bannerEl = $("#heroAscii"), sub = $("#heroSub");

  // ascii banner: reveal by columns
  const rows = DATA.ascii.split("\n");
  const width = Math.max(...rows.map((r) => r.length));
  if (reduced) { bannerEl.textContent = DATA.ascii; }
  else {
    for (let c = 0; c <= width; c += 3) {
      bannerEl.textContent = rows.map((r) => r.slice(0, c)).join("\n");
      await sleep(14);
    }
    bannerEl.textContent = DATA.ascii;
    bannerEl.classList.add("glitch");
    setTimeout(() => bannerEl.classList.remove("glitch"), 900);
  }
  // periodic glitch
  if (!reduced) setInterval(() => {
    bannerEl.classList.add("glitch");
    SFX.glitch();
    setTimeout(() => bannerEl.classList.remove("glitch"), 850);
  }, 7000);

  const seq = [
    { t: "$ whoami\n" },
    { html: `<span class="accent">${DATA.name}</span> — ${DATA.role}\n` },
    { t: "$ cat mission.txt\n" },
    { t: DATA.tagline + "\n" },
  ];
  for (const s of seq) {
    if (s.html) { sub.insertAdjacentHTML("beforeend", s.html); await sleep(reduced ? 0 : 120); }
    else await typeInto(sub, s.t, 13);
  }
  shell();
}

function shell() {
  const input = $("#termInput"), out = $("#termScroll");
  const goto = (id) => { document.getElementById(id).scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); };
  const cmds = {
    help: () => `commands:
  <span class="k">about</span>      who I am
  <span class="k">skills</span>     what I build with
  <span class="k">work</span>       experience (VHS deck)
  <span class="k">projects</span>   things I've shipped
  <span class="k">honors</span>     awards
  <span class="k">contact</span>    reach me
  <span class="k">resume</span>     open the PDF
  <span class="k">theme</span>      cycle phosphor colour
  <span class="k">clear</span>      wipe screen`,
    about: () => { goto("about"); return "opening about.txt in nano ..."; },
    skills: () => { goto("skills"); return DATA.skills.map((s) => `${s.g.padEnd(6)} ${"█".repeat(Math.round(s.pct / 6))} ${s.pct}%`).join("\n"); },
    work: () => { goto("experience"); return "inserting work.vhs ... ▶ PLAY"; },
    experience: () => cmds.work(),
    projects: () => { goto("projects"); return DATA.projects.map((p) => `▤ ${p.name}  (${p.tag})`).join("\n"); },
    honors: () => { goto("honors"); return DATA.honors.map((h) => `★ ${h.b} — ${h.s}`).join("\n"); },
    contact: () => { goto("contact"); return `mail   ${DATA.contact.email}\ngithub ${DATA.contact.github}`; },
    resume: () => { window.open(DATA.resumeFile, "_blank"); return "opening " + DATA.resumeFile + " ..."; },
    theme: () => { cycleTheme(); return "phosphor recalibrated."; },
    whoami: () => `${DATA.name} — ${DATA.role}`,
    ls: () => "about.txt  skills.sys  work.vhs  projects/  honors.md  contact.net  resume.pdf",
    sudo: () => "nice try.",
    clear: () => "\x00CLEAR",
  };
  async function run(raw) {
    const cmd = raw.trim().toLowerCase();
    const echo = document.createElement("div");
    echo.className = "term__echo";
    echo.innerHTML = `<span class="term__prompt">visitor@phosphor:~$</span> <b>${esc(raw)}</b>`;
    out.append(echo);
    if (!cmd) return;
    const fn = cmds[cmd];
    const box = document.createElement("div");
    box.className = "term__out";
    out.append(box);
    out.scrollTop = out.scrollHeight;
    if (!fn) { SFX.err(); await typeInto(box, `command not found: ${cmd}  (try "help")`, 7); return; }
    const res = fn();
    if (res === "\x00CLEAR") { out.textContent = ""; return; }
    if (reduced) { box.innerHTML = res; return; }
    for (const part of res.split(/(<[^>]+>)/)) {
      if (part.startsWith("<")) box.insertAdjacentHTML("beforeend", part);
      else for (const ch of part) { box.append(ch); out.scrollTop = out.scrollHeight; await sleep(5); }
    }
  }
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); SFX.click(); const v = input.textContent; input.textContent = ""; run(v); }
  });
  $(".term__live").addEventListener("click", () => input.focus());
}

/* ============================================================
   EDITOR
   ============================================================ */
let editorDone = false;
async function runEditor() {
  if (editorDone) return; editorDone = true;
  const code = $("#aboutCode"), gutter = $("#aboutGutter"), lnEl = $("#aboutLn");
  for (let i = 0; i < DATA.about.length; i++) {
    const line = DATA.about[i];
    gutter.append((i + 1) + "\n");
    lnEl.textContent = "ln " + (i + 1);
    const span = document.createElement("span");
    span.className = line.c || "";
    code.append(span);
    await typeInto(span, line.t, 9);
    if (line.x) { const sx = document.createElement("span"); sx.className = "str"; code.append(sx); await typeInto(sx, line.x, 9); }
    code.append("\n");
  }
  const cur = document.createElement("span");
  cur.className = "cursor"; cur.textContent = " ";
  code.append(cur);
  $("#aboutStatus").textContent = "SAVED ✓";
}

/* ============================================================
   MONITOR — meters + ascii sparkline graph
   ============================================================ */
function renderMeters() {
  $("#meters").innerHTML = DATA.skills.map((s, i) => `
    <div class="meter" style="--i:${i}">
      <span class="meter__label">${esc(s.g)}</span>
      <div class="meter__track"><span class="meter__fill" style="--pct:${s.pct}%"></span></div>
      <span class="meter__val">${esc(s.v)}</span>
    </div>`).join("");
}
let graphTimer = null;
function runGraph() {
  if (graphTimer) return;
  const el = $("#cpuGraph");
  const blocks = " ▁▂▃▄▅▆▇█";
  const W = 60;
  let hist = Array.from({ length: W }, () => Math.random());
  const draw = () => {
    hist.push(Math.min(1, Math.max(0, hist[hist.length - 1] + (Math.random() - 0.5) * 0.35)));
    hist = hist.slice(-W);
    const line = hist.map((v) => blocks[Math.round(v * (blocks.length - 1))]).join("");
    el.textContent = `cpu ${line}\nnet ${[...line].reverse().join("")}`;
  };
  draw();
  if (!reduced) graphTimer = setInterval(draw, 200);
}

/* ============================================================
   VHS DECK — experience
   ============================================================ */
const vhs = { i: 0, playing: false, timer: null, sec: 0, gen: 0 };
function renderVHS() {
  $("#vhsTimeline").innerHTML = DATA.tapes.map((_, i) => `<span class="vhs__seg" data-i="${i}"></span>`).join("");
  $$(".vhs__seg").forEach((s) => s.addEventListener("click", () => vhsGo(+s.dataset.i, true)));
  $$("[data-vhs]").forEach((b) => b.addEventListener("click", () => {
    const a = b.dataset.vhs;
    if (a === "play") vhsToggle();
    if (a === "ff") vhsGo((vhs.i + 1) % DATA.tapes.length, true);
    if (a === "rew") vhsGo((vhs.i - 1 + DATA.tapes.length) % DATA.tapes.length, true);
    if (a === "eject") vhsEject();
  }));
}
async function vhsGo(i, manual = false) {
  vhs.i = i;
  const gen = ++vhs.gen;              // cancel any in-flight typing from a previous tape
  const alive = () => vhs.gen === gen;
  const t = DATA.tapes[i];
  const track = $("#vhsTracking");
  SFX.clunk();
  if (!reduced) { track.classList.remove("roll"); void track.offsetWidth; track.classList.add("roll"); }
  $("#vhsMode").textContent = vhs.playing ? "▶ PLAY" : "❚❚ PAUSE";
  $("#vhsTape").textContent = `SP ${i + 1}:0${0}`;
  $$(".vhs__seg").forEach((s, k) => {
    s.classList.toggle("cur", k === i);
    s.classList.toggle("done", k < i);
  });
  const role = $("#vhsRole"), org = $("#vhsOrg"), when = $("#vhsWhen"), note = $("#vhsNote");
  role.textContent = ""; org.textContent = ""; when.textContent = ""; note.textContent = "";
  await typeInto(role, t.role, 18, alive);
  if (!alive()) return;
  org.textContent = "@ " + t.org;
  when.textContent = t.when;
  await typeInto(note, t.note, 6, alive);
  if (!alive()) return;
  if (manual) vhsHold();
}
function vhsToggle() {
  vhs.playing = !vhs.playing;
  $("#vhsPlay").textContent = vhs.playing ? "❚❚" : "▶";
  $("#vhsMode").textContent = vhs.playing ? "▶ PLAY" : "❚❚ PAUSE";
  clearInterval(vhs.timer);
  if (vhs.playing && !reduced) vhs.timer = setInterval(() => vhsGo((vhs.i + 1) % DATA.tapes.length), 6000);
}
function vhsHold() {
  // manual nav pauses auto-advance briefly
  if (!vhs.playing) return;
  clearInterval(vhs.timer);
  vhs.timer = setInterval(() => vhsGo((vhs.i + 1) % DATA.tapes.length), 6000);
}
function vhsEject() {
  SFX.eject();
  vhs.gen++;
  clearInterval(vhs.timer); vhs.playing = false;
  $("#vhsPlay").textContent = "▶";
  $("#vhsMode").textContent = "⏏ EJECT";
  $("#vhsRole").textContent = "NO TAPE";
  $("#vhsOrg").textContent = ""; $("#vhsWhen").textContent = "";
  $("#vhsNote").textContent = "insert work.vhs to continue (press ▶)";
  $$(".vhs__seg").forEach((s) => s.classList.remove("cur", "done"));
}
function vhsCounter() {
  setInterval(() => {
    if (!vhs.playing) return;
    vhs.sec++;
    const h = String((vhs.sec / 3600) | 0).padStart(2, "0"),
          m = String(((vhs.sec / 60) | 0) % 60).padStart(2, "0"),
          s = String(vhs.sec % 60).padStart(2, "0");
    $("#vhsCounter").textContent = `${h}:${m}:${s}`;
  }, 1000);
}
let vhsStarted = false;
function startVHS() {
  if (vhsStarted) return; vhsStarted = true;
  vhs.playing = true;
  $("#vhsPlay").textContent = "❚❚";
  vhsGo(0);
  if (!reduced) vhs.timer = setInterval(() => vhsGo((vhs.i + 1) % DATA.tapes.length), 6000);
}

/* ============================================================
   FINDER
   ============================================================ */
function renderFinder() {
  const grid = $("#finderGrid"), preview = $("#finderPreview");
  $("#finderCount").textContent = DATA.projects.length + " items";
  grid.innerHTML = DATA.projects.map((p, i) => `
    <button class="folder" data-i="${i}" style="--i:${i}">
      <div class="folder__ico">▤</div>
      <div class="folder__name">${esc(p.name)}</div>
      <div class="folder__tag">${esc(p.tag)}</div>
    </button>`).join("");
  let typing = 0;
  const open = async (i) => {
    const p = DATA.projects[i];
    $$(".folder", grid).forEach((f) => f.classList.toggle("is-sel", +f.dataset.i === i));
    const run = ++typing;
    preview.innerHTML = `<h3>${esc(p.name)}</h3><div class="sub">${esc(p.tag)} · ${esc(p.meta)}</div><pre></pre>${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">source →</a>` : ""}`;
    const pre = $("pre", preview);
    if (reduced) { pre.textContent = p.body; return; }
    for (const ch of p.body) { if (run !== typing) return; pre.append(ch); await sleep(ch === "\n" ? 36 : 5); }
  };
  $$(".folder", grid).forEach((f) => f.addEventListener("click", () => open(+f.dataset.i)));
  return () => open(0);
}

/* ============================================================
   TROPHIES / NET / TICKER
   ============================================================ */
function renderTrophies() {
  $("#trophies").innerHTML = DATA.honors.map((h, i) => `
    <div class="trophy" style="--i:${i}">
      <span class="trophy__ico">${esc(h.ico)}</span>
      <span class="trophy__txt"><b>${esc(h.b)}</b><span>${esc(h.s)}</span></span>
    </div>`).join("");
}
let netDone = false;
async function runNet() {
  if (netDone) return; netDone = true;
  const s = $("#netStatus"), c = DATA.contact;
  SFX.dial();
  for (const l of [
    "$ ./connect --host ainesh",
    "dialing " + c.phone.replace(/-/g, " ") + " ...",
    "handshake ... negotiating ... 56000 bps",
    "CONNECTED. fastest response: email.",
  ]) await typeInto(s, l + "\n", 11);
  $("#netLed").classList.add("ok");
  $("#netLabel").textContent = "connected";
  const rows = [
    ["mail", `mailto:${c.email}`, c.email],
    ["github", c.github, c.github.replace("https://", "")],
    ["linkedin", c.linkedin, c.linkedin.replace("https://www.", "")],
    ["resume", DATA.resumeFile, DATA.resumeFile],
  ];
  $("#ports").innerHTML = rows.map(([k, href, label], i) =>
    `<li style="--i:${i}"><a href="${esc(href)}"${href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}><span class="jack"></span><span class="pk">${k}</span>${esc(label)}</a></li>`).join("");
}
function renderTicker() {
  const one = DATA.ticker.map(([k, v]) => `<span><em>${esc(k)}:</em> <b>${esc(v)}</b></span>`).join('<span class="sep">▪</span>');
  $("#tickerTrack").innerHTML = one + '<span class="sep">▪</span>' + one;
}

/* ============================================================
   SCREEN SWITCHER — snap scroll, one app at a time
   ============================================================ */
const started = {};
let lastScreen = null;
function activate(screen) {
  $$(".screen").forEach((s) => s.classList.toggle("is-on", s === screen));
  const id = screen.id;
  $("#crumbFile").textContent = screen.dataset.file;
  $$("#filetree li").forEach((li) => li.classList.toggle("is-active", li.dataset.goto === id));
  if (lastScreen && lastScreen !== screen) { SFX.whoosh(); SFX.open(); }
  lastScreen = screen;

  if (!started[id]) {
    started[id] = true;
    if (id === "hero") runHero();
    if (id === "about") runEditor();
    if (id === "skills") { $$("#skills h2.decode").forEach(decodeTo); runGraph(); }
    if (id === "experience") startVHS();
    if (id === "projects") window.__openFirstProject?.();
    if (id === "honors") { $$("#honors h2.decode").forEach(decodeTo); setTimeout(() => SFX.ding(), 500); }
    if (id === "contact") runNet();
  }
}
function screenSwitcher() {
  const cont = $("#screens");
  const screens = $$(".screen");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) activate(e.target); });
  }, { root: cont, threshold: 0.6 });
  screens.forEach((s) => io.observe(s));

  cont.addEventListener("scroll", () => {
    const p = cont.scrollTop / (cont.scrollHeight - cont.clientHeight || 1);
    $("#scrollProgress").style.width = (p * 100) + "%";
  }, { passive: true });

  $$("#filetree li").forEach((li) => li.addEventListener("click", () =>
    document.getElementById(li.dataset.goto).scrollIntoView({ behavior: reduced ? "auto" : "smooth" })));
}

/* ============================================================
   THEME
   ============================================================ */
const THEMES = ["green", "amber", "cyan"];
function cycleTheme() {
  const next = THEMES[(THEMES.indexOf(document.body.dataset.theme) + 1) % THEMES.length];
  document.body.dataset.theme = next;
  $("#themeToggle").textContent = THEMES[(THEMES.indexOf(next) + 1) % THEMES.length] + "?";
  try { localStorage.setItem("phos-theme", next); } catch {}
}
function initTheme() {
  let saved; try { saved = localStorage.getItem("phos-theme"); } catch {}
  if (saved && THEMES.includes(saved)) document.body.dataset.theme = saved;
  $("#themeToggle").textContent = THEMES[(THEMES.indexOf(document.body.dataset.theme) + 1) % THEMES.length] + "?";
  $("#themeToggle").addEventListener("click", cycleTheme);
}

/* ============================================================
   JUICE — global hover/click sfx, 3D tilt, sfx toggle
   ============================================================ */
function juice() {
  // sfx toggle
  const tog = $("#sfxToggle");
  tog.addEventListener("click", () => {
    const on = SFX.toggle();
    tog.textContent = (on ? "🔊" : "🔇") + " sfx";
    tog.classList.toggle("is-on", on);
  });

  // hover blips + click thocks on all interactive bits (delegated)
  const HOVER_SEL = "button, a, .filetree li, .folder, .vhs__seg, .trophy, .ports a";
  document.addEventListener("pointerover", (e) => {
    const el = e.target.closest(HOVER_SEL);
    if (el && !el.dataset.hovered) {
      el.dataset.hovered = "1";
      setTimeout(() => delete el.dataset.hovered, 120);
      SFX.hover();
    }
  });
  document.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button, a, .filetree li, .vhs__seg")) SFX.click();
  });

  // press squash on buttons
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest("button, .folder, .filetree li");
    if (!b) return;
    b.classList.add("squash");
    b.addEventListener("pointerup", () => b.classList.remove("squash"), { once: true });
    b.addEventListener("pointerleave", () => b.classList.remove("squash"), { once: true });
  });

  // 3D tilt on the active window, following the cursor
  if (!reduced) {
    let raf = 0;
    addEventListener("pointermove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const win = $(".screen.is-on .window");
        if (!win) return;
        const r = win.getBoundingClientRect();
        // only tilt when cursor near/over the window
        const cx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const cy = (e.clientY - (r.top + r.height / 2)) / r.height;
        if (Math.abs(cx) > 0.9 || Math.abs(cy) > 0.9) { win.style.setProperty("--rx", "0deg"); win.style.setProperty("--ry", "0deg"); return; }
        win.style.setProperty("--ry", (cx * 2.4).toFixed(2) + "deg");
        win.style.setProperty("--rx", (-cy * 2.0).toFixed(2) + "deg");
      });
    }, { passive: true });
  }

  // theme click zap
  $("#themeToggle").addEventListener("click", () => SFX.glitch());
}

/* ============================================================
   INIT
   ============================================================ */
document.title = `${DATA.name} — portfolio`;
initTheme();
clock();
spotlight();
renderMeters();
renderVHS();
vhsCounter();
window.__openFirstProject = renderFinder();
renderTrophies();
renderTicker();
screenSwitcher();
juice();
boot();
