// ─── 개설 과목 데이터 (courses.html) ─────────────────────────────────────────
// offerings: [학기, 비고] 쌍의 배열 — "O"는 정상 개설, 그 외는 조건 명시
const upcomingCourses = [
  { category: "1학년", name: "산업공학의 이해", type: "전필", offerings: [["2026-1", "O(25-2학기미개설로인해)"], ["2026-2", "O"]] },
  { category: "2학년", name: "과학적관리", type: "전필", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "2학년", name: "경영과학1", type: "전필", offerings: [["2026-1", "O(연합전공)"], ["2026-2", "O"], ["2027-2", "O"]] },
  { category: "2학년", name: "데이터관리와 분석", type: "전필", offerings: [["2026-1", "O(연합전공)"], ["2027-1", "O(연합전공)"], ["2027-2", "O"]] },
  { category: "2학년", name: "인간공학", type: "전필", offerings: [["2026-2", "O"]] },
  { category: "2학년", name: "인간공학실험", type: "전필", offerings: [["2026-2", "O"]] },
  { category: "2학년", name: "산업공정설계", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "3학년", name: "경영과학2", type: "전필", offerings: [["2026-1", "O"], ["2026-2", "O"], ["2027-1", "O"], ["2027-2", "O(연합전공)"]] },
  { category: "3학년", name: "산업공학통계", type: "전필", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "3학년", name: "생산관리", type: "전필", offerings: [["2026-1", "O(연합전공)"], ["2026-2", "O"]] },
  { category: "3학년", name: "물류관리", type: "전선", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "3학년", name: "산업경영수리기법", type: "전선", offerings: [["2027-2", "O"]] },
  { category: "3학년", name: "기술경영", type: "전선", offerings: [["2026-2", "O"], ["2027-2", "O"]] },
  { category: "3학년", name: "서비스공학", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "3학년", name: "최적화모형 및 응용", type: "전선", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "3학년", name: "제품개발 및 품질설계", type: "전선", offerings: [["2027-1", "O"], ["2027-2", "미개설"], ["2028-1", "O"]] },
  { category: "3학년", name: "기술경영개론", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "3학년", name: "지식경영전략", type: "전선", offerings: [["2026-1", "O(연합전공)"]] },
  { category: "4학년", name: "경제성공학", type: "전필", offerings: [["2026-1", "O"], ["2026-2", "O(연합전공)"], ["2027-2", "O(연합전공)"]] },
  { category: "4학년", name: "시뮬레이션", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "4학년", name: "휴먼인터페이스디자인", type: "전선", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "4학년", name: "데이터마이닝", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "4학년", name: "산업텍스트애널리틱스", type: "전선", offerings: [["2025-2", "O"], ["2026-2", "O"]] },
  { category: "4학년", name: "기술창업론", type: "전선", offerings: [["2026-1", "O(연합전공)"]] },
  { category: "4학년", name: "최적화알고리즘", type: "전선", offerings: [["2026-2", "O"]] },
  { category: "교양", name: "공학수학1", type: "", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "교양", name: "컴퓨터의개념및실습", type: "", offerings: [["2026-1", "O"], ["2026-2", "O(연합전공)"], ["2027-1", "O"], ["2027-2", "O(연합전공)"]] },
  { category: "공대공통과목", name: "공학연구의 실습2", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "타과수강전선", name: "산업공학개론", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "인간성능", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "작업생체역학", type: "핵심", offerings: [["2027-2", "O"]] },
  { category: "대학원", name: "정수최적화", type: "핵심", offerings: [["2026-1", "O"], ["2026-2", "O"], ["2027-2", "O"]] },
  { category: "대학원", name: "제품공학", type: "핵심", offerings: [["2026-1", "O"], ["2027-2", "미개설"]] },
  { category: "대학원", name: "재고관리", type: "핵심", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "생산계획 및 통제", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "데이터마이닝 기법", type: "핵심", offerings: [["2027-2", "O"]] },
  { category: "대학원", name: "데이터기반학습", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "응용 다변량 통계분석", type: "핵심", offerings: [["2027-1", "O"]] },
  { category: "대학원", name: "기술혁신이론 및 연구방법론", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "공업경제분석", type: "핵심", offerings: [["2026-1", "O"]] },
  { category: "대학원", name: "산업공학세미나", type: "필수", offerings: [["2026-1", "O"]] },
  { category: "대학원", name: "인간-기계 인터페이스 설계 및 평가", type: "", offerings: [["2026-2", "미개설"]] },
  { category: "대학원", name: "자동차 인간공학", type: "", offerings: [["2026-1", "O"], ["2027-2", "미개설"]] },
  { category: "대학원", name: "통계학습 고등논제", type: "", offerings: [["2027-2", "O"]] },
  { category: "대학원", name: "경쟁시스템분석", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "산업공학특론", type: "", offerings: [["2026-2", "O"], ["2027-2", "O"]] },
  { category: "대학원", name: "조합최적화", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "기술예측과 인텔리전스", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "선형최적화", type: "", offerings: [["2027-1", "O"]] },
  { category: "대학원", name: "수치최적화", type: "", offerings: [["2027-1", "O"]] },
  { category: "대학원", name: "스케줄링이론및응용", type: "", offerings: [["2026-1", "O"]] }
];

// ─── FAQ 데이터 (faq.html) ────────────────────────────────────────────────────
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
  },
  {
    q: "졸업학점 중 학과 전공선택 21학점에 타과 전선 인정 과목도 포함되나요?",
    a: "아니요. 학과 전공선택 21학점 요건에는 산업공학과에서 개설한 전공선택 과목만 포함됩니다. 다만 교환학생으로 국외수학 허가를 받은 과목은 산업공학과 개설 전공선택 과목으로 봅니다."
  },
  {
    q: "자유전공학부 소속 학생도 학과 전공선택 21학점을 채워야 하나요?",
    a: "네. 자유전공학부 소속 학생도 산업공학과 주전공생이므로 학과 개설 전공선택 21학점을 포함한 산업공학과 졸업 이수학점을 동일하게 적용받습니다. 졸업논문 작성, 생명존중 교육, 영어 과목, 공과대학 공통 교과목 이수 요건도 동일하게 적용되며, 교양 이수 규정은 자유전공학부 규정을 따릅니다."
  }
];

// ─── 학번별 이수규정 (rules.html) ─────────────────────────────────────────────
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

// ─── 전공필수 과목 (20-26학번 공통) ──────────────────────────────────────────
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

// ─── 학과 전공선택 과목 ───────────────────────────────────────────────────────
const departmentMajorElectives = [
  "406.436 산업공정설계",
  "406.324A 공학도를 위한 창의적 사고",
  "406.325 물류관리",
  "406.327 산업경영수리기법",
  "406.319 기술경영",
  "406.322 서비스공학",
  "406.321 최적화모형 및 응용",
  "406.326 인간공학 설계",
  "M1505.001500 제품개발 및 품질설계",
  "M1540.000200 기술경영개론",
  "4251.002A 지식경영전략",
  "406.311 시뮬레이션",
  "406.427A 휴먼인터페이스디자인",
  "406.429 데이터마이닝",
  "M0000.026700 빅데이터 산업응용",
  "M1505.002100 산업 텍스트 애널리틱스",
  "406.433 금융공학개론",
  "M1505.001900 핀테크 개론",
  "M1540.000100 기술창업론",
  "M1505.002000 최적화알고리즘"
];

// ─── 이수규정 PDF 링크 ────────────────────────────────────────────────────────
const requirementPdfs = {
  2020: "docs/requirements/20.pdf",
  2021: "docs/requirements/21.pdf",
  2022: "docs/requirements/22.pdf",
  2023: "docs/requirements/23.pdf",
  2024: "docs/requirements/24.pdf",
  2025: "docs/requirements/25.pdf",
  2026: "docs/requirements/26.pdf"
};

// ─── 복수전공·부전공·자유전공 규정 ───────────────────────────────────────────
const multiMajorRules = [
  "복수전공: 해당 기준년도의 모든 전공필수 교과목을 이수해야 하며, 인간공학실험 및 산업공학의 이해는 면제됩니다.",
  "복수전공: 학과 개설 전공선택 교과목을 추가로 이수하여 최소 39학점을 만족해야 합니다.",
  "부전공: 전공교과목 21학점 이상, 이 중 전공필수 12학점 이상을 이수해야 하며 산업공학의 이해는 제외됩니다.",
  "복수전공/부전공 학생에게는 대학원 세미나 과목 이수 요건이 적용되지 않습니다.",
  "복수전공 및 자유전공학부 소속 학생은 졸업논문을 작성해야 하며, 부전공 학생은 졸업논문을 작성하지 않아도 됩니다.",
  "자유전공학부 주전공자는 산업공학과 주전공생과 동일하게 학과 개설 전공선택 21학점, 졸업논문, 생명존중 교육, 영어 과목, 공과대학 공통 교과목 요건을 적용받습니다. 교양 이수 규정은 자유전공학부 규정을 따릅니다."
];

// ─── 추가 이수 요건 ───────────────────────────────────────────────────────────
const additionalRequirements = [
  "생명존중(자살예방) 교육 이수: 2016학번부터 적용됩니다.",
  "공과대학 공통 교과목 중 '공학기타' 제외 영역에서 3학점 이수: 학번별 적용 여부는 전공과목 이수표준형태 표에서 확인하세요."
];

const foreignLanguageLectureRows = [
  ["2008학번~2011학번", "대학영어(대학영어1, 대학영어2, 고급영어) 포함", "1강좌 이상의 주전공교과목을 포함하여 3과목 이상의 외국어진행강좌 의무 수강"],
  ["2012학번~2023학번", "대학영어(대학영어1, 대학영어2, 고급영어) 제외", "1강좌 이상의 주전공교과목을 포함하여 3과목 이상의 외국어진행강좌 의무 수강"],
  ["2024학번~", "대학영어(대학영어1, 대학영어2, 고급영어) 제외", "1강좌 이상의 주전공교과목을 포함하여 3과목 이상의 외국어진행강좌 수강 권장"]
];

// ─── 타과 전선 인정 과목 ──────────────────────────────────────────────────────
// 세 학번 그룹(2020-2022, 2023-2025, 2026)에서 동일한 학과 목록은
// 아래 공통 상수를 참조합니다. 한 학과의 과목이 바뀌면 해당 상수 하나만 수정하면 됩니다.
const _deptCS      = ["컴퓨터공학부", ["4190.101 이산수학", "M1522.000900 자료구조", "4190.301 데이타베이스", "4190.306 오토마타이론", "M1522.001400 데이터마이닝개론", "4190.407 알고리즘", "4190.408 인공지능", "4190.426A 인간컴퓨터상호작용"]];
const _deptCE      = ["건설환경공학부", ["457.203 도시계획", "457.208 교통공학 및 실험", "457.210A 환경공학", "457.301 교통계획 및 실험", "457.302 도시설계", "457.307 건설계획 및 관리"]];
const _deptChemBio = ["화학생물공학부", ["458.308 공정제어 및 설계", "458.401 공정 및 제품설계", "458.405 환경공학개론"]];
const _deptStats   = ["통계학과", ["326.313 회귀분석 및 실습", "326.315 실험계획 및 실습", "326.416 통계적품질관리 및 실습"]];
const _deptBiz     = ["경영학과", ["251.209 조직행위론", "251.301 재무관리", "251.303 인사관리", "251.305 원가회계", "251.306 관리회계", "251.321 마케팅관리", "251.322 국제경영"]];
const _deptEcon    = ["경제학부", ["212.201 미시경제이론", "212.202 거시경제이론"]];
// 2023-2025, 2026 그룹에서 공통 (2020-2022와 다름)
const _deptMechEng = ["기계항공공학부", ["M2794.001700 기계제품설계", "M2794.002100 시스템제어이론", "M2794.002700 로봇공학입문", "M2794.003300 자동차공학", "M2794.013600 마이크로나노 가공생산", "M2794.003600 최적설계", "M2794.004400 통합기계설계 및 해석"]];
const _deptEnergy  = ["에너지자원공학과", ["465.202 에너지환경기술경영", "465.319 신재생에너지", "465.413 에너지경제학", "465.435 에너지환경공학"]];
const _deptNatSci  = ["자연과학대학 공통과목 및 수리과학부", ["300.204 미분방정식 및 연습 / 881.003 미분방정식 (둘 중 하나만 인정)", "881.319 수치선형대수", "881.320 수치해석개론", "3341.201 해석개론1 / 881.008 해석개론 (둘 중 하나만 인정)", "3341.202 해석개론2"]];

const recognizedElectives = {
  // 기계항공공학부에 구형 과목 포함, 조선해양공학과 포함, 에너지자원공학과에 구 과목 표기
  "2020-2022": [
    _deptCS,
    ["기계항공공학부", ["M2794.001700 기계제품설계(구, M2794.005100 기계제도)", "M2794.002100 시스템제어이론", "M2794.002400 컴퓨터이용설계및제작", "M2794.002700 로봇공학입문", "M2794.002800 센서개론", "M2794.003300 자동차공학", "M2794.003500 마이크로가공생산", "M2794.003600 최적설계", "M2794.004400 통합기계설계 및 해석"]],
    ["조선해양공학과", ["414.463 조선해양 PLM개론(구, 414.436A 설계자동화개론)"]],
    _deptCE,
    _deptChemBio,
    ["에너지자원공학과", ["465.202 에너지환경기술경영", "465.319 신재생에너지", "465.413 에너지경제학(구, 465.422 에너지 미래기술)", "465.435 에너지환경공학"]],
    ["수학과", ["300.204 미분방정식 및 연습 / 881.003 미분방정식 (둘 중 하나만 인정)", "881.319 수치선형대수", "881.320 수치해석개론", "3341.201 해석개론1 / 881.008 해석개론 (둘 중 하나만 인정)", "3341.202 해석개론2"]],
    _deptStats,
    _deptBiz,
    _deptEcon
  ],
  // 기계항공공학부 갱신, 수학과 → 자연과학대학, 연합전공 기술경영 추가 (기술창업론 1과목)
  "2023-2025": [
    _deptCS,
    _deptMechEng,
    _deptCE,
    _deptChemBio,
    _deptEnergy,
    _deptNatSci,
    _deptStats,
    _deptBiz,
    _deptEcon,
    ["연합전공 기술경영", ["M1540.000100 기술창업론"]]
  ],
  // 2023-2025와 동일하나 연합전공 기술경영 과목이 6개로 확대
  "2026": [
    _deptCS,
    _deptMechEng,
    _deptCE,
    _deptChemBio,
    _deptEnergy,
    _deptNatSci,
    _deptStats,
    _deptBiz,
    _deptEcon,
    ["연합전공 기술경영", ["M1540.000100 기술창업론", "M1540.000200 기술경영개론", "M1540.000300 기술경영 프로젝트", "M1540.000500 지식재산경영", "M1540.000400 전략로드맵핑", "4251.002A 지식경영전략"]]
  ]
};

// ─── 타과 전선 인정 학점표 ────────────────────────────────────────────────────
const recognizedElectiveCredits = {
  "212.201": "3",
  "212.202": "3",
  "251.209": "3",
  "251.301": "3",
  "251.303": "3",
  "251.305": "3",
  "251.306": "3",
  "251.321": "3",
  "251.322": "3",
  "300.204": "4",
  "326.313": "3",
  "326.315": "3",
  "326.416": "3",
  "3341.201": "3",
  "3341.202": "3",
  "414.436A": "3",
  "414.463": "3",
  "4190.101": "3",
  "4190.301": "3",
  "4190.306": "3",
  "4190.407": "3",
  "4190.408": "3",
  "4190.426A": "3",
  "4251.002A": "3",
  "457.203": "3",
  "457.208": "3",
  "457.210A": "3",
  "457.301": "3",
  "457.302": "3",
  "457.307": "3",
  "458.308": "3",
  "458.401": "3",
  "458.405": "3",
  "465.202": "3",
  "465.319": "3",
  "465.413": "3",
  "465.422": "3",
  "465.435": "3",
  "881.003": "3",
  "881.008": "3",
  "881.319": "3",
  "881.320": "3",
  "M1522.000900": "3",
  "M1522.001400": "3",
  "M1540.000100": "3",
  "M1540.000200": "3",
  "M1540.000300": "3",
  "M1540.000400": "3",
  "M1540.000500": "3",
  "M2794.001700": "3",
  "M2794.002100": "3",
  "M2794.002400": "3",
  "M2794.002700": "3",
  "M2794.002800": "3",
  "M2794.003300": "3",
  "M2794.003500": "3",
  "M2794.003600": "3",
  "M2794.004400": "3",
  "M2794.005100": "3",
  "M2794.013600": "3"
};

// ─── 학번 그룹별 교양 이수 구조 ──────────────────────────────────────────────
const liberalRowsByGroup = {
  "2020": [
    ["사고의 표현", "7학점", ["대학 글쓰기 1", "대학글쓰기2: 인문학글쓰기/사회과학글쓰기/과학기술글쓰기 중 택 1", "말하기와 토론"]],
    ["외국어", "4~6학점", ["외국어 2개 교과목", "입학 시 TEPS 900점(New TEPS 525점) 이하인 학생은 영어 1과목 필수"]],
    ["수량적 분석과 추론", "16학점", ["수학 1과 수학연습 1 또는 고급수학 1과 고급수학연습 1", "수학 2와 수학연습 2 또는 고급수학 2와 고급수학연습 2", "통계학과 통계학실험", "공학수학 1", "공학수학 2"]],
    ["과학적 사고와 실험", "8학점", ["물리학 영역", "화학 영역", "생물학 영역 중에서 학기별로 4학점 이수"]],
    ["컴퓨터와 정보 활용", "3학점", "컴퓨터의 개념 및 실습"],
    ["학문의 세계", "12학점", ["언어와 문학", "문화와 예술", "역사와 철학", "정치와 경제", "인간과 사회", "자연과 기술", "생명과 환경 중 3개 영역 이상"]]
  ],
  "2021-2023": [
    ["사고의 표현", "7학점", ["대학 글쓰기 1", "대학글쓰기2: 인문학글쓰기/사회과학글쓰기/과학기술글쓰기 중 택 1", "말하기와 토론"]],
    ["외국어", "6학점", ["외국어 2개 교과목", "입학 시 TEPS 900점(New TEPS 525점) 이하인 학생은 영어 1과목 필수"]],
    ["수량적 분석과 추론", "16학점", ["수학 1과 수학연습 1 또는 고급수학 1과 고급수학연습 1", "수학 2와 수학연습 2 또는 고급수학 2와 고급수학연습 2", "통계학과 통계학실험", "공학수학 1", "공학수학 2"]],
    ["과학적 사고와 실험", "8학점", ["물리학 영역", "화학 영역", "생물학 영역 중에서 학기별로 4학점 이수"]],
    ["컴퓨터와 정보 활용", "3학점", "컴퓨터의 개념 및 실습"],
    ["학문의 세계", "12학점", ["언어와 문학", "문화와 예술", "역사와 철학", "정치와 경제", "인간과 사회", "자연과 기술", "생명과 환경 중 3개 영역 이상"]]
  ],
  "2024": [
    ["사고의 표현", "7학점", ["대학 글쓰기 1", "대학글쓰기2: 인문학글쓰기/사회과학글쓰기/과학기술글쓰기 중 택 1", "말하기와 토론"]],
    ["외국어", "6학점", ["외국어 2개 교과목", "입학 시 TEPS 900점(New TEPS 525점) 이하인 학생은 영어 1과목 필수"]],
    ["수량적 분석과 추론", "16학점", ["수학 1과 수학연습 1 또는 고급수학 1과 고급수학연습 1", "수학 2와 수학연습 2 또는 고급수학 2와 고급수학연습 2", "통계학과 통계학실험", "공학수학 1", "공학수학 2"]],
    ["과학적 사고와 실험", "8학점", ["물리학 영역", "화학 영역", "생물학 영역 중에서 학기별로 4학점 이수"]],
    ["컴퓨터와 정보 활용", "3학점", "컴퓨터의 개념 및 실습"],
    ["학문의 세계", "12학점", ["언어와 문학", "문화와 예술", "역사와 철학", "정치와 경제", "인간과 사회", "자연과 기술", "생명과 환경 중 4개 영역 이상"]]
  ],
  "2025-2026": [
    ["사고의 표현", "7학점", ["대학 글쓰기 1", "대학글쓰기2: 인문학글쓰기/사회과학글쓰기/과학기술글쓰기 중 택 1", "말하기와 토론"]],
    ["외국어", "6학점", ["외국어 2개 교과목", "입학 시 TEPS 900점(New TEPS 525점) 이하인 학생은 영어 1과목 필수"]],
    ["수학·과학·컴퓨팅", "27학점", ["수학 1과 수학연습 1 또는 고급수학 1과 고급수학연습 1", "수학 2와 수학연습 2 또는 고급수학 2와 고급수학연습 2", "통계학과 통계학실험", "공학수학 1", "공학수학 2", "위 수학·통계·공학수학 과목 합계 16학점", "물리학·화학·생물학 영역 중 선택적 필수 과목 8학점", "컴퓨터의 개념 및 실습 3학점"]],
    ["지성의 열쇠", "9학점", ["문화 해석과 상상", "역사적 탐구와 철학적 사유", "인간의 이해와 사회 분석", "과학적 사고와 응용 중 3개 영역 이상"]],
    ["베리타스", "3학점", "베리타스 강좌 1/2 또는 베리타스 실천"]
  ]
};

// ─── 전공 이수학점 구조 ───────────────────────────────────────────────────────
const majorCreditRows = [
  ["주전공", "59학점", ["전공필수 28학점과 학과 전공선택 21학점을 반드시 충족", "나머지 10학점은 학과 전공선택 또는 타과 전선 인정 과목으로 충족 가능"]],
  ["전공필수", "28학점"],
  ["학과 전공선택", "21학점 이상"],
  ["대학원 세미나", "1학점"]
];

// ─── 페이지 초기화 ────────────────────────────────────────────────────────────

const courseGrid = document.querySelector("#courseGrid");
const courseSearch = document.querySelector("#courseSearch");
const filterButtons = document.querySelectorAll(".filter");
let activeFilter = "all";

function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

function renderCourses() {
  if (!courseGrid || !courseSearch) return;

  const query = courseSearch.value.trim().toLowerCase();
  const filtered = upcomingCourses.filter((course) => {
    const offeringText = course.offerings.map(([term, note]) => `${term} ${note}`).join(" ");
    const haystack = `${course.category} ${course.name} ${course.type} ${offeringText}`.toLowerCase();
    const matchesQuery = haystack.includes(query);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "required" && course.type === "전필") ||
      (activeFilter === "elective" && course.type === "전선") ||
      (activeFilter === "graduate" && course.category === "대학원") ||
      course.offerings.some(([term]) => term === activeFilter);
    return matchesQuery && matchesFilter;
  });

  courseGrid.innerHTML = filtered.map((course) => `
    <article class="course-card">
      <header>
        <div>
          <span class="course-code">${course.category}</span>
          <h3>${course.name}</h3>
        </div>
        ${course.type ? `<span class="badge ${course.type === "전필" ? "required" : ""}">${course.type}</span>` : '<span class="badge">교과목</span>'}
      </header>
      <div class="offering-list">
        ${course.offerings.map(([term, note]) => `<span>${term}${note !== "O" ? ` · ${note}` : ""}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function initFaqs() {
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
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function initRulesPage() {
  const yearInput = document.querySelector("#studentYear");
  const ruleOutput = document.querySelector("#ruleOutput");
  const yearChips = document.querySelectorAll(".year-chip");
  const selectedPdfLink = document.querySelector("#selectedPdfLink");
  if (!yearInput || !ruleOutput) return;

  function listItems(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function creditRows(rows) {
    return rows.map(([area, credits, note = ""]) => `
      <div class="credit-row">
        <strong>${area}</strong>
        <strong>${credits}</strong>
        ${note ? `<span>${Array.isArray(note) ? note.join("<br>") : note}</span>` : ""}
      </div>
    `).join("");
  }

  function electiveGroupForYear(year) {
    if (year <= 2022) return "2020-2022";
    if (year <= 2025) return "2023-2025";
    return "2026";
  }

  function courseCodes(text) {
    return text.match(/\b(?:M\d{4}\.\d{6}|\d{3,4}\.\d{3}[A-Z]?)\b/g) || [];
  }

  function creditBadges(subject) {
    const codes = courseCodes(subject);
    const credits = codes
      .filter((code, index) => codes.indexOf(code) === index && recognizedElectiveCredits[code])
      .map((code) => `${recognizedElectiveCredits[code]}학점`);

    return credits.length ? `<span class="credit-badges"><strong>${credits.join("/")}</strong></span>` : "";
  }

  function electiveDepartments(year) {
    return recognizedElectives[electiveGroupForYear(year)].map(([department, subjects]) => `
      <article class="elective-dept">
        <h3>${department}</h3>
        <ul class="elective-subjects">
          ${subjects.map((subject) => `<li><span>${subject}</span>${creditBadges(subject)}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  }

  function foreignLanguageLectureTable() {
    return `
      <div class="foreign-language-table" role="table" aria-label="외국어 진행강좌 수강 기준">
        <div class="foreign-language-row header" role="row">
          <strong role="columnheader">학번</strong>
          <strong role="columnheader">과목 기준</strong>
          <strong role="columnheader">공통 기준</strong>
        </div>
        ${foreignLanguageLectureRows.map(([yearRange, subjectRule, commonRule]) => `
          <div class="foreign-language-row" role="row">
            <span role="cell">${yearRange}</span>
            <span role="cell">${subjectRule}</span>
            <span role="cell">${commonRule}</span>
          </div>
        `).join("")}
      </div>
      <p class="section-note">필요에 따라 학과(부)별 별도 기준이 있을 수 있으며, 외국대학에서 이수한 교과목 중 「서울대학교 공과대학 학생의 외국대학 수학 및 학점인정에 관한 규정」을 충족하는 교과목은 외국어진행강좌로 인정될 수 있습니다.</p>
    `;
  }

  function pdfLink(activeYear) {
    return `
      <a class="active" href="${requirementPdfs[activeYear]}" target="_blank" rel="noreferrer">${String(activeYear).slice(2)}학번_이수규정</a>
    `;
  }

  function renderRules(year) {
    const data = ruleData[year];
    if (!data) {
      if (selectedPdfLink) selectedPdfLink.innerHTML = "";
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
    if (selectedPdfLink) {
      selectedPdfLink.innerHTML = `
        <span>${data.label} 이수 규정 PDF 보기:</span>
        <div class="pdf-link-grid">${pdfLink(year)}</div>
      `;
    }

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
        <div class="credit-table compact">${creditRows(majorCreditRows)}</div>
      </section>

      <section class="rule-section">
        <h2>추가 이수 요건</h2>
        <ul class="required-list">${listItems(additionalRequirements)}</ul>
        <h3 class="subsection-title">외국어진행강좌 기준</h3>
        ${foreignLanguageLectureTable()}
      </section>

      <section class="rule-section">
        <h2>전공필수 과목</h2>
        <div class="placeholder-box">${commonMajorRequired.join(" / ")}</div>
      </section>

      <section class="rule-section">
        <h2>학과 전공선택 과목</h2>
        <div class="major-elective-list">${departmentMajorElectives.map((course) => `<span>${course}</span>`).join("")}</div>
      </section>

      <section class="rule-section">
        <h2>타과 전선 인정 과목</h2>
        <div class="elective-grid">${electiveDepartments(year)}</div>
      </section>

      <section class="rule-section multi-major-section">
        <h2>복수전공·부전공·자유전공</h2>
        <p class="section-note">단전공생 이수학점과 별도로 확인해야 하는 다전공 기준입니다. 복수전공, 부전공, 자유전공학부 학생은 이 섹션을 꼭 확인하세요.</p>
        <ul class="required-list">${listItems(multiMajorRules)}</ul>
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

Array.from(filterButtons).forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    Array.from(filterButtons).forEach((target) => target.classList.toggle("active", target === button));
    renderCourses();
  });
});

if (courseSearch) {
  courseSearch.addEventListener("input", debounce(renderCourses, 150));
}

initFaqs();
renderCourses();
initRulesPage();
