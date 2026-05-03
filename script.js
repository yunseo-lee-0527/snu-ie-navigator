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
  const yearResult = document.querySelector("#yearResult");
  const ruleCards = document.querySelectorAll(".rule-card");

  ruleCards.forEach((card) => {
    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", isOpen);
    });
  });

  if (!yearInput || !yearResult) return;

  yearInput.addEventListener("input", () => {
    const year = Number(yearInput.value);
    if (!yearInput.value) {
      yearResult.textContent = "학번을 입력하면 해당 학번 기준으로 확인해야 할 문서가 표시됩니다.";
      return;
    }

    if (year < 2000 || year > 2030) {
      yearResult.textContent = "입학연도는 2000년부터 2030년 사이로 입력해주세요.";
      return;
    }

    const currentRule = year >= 2025
      ? "2025학번 이후 전공교과목 이수규정과 최신 학과내규를 먼저 확인하세요."
      : `${year}학번 기준 이수규정은 입학연도별 문서가 다를 수 있습니다. 학과 이수규정 페이지에서 해당 학번 문서를 확인하세요.`;

    yearResult.textContent = `${year}학번: ${currentRule} 교양필수와 다전공 요건도 입학연도 기준이 달라질 수 있습니다.`;
  });
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
