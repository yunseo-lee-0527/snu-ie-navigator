const courses = [
  { code: "406.203", name: "산업공정설계", credits: "3-3-0", field: "제조/시스템", required: false },
  { code: "406.211", name: "과학적 관리", credits: "3-3-0", field: "경영/운영", required: true },
  { code: "406.212", name: "산업컴퓨팅개론", credits: "3-3-0", field: "데이터/컴퓨팅", required: true, tag: "data" },
  { code: "406.304", name: "인간공학", credits: "3-3-0", field: "인간공학", required: true },
  { code: "406.305A", name: "인간공학실험", credits: "1-0-2", field: "인간공학", required: true },
  { code: "406.306", name: "경영정보시스템", credits: "3-3-0", field: "정보시스템", required: true, tag: "data" },
  { code: "406.310", name: "생산관리", credits: "3-3-0", field: "생산/서비스", required: true },
  { code: "406.311", name: "시뮬레이션", credits: "3-3-0", field: "모델링", required: false },
  { code: "406.314", name: "경제성공학", credits: "3-3-0", field: "경제/금융", required: true },
  { code: "406.315", name: "경영과학 1", credits: "3-3-0", field: "최적화", required: true },
  { code: "406.317", name: "경영과학 2", credits: "3-3-0", field: "최적화", required: true },
  { code: "406.319", name: "기술경영", credits: "3-3-0", field: "기술경영", required: false },
  { code: "406.320", name: "품질경영", credits: "3-3-0", field: "품질/운영", required: true },
  { code: "406.321", name: "최적화 모형 및 응용", credits: "3-3-0", field: "최적화", required: false },
  { code: "406.322", name: "서비스공학", credits: "3-3-0", field: "생산/서비스", required: false },
  { code: "406.323", name: "산업계산지능", credits: "3-3-0", field: "데이터/컴퓨팅", required: false, tag: "data" },
  { code: "406.401", name: "선형계획", credits: "3-3-0", field: "최적화", required: true },
  { code: "406.416", name: "컴퓨터통합생산시스템", credits: "3-3-0", field: "생산/시스템", required: true },
  { code: "406.419", name: "물류관리", credits: "3-3-0", field: "물류/공급망", required: false },
  { code: "406.422", name: "신뢰성분석", credits: "3-3-0", field: "품질/통계", required: false },
  { code: "406.426", name: "데이터베이스분석 및 설계", credits: "3-3-0", field: "데이터/컴퓨팅", required: true, tag: "data" },
  { code: "406.427A", name: "휴먼인터페이스디자인", credits: "3-3-0", field: "인간공학/UX", required: false },
  { code: "406.429", name: "데이터마이닝", credits: "3-3-0", field: "데이터/컴퓨팅", required: false, tag: "data" },
  { code: "406.430", name: "제품개발프로세스", credits: "3-3-0", field: "제품/서비스", required: true },
  { code: "406.432", name: "산업공학통계", credits: "3-3-0", field: "통계/데이터", required: true, tag: "data" }
];

const faqs = [
  {
    q: "졸업 요건은 이 사이트만 보고 판단해도 되나요?",
    a: "아니요. 이 사이트는 계획을 세우기 위한 안내용입니다. 최종 졸업 요건, 학점 인정, 예외 처리, 학번별 차이는 공식 이수규정 문서와 학과 행정실 확인이 기준입니다."
  },
  {
    q: "복수전공을 하면 산업공학과 전공필수도 들어야 하나요?",
    a: "공개된 전공교과목 이수규정 PDF에는 복수전공 이수규정이 학과내규에 따르며 전공필수과목을 이수해야 한다고 안내되어 있습니다. 세부 학점과 인정 범위는 본인 학번 기준으로 확인하세요."
  },
  {
    q: "대학원 진학을 생각하면 어떤 과목을 우선 챙기면 좋나요?",
    a: "최적화, 확률과 통계, 생산관리, 인간공학, 컴퓨터 기초는 대학원 입시면접 FAQ에서 기초 범위로 언급됩니다. 관심 연구실 분야에 따라 데이터마이닝, 물류관리, 신뢰성분석, 휴먼인터페이스디자인 같은 심화 과목을 더하면 좋습니다."
  },
  {
    q: "개설 과목 목록은 매 학기 수강편람과 같나요?",
    a: "아닙니다. 여기의 과목표는 교과과정 문서의 전공 과목 목록을 학업 탐색용으로 정리한 것입니다. 실제 개설 여부, 담당 교원, 시간표, 정원은 수강편람과 수강신청 시스템에서 확인해야 합니다."
  },
  {
    q: "전공선택 인정교과목은 어디서 확인하나요?",
    a: "전공교과목 이수규정 PDF에 타 학과 및 공과대학 공통과목 중 전공선택으로 인정 가능한 과목 목록이 포함되어 있습니다. 인정 여부가 애매하면 수강 전에 학과 행정실에 확인하는 편이 안전합니다."
  }
];

const ruleData = {
  2020: {
    label: "20학번",
    group: "2020",
    totalCredits: "130학점",
    liberalCredits: "교양 50학점 이상",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "사고의 표현 7학점: 대학 글쓰기 1, 대학글쓰기2 중 택 1, 말하기와 토론",
      "외국어 4~6학점: 외국어 2개 교과목",
      "수량적 분석과 추론 16학점: 수학 1/2, 통계학과 통계학실험, 공학수학 1/2",
      "과학적 사고와 실험 8학점: 물리/화학/생물 영역 중 학기별 4학점",
      "컴퓨터와 정보 활용 3학점: 컴퓨터의 개념 및 실습",
      "학문의 세계 12학점: 3개 영역 이상"
    ],
    majorNotes: [
      "전공필수 과목은 20-26학번 공통이며 ★ 표시 과목을 기준으로 합니다.",
      "20학번 표에는 경영정보시스템, 품질경영, 컴퓨터통합생산시스템/실험, 정보모델링기법과응용, 경영체제개론, 시스템공학개론 등이 포함되어 있습니다."
    ]
  },
  2021: {
    label: "21학번",
    group: "2021-2023",
    totalCredits: "130학점",
    liberalCredits: "교양 52학점 기준, 상세 교양표는 50학점 이상으로 제시",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "사고의 표현 7학점: 대학 글쓰기 1, 대학글쓰기2 중 택 1, 말하기와 토론",
      "외국어 6학점: 외국어 2개 교과목",
      "수량적 분석과 추론 16학점: 수학 1/2, 통계학과 통계학실험, 공학수학 1/2",
      "과학적 사고와 실험 8학점: 물리/화학/생물 영역 중 학기별 4학점",
      "컴퓨터와 정보 활용 3학점: 컴퓨터의 개념 및 실습",
      "학문의 세계 12학점: 3개 영역 이상"
    ],
    majorNotes: [
      "21학번부터 외국어가 6학점 고정으로 정리됩니다.",
      "전공 표에는 설계공학, 제품개발 및 품질설계, 컴퓨터통합생산시스템/실험, 정보모델링기법과응용 등이 포함되어 있습니다."
    ]
  },
  2022: {
    label: "22학번",
    group: "2021-2023",
    totalCredits: "130학점",
    liberalCredits: "교양 52학점 기준, 상세 교양표는 50학점 이상으로 제시",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "사고의 표현 7학점",
      "외국어 6학점",
      "수량적 분석과 추론 16학점",
      "과학적 사고와 실험 8학점",
      "컴퓨터와 정보 활용 3학점",
      "학문의 세계 12학점: 3개 영역 이상"
    ],
    majorNotes: [
      "22학번은 21-23학번 교양 구조에 속합니다.",
      "전공 표에는 물류관리, 제품개발 및 품질설계, 서비스공학, 산업경영수리기법, 인간공학 설계, 데이터마이닝 등이 포함됩니다."
    ]
  },
  2023: {
    label: "23학번",
    group: "2021-2023",
    totalCredits: "130학점",
    liberalCredits: "교양 52학점 기준, 상세 교양표는 50학점 이상으로 제시",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "사고의 표현 7학점",
      "외국어 6학점",
      "수량적 분석과 추론 16학점",
      "과학적 사고와 실험 8학점",
      "컴퓨터와 정보 활용 3학점",
      "학문의 세계 12학점: 3개 영역 이상"
    ],
    majorNotes: [
      "23학번은 21-23학번 교양 구조의 마지막 학번입니다.",
      "전공 표에는 핀테크 개론이 포함되고, 산업공학통계/생산관리/경제성공학 등 전필 구조는 동일합니다."
    ]
  },
  2024: {
    label: "24학번",
    group: "2024",
    totalCredits: "130학점",
    liberalCredits: "교양 52학점 기준, 상세 교양표는 50학점 이상으로 제시",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "사고의 표현 7학점",
      "외국어 6학점",
      "수량적 분석과 추론 16학점",
      "과학적 사고와 실험 8학점",
      "컴퓨터와 정보 활용 3학점",
      "학문의 세계 12학점: 4개 영역 이상"
    ],
    majorNotes: [
      "24학번부터 학문의 세계 이수 조건이 3개 영역 이상에서 4개 영역 이상으로 바뀝니다.",
      "전공 표에는 핀테크 개론, 빅데이터 산업응용, 데이터마이닝 등이 포함됩니다."
    ]
  },
  2025: {
    label: "25학번",
    group: "2025-2026",
    totalCredits: "130학점",
    liberalCredits: "교양 52학점 기준, 상세 교양표는 50학점 이상으로 제시",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "학문의 토대 - 사고의 표현 7학점",
      "학문의 토대 - 외국어 6학점",
      "학문의 토대 - 수학·과학·컴퓨팅: 수학/통계/공학수학 16학점, 과학 실험 8학점, 컴퓨터 3학점",
      "지성의 열쇠 9학점: 4개 영역 중 3개 영역에서 9학점 이상",
      "베리타스 3학점 이상: 베리타스 강좌 1/2 또는 베리타스 실천"
    ],
    majorNotes: [
      "25학번부터 교양 구조가 학문의 토대, 지성의 열쇠, 베리타스로 개편됩니다.",
      "전공 표에는 최적화알고리즘과 산업 텍스트 애널리틱스가 추가되어 표시됩니다."
    ]
  },
  2026: {
    label: "26학번",
    group: "2025-2026",
    totalCredits: "130학점",
    liberalCredits: "교양 52학점 기준, 상세 교양표는 50학점 이상으로 제시",
    majorCredits: "주전공 59학점",
    requiredCredits: "전필 28학점",
    electiveCredits: "학과 전선 21학점 이상",
    liberal: [
      "학문의 토대 - 사고의 표현 7학점",
      "학문의 토대 - 외국어 6학점",
      "학문의 토대 - 수학·과학·컴퓨팅: 수학/통계/공학수학 16학점, 과학 실험 8학점, 컴퓨터 3학점",
      "지성의 열쇠 9학점: 4개 영역 중 3개 영역에서 9학점 이상",
      "베리타스 3학점 이상"
    ],
    majorNotes: [
      "26학번은 25-26학번 교양 구조에 속합니다.",
      "전공 표에는 서비스공학, 최적화 알고리즘, 산업 텍스트애널리틱스, 핀테크 개론 등이 포함됩니다."
    ]
  }
};

const commonMajorRequired = [
  "406.434 산업공학의 이해",
  "406.211 과학적 관리",
  "406.304 인간공학",
  "406.305A 인간공학실험",
  "406.315 경영과학 1",
  "406.426B 데이터관리와 분석",
  "406.317 경영과학 2",
  "406.432 산업공학통계",
  "406.310 생산관리",
  "406.314 경제성공학"
];

const multiMajorRules = [
  "복수전공: 해당 기준년도의 모든 전공필수 교과목을 이수해야 하며, 인간공학실험 및 산업공학의 이해는 면제됩니다.",
  "복수전공: 학과 개설 전공선택 교과목을 추가로 이수하여 최소 39학점을 만족해야 합니다.",
  "부전공: 전공교과목 21학점 이상, 이 중 전공필수 12학점 이상을 이수해야 하며 산업공학의 이해는 제외됩니다.",
  "복수전공/부전공 학생에게는 대학원 세미나 과목 이수 요건이 적용되지 않습니다.",
  "자유전공학부 주전공자는 공과대학 졸업이수기준과 산업공학과 졸업 요건을 동일하게 적용받습니다."
];

const liberalRowsByGroup = {
  "2020": [
    ["사고의 표현", "7학점", "대학 글쓰기 1, 대학글쓰기2 중 택 1, 말하기와 토론"],
    ["외국어", "4~6학점", "외국어 2개 교과목"],
    ["수량적 분석과 추론", "16학점", "수학 1/2, 통계학과 통계학실험, 공학수학 1/2"],
    ["과학적 사고와 실험", "8학점", "물리/화학/생물 영역 중 학기별 4학점"],
    ["컴퓨터와 정보 활용", "3학점", "컴퓨터의 개념 및 실습"],
    ["학문의 세계", "12학점", "3개 영역 이상"]
  ],
  "2021-2023": [
    ["사고의 표현", "7학점", "대학 글쓰기 1, 대학글쓰기2 중 택 1, 말하기와 토론"],
    ["외국어", "6학점", "외국어 2개 교과목"],
    ["수량적 분석과 추론", "16학점", "수학 1/2, 통계학과 통계학실험, 공학수학 1/2"],
    ["과학적 사고와 실험", "8학점", "물리/화학/생물 영역 중 학기별 4학점"],
    ["컴퓨터와 정보 활용", "3학점", "컴퓨터의 개념 및 실습"],
    ["학문의 세계", "12학점", "3개 영역 이상"]
  ],
  "2024": [
    ["사고의 표현", "7학점", "대학 글쓰기 1, 대학글쓰기2 중 택 1, 말하기와 토론"],
    ["외국어", "6학점", "외국어 2개 교과목"],
    ["수량적 분석과 추론", "16학점", "수학 1/2, 통계학과 통계학실험, 공학수학 1/2"],
    ["과학적 사고와 실험", "8학점", "물리/화학/생물 영역 중 학기별 4학점"],
    ["컴퓨터와 정보 활용", "3학점", "컴퓨터의 개념 및 실습"],
    ["학문의 세계", "12학점", "4개 영역 이상"]
  ],
  "2025-2026": [
    ["사고의 표현", "7학점", "대학 글쓰기 1, 대학글쓰기2 중 택 1, 말하기와 토론"],
    ["외국어", "6학점", "외국어 2개 교과목"],
    ["수학·과학·컴퓨팅", "27학점", "수학/통계/공학수학 16학점, 과학 실험 8학점, 컴퓨터 3학점"],
    ["지성의 열쇠", "9학점", "4개 영역 중 3개 영역 이상"],
    ["베리타스", "3학점", "베리타스 강좌 1/2 또는 베리타스 실천"]
  ]
};

const majorCreditRows = [
  ["주전공", "59학점", "전공필수와 학과 전공선택을 포함한 주전공 이수학점"],
  ["전공필수", "28학점", "PDF의 ★ 표시 과목 기준"],
  ["학과 전공선택", "21학점 이상", "산업공학과 개설 전공선택 및 인정 전선 과목으로 충족"],
  ["대학원 세미나", "1학점", "학사과정 졸업을 위해 이수. 3·4학년 수강 권장"]
];

const courseGrid = document.querySelector("#courseGrid");
const courseSearch = document.querySelector("#courseSearch");
const filterButtons = document.querySelectorAll(".filter");
let activeFilter = "all";

function renderCourses() {
  if (!courseGrid || !courseSearch) return;

  const query = courseSearch.value.trim().toLowerCase();
  const filtered = courses.filter((course) => {
    const haystack = `${course.code} ${course.name} ${course.field}`.toLowerCase();
    const matchesQuery = haystack.includes(query);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "required" && course.required) ||
      (activeFilter === "data" && course.tag === "data");
    return matchesQuery && matchesFilter;
  });

  courseGrid.innerHTML = filtered.map((course) => `
    <article class="course-card">
      <header>
        <div>
          <span class="course-code">${course.code}</span>
          <h3>${course.name}</h3>
        </div>
        ${course.required ? '<span class="badge required">전공필수</span>' : '<span class="badge">전공선택</span>'}
      </header>
      <p class="course-meta">${course.field} · ${course.credits}</p>
    </article>
  `).join("");
}

function renderFaqs() {
  const faqList = document.querySelector("#faqList");
  if (!faqList) return;

  faqList.innerHTML = faqs.map((item, index) => `
    <article class="faq-item ${index === 0 ? "open" : ""}">
      <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">${item.q}</button>
      <div class="faq-answer">${item.a}</div>
    </article>
  `).join("");

  faqList.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const item = button.closest(".faq-item");
    item.classList.toggle("open");
    button.setAttribute("aria-expanded", item.classList.contains("open"));
  });
}

function initRulesPage() {
  const yearInput = document.querySelector("#studentYear");
  const ruleOutput = document.querySelector("#ruleOutput");
  const yearChips = document.querySelectorAll(".year-chip");
  if (!yearInput || !ruleOutput) return;

  function listItems(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function creditRows(rows) {
    return rows.map(([area, credits, note]) => `
      <div class="credit-row">
        <strong>${area}</strong>
        <strong>${credits}</strong>
        <span>${note}</span>
      </div>
    `).join("");
  }

  function renderRules(year) {
    const data = ruleData[year];
    if (!data) {
      ruleOutput.innerHTML = `
        <article class="rule-alert">
          <h2>지원 범위 밖 학번입니다</h2>
          <p>업로드한 PDF에는 20-26학번 규정이 정리되어 있습니다. 2020부터 2026 사이의 입학연도를 입력해주세요.</p>
        </article>
      `;
      return;
    }

    yearInput.value = year;
    yearChips.forEach((chip) => chip.classList.toggle("active", Number(chip.dataset.year) === year));

    ruleOutput.innerHTML = `
      <div class="rule-summary">
        <article><span>졸업학점</span><strong>${data.totalCredits}</strong></article>
        <article><span>교양</span><strong>${data.liberalCredits}</strong></article>
        <article><span>주전공</span><strong>${data.majorCredits}</strong></article>
        <article><span>전공필수</span><strong>${data.requiredCredits}</strong></article>
        <article><span>학과 전선</span><strong>${data.electiveCredits}</strong></article>
      </div>

      <section class="rule-section">
        <h2>${data.label} 교양 이수학점</h2>
        <div class="credit-table">${creditRows(liberalRowsByGroup[data.group])}</div>
      </section>

      <section class="rule-section">
        <h2>전공 이수학점</h2>
        <div class="credit-table">${creditRows(majorCreditRows)}</div>
      </section>

      <section class="rule-section">
        <h2>전공필수 과목</h2>
        <ul class="required-list">${listItems(commonMajorRequired)}</ul>
      </section>

      <section class="rule-section">
        <h2>전선 인정 과목</h2>
        <div class="placeholder-box">추후 전공선택 인정 과목 목록을 여기에 추가할 예정입니다.</div>
      </section>

      <section class="rule-section">
        <h2>복수전공·부전공·자유전공</h2>
        <ul class="required-list">${listItems(multiMajorRules)}</ul>
      </section>

      <section class="rule-section">
        <h2>원문 확인</h2>
        <p>세부 인정 여부는 공식 문서와 학과 행정실 확인이 필요합니다.</p>
        <a href="https://ie.snu.ac.kr/undergrad_regulation/" target="_blank" rel="noreferrer">산업공학과 학부 이수 규정</a>
      </section>
    `;
  }

  yearInput.addEventListener("input", () => {
    renderRules(Number(yearInput.value));
  });

  yearChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      renderRules(Number(chip.dataset.year));
    });
  });

  renderRules(2025);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((target) => target.classList.toggle("active", target === button));
    renderCourses();
  });
});

if (courseSearch) {
  courseSearch.addEventListener("input", renderCourses);
}

renderFaqs();
renderCourses();
initRulesPage();
