/* ============================================================
   PHOSPHOR OS v4, Ainesh Sabharwal
   Fullscreen snap "apps". Edit everything in DATA.
   ============================================================ */

const DATA = {
  name: "ainesh sabharwal",
  role: "cs @ uc berkeley",
  tagline: "i build ios apps and ai tools that run on-device.\nmostly interested in software that stays fast and gets out of your way.",
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
    { c: "cm", t: "// about.txt, last saved: today" },
    { c: "", t: "" },
    { c: "kw", t: "const ", x: 'name = "ainesh sabharwal";' },
    { c: "kw", t: "const ", x: 'school = "uc berkeley, cdss";' },
    { c: "kw", t: "const ", x: "grad = 2030;" },
    { c: "", t: "" },
    { c: "cm", t: "// from cypress, tx. finished high school 2nd in a class of 921." },
    { c: "cm", t: "// started building side projects then and never really stopped," },
    { c: "cm", t: "// usually because i wanted a tool that didn't exist yet." },
    { c: "", t: "" },
    { c: "kw", t: "focus", x: " = ['ios apps', 'on-device ai', 'retrieval and search'];" },
    { c: "kw", t: "also", x: "  = ['eagle scout', 'taekwondo black belt'];" },
    { c: "", t: "" },
    { c: "cm", t: "// currently looking for summer internships." },
  ],

  skills: [
    { g: "lang",  pct: 92, v: "java · typescript · python · swift" },
    { g: "web",   pct: 84, v: "html/css · full-stack apps · dashboards and analytics" },
    { g: "ai/ml", pct: 78, v: "rag · on-device inference · vision, speech, core ml" },
    { g: "ds&a",  pct: 88, v: "stacks · queues · ring buffers · heaps · trees · greedy" },
    { g: "tools", pct: 80, v: "git / github · xcode · eclipse" },
  ],

  tapes: [
    { role: "lead instructor", org: "icode", when: "oct 2025 - mar 2026", logo: "assets/logos/icode.png",
      note: "taught programming to k-12 students through project-based classes, and helped them debug their own software and hardware." },
    { role: "student researcher", org: "algoverse ai research", when: "aug 2024 - may 2025", logo: "assets/logos/algoverse.png",
      note: "research on retrieval-augmented generation: having a model pull from source documents before answering, and measuring whether the answers actually got better." },
    { role: "b.a. computer science", org: "uc berkeley (cdss)", when: "class of 2030", logo: "assets/logos/berkeley.png",
      note: "college of computing, data science & society. currently taking cs 61a." },
    { role: "bridgeland high school", org: "cypress, tx", when: "class of 2026", logo: "assets/logos/bridgeland.png",
      note: "rank 2 of 921. data structures and algorithms in java, ap physics c, fbla and tsa." },
  ],

  projects: [
    { name: "drawly", tag: "swift / swiftui", meta: "in progress",
      body: "notes app for iphone and mac. typing and sketches sync live between paired\ndevices over a direct peer-to-peer connection, with icloud as backup.\n\nhandwriting recognition, voice transcription and summarization all run on the\ndevice itself. sketches export to vector svg.", link: "" },
    { name: "apathyai", tag: "python · contributor", meta: "on-device copilot",
      body: "desktop assistant that runs entirely on-device, so nothing leaves the machine.\nit reads on-screen context to summarize long documents and suggest\nspreadsheet and form entries.", link: "https://github.com/qurashisohaib/ApathyAI" },
    { name: "huddlehub", tag: "typescript", meta: "fbla 25-26",
      body: "full-stack site for finding, reviewing and saving local businesses.\n\nowners get a dashboard to manage their listing and see how people are\nfinding them.", link: "" },
    { name: "bridgeland arena hub", tag: "typescript", meta: "3rd, fbla nationals",
      body: "ticketing and box office platform for a school venue: seat selection,\ncheckout and event management.\n\ntook 3rd in website design at fbla nationals in 2025.", link: "" },
    { name: "ds&a labs", tag: "java", meta: "github.com/sabharwalainesh",
      body: "a set of java projects i built to work through data structures properly:\n\nhuffman compressor that builds a code tree and packs the output to bits.\n20 questions, a guessing game on a binary tree that grows as you play.\nkarplus-strong guitar synthesis running on a ring buffer.\nimage editor with filters and undo backed by a stack.",
      link: "https://github.com/sabharwalainesh" },
  ],

  honors: [
    { ico: "①", b: "rank 2 of 921", s: "bridgeland high school", tag: "academics", c: "#ffcf6b",
      note: "second in my graduating class, across four years of coursework." },
    { ico: "▮", b: "3rd place, website design", s: "fbla nationals", tag: "competition", c: "#5fb0ff",
      note: "built the site end to end and placed third at the national conference." },
    { ico: "⇡", b: "eagle scout", s: "boy scouts of america", tag: "service", c: "#7fdc7f",
      note: "highest rank in scouts bsa, earned through a service project i led." },
    { ico: "◆", b: "black belt", s: "taekwondo", tag: "discipline", c: "#ff8f8f",
      note: "first dan, after years of training and gradings." },
  ],

  contact: {
    email: "aineshsab@berkeley.edu",
    github: "https://github.com/sabharwalainesh",
    linkedin: "https://www.linkedin.com/in/ainesh-sabharwal",
    instagram: "https://www.instagram.com/aineshsabharwal/",
    phone: "832-302-6497",
  },

  dock: {
    apps: [
      ["hero",       "terminal",    "$_", "#2b3440"],
      ["about",      "about.txt",   "\u25AF", "#3b82f6"],
      ["skills",     "skills.sys",  "\u2261", "#22c55e"],
      ["experience", "work.mp4",    "\u25B6", "#f97316"],
      ["projects",   "projects/",   "\u25A4", "#0ea5e9"],
      ["honors",     "honors.md",   "\u2605", "#eab308"],
      ["ask",        "ask.claude",  "\u2733", "#d97757"],
      ["contact",    "contact.net", "\u25CD", "#8b5cf6"],
    ],
    // brand marks live in the dock the way real app icons do, and open the real thing
    links: [
      ["github",    "github",     "#1f2328"],
      ["linkedin",  "linkedin",   "#0a66c2"],
      ["instagram", "instagram",  "#c13584"],
      ["mail",      "email me",   "#2f7de1"],
    ],
  },
};

/* ============================================================
   SFX, WebAudio synth, no files. Off by default; toggle in menubar.
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
    "phosphor os  v4.0   (c) ainesh sabharwal",
    "",
    "cpu ......... 1 x undergrad @ 3am",
    "mem ......... coffee: ok",
    "disk ........ mount /home/ainesh ................ ok",
    "net ......... berkeley.edu link up",
    "video ....... video deck detected",
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
   HERO, ascii banner + typed sub + shell
   ============================================================ */
// The ASCII name is fixed at 46 characters wide, so on a phone it overruns the
// window. Scale the wrapper (not the <pre>, whose transform the glitch owns).
function fitBanner() {
  const box = $("#heroBanner"), el = $("#heroAscii");
  if (!box || !el) return;
  box.style.transform = ""; box.style.height = "";
  const avail = box.clientWidth, w = el.scrollWidth;
  if (!avail || !w || w <= avail) return;
  const k = avail / w;
  box.style.transformOrigin = "0 0";
  box.style.transform = `scale(${k.toFixed(4)})`;
  box.style.height = Math.ceil(el.scrollHeight * k) + "px";
}
addEventListener("resize", fitBanner, { passive: true });

let heroDone = false;
async function runHero() {
  if (heroDone) return; heroDone = true;
  const bannerEl = $("#heroAscii"), sub = $("#heroSub");
  const hi = $("#heroHi"), caret = $("#heroCaret"), box = $("#heroBanner");
  const GREETING = "hi im";

  // the greeting types itself, then the name wipes in behind a bright edge
  const rows = DATA.ascii.split("\n");
  const width = Math.max(...rows.map((r) => r.length));
  if (reduced) { hi.textContent = GREETING; caret.classList.add("is-hidden"); bannerEl.textContent = DATA.ascii; fitBanner(); }
  else {
    await sleep(180);
    for (const ch of GREETING) {
      hi.append(ch);
      SFX.key();
      await sleep(ch === " " ? 170 : 100 + Math.random() * 80);
    }
    caret.classList.add("is-done");
    await sleep(320);
    box.classList.add("is-wiping");
    for (let c = 0; c <= width; c += 2) {
      bannerEl.textContent = rows.map((r) => r.slice(0, c)).join("\n");
      box.style.setProperty("--wipe", (bannerEl.scrollWidth || 0) + "px");
      await sleep(12);
    }
    box.classList.remove("is-wiping");
    bannerEl.textContent = DATA.ascii;
    fitBanner();
    caret.classList.add("is-hidden");
    bannerEl.classList.add("glitch");
    SFX.glitch();
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
    { html: `<span class="accent">${DATA.name}</span>, ${DATA.role}\n` },
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
    honors: () => { goto("honors"); return DATA.honors.map((h) => `★ ${h.b}, ${h.s}`).join("\n"); },
    contact: () => { goto("contact"); return `mail   ${DATA.contact.email}\ngithub ${DATA.contact.github}`; },
    links: () => { location.href = "links.html"; return "opening links.html ..."; },
    ask: () => { goto("ask"); return "opening ask.claude ..."; },
    resume: () => { window.open(DATA.resumeFile, "_blank"); return "opening " + DATA.resumeFile + " ..."; },
    theme: () => { cycleTheme(); return "phosphor recalibrated."; },
    whoami: () => `${DATA.name}, ${DATA.role}`,
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
   MONITOR, meters + ascii sparkline graph
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

  // The meters are driven by what the visitor actually does, not by random noise:
  // cpu follows pointer speed, net spikes on input and app switches, mem grows with
  // the number of apps that have been opened and then holds.
  let pointerLoad = 0, netBurst = 0, px = 0, py = 0, pt = 0;
  addEventListener("pointermove", (e) => {
    const now = performance.now(), dt = Math.max(16, now - pt);
    const speed = Math.hypot(e.clientX - px, e.clientY - py) / dt;   // px per ms
    px = e.clientX; py = e.clientY; pt = now;
    pointerLoad = Math.min(1, pointerLoad + Math.min(0.42, speed * 0.16));
  }, { passive: true });
  const burst = (amt) => { netBurst = Math.min(1, netBurst + amt); };
  window.__netBurst = burst;                                          // stageSwap taps this too
  addEventListener("pointerdown", () => burst(0.55));
  addEventListener("keydown", () => burst(0.3));
  addEventListener("wheel", () => burst(0.22), { passive: true });

  // scope every lookup to the real monitor: the rail's preview clones also carry
  // .graph markup and sit earlier in the DOM, so bare selectors hit the clone
  const root = $("#cpuGraph");
  const series = {
    cpu: { v: 0.06, hist: [], out: $("#gCpu", root), fmt: (v) => Math.round(v * 100) + "%" },
    net: { v: 0.02, hist: [], out: $("#gNet", root), fmt: (v) => (v < 0.02 ? "idle" : Math.round(v * 1400) + " kb/s") },
    mem: { v: 0.3,  hist: [], out: $("#gMem", root), fmt: (v) => Math.round(v * 100) + "%" },
  };
  $$(".graph__bars", root).forEach((g) => { g.innerHTML = Array.from({ length: N }, () => "<i></i>").join(""); });
  for (const k in series) series[k].hist = Array.from({ length: N }, () => series[k].v);

  const draw = () => {
    const apps = opened.size || 1;
    const target = {
      cpu: 0.05 + pointerLoad * 0.92,
      net: 0.015 + netBurst * 0.95,
      mem: Math.min(0.94, 0.26 + apps * 0.055 + Math.random() * 0.015),
    };
    pointerLoad *= 0.78;                                              // settles back to idle when the pointer stops
    netBurst *= 0.72;
    const appsEl = $("#gApps", root);
    appsEl.textContent = apps;
    appsEl.nextSibling.nodeValue = apps === 1 ? " app open" : " apps open";

    for (const k in series) {
      const s = series[k];
      s.v += (target[k] - s.v) * (k === "mem" ? 0.12 : 0.55);         // mem drifts, cpu/net react fast
      s.hist.push(s.v); s.hist = s.hist.slice(-N);
      const bars = $(`.graph__bars[data-g="${k}"]`, root).children;
      let peak = 0;
      s.hist.forEach((v, i) => {
        const b = bars[i];
        b.style.height = (v * 100) + "%";
        b.className = v > 0.82 ? "hot" : v > 0.6 ? "warm" : "";
        if (v > peak) peak = v;
      });
      $(`.graph[data-graph="${k}"] .graph__peak`, root).style.bottom = (peak * 100) + "%";
      s.out.textContent = s.fmt(s.v);
      $(`.graph[data-graph="${k}"]`, root).classList.toggle("is-live", s.v > 0.35);
    }
  };
  draw();
  if (!reduced) graphTimer = setInterval(draw, 140);
}

/* ============================================================
   VHS DECK, experience
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
  if (!vhsPriming) SFX.clunk();
  if (!reduced) { flash.classList.remove("roll"); void flash.offsetWidth; flash.classList.add("roll"); }
  $("#vhsTape").textContent = `chapter ${i + 1} / ${DATA.tapes.length}`;
  const badge = $("#vhsLogo"), img = $("#vhsLogoImg");
  if (t.logo) { badge.hidden = false; badge.classList.remove("in"); void badge.offsetWidth; img.src = t.logo; img.alt = t.org; badge.classList.add("in"); }
  else badge.hidden = true;
  $$("#qtChapters li").forEach((li, k) => li.classList.toggle("cur", k === i));
  vhsPaint();
  const role = $("#vhsRole"), org = $("#vhsOrg"), when = $("#vhsWhen"), note = $("#vhsNote");
  role.textContent = ""; org.textContent = ""; when.textContent = ""; note.textContent = "";
  const inst = vhsPriming;                 // the prime pass paints in one go, even after `reduced` is restored
  if (inst) role.append(t.role); else await typeInto(role, t.role, 18, alive);
  if (!alive()) return;
  org.textContent = "@ " + t.org;
  when.textContent = t.when;
  if (inst) note.append(t.note); else await typeInto(note, t.note, 6, alive);
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
let vhsStarted = false, vhsPriming = false, vhsPrimed = false;
// draw chapter one instantly, so the window is never a black pane while it flies in
function primeVHS() {
  if (vhsPrimed || vhsStarted) return;
  vhsPriming = true;
  try { vhsGo(0); } finally { vhsPriming = false; }
  vhsPrimed = true;
}
function startVHS() {
  if (vhsStarted) return; vhsStarted = true;
  vhsSetPlaying(true);
  if (!vhsPrimed) vhsGo(0);        // already painted by the prime pass, so don't wipe and retype it
}

/* ============================================================
   WINDOW DRAGGING, a small nudge, not a full window manager
   ============================================================ */
const DRAG_HANDLE = ".window__bar, .finder__toolbar, .chat__top";
const DRAG_LIMIT = 90;                                   // px in each direction
function windowDragging() {
  if (reduced) return;
  addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    const handle = e.target.closest(DRAG_HANDLE);
    if (!handle || e.target.closest("button, a, input, [contenteditable]")) return;
    const win = handle.closest(".window");
    if (!win || swapping) return;

    const x0 = e.clientX, y0 = e.clientY;
    const dx0 = parseFloat(win.style.getPropertyValue("--dx")) || 0;
    const dy0 = parseFloat(win.style.getPropertyValue("--dy")) || 0;
    let dx = dx0, dy = dy0, raf = 0, moved = false;
    const clamp = (v) => Math.max(-DRAG_LIMIT, Math.min(DRAG_LIMIT, v));
    const paint = () => {
      raf = 0;
      win.style.setProperty("--dx", dx + "px");
      win.style.setProperty("--dy", dy + "px");
    };
    const move = (ev) => {
      dx = clamp(dx0 + ev.clientX - x0);
      dy = clamp(dy0 + ev.clientY - y0);
      if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) > 3) { moved = true; win.classList.add("is-dragging"); }
      if (moved && !raf) raf = requestAnimationFrame(paint);
    };
    const up = () => {
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", up);
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      if (moved) { paint(); SFX.clunk(); }               // land on the last position, not the last painted one
      win.classList.remove("is-dragging");
    };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("pointerup", up, { passive: true });
  });
  // double-click the title bar to put a nudged window back
  addEventListener("dblclick", (e) => {
    const win = e.target.closest(DRAG_HANDLE)?.closest(".window");
    if (!win) return;
    win.style.removeProperty("--dx"); win.style.removeProperty("--dy");
  });
}

/* ============================================================
   DESKTOP, widgets, stage manager rail, mac clock
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
  // The rail is out whenever one of these is true. Everything nudges a flag and calls
  // sync(); nothing sets its own timer, so the states cannot fight each other.
  const desk = $("#desktop");
  let overRail = false, nearEdge = false, peekUntil = 0, railTimer = 0;
  const railWants = () => overRail || nearEdge || swapping || performance.now() < peekUntil;
  const sync = () => {
    clearTimeout(railTimer);
    const open = railWants();
    stage.classList.toggle("is-open", open);
    if (open) railTimer = setTimeout(sync, 200);              // re-check until nothing wants it open
  };
  const pop = (ms = 1600) => { peekUntil = Math.max(peekUntil, performance.now() + ms); sync(); };
  desk.addEventListener("pointermove", (e) => {
    const near = e.clientX - desk.getBoundingClientRect().left < 210;
    if (near !== nearEdge) { nearEdge = near; sync(); }
  }, { passive: true });
  desk.addEventListener("pointerleave", () => { nearEdge = false; sync(); });
  // wheel → step one app per deliberate scroll gesture; trackpad momentum is swallowed during the cooldown
  const innerCanScroll = (el, dy) => {
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (/(auto|scroll)/.test(cs.overflowY) && n.scrollHeight > n.clientHeight + 1) {
        if (dy > 0 && n.scrollTop + n.clientHeight < n.scrollHeight - 1) return true;
        if (dy < 0 && n.scrollTop > 0) return true;
      }
    }
    return false;
  };
  // one place that decides what "next" means, shared by wheel and touch
  const step = (dir) => {
    if (currentApp?.id === "experience") {                                // in the video, walk the chapters first
      const n = DATA.tapes.length, k = vhs.i + dir;
      if (k >= 0 && k < n) { vhsGo(k, true); return true; }
    }
    const order = apps.map((a) => a[0]), k = order.indexOf(currentApp?.id ?? "hero");
    showApp(order[(k + dir + order.length) % order.length]);
    return false;
  };
  let acc = 0, lastStep = 0, settle;
  addEventListener("wheel", (e) => {
    pop(1800);
    if (innerCanScroll(e.target, e.deltaY)) { acc = 0; return; }   // let content that still has room scroll
    const now = performance.now();
    if (now - lastStep < 1000 || swapping) { acc = 0; return; }    // momentum tail of the last gesture: ignore
    acc += e.deltaY;
    clearTimeout(settle); settle = setTimeout(() => { acc = 0; }, 220);
    if (Math.abs(acc) > 240) {
      lastStep = now; const dir = acc > 0 ? 1 : -1; acc = 0;
      if (step(dir)) lastStep = now - 400;
    }
  }, { passive: true });

  // phones never fire wheel, so the same gesture arrives as a vertical swipe
  let sy = 0, sx = 0, st = 0, sEl = null;
  addEventListener("touchstart", (e) => {
    const t = e.touches[0]; sy = t.clientY; sx = t.clientX; st = performance.now(); sEl = e.target;
  }, { passive: true });
  addEventListener("touchend", (e) => {
    const t = e.changedTouches[0], dy = t.clientY - sy, dx = t.clientX - sx;
    if (swapping || performance.now() - st > 700) return;
    if (Math.abs(dy) < 55 || Math.abs(dx) > Math.abs(dy) * 0.8) return;   // must be a deliberate vertical flick
    if (sEl?.closest(".dock, .stage")) return;
    if (innerCanScroll(sEl, -dy)) return;                                 // content still had somewhere to go
    const now = performance.now();
    if (now - lastStep < 500) return;
    lastStep = now;
    step(dy < 0 ? 1 : -1);                                                // swipe up moves forward
  }, { passive: true });
  stage.addEventListener("pointerenter", () => { overRail = true; sync(); });
  stage.addEventListener("pointerleave", () => { overRail = false; peekUntil = performance.now() + 400; sync(); });
  window.__railSync = sync;                              // the swap holds it open while it runs
  setTimeout(() => pop(2600), 1800);
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
  SFX.whoosh(); window.__netBurst?.(0.9);
  const stage = $("#stage"), curCard = $(`.stage__card[data-goto="${currentApp.id}"]`);

  // The two apps trade places: the clicked card's slot is where the current window
  // minimises to, and the window being opened grows out of that same slot.
  stage.classList.add("is-open", "no-anim", "no-tilt");
  stage.insertBefore(curCard, card);                     // outgoing app's card moves into the clicked card's place...
  card.classList.add("is-active");                       // ...as the clicked one leaves the rail, so no slot shifts
  curCard.classList.remove("is-active");
  refreshThumbs();                                       // now that it is visible it can be measured, so it looks like the window landing on it
  curCard.classList.add("is-landing");                   // its icon and label fade in while the window shrinks onto it
  void stage.offsetWidth;
  const slot = $(".stage__thumb", curCard).getBoundingClientRect();
  stage.classList.remove("no-anim", "no-tilt");
  const css = getComputedStyle(document.body);
  const tilt = css.getPropertyValue("--tilt").trim() || "13deg";
  const persp = css.getPropertyValue("--persp").trim() || "900px";   // same perspective the cards use

  // show the target alongside the current one and measure where each one has to travel
  target.classList.add("is-on");
  const to = win.getBoundingClientRect(), c = cur.getBoundingClientRect();

  win.style.transformOrigin = "0 0"; win.style.transition = "none";
  win.style.transform = `translate(${slot.left - to.left}px, ${slot.top - to.top}px) perspective(${persp}) rotateY(${tilt}) scale(${slot.width / to.width}, ${slot.height / to.height})`;
  cur.style.transformOrigin = "0 0";
  void win.offsetWidth;
  win.style.transition = ""; win.classList.add("is-flying");
  win.style.transform = "";                              // grows out of the slot
  cur.classList.add("is-parking");
  cur.style.transform = `translate(${slot.left - c.left}px, ${slot.top - c.top}px) perspective(${persp}) rotateY(${tilt}) scale(${slot.width / c.width}, ${slot.height / c.height})`;  // shrinks into it, at the card's own angle

  await sleep(480);
  activate(target);                                      // card is already sitting under the window, so nothing flickers
  win.classList.remove("is-flying"); win.style.transformOrigin = "";
  cur.classList.remove("is-parking"); cur.style.transform = ""; cur.style.transformOrigin = "";
  cur.style.removeProperty("--dx"); cur.style.removeProperty("--dy");   // parked windows return to their slot
  curCard.classList.remove("is-landing");
  window.__railSync?.();                                 // rail closes on its own once nothing wants it open
  swapping = false;
  refreshThumbs();
}

/* ============================================================
   ASK, Claude-style chat over the same data
   ============================================================ */
function chatAnswer(q) {
  const t = q.toLowerCase(), c = DATA.contact;
  const li = (a) => `<ul>${a.map((x) => `<li>${x}</li>`).join("")}</ul>`;
  if (/project|built|build|made|ship/.test(t))
    return `<p>what he's built so far:</p>` + li(DATA.projects.map((p) =>
      `<b>${esc(p.name)}</b> <i>(${esc(p.tag)})</i>, ${esc(p.body.split("\n")[0])}${p.link ? ` <a href="${esc(p.link)}" target="_blank" rel="noopener">repo ↗</a>` : ""}`)) +
      `<p>ask about any of them, or open the <a href="#projects" data-goto="projects">projects folder</a>.</p>`;
  if (/skill|stack|language|tool|know|tech/.test(t))
    return `<p>what he works with:</p>` + li(DATA.skills.map((k) => `<b>${esc(k.g)}</b>, ${esc(k.v)}`));
  if (/honor|award|won|win|achiev|rank|eagle|belt/.test(t))
    return `<p>a few things he's earned:</p>` + li(DATA.honors.map((h) => `<b>${esc(h.b)}</b>, ${esc(h.s)}`));
  if (/work|experience|job|intern|research|teach|icode|algoverse/.test(t))
    return `<p>where he's worked and studied:</p>` + li(DATA.tapes.map((x) => `<b>${esc(x.role)}</b> @ ${esc(x.org)} <i>(${esc(x.when)})</i><br>${esc(x.note)}`));
  if (/contact|email|reach|linkedin|instagram|github|hire|message/.test(t))
    return `<p>email is the fastest way to reach him:</p>` + li([
      `email, <a href="mailto:${c.email}">${c.email}</a>`,
      `linkedin, <a href="${c.linkedin}" target="_blank" rel="noopener">${c.linkedin.replace("https://www.", "")}</a>`,
      `github, <a href="${c.github}" target="_blank" rel="noopener">${c.github.replace("https://", "")}</a>`,
      `instagram, <a href="${c.instagram}" target="_blank" rel="noopener">${c.instagram.replace("https://www.", "").replace(/\/$/, "")}</a>`,
      `everything on one page, <a href="links.html">links.html</a>`]);
  if (/resume|cv/.test(t))
    return `<p>here's the pdf: <a href="${DATA.resumeFile}" target="_blank" rel="noopener">${DATA.resumeFile} ↗</a></p>`;
  if (/who|about|ainesh|yourself|intro|school|berkeley/.test(t))
    return `<p>ainesh is a computer science student at <b>uc berkeley</b> (college of computing, data science & society, class of 2030). before that he was in cypress, tx, where he finished high school second in a class of 921.</p><p>${esc(DATA.tagline)}</p><p>he's currently <b>looking for summer internships</b>.</p>`;
  if (/hi|hello|hey|yo\b/.test(t))
    return `<p>hey. i'm a small claude that only knows about ainesh. ask about his <b>projects</b>, <b>skills</b>, <b>experience</b>, <b>honors</b>, or how to <b>reach him</b>.</p>`;
  return `<p>i only know about ainesh. try his <b>projects</b>, <b>skills</b>, <b>experience</b>, <b>honors</b>, <b>resume</b>, or how to <b>reach him</b>.</p>`;
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
      shown += 1 + Math.floor(Math.random() * 2);
      body.textContent = text.slice(0, shown); scroll.scrollTop = scroll.scrollHeight;
      await sleep(24);
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
      preview.innerHTML = `<p class="finder__hint">nothing here, try <b>projects</b></p>`;
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
    <article class="trophy" style="--i:${i}; --tc:${h.c}">
      <span class="trophy__medal">${esc(h.ico)}</span>
      <span class="trophy__body">
        <span class="trophy__tag">${esc(h.tag)}</span>
        <b>${esc(h.b)}</b>
        <span class="trophy__org">${esc(h.s)}</span>
        <p class="trophy__note">${esc(h.note)}</p>
      </span>
    </article>`).join("");
}
// the ring fills and the counter ticks up the first time honors.md is opened
let ringDone = false;
function runHonorsRing() {
  if (ringDone) return; ringDone = true;
  const ring = $("#honorsRing"), out = $("#honorsCount"), n = DATA.honors.length;
  if (reduced) { ring.style.setProperty("--p", 100); out.textContent = n; return; }
  let k = 0;
  const step = () => {
    k++; out.textContent = k; ring.style.setProperty("--p", (k / n) * 100); SFX.key();
    if (k < n) setTimeout(step, 260);
  };
  setTimeout(step, 450);
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
// Vector app icons drawn to sit on a macOS-style squircle: a coloured plate plus a
// white mark, so they stay crisp at any magnification without image assets.
const DOCK_ART = {
  terminal: { bg: "linear-gradient(170deg,#3d4450,#15181d 55%,#0a0c0f)", svg:
    `<svg viewBox="0 0 24 24" fill="none" stroke="#7fdc7f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7.5l4 4-4 4"/><path d="M11.5 16.5h7.5"/></svg>` },
  about: { bg: "linear-gradient(170deg,#ffffff,#e6e9ee 60%,#c9cfd8)", svg:
    `<svg viewBox="0 0 24 24" fill="none" stroke="#495569" stroke-width="1.9" stroke-linecap="round"><path d="M5.5 6.5h13M5.5 10.5h13M5.5 14.5h9M5.5 18.5h6"/></svg>` },
  skills: { bg: "linear-gradient(170deg,#1d2b22,#101a14 60%,#0a120d)", svg:
    `<svg viewBox="0 0 24 24" fill="#5ee08a"><rect x="3" y="13" width="3.2" height="8" rx="1.1"/><rect x="8" y="8" width="3.2" height="13" rx="1.1"/><rect x="13" y="4" width="3.2" height="17" rx="1.1"/><rect x="18" y="10" width="3.2" height="11" rx="1.1" opacity=".65"/></svg>` },
  work: { bg: "linear-gradient(170deg,#5b6472,#2b3038 55%,#171a20)", svg:
    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2" fill="none" stroke="#fff" stroke-width="1.7" opacity=".9"/><path d="M10 8.2l6.4 3.8-6.4 3.8z" fill="#fff"/></svg>` },
  projects: { bg: "linear-gradient(170deg,#63c8ff,#2b8ef0 55%,#1a6ed4)", svg:
    `<svg viewBox="0 0 24 24" fill="#fff"><path d="M3.2 7.4c0-1 .8-1.8 1.8-1.8h3.4l1.8 1.9h8.8c1 0 1.8.8 1.8 1.8v7.3c0 1-.8 1.8-1.8 1.8H5c-1 0-1.8-.8-1.8-1.8z" opacity=".95"/><path d="M3.2 10.4h17.6v6.2c0 1-.8 1.8-1.8 1.8H5c-1 0-1.8-.8-1.8-1.8z" fill="#eaf4ff" opacity=".55"/></svg>` },
  honors: { bg: "linear-gradient(170deg,#ffd96b,#f0a92c 55%,#c97d10)", svg:
    `<svg viewBox="0 0 24 24" fill="#fff"><path d="M7 4h10v3.2a5 5 0 0 1-10 0z"/><path d="M4.6 5.2h2.1v2.2a2.7 2.7 0 0 1-2.1-2.2zM17.3 5.2h2.1a2.7 2.7 0 0 1-2.1 2.2z" opacity=".8"/><path d="M10.8 12.4h2.4l.5 3.1h2.1v2.1H8.2v-2.1h2.1z"/><rect x="6.8" y="18.4" width="10.4" height="2.1" rx="1"/></svg>` },
  ask: { bg: "linear-gradient(170deg,#f0a184,#d97757 52%,#b45636)", svg:
    `<svg viewBox="0 0 24 24" fill="#fff"><g transform="translate(12 12)"><rect x="-1.15" y="-9.5" width="2.3" height="19" rx="1.15"/><rect x="-1.15" y="-9.5" width="2.3" height="19" rx="1.15" transform="rotate(45)"/><rect x="-1.15" y="-9.5" width="2.3" height="19" rx="1.15" transform="rotate(90)"/><rect x="-1.15" y="-9.5" width="2.3" height="19" rx="1.15" transform="rotate(135)"/></g></svg>` },
  contact: { bg: "linear-gradient(170deg,#a78bfa,#7c4ded 55%,#5b32c4)", svg:
    `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.4"/><path d="M3.7 12h16.6"/><path d="M12 3.6c2.4 2.4 3.6 5.2 3.6 8.4s-1.2 6-3.6 8.4c-2.4-2.4-3.6-5.2-3.6-8.4s1.2-6 3.6-8.4z"/></svg>` },

  github: { bg: "linear-gradient(170deg,#3a3f46,#1c2024 55%,#0d1013)", svg:
    `<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/></svg>` },
  linkedin: { bg: "linear-gradient(170deg,#3f9bea,#0a66c2 55%,#064b90)", svg:
    `<svg viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C21 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.05-3.3-2.05 0-2.36 1.57-2.36 3.2V21h-4z"/></svg>` },
  instagram: { bg: "radial-gradient(circle at 28% 100%, #fdd869 0%, #f9743f 28%, #e6316f 52%, #c32aa3 70%, #7b34c4 92%)", svg:
    `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9"><rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5.2"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.3" cy="6.7" r="1.15" fill="#fff" stroke="none"/></svg>` },
  mail: { bg: "linear-gradient(170deg,#7cc3ff,#2f7de1 52%,#155bb5)", svg:
    `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="2.6" y="5.2" width="18.8" height="13.6" rx="3"/><path d="M3.4 7.4l7.5 5.2a2 2 0 0 0 2.2 0l7.5-5.2" stroke-linecap="round"/></svg>` },
  links: { bg: "linear-gradient(170deg,#7ee8fa,#2bb6d6 55%,#1785a3)", svg:
    `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M10.2 13.8a3.6 3.6 0 0 0 5.1 0l2.6-2.6a3.6 3.6 0 1 0-5.1-5.1l-1.3 1.3"/><path d="M13.8 10.2a3.6 3.6 0 0 0-5.1 0l-2.6 2.6a3.6 3.6 0 1 0 5.1 5.1l1.3-1.3"/></svg>` },
  resume: { bg: "linear-gradient(170deg,#ffffff,#e8ebf0 60%,#cdd3dc)", svg:
    `<svg viewBox="0 0 24 24"><path d="M6 2.8h7.6L19 8.2v13H6z" fill="none" stroke="#5a6474" stroke-width="1.6" stroke-linejoin="round"/><path d="M13.4 2.8V8.4H19" fill="none" stroke="#5a6474" stroke-width="1.6" stroke-linejoin="round"/><rect x="7.6" y="13.6" width="9" height="5.2" rx="1.2" fill="#e8453c"/><text x="12.1" y="17.6" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="3.5" font-weight="700" fill="#fff">PDF</text></svg>` },
};
function renderDock() {
  const c = DATA.contact;
  const href = { github: c.github, linkedin: c.linkedin, instagram: c.instagram, mail: "mailto:" + c.email };
  const ART_FOR = { hero: "terminal", experience: "work" };     // screen ids that do not match their art
  const tile = (key) => `<span class="dock__tile" style="--bg:${DOCK_ART[key].bg}">${DOCK_ART[key].svg}</span>`;
  const html = [
    ...DATA.dock.apps.map(([id, label]) =>
      `<button class="dock__item" data-app="${id}" data-label="${esc(label)}">${tile(ART_FOR[id] || id)}</button>`),
    `<span class="dock__sep"></span>`,
    ...DATA.dock.links.map(([k, label]) =>
      `<a class="dock__item" href="${esc(href[k])}" data-label="${esc(label)}"${k === "mail" ? "" : ' target="_blank" rel="noopener"'}>${tile(k)}</a>`),
    `<span class="dock__sep"></span>`,
    `<a class="dock__item" href="links.html" data-label="all my links">${tile("links")}</a>`,
    `<a class="dock__item" href="${esc(DATA.resumeFile)}" target="_blank" rel="noopener" data-label="resume.pdf">${tile("resume")}</a>`,
  ].join("");
  const inner = $("#dockInner");
  inner.innerHTML = html;
  $$(".dock__item[data-app]", inner).forEach((b) => b.addEventListener("click", () => {
    b.classList.add("is-bouncing");
    b.addEventListener("animationend", () => b.classList.remove("is-bouncing"), { once: true });
    showApp(b.dataset.app);
  }));

  // macOS-style magnification. Slot centres are measured once per hover rather than
  // per move (they shift as neighbours scale, which is what made this judder), and
  // the transform is written on an animation frame with the CSS transition switched
  // off, so the icons track the pointer instead of chasing it.
  if (reduced) return;
  const items = $$(".dock__item", inner);
  let centres = [], x = 0, raf = 0;
  const measure = () => {
    inner.classList.add("no-mag");
    items.forEach((el) => { el.style.transform = ""; });
    centres = items.map((el) => { const r = el.getBoundingClientRect(); return r.left + r.width / 2; });
    inner.classList.remove("no-mag");
  };
  const paint = () => {
    raf = 0;
    items.forEach((el, i) => {
      const k = Math.exp(-(((x - centres[i]) / 82) ** 2));   // smooth falloff either side
      el.style.transform = `translateY(${(-17 * k).toFixed(2)}px) scale(${(1 + 0.6 * k).toFixed(3)})`;
    });
  };
  inner.addEventListener("pointerenter", (e) => { measure(); inner.classList.add("is-magnifying"); x = e.clientX; paint(); });
  inner.addEventListener("pointermove", (e) => { x = e.clientX; if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
  inner.addEventListener("pointerleave", () => {
    inner.classList.remove("is-magnifying");
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    items.forEach((el) => { el.style.transform = ""; });
  });
  addEventListener("resize", () => { if (inner.classList.contains("is-magnifying")) measure(); }, { passive: true });
}
const opened = new Set(["hero"]);                          // apps the visitor has actually opened
function syncDock(id) {
  opened.add(id);
  $$(".dock__item[data-app]").forEach((b) => {
    b.classList.toggle("is-open", opened.has(b.dataset.app));
    b.classList.toggle("is-active", b.dataset.app === id);
  });
}

/* ============================================================
   SCREEN SWITCHER, snap scroll, one app at a time
   ============================================================ */
const started = {};
let lastScreen = null;
function activate(screen) {
  $$(".screen").forEach((s) => s.classList.toggle("is-on", s === screen));
  const id = screen.id;
  currentApp = screen;
  if (id === "skills") runGraph();                       // both are idempotent and must not depend on
  if (id === "honors") runHonorsRing();                  // the priming pass, which forces reduced motion
  syncDock(id);                       // idempotent; the monitor only ticks while it can be seen
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
    if (id === "skills") $$("#skills h2.decode").forEach(decodeTo);
    if (id === "experience") startVHS();
    if (id === "projects") window.__openFirstProject?.();
    if (id === "honors") { $$("#honors h2.decode").forEach(decodeTo); setTimeout(() => SFX.ding(), 500); }
    if (id === "contact") runNet();
  }
}
// live previews: clone each app's window into its rail card, scaled to fit
function refreshThumbs() {
  const slot = $("#screens").getBoundingClientRect();
  if (!slot.width) return;
  $$(".stage__card").forEach((card) => {
    const id = card.dataset.goto, screen = document.getElementById(id), thumb = $(".stage__thumb", card);
    const win = screen && $(".window", screen);
    if (!win || !thumb.clientWidth) return;   // hidden card (is-active): keep its last good snapshot
    // the terminal is smaller than the slot; measure the real window box for everything
    const r = screen.classList.contains("is-on") ? win.getBoundingClientRect() : null;
    const W = r && r.width ? r.width : (id === "hero" ? slot.width * 0.65 : slot.width);
    const H = r && r.height ? r.height : (id === "hero" ? slot.height * 0.64 : slot.height);
    const k = (thumb.clientWidth - 2) / W;
    const snap = win.cloneNode(true);
    snap.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
    snap.querySelectorAll("[contenteditable]").forEach((n) => n.removeAttribute("contenteditable"));
    snap.querySelectorAll("input, button, textarea").forEach((n) => { n.tabIndex = -1; n.disabled = true; });
    snap.style.width = W + "px"; snap.style.height = H + "px";
    const holder = document.createElement("div");
    holder.className = "stage__snap"; holder.style.transform = `scale(${k})`; holder.append(snap);
    $(".stage__snap", thumb)?.remove(); thumb.append(holder); thumb.classList.add("has-snap");
  });
}

// pre-render the typewriter-style apps once (instantly) so a swapped-in window is never blank
function primeApps() {
  const was = reduced; reduced = true;
  try {
    started.about = true; runEditor();
    started.skills = true; $$("#skills h2.decode").forEach(decodeTo);
    started.projects = true; window.__openFirstProject?.();
    started.honors = true; $$("#honors h2.decode").forEach(decodeTo);
    started.contact = true; runNet();
    primeVHS();
  } finally { reduced = was; }
  refreshThumbs();
  setInterval(refreshThumbs, 4000);
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
  // boot's finish() opens the terminal. Activating it here too meant runHero typed the
  // greeting out behind the boot screen, and its guard then skipped the visible one.
  $$("#mobilenav button").forEach((b) => b.addEventListener("click", () => showApp(b.dataset.goto)));
}
/* ============================================================
   THEME
   ============================================================ */
const THEMES = ["green", "amber", "cyan", "pink"];
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
   JUICE, global hover/click sfx, sfx toggle
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

  // theme click zap
  $("#themeToggle").addEventListener("click", () => SFX.glitch());
}

/* ============================================================
   INIT
   ============================================================ */
document.title = `${DATA.name}, portfolio`;
initTheme();
clock();
spotlight();
renderMeters();
renderVHS();
window.__openFirstProject = renderFinder();
renderDesktop();
renderChat();
renderTrophies();
renderDock();
windowDragging();
screenSwitcher();
juice();
boot();
