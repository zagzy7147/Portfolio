// ====== CONSTANTS ======
const PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjgwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2U1ZTdlYiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiAKICAgICAgICBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIGZpbGw9IiM2YjcyODAiPlBsYWNlaG9sZGVyIEltYWdlPC90ZXh0Pgo8L3N2Zz4=";

// ====== TRANSLATION DATA ======
const data = {
  th: {
    menu: { home: "หน้าหลัก", about: "เกี่ยวกับฉัน", activities: "กิจกรรม", certs: "ใบรับรอง", contact: "ติดต่อ" },
    brand: { subtitle: "นักศึกษาวิทยาการคอมพิวเตอร์" },
    home: {
      title: "สมิต อินทราเทพ (แซ๊ก)",
      subtitle: "ด้วยความชื่นชอบในการเขียนโค้ดและการพัฒนาเว็บแอปพลิเคชัน ทำให้ผมได้ฝึกฝนทักษะผ่านการสร้างโปรเจกต์ต่างๆ ด้วยภาษา HTML/CSS, JavaScript, Python และ Java รวมถึงการใช้งาน XAML เพื่อสร้างแอปพลิเคชันบนเดสก์ท็อป ผมได้นำเครื่องมือ AI มาประยุกต์ใช้อย่างชำนาญ เพื่อช่วยให้งานที่ได้รับมอบหมายสำเร็จได้อย่างรวดเร็วและตรงตามเป้าหมายที่วางไว้",
      nameLabel: "ชื่อ:",
      nameValue: "สมิต อินทราเทพ",
      nickLabel: "ชื่อเล่น:",
      nickValue: "แซ๊ก",
      birthLabel: "วันเกิด:",
      birthValue: "07/01/2547 (21 ปี)",
      genderLabel: "เพศ:",
      genderValue: "ชาย",
    },
    about: {
      title: "เกี่ยวกับฉัน",
      educationTitle: "การศึกษา",
      skillsTitle: "ทักษะและความเชี่ยวชาญ",

      softTitle: "ทักษะทางสังคม",
      softSkills: [
        "ทำงานเป็นทีม",
        "เรียนรู้เร็ว",
        "ใช้ AI ได้อย่างชำนาญ",
        "สามารถแก้ไขปัญหาเฉพาะหน้า",
        "มีความรับผิดชอบตรงต่อเวลา",
      ],

      education: [
        "มหาวิทยาลัยกรุงเทพ (2022 - 2026)  – ปริญญาตรี คณะเทคโนโลยีสารสนเทศและนวัตกรรม | วิทยาการคอมพิวเตอร์ (GPA: 3.57)",
        "SBAC(สะพานใหม่) (2019-2022)  – ปวช. คณะเทคโนโลยีสารสนเทศ (GPA: 3.89)"
      ]
    },
    portfolio: {
      note: "คลิกที่การ์ดเพื่อดูรายละเอียดแบบป๊อปอัพ",
      items: [
        {
          id: "led-wall",
          title: "LED Wall",
          role: "Developer & Hardware Integrator",
          duration: "ระยะเวลา 3 สัปดาห์",
          image: "./assets/ledwall.jpg",
          badges: ["Arduino ESP32", "Realtime"],
          desc: "พัฒนาระบบแสดงผล LED Wall แบบ Realtime เชื่อมต่อกับคอมพิวเตอร์ด้วย Arduino ESP32 และออกแบบการทำงานร่วมกันของฮาร์ดแวร์และซอฟต์แวร์ให้แสดงภาพที่เสถียร"
        },
        {
          id: "minesweeper",
          title: "Minesweeper Game",
          role: "UX/UI Designer & Developer",
          duration: "ระยะเวลา 2 สัปดาห์",
          image: "./assets/game.png",
          badges: ["Java", "Leaderboard"],
          desc: "ออกแบบ UI/UX ให้เข้าใจง่ายและพัฒนาเกมด้วยภาษา Java พร้อมระบบจัดอันดับคะแนนผู้เล่น"
        },
        {
          id: "reservation",
          title: "Restaurant Reservation Web App",
          role: "UX/UI Designer",
          duration: "ระยะเวลา 1 สัปดาห์",
          image: "./assets/restaurant.png",
          badges: ["Figma", "Prototype"],
          desc: "ออกแบบต้นแบบ UX/UI สำหรับระบบจองโต๊ะและสั่งอาหารล่วงหน้า เน้นใช้งานง่ายเพื่อเพิ่มความสะดวกให้ผู้ใช้"
        },
        {
          id: "what2eat",
          title: "WHAT2Eat Application",
          role: "Full-stack Developer & UX/UI Designer",
          duration: "ระยะเวลา 4 สัปดาห์",
          image: "./assets/what2eat.jpg",
          badges: ["SQLite", "Mobile App"],
          desc: "ออกแบบอินเทอร์เฟซที่ใช้งานง่ายสำหรับแอปสุ่มเมนูอาหาร และพัฒนาฐานข้อมูล SQLite พร้อมโครงสร้างการทำงานทั้งระบบ"
        }
      ]
    },
    activities: {
      title: "กิจกรรมและการมีส่วนร่วม",
      bu: {
        title: "BU Open House 2025 — จัดแสดงผลงาน",
        desc: "จัดแสดงโปรเจกต์แชทบอทโต้ตอบแบบเสียงเพื่อสิทธิผู้ประกันตนประกันสังคม"
      }
    },
    certs: {
      title: "ใบรับรอง (Certifications)",
      items: [
        { id: "tdga-cyber", title: "TDGA — Cybersecurity", image: "./assets/tdgacyber.jpg", desc: "ใบรับรองความปลอดภัยไซเบอร์" },
        { id: "tdga-dataviz", title: "TDGA — Data Visualization", image: "./assets/tdgadata.jpg", desc: "ใบรับรองการทำ Data Visualization" },
        { id: "tdga-digital", title: "TDGA — Digital Literacy", image: "./assets/tdgadigital.jpg", desc: "ความรอบรู้ดิจิทัล" },
        { id: "coursera-chatgpt", title: "Coursera — ChatGPT", image: "./assets/coursera.png", desc: "หลักสูตรการใช้งาน ChatGPT" },
        { id: "basic-cyber", title: "Basic Cybersecurity", image: "./assets/basiccyber.jpg", desc: "พื้นฐานด้านความปลอดภัยไซเบอร์" }
      ]
    },
    contact: {
      title: "ติดต่อ (Contact)",
      emailStudent: "Email นักศึกษา",
      phone: "โทร",
      address: "ที่อยู่"
    },
    footer: { note: "Web Portfolio By Smit Intrathep" },
    skills: [
      { group: "Technical Skills", items: [
        { name: "Python", level: "Intermediate", percent: 70 },
        { name: "Java", level: "Novice", percent: 35 },
        { name: "C#", level: "Novice", percent: 35 },
        { name: ".Net XAML", level: "Intermediate", percent: 65 },
        { name: "HTML/CSS", level: "Advanced", percent: 90 },
        { name: "JavaScript", level: "Novice", percent: 35 }
      ]},
      { group: "Data Visualization", items: [
        { name: "Power BI", level: "Intermediate", percent: 65 },
        { name: "Microsoft Excel", level: "Intermediate", percent: 70 },
        { name: "PostgreSQL", level: "Novice", percent: 30 }
      ]},
      { group: "UX/UI & Design Tools", items: [
        { name: "Adobe Photoshop", level: "Intermediate", percent: 60 },
        { name: "Figma", level: "Advanced", percent: 85 },
        { name: "Draw.io", level: "Advanced", percent: 80 },
        { name: "Canva", level: "Advanced", percent: 80 }
      ]},
      { group: "Tools", items: [
        { name: "Visual Studio Code", level: "Advanced", percent: 85 }
      ]},
      { group: "Language", items: [
        { name: "Thai", level: "Advanced", percent: 95 },
        { name: "English", level: "Novice", percent: 30 }
      ]}
    ]
  },
  en: {
    menu: { home: "Home", about: "About", activities: "Activities", certs: "Certifications", contact: "Contact" },
    brand: { subtitle: "Computer Science Student" },
    home: {
      title: "Smit Intrathep (Zag)",
      subtitle: "Due to my passion for coding and web application development, I've honed my skills by building various projects using HTML/CSS, JavaScript, Python, and Java, as well as using XAML for creating desktop applications. I am also adept at leveraging AI tools to complete assigned tasks quickly and meet set goals.",
      nameLabel: "Name:",
      nameValue: "Smit Intrathep",
      nickLabel: "Nickname:",
      nickValue: "Zag",
      birthLabel: "Birthdate:",
      birthValue: "07/01/2004 (21 years)",
      genderLabel: "Gender:",
      genderValue: "Male",
      
    },
    about: {
      title: "About Me",
      educationTitle: "Education",
      skillsTitle: "Skills & Expertise",

      softTitle: "Soft Skills",
      softSkills: [
        "Teamwork",
        "Fast learner",
        "Proficient with AI tools",
        "Able to handle on-the-spot problems",
        "Responsible and punctual"
      ],

      education: [
        "Bangkok University (2022 - 2026) – B.Sc. in Information Technology & Innovation | Computer Science (GPA: 3.57)",
        "SBAC(Saphan Mai) (2019-2022) – Vocational Certificate in Information Technology (GPA: 3.89)"
      ]
    },
    portfolio: {
      note: "Click a card to view details in a popup",
      items: [
        {
          id: "led-wall",
          title: "LED Wall",
          role: "Developer & Hardware Integrator",
          duration: "3 weeks",
          image: "./assets/ledwall.jpg",
          badges: ["Arduino ESP32", "Realtime"],
          desc: "Develop a real-time LED Wall display system connected to a computer using Arduino ESP32 and design the interaction of hardware and software to display stable images."
        },
        {
          id: "minesweeper",
          title: "Minesweeper Game",
          role: "UX/UI Designer & Developer",
          duration: "2 weeks",
          image: "./assets/game.png",
          badges: ["Java", "Leaderboard"],
          desc: "Designed a clear, intuitive UI/UX and developed a Java-based Minesweeper with player leaderboard."
        },
        {
          id: "reservation",
          title: "Restaurant Reservation Web App",
          role: "UX/UI Designer",
          duration: "1 week",
          image: "./assets/restaurant.png",
          badges: ["Figma", "Prototype"],
          desc: "Created a UX/UI prototype for table booking and pre-ordering to streamline the user journey."
        },
        {
          id: "what2eat",
          title: "WHAT2Eat Application",
          role: "Full-stack Developer & UX/UI Designer",
          duration: "4 weeks",
          image: "./assets/what2eat.jpg",
          badges: ["SQLite", "Mobile App"],
          desc: "Designed a simple interface for a random-menu app and implemented SQLite database with full app structure."
        }
      ]
    },
    activities: {
      title: "Activities & Contributions",
      bu: {
        title: "BU Open House 2025 — Showcase",
        desc: "Showcasing a voice-based chatbot project for social security insured persons' rights"
      }
    },
    certs: {
      title: "Certifications",
      items: [
        { id: "tdga-cyber", title: "TDGA — Cybersecurity", image: "./assets/tdgacyber.jpg", desc: "Cybersecurity certificate" },
        { id: "tdga-dataviz", title: "TDGA — Data Visualization", image: "./assets/tdgadata.jpg", desc: "Data visualization certificate" },
        { id: "tdga-digital", title: "TDGA — Digital Literacy", image: "./assets/tdgadigital.jpg", desc: "Digital literacy certificate" },
        { id: "coursera-chatgpt", title: "Coursera — ChatGPT", image: "./assets/coursera.png", desc: "Course certificate for ChatGPT" },
        { id: "basic-cyber", title: "Basic Cybersecurity", image: "./assets/basiccyber.jpg", desc: "Fundamentals of cybersecurity" }
      ]
    },
    contact: {
      title: "Contact",
      emailStudent: "Student Email",
      phone: "Phone",
      address: "Address"
    },
    footer: { note: "Web Portfolio By Smit Intrathep" },
    skills: [
      { group: "Technical Skills", items: [
        { name: "Python", level: "Intermediate", percent: 70 },
        { name: "Java", level: "Novice", percent: 35 },
        { name: "C#", level: "Novice", percent: 35 },
        { name: ".Net XAML", level: "Intermediate", percent: 65 },
        { name: "HTML/CSS", level: "Advanced", percent: 90 },
        { name: "JavaScript", level: "Novice", percent: 35 }
      ]},
      { group: "Data Visualization", items: [
        { name: "Power BI", level: "Intermediate", percent: 65 },
        { name: "Microsoft Excel", level: "Intermediate", percent: 70 },
        { name: "PostgreSQL", level: "Novice", percent: 30 }
      ]},
      { group: "UX/UI & Design Tools", items: [
        { name: "Adobe Photoshop", level: "Intermediate", percent: 60 },
        { name: "Figma", level: "Advanced", percent: 85 },
        { name: "Draw.io", level: "Advanced", percent: 80 },
        { name: "Canva", level: "Advanced", percent: 80 }
      ]},
      { group: "Tools", items: [
        { name: "Visual Studio Code", level: "Advanced", percent: 85 }
      ]},
      { group: "Language", items: [
        { name: "Thai", level: "Advanced", percent: 95 },
        { name: "English", level: "Novice", percent: 30 }
      ]}
    ]
  }
};

// ====== DOM HELPERS ======
const $$ = (sel, root=document) => root.querySelector(sel);
const $$$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
function $(s, r=document) { return r.querySelector(s); }

// ====== RENDER FUNCTIONS ======

// ====== EDUCATION RENDER (card style) ======
function renderEducation(items) {
  const ul = document.getElementById('eduList');
  ul.innerHTML = items.map(txt => `
    <li>
      <div class="edu-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 3l10 6-10 6L2 9l10-6zm0 7.5l6.5-3.9v4.6c0 3.6-4 6.8-6.5 7.8-2.5-1-6.5-4.2-6.5-7.8V6.6L12 10.5z"/></svg>
      </div>
      <div class="edu-main">
        <div class="edu-title">${txt.split('–')[0].trim()}</div>
        <div class="edu-sub">${txt}</div>
      </div>
    </li>
  `).join('');
}

function renderSoftSkills(items) {
  const ul = document.getElementById('softList');
  if (!ul) return;
  ul.innerHTML = items.map(txt => `<li>${txt}</li>`).join('');
}

function setLang(lang) {
  document.documentElement.lang = lang === "th" ? "th" : "en";
  const dict = data[lang];

  $$$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const parts = key.split('.');
    let val = dict;
    for (const p of parts) val = val?.[p];
    if (typeof val === 'string') el.textContent = val;
  });

  // Brand subtitle
  $$('.brand .muted').textContent = dict.brand.subtitle;

    // Education list
  renderEducation(dict.about.education || []);

  // ADD: Soft Skills
  renderSoftSkills(dict.about.softSkills || []);

  // Skills
  renderSkills(dict.skills);

  // Projects & Certs
  renderCards('#projects', dict.portfolio.items, 'project');
  renderCards('#certList', dict.certs.items, 'cert');
}

function renderSkills(groups) {
  const wrap = $('#skills');
  wrap.innerHTML = '';
  groups.forEach(g => {
    const c = document.createElement('div');
    c.className = 'skill-item';
    const head = document.createElement('div');
    head.className = 'skill-head';
    head.innerHTML = `<strong>${g.group}</strong>`;
    c.appendChild(head);

    g.items.forEach(it => {
      const row = document.createElement('div');
      row.style.marginBottom = '12px';
      const top = document.createElement('div');
      top.className = 'skill-head';
      top.innerHTML = `<span>${it.name}</span><span class="level-text">${it.level} — ${it.percent}%</span>`;
      const bar = document.createElement('div');
      bar.className = 'bar';
      const fill = document.createElement('span');
      setTimeout(() => { fill.style.width = it.percent + '%'; }, 50);
      bar.appendChild(fill);
      row.appendChild(top);
      row.appendChild(bar);
      c.appendChild(row);
    });

    wrap.appendChild(c);
  });
}

function renderCards(containerSel, items, type) {
  const wrap = $(containerSel);
  wrap.innerHTML = '';
  items.forEach(it => {
    const card = document.createElement('div');
    card.className = 'card card-link';
    card.setAttribute('data-modal', `${type}:${it.id}`);
    card.innerHTML = `
      <img src="${it.image || PLACEHOLDER}" alt="${it.title}"/>
      <div style="padding-top:10px;">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <h3 style="margin:0;">${it.title}</h3>
          <span class="badge">${it.duration || ''}</span>
        </div>
        <p class="muted" style="margin-top:6px;">${it.role || it.desc || ''}</p>
        <div style="margin-top:8px; display:flex; flex-wrap:wrap; gap:6px;">
          ${(it.badges||[]).map(b => `<span class='badge'>${b}</span>`).join('')}
        </div>
      </div>
    `;
    wrap.appendChild(card);
  });
}

// ====== MODAL ======
const backdrop = $('#modalBackdrop');
const modalTitle = $('#modalTitle');
const modalImg = $('#modalImg');
const modalMeta = $('#modalMeta');
const modalDesc = $('#modalDesc');

function openModal(payload) {
  modalTitle.textContent = payload.title || '';
  modalImg.src = payload.image || PLACEHOLDER;
  modalMeta.innerHTML = '';
  if (payload.role) modalMeta.innerHTML += `<span class="badge">${payload.role}</span>`;
  if (payload.duration) modalMeta.innerHTML += `<span class="badge">${payload.duration}</span>`;
  (payload.badges || []).forEach(b => modalMeta.innerHTML += `<span class="badge">${b}</span>`);
  modalDesc.textContent = payload.desc || '';
  backdrop.classList.add('show');
  backdrop.setAttribute('aria-hidden','false');
}
function closeModal() {
  backdrop.classList.remove('show');
  backdrop.setAttribute('aria-hidden','true');
}
$('#modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('click', (e) => {
  const card = e.target.closest('.card-link');
  if (!card) return;
  const id = card.getAttribute('data-modal');
  const [type, key] = id.split(':');
  const lang = document.documentElement.lang === 'th' ? 'th' : 'en';
  let src;
  if (type === 'project') src = data[lang].portfolio.items.find(x => x.id === key);
  else if (type === 'cert') src = data[lang].certs.items.find(x => x.id === key);
  else if (type === 'activity' && key === 'bu-open-house') src = { title: data[lang].activities.bu.title, desc: data[lang].activities.bu.desc, image: "./assets/insurebot.jpg", role: "Activity", duration: "2025" };
  if (src) openModal(src);
});

// ====== LANGUAGE SWITCH ======
function setActiveBtn(lang) {
  $('#thBtn').classList.toggle('active', lang === 'th');
  $('#enBtn').classList.toggle('active', lang === 'en');
}
$('#thBtn').addEventListener('click', () => { setActiveBtn('th'); setLang('th'); });
$('#enBtn').addEventListener('click', () => { setActiveBtn('en'); setLang('en'); });

// ====== INIT ======
setLang('th');


// ====== SCROLL SPY (click + scroll, header-aware) ======
const headerEl = document.querySelector('header');
const NAV_OFFSET = (headerEl ? headerEl.offsetHeight : 64) + 8;

const navLinks = Array.from(document.querySelectorAll('.menu a'));
const sections = Array.from(document.querySelectorAll('main section[id]'));

// อัปเดต active ตามการเลื่อน
function setActiveNavByScroll() {
  const y = window.scrollY + NAV_OFFSET + window.innerHeight * 0.12;
  let currentId = sections[0]?.id;
  for (const sec of sections) {
    if (y >= sec.offsetTop) currentId = sec.id;
  }
  navLinks.forEach(a => a.classList.remove('active'));
  const active = navLinks.find(a => a.getAttribute('href') === '#' + currentId);
  if (active) active.classList.add('active');
}

function smoothScrollToHash(href) {
  const target = document.querySelector(href);
  if (!target) return;

  const headerEl = document.querySelector('header');
  const headerH = (headerEl ? headerEl.offsetHeight : 64) + 8; // ชดเชย header

  // ไป #home ให้ขึ้นสุดจริง ๆ
  const topY = target.id === 'home'
    ? 0
    : target.getBoundingClientRect().top + window.pageYOffset - headerH;

  window.scrollTo({ top: topY, behavior: 'smooth' });
}

// คลิกเมนู → active ทันที (+ โค้ดพิเศษให้หน้าหลักขึ้นสุด)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';
    if (href && href.startsWith('#')) {
      e.preventDefault();           // กันการวาร์ปไป anchor ทันที
      smoothScrollToHash(href);     // ใช้เลื่อนแบบ smooth ที่คุม offset เอง

      // อัปเดตสถานะเมนู+ปิดเมนูมือถือ
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      const ham = document.getElementById('hamburger');
      const topMenu = document.getElementById('topMenu');
      if (ham && topMenu) {
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded','false');
        topMenu.classList.remove('show');
      }
    }
  });
});

window.addEventListener('scroll', () => requestAnimationFrame(setActiveNavByScroll), { passive: true });
window.addEventListener('load', setActiveNavByScroll);

// ถ้ามีสลับภาษา ให้คำนวณใหม่หลังสลับ
if (typeof setLang === 'function') {
  const _setLang = setLang;
  setLang = function(lang) {
    _setLang(lang);
    setTimeout(setActiveNavByScroll, 50);
  };
}

// ====== HAMBURGER MENU ======
const ham = document.getElementById('hamburger');
const topMenu = document.getElementById('topMenu');
if (ham && topMenu) {
  ham.addEventListener('click', () => {
    const open = ham.classList.toggle('open');
    ham.setAttribute('aria-expanded', open ? 'true' : 'false');
    topMenu.classList.toggle('show', open);
  });
  // Close menu when clicking a link (mobile UX)
  Array.from(topMenu.querySelectorAll('a')).forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); ham.setAttribute('aria-expanded', 'false'); topMenu.classList.remove('show');
  }));
}

