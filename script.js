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
    instagram: "https://www.instagram.com/aineshsabharwal/",
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
  let ctx = null, master = null, enabled = false, humOsc = null, vol = 0.55;
  const ensure = () => {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = vol * 0.3;
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
    volume(v) { vol = Math.max(0, Math.min(1, v)); if (master) master.gain.value = vol * 0.3; },
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
let reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
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

window.goto = (id) => showApp(id);

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
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    removeEventListener("keydown", skip); removeEventListener("click", skip);
    bootEl.classList.add("done");
    const p = $("#crtPower");
    if (!reduced) { p.classList.add("fire"); p.addEventListener("animationend", () => p.classList.remove("fire"), { once: true }); }
    activate($("#hero"));
    setTimeout(primeApps, 80);
  };
  const skip = () => finish();
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
  const goto = window.goto;
  const cmds = {
    help: () => `commands:
  <span class="k">about</span>      who I am
  <span class="k">skills</span>     what I build with
  <span class="k">work</span>       experience (work.mp4)
  <span class="k">projects</span>   things I've shipped
  <span class="k">honors</span>     awards
  <span class="k">contact</span>    reach me
  <span class="k">resume</span>     open the PDF
  <span class="k">ask</span>        chat with a Claude about me
  <span class="k">links</span>      all my links (one page)
  <span class="k">theme</span>      cycle phosphor colour
  <span class="k">clear</span>      wipe screen`,
    about: () => { goto("about"); return "opening about.txt in nano ..."; },
    skills: () => { goto("skills"); return DATA.skills.map((s) => `${s.g.padEnd(6)} ${"█".repeat(Math.round(s.pct / 6))} ${s.pct}%`).join("\n"); },
    work: () => { goto("experience"); return "opening work.mp4 ... ▶"; },
    experience: () => cmds.work(),
    projects: () => { goto("projects"); return DATA.projects.map((p) => `▤ ${p.name}  (${p.tag})`).join("\n"); },
    honors: () => { goto("honors"); return DATA.honors.map((h) => `★ ${h.b} — ${h.s}`).join("\n"); },
    contact: () => { goto("contact"); return `mail   ${DATA.contact.email}\ngithub ${DATA.contact.github}`; },
    links: () => { location.href = "links.html"; return "opening links.html ..."; },
    ask: () => { goto("ask"); return "opening ask.claude ..."; },
    resume: () => { window.open(DATA.resumeFile, "_blank"); return "opening " + DATA.resumeFile + " ..."; },
    theme: () => { cycleTheme(); return "phosphor recalibrated."; },
    whoami: () => `${DATA.name} — ${DATA.role}`,
    ls: () => "about.txt  skills.sys  work.mp4  projects/  honors.md  ask.claude  contact.net  resume.pdf",
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
  const fast = reduced;
  for (let i = 0; i < DATA.about.length; i++) {
    const line = DATA.about[i];
    gutter.append((i + 1) + "\n");
    lnEl.textContent = "ln " + (i + 1);
    const span = document.createElement("span");
    span.className = line.c || "";
    code.append(span);
    if (fast) span.append(line.t); else await typeInto(span, line.t, 9);
    if (line.x) { const sx = document.createElement("span"); sx.className = "str"; code.append(sx); if (fast) sx.append(line.x); else await typeInto(sx, line.x, 9); }
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
  const N = 64;
  const series = {
    cpu: { v: 0.55, hist: [], out: $("#gCpu"), fmt: (v) => Math.round(v * 100) + "%" },
    net: { v: 0.35, hist: [], out: $("#gNet"), fmt: (v) => Math.round(v * 900) + " kb/s" },
    mem: { v: 0.62, hist: [], out: $("#gMem"), fmt: (v) => Math.round(v * 100) + "%" },
  };
  $$(".graph__bars").forEach((g) => { g.innerHTML = Array.from({ length: N }, () => "<i></i>").join(""); });
  for (const k in series) series[k].hist = Array.from({ length: N }, () => series[k].v);
  const draw = () => {
    for (const k in series) {
      const s = series[k];
      s.v = Math.min(1, Math.max(0.04, s.v + (Math.random() - 0.5) * (k === "mem" ? 0.08 : 0.3)));
      s.hist.push(s.v); s.hist = s.hist.slice(-N);
      const bars = $(`.graph__bars[data-g="${k}"]`).children;
      s.hist.forEach((v, i) => { bars[i].style.height = (v * 100) + "%"; });
      s.out.textContent = s.fmt(s.v);
    }
  };
  draw();
  if (!reduced) graphTimer = setInterval(draw, 220);
}

/* ============================================================
   VHS DECK — experience
   ============================================================ */
const TAPE_MS = 7000;                                   // seconds per "chapter"
const vhs = { i: 0, playing: false, timer: null, gen: 0, t0: 0, frozen: 0 };
const fmtT = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return `${String((s / 60) | 0).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; };
function vhsElapsedInTape() { return vhs.playing ? Math.min(TAPE_MS, performance.now() - vhs.t0) : vhs.frozen; }
function renderVHS() {
  const n = DATA.tapes.length;
  $("#qtTotal").textContent = fmtT(n * TAPE_MS);
  $("#qtMarks").innerHTML = DATA.tapes.slice(1).map((_, k) => `<i style="left:${((k + 1) / n) * 100}%"></i>`).join("");
  $("#qtChapters").innerHTML = DATA.tapes.map((t, k) =>
    `<li data-i="${k}"><span class="n">${fmtT(k * TAPE_MS)}</span><span class="t">${esc(t.role)}</span><span class="w">${esc(t.when)}</span></li>`).join("");
  $$("#qtChapters li").forEach((li) => li.addEventListener("click", () => { vhsGo(+li.dataset.i, true); $("#qtChapters").hidden = true; }));

  // scrubber: click / drag → jump to that chapter
  const scrub = $("#vhsTimeline");
  const seek = (e) => {
    const r = scrub.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const k = Math.min(n - 1, (p * n) | 0);
    if (k !== vhs.i) vhsGo(k, true);
  };
  scrub.addEventListener("pointerdown", (e) => { scrub.setPointerCapture(e.pointerId); seek(e); });
  scrub.addEventListener("pointermove", (e) => { if (e.buttons) seek(e); });

  // volume slider drives the SFX master gain; speaker icon = mute toggle
  const vol = $("#qtVol"), mute = $("#qtMute");
  const paintVol = () => vol.style.setProperty("--v", vol.value + "%");
  paintVol();
  vol.addEventListener("input", () => { paintVol(); SFX.volume(vol.value / 100); if (+vol.value > 0 && !SFX.on) $("#sfxToggle").click(); });
  mute.addEventListener("click", () => $("#sfxToggle").click());
  const syncMute = () => mute.classList.toggle("is-muted", !SFX.on);
  syncMute(); $("#sfxToggle").addEventListener("click", () => setTimeout(syncMute, 0));

  $$("[data-vhs]").forEach((b) => b.addEventListener("click", () => {
    const a = b.dataset.vhs;
    if (a === "play") vhsToggle();
    if (a === "ff") vhsGo((vhs.i + 1) % n, true);
    if (a === "rew") vhsGo((vhs.i - 1 + n) % n, true);
    if (a === "theme") cycleTheme();
    if (a === "list") $("#qtChapters").hidden = !$("#qtChapters").hidden;
  }));
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#qtChapters, #qtListBtn")) $("#qtChapters").hidden = true;
  });
  setInterval(vhsPaint, 250);
}
function vhsPaint() {
  const n = DATA.tapes.length;
  const p = (vhs.i + vhsElapsedInTape() / TAPE_MS) / n;
  $("#qtFill").style.width = (p * 100) + "%";
  $("#qtHead").style.left = (p * 100) + "%";
  $("#qtElapsed").textContent = fmtT(vhs.i * TAPE_MS + vhsElapsedInTape());
}
async function vhsGo(i, manual = false) {
  vhs.i = i; vhs.t0 = performance.now(); vhs.frozen = 0;
  const gen = ++vhs.gen;              // cancel any in-flight typing from a previous chapter
  const alive = () => vhs.gen === gen;
  const t = DATA.tapes[i];
  const flash = $("#vhsTracking");
  SFX.clunk();
  if (!reduced) { flash.classList.remove("roll"); void flash.offsetWidth; flash.classList.add("roll"); }
  $("#vhsTape").textContent = `chapter ${i + 1} / ${DATA.tapes.length}`;
  $$("#qtChapters li").forEach((li, k) => li.classList.toggle("cur", k === i));
  vhsPaint();
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
function vhsSetPlaying(on) {
  if (on && !vhs.playing) vhs.t0 = performance.now() - vhs.frozen;   // resume where we froze
  if (!on && vhs.playing) vhs.frozen = Math.min(TAPE_MS, performance.now() - vhs.t0);
  vhs.playing = on;
  $(".qt").classList.toggle("is-paused", !on);
  $("#vhsMode").textContent = on ? "" : "❚❚ PAUSED";
  $("#vhsMode").classList.toggle("show", !on);
  clearInterval(vhs.timer); vhs.timer = null;
  if (on && !reduced) vhs.timer = setInterval(() => vhsGo((vhs.i + 1) % DATA.tapes.length), TAPE_MS);
}
function vhsToggle() { vhsSetPlaying(!vhs.playing); }
function vhsHold() {
  // manual nav restarts the auto-advance clock
  if (!vhs.playing) return;
  clearInterval(vhs.timer);
  vhs.timer = setInterval(() => vhsGo((vhs.i + 1) % DATA.tapes.length), TAPE_MS);
}
let vhsStarted = false;
function startVHS() {
  if (vhsStarted) return; vhsStarted = true;
  vhsSetPlaying(true);
  vhsGo(0);
}

/* ============================================================
   DESKTOP — widgets, stage manager rail, mac clock
   ============================================================ */
const apps = [
    ["hero",       "terminal",    "$_", "#111827"],
    ["about",      "about.txt",   "▯", "#3b82f6"],
    ["skills",     "skills.sys",  "≣", "#22c55e"],
    ["experience", "work.mp4",    "▶", "#f97316"],
    ["projects",   "projects/",   "▤", "#0ea5e9"],
    ["honors",     "honors.md",   "★", "#eab308"],
    ["ask",        "ask.claude",  "✳", "#d97757"],
    ["contact",    "contact.net", "◍", "#8b5cf6"],
];
function renderDesktop() {
  const stage = $("#stage");
  stage.innerHTML = apps.map(([id, name, g, c]) => `
    <div class="stage__card" data-goto="${id}" style="--ac:${c}">
      <div class="stage__thumb"><div class="stage__lines"><i></i><i></i><i></i><i></i></div></div>
      <div class="stage__app">${g}</div>
      <div class="stage__name">${name}</div>
    </div>`).join("");
  $$(".stage__card").forEach((c, i) => { c.style.setProperty("--i", i); c.addEventListener("click", () => stageSwap(c)); });
  // rail pops open when the pointer nears the left edge or the user scrolls over the desktop
  let hold;
  const pop = (ms = 1600) => { stage.classList.add("is-open"); clearTimeout(hold); hold = setTimeout(() => stage.classList.remove("is-open"), ms); };
  const desk = $("#desktop");
  desk.addEventListener("pointermove", (e) => { if (e.clientX - desk.getBoundingClientRect().left < 210) pop(); }, { passive: true });
  // wheel → step one app per deliberate scroll gesture; trackpad momentum is swallowed during the cooldown
  let acc = 0, lastStep = 0, settle;
  addEventListener("wheel", (e) => {
    pop(1800);
    if (e.target.closest(".window__body, .chat__scroll, .finder__grid, .finder__preview, .chat__side")) return; // let inner content scroll
    const now = performance.now();
    if (now - lastStep < 1100 || swapping) { acc = 0; return; }   // momentum tail of the last gesture: ignore
    acc += e.deltaY;
    clearTimeout(settle); settle = setTimeout(() => { acc = 0; }, 220);  // gesture ended without reaching the threshold
    if (Math.abs(acc) > 240) {
      lastStep = now; const dir = acc > 0 ? 1 : -1; acc = 0;
      const order = apps.map((a) => a[0]); const k = order.indexOf(currentApp?.id ?? "hero");
      showApp(order[(k + dir + order.length) % order.length]);
    }
  }, { passive: true });
  stage.addEventListener("pointerenter", () => pop(60000));
  stage.addEventListener("pointerleave", () => pop(600));
  setTimeout(() => pop(2600), 1800);
  desk.addEventListener("pointerdown", (e) => { if (!e.target.closest(".stage")) stage.classList.remove("is-open"); });
  // mac clock
  const tick = () => { $("#macClock").textContent = new Date().toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).replace(",", ""); };
  tick(); setInterval(tick, 30000);
}

// Stage Manager swap: thumbnail flies to the window slot, terminal parks in the rail, then we scroll to the section
let swapping = false;
async function stageSwap(card) {
  if (swapping) return; swapping = true;
  const id = card.dataset.goto, target = document.getElementById(id);
  const cur = currentApp && $(".window", currentApp), win = $(".window", target);
  if (reduced || !cur) { activate(target); swapping = false; return; }
  SFX.whoosh();
  const from = $(".stage__thumb", card).getBoundingClientRect();
  // show the target alongside the current one, measure where it lands
  target.classList.add("is-on");
  const to = win.getBoundingClientRect();
  // start the real window at the thumbnail's position/size and let it spring into place
  win.style.transformOrigin = "0 0"; win.style.transition = "none";
  win.style.transform = `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height}) rotateY(32deg)`;
  win.style.opacity = "0";
  // current window parks into the rail slot that will represent it
  const curCard = $(`.stage__card[data-goto="${currentApp.id}"]`);
  curCard.classList.remove("is-active"); curCard.style.visibility = "hidden";
  const park = $(".stage__thumb", curCard).getBoundingClientRect(), c = cur.getBoundingClientRect();
  cur.style.transformOrigin = "0 0";
  void win.offsetWidth;
  win.style.transition = ""; win.classList.add("is-flying");
  win.style.transform = ""; win.style.opacity = "";
  cur.classList.add("is-parking");
  cur.style.transform = `translate(${park.left - c.left}px, ${park.top - c.top}px) scale(${park.width / c.width}, ${park.height / c.height}) rotateY(32deg)`;
  card.classList.add("is-leaving");
  await sleep(370);
  activate(target);
  win.classList.remove("is-flying"); win.style.transformOrigin = "";
  cur.classList.remove("is-parking"); cur.style.transform = ""; cur.style.transformOrigin = "";
  curCard.style.visibility = "";
  card.classList.remove("is-leaving");
  swapping = false;
}

/* ============================================================
   ASK — Claude-style chat over the same data
   ============================================================ */
function chatAnswer(q) {
  const t = q.toLowerCase(), c = DATA.contact;
  const li = (a) => `<ul>${a.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  if (/project|built|build|made|ship/.test(t))
    return `<p>Ainesh has shipped a handful of things. The highlights:</p>` + li(DATA.projects.map((p) =>
      `<b>${esc(p.name)}</b> <i>(${esc(p.tag)})</i> — ${esc(p.body.split("\n")[0])}${p.link ? ` <a href="${esc(p.link)}" target="_blank" rel="noopener">repo ↗</a>` : ""}`)) +
      `<p>Want details on any one of them? Ask, or open the <a href="#projects" data-goto="projects">projects folder</a>.</p>`;
  if (/skill|stack|language|tool|know|tech/.test(t))
    return `<h4>Languages & tools</h4>` + li(DATA.skills.map((k) => `<b>${esc(k.g)}</b> — ${esc(k.v)} <i>(${k.pct}%)</i>`));
  if (/honor|award|won|win|achiev|rank|eagle|belt/.test(t))
    return `<p>A few things he's earned:</p>` + li(DATA.honors.map((h) => `<b>${esc(h.b)}</b> — ${esc(h.s)}`));
  if (/work|experience|job|intern|research|teach|icode|algoverse/.test(t))
    return `<h4>Experience</h4>` + li(DATA.tapes.map((x) => `<b>${esc(x.role)}</b> @ ${esc(x.org)} <i>(${esc(x.when)})</i><br>${esc(x.note)}`));
  if (/contact|email|reach|linkedin|instagram|github|hire|message/.test(t))
    return `<p>Fastest is email. All the ways:</p>` + li([
      `Email — <a href="mailto:${c.email}">${c.email}</a>`,
      `LinkedIn — <a href="${c.linkedin}" target="_blank" rel="noopener">${c.linkedin.replace("https://www.", "")}</a>`,
      `GitHub — <a href="${c.github}" target="_blank" rel="noopener">${c.github.replace("https://", "")}</a>`,
      `Instagram — <a href="${c.instagram}" target="_blank" rel="noopener">${c.instagram.replace("https://www.", "").replace(/\/$/, "")}</a>`,
      `Everything on one page — <a href="links.html">links.html</a>`]);
  if (/resume|cv/.test(t))
    return `<p>Here's the PDF: <a href="${DATA.resumeFile}" target="_blank" rel="noopener">${DATA.resumeFile} ↗</a></p>`;
  if (/who|about|ainesh|yourself|intro|school|berkeley/.test(t))
    return `<p><b>${esc(DATA.name)}</b> is a Computer Science student at <b>UC Berkeley</b> (College of Computing, Data Science & Society, class of 2030). He graduated from Bridgeland High School in Cypress, TX ranked 2 of 921.</p><p>${esc(DATA.tagline)}</p><p>He's interested in on-device AI, retrieval systems and native apps — and is <b>open to internships</b>.</p>`;
  if (/hi|hello|hey|yo\b/.test(t))
    return `<p>Hey! I'm a small Claude-flavoured guide to this portfolio. Ask me about Ainesh's <b>projects</b>, <b>skills</b>, <b>experience</b>, <b>honors</b>, or how to <b>contact</b> him.</p>`;
  return `<p>I only know about Ainesh — try asking about his <b>projects</b>, <b>skills</b>, <b>experience</b>, <b>honors</b>, <b>resume</b>, or how to <b>contact</b> him.</p>`;
}
let chatBusy = false;
async function chatSend(q) {
  q = (q || "").trim(); if (!q || chatBusy) return; chatBusy = true;
  const wrap = $("#chatMsgs"), scroll = $("#chatScroll");
  wrap.insertAdjacentHTML("beforeend", `<div class="msg msg--user"><div class="msg__body">${esc(q)}</div></div>`);
  const ai = document.createElement("div"); ai.className = "msg msg--ai msg--typing";
  ai.innerHTML = `<div class="msg__ico">✳</div><div class="msg__body"></div>`;
  wrap.append(ai); scroll.scrollTop = scroll.scrollHeight;
  await sleep(reduced ? 0 : 450);
  const html = chatAnswer(q), body = $(".msg__body", ai);
  if (reduced) body.innerHTML = html;
  else {
    // stream: reveal the rendered HTML word by word via a hidden template
    const tmp = document.createElement("div"); tmp.innerHTML = html;
    const text = tmp.textContent; let shown = 0;
    while (shown < text.length) {
      shown += 3 + Math.floor(Math.random() * 4);
      body.textContent = text.slice(0, shown); scroll.scrollTop = scroll.scrollHeight;
      await sleep(14);
    }
    body.innerHTML = html;
  }
  ai.classList.remove("msg--typing"); scroll.scrollTop = scroll.scrollHeight;
  $$("a[data-goto]", body).forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); goto(a.dataset.goto); }));
  chatBusy = false;
}
function renderChat() {
  $("#chatScroll").innerHTML = `<div class="chat__msgs" id="chatMsgs"></div>`;
  $("#chatForm").addEventListener("submit", (e) => { e.preventDefault(); const i = $("#chatInput"); const q = i.value; i.value = ""; chatSend(q); });
  $$("[data-ask]").forEach((li) => li.addEventListener("click", () => { $("#chatInput").value = ""; chatSend(li.dataset.ask); }));
  $("#chatShare").addEventListener("click", () => location.href = "links.html");
  $("#chatNew")?.addEventListener("click", () => { $("#chatMsgs").innerHTML = ""; chatSend("hi"); });
}
let chatStarted = false;
async function startChat() {
  if (chatStarted) return; chatStarted = true;
  await chatSend("who is ainesh?");
  await chatSend("what has he won?");
}

/* ============================================================
   FINDER
   ============================================================ */
const TAG_COLORS = { swift: "#ff8f5a", typescript: "#5fb0ff", python: "#ffd75a", java: "#ff6b6b", default: "#b58cff" };
const tagKey = (p) => (p.tag.split(/[\s/·]+/)[0] || "").toLowerCase();
function renderFinder() {
  const grid = $("#finderGrid"), preview = $("#finderPreview"), status = $("#finderCount");
  const P = DATA.projects;
  let sel = -1, tagFilter = null, query = "";

  const folderIco = (cls = "folder__ico") => `<div class="${cls}"><i></i></div>`;
  grid.innerHTML = P.map((p, i) => `
    <button class="folder" data-i="${i}" style="--i:${i}">
      ${folderIco()}
      <div class="folder__name">${esc(p.name)}</div>
      <div class="folder__tag">${esc(p.tag)}</div>
    </button>`).join("");

  // sidebar tags = unique first word of each project tag
  const tags = [...new Set(P.map(tagKey))];
  $("#finderTags").innerHTML = tags.map((t) =>
    `<li data-tag="${esc(t)}" style="--tc:${TAG_COLORS[t] || TAG_COLORS.default}"><i></i>${esc(t)}</li>`).join("");

  const visible = () => P.map((p, i) => i).filter((i) =>
    (!tagFilter || tagKey(P[i]) === tagFilter) &&
    (!query || (P[i].name + " " + P[i].tag + " " + P[i].meta).toLowerCase().includes(query)));
  const applyFilter = () => {
    const v = visible();
    $$(".folder", grid).forEach((f) => f.classList.toggle("is-hidden", !v.includes(+f.dataset.i)));
    status.textContent = `${v.length} of ${P.length} items` + (sel >= 0 && v.includes(sel) ? ", 1 selected" : "");
    $$("#finderTags li").forEach((li) => li.classList.toggle("cur", li.dataset.tag === tagFilter));
    if (v.length && !v.includes(sel)) open(v[0]);
  };

  let typing = 0;
  const open = async (i) => {
    const p = P[i]; sel = i;
    $$(".folder", grid).forEach((f) => f.classList.toggle("is-sel", +f.dataset.i === i));
    status.textContent = `${visible().length} of ${P.length} items, 1 selected`;
    const run = ++typing;
    preview.innerHTML = `${folderIco("folder__ico finder__bigico")}<h3>${esc(p.name)}</h3><div class="sub">${esc(p.tag)} · ${esc(p.meta)}</div><pre></pre>${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">open source →</a>` : ""}
      <div class="finder__kv"><span>Kind</span><span>Folder</span><span>Tags</span><span>${esc(tagKey(p))}</span><span>Where</span><span>~/ainesh/projects/${esc(p.name.toLowerCase().replace(/\s+/g, "-"))}</span></div>`;
    const pre = $("pre", preview);
    if (reduced) { pre.textContent = p.body; return; }
    for (const ch of p.body) { if (run !== typing) return; pre.append(ch); await sleep(ch === "\n" ? 36 : 5); }
  };
  const step = (d) => { const v = visible(); if (!v.length) return; const k = v.indexOf(sel); open(v[(k + d + v.length) % v.length]); };

  $$(".folder", grid).forEach((f) => f.addEventListener("click", () => open(+f.dataset.i)));
  $("#finderBack").addEventListener("click", () => step(-1));
  $("#finderFwd").addEventListener("click", () => step(1));
  $("#finderSearch").addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); applyFilter(); });
  $$("#finderTags li").forEach((li) => li.addEventListener("click", () => { tagFilter = tagFilter === li.dataset.tag ? null : li.dataset.tag; applyFilter(); }));
  $$("[data-fnav]").forEach((li) => li.addEventListener("click", () => {
    $$("[data-fnav]").forEach((x) => x.classList.toggle("cur", x === li));
    $("#finderTitle").textContent = li.textContent.replace("☁", "").trim();
    if (li.dataset.fnav === "projects") { tagFilter = null; query = ""; $("#finderSearch").value = ""; applyFilter(); }
    else { // every other "place" just shows an empty folder
      $$(".folder", grid).forEach((f) => f.classList.add("is-hidden"));
      status.textContent = "0 items";
      preview.innerHTML = `<p class="finder__hint">nothing here — try <b>projects</b></p>`;
    }
  }));
  $("#finderShare").addEventListener("click", () => { const p = P[sel]; if (p && p.link) window.open(p.link, "_blank", "noopener"); });
  status.textContent = `${P.length} items`;
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
  const fast = reduced;
  if (!fast) SFX.dial();
  for (const l of [
    "$ ./connect --host ainesh",
    "dialing " + c.phone.replace(/-/g, " ") + " ...",
    "handshake ... negotiating ... 56000 bps",
    "CONNECTED. fastest response: email.",
  ]) { if (fast) s.append(l + "\n"); else await typeInto(s, l + "\n", 11); }
  $("#netLed").classList.add("ok");
  $("#netLabel").textContent = "connected";
  const rows = [
    ["mail", `mailto:${c.email}`, c.email],
    ["github", c.github, c.github.replace("https://", "")],
    ["linkedin", c.linkedin, c.linkedin.replace("https://www.", "")],
    ["instagram", c.instagram, c.instagram.replace("https://www.", "").replace(/\/$/, "")],
    ["resume", DATA.resumeFile, DATA.resumeFile],
    ["links", "links.html", "all links → links.html"],
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
  currentApp = screen;
  $$(".stage__card").forEach((c) => c.classList.toggle("is-active", c.dataset.goto === id));
  $("#crumbFile").textContent = screen.dataset.file;
  $$("#filetree li").forEach((li) => li.classList.toggle("is-active", li.dataset.goto === id));
  $$("#mobilenav button").forEach((b) => {
    const on = b.dataset.goto === id;
    b.classList.toggle("on", on);
    if (on) b.scrollIntoView({ block: "nearest", inline: "center", behavior: reduced ? "auto" : "smooth" });
  });
  if (lastScreen && lastScreen !== screen) { SFX.whoosh(); SFX.open(); }
  lastScreen = screen;

  if (!started[id]) {
    started[id] = true;
    if (id === "hero") runHero();
    if (id === "ask") startChat();
    if (id === "about") runEditor();
    if (id === "skills") { $$("#skills h2.decode").forEach(decodeTo); runGraph(); }
    if (id === "experience") startVHS();
    if (id === "projects") window.__openFirstProject?.();
    if (id === "honors") { $$("#honors h2.decode").forEach(decodeTo); setTimeout(() => SFX.ding(), 500); }
    if (id === "contact") runNet();
  }
}
// pre-render the typewriter-style apps once (instantly) so a swapped-in window is never blank
function primeApps() {
  const was = reduced; reduced = true;
  try {
    started.about = true; runEditor();
    started.skills = true; $$("#skills h2.decode").forEach(decodeTo); runGraph();
    started.projects = true; window.__openFirstProject?.();
    started.honors = true; $$("#honors h2.decode").forEach(decodeTo);
    started.contact = true; runNet();
  } finally { reduced = was; }
}
let currentApp = null;
function showApp(id) {
  const next = document.getElementById(id);
  if (!next || next === currentApp) return;
  const card = $(`.stage__card[data-goto="${id}"]`);
  if (card && currentApp && !reduced) return stageSwap(card);
  activate(next);
}
function screenSwitcher() {
  $$("#mobilenav button").forEach((b) => b.addEventListener("click", () => showApp(b.dataset.goto)));
  activate($("#hero"));
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
  const HOVER_SEL = "button, a, .filetree li, .folder, .finder__list li, .qt__chapters li, .trophy, .ports a";
  document.addEventListener("pointerover", (e) => {
    const el = e.target.closest(HOVER_SEL);
    if (el && !el.dataset.hovered) {
      el.dataset.hovered = "1";
      setTimeout(() => delete el.dataset.hovered, 120);
      SFX.hover();
    }
  });
  document.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button, a, .filetree li, .qt__chapters li, .qt__scrub")) SFX.click();
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
window.__openFirstProject = renderFinder();
renderDesktop();
renderChat();
renderTrophies();
renderTicker();
screenSwitcher();
juice();
boot();
