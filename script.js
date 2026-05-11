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
  { category: "3학년", name: "제품개발 및 품질설계", type: "전선", offerings: [["2027-2", "O"]] },
  { category: "3학년", name: "기술경영개론", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "3학년", name: "지식경영전략", type: "전선", offerings: [["2026-1", "O(연합전공)"]] },
  { category: "4학년", name: "경제성공학", type: "전필", offerings: [["2026-1", "O"], ["2026-2", "O(연합전공)"], ["2027-2", "O(연합전공)"]] },
  { category: "4학년", name: "시뮬레이션", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "4학년", name: "휴먼인터페이스디자인", type: "전선", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "4학년", name: "데이터마이닝", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "4학년", name: "산업텍스트애널리틱스", type: "전선", offerings: [["2027-2", "O"]] },
  { category: "4학년", name: "기술창업론", type: "전선", offerings: [["2026-1", "O(연합전공)"]] },
  { category: "4학년", name: "최적화알고리즘", type: "전선", offerings: [["2026-2", "O"]] },
  { category: "교양", name: "공학수학1", type: "", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "교양", name: "컴퓨터의개념및실습", type: "", offerings: [["2026-1", "O"], ["2026-2", "O(연합전공)"], ["2027-1", "O"], ["2027-2", "O(연합전공)"]] },
  { category: "공대공통과목", name: "공학연구의 실습2", type: "전선", offerings: [["2026-1", "O"]] },
  { category: "타과수강전선", name: "산업공학개론", type: "", offerings: [["2026-1", "O"]] },
  { category: "대학원", name: "인간성능", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "작업생체역학", type: "핵심", offerings: [["2027-2", "O"]] },
  { category: "대학원", name: "정수최적화", type: "핵심", offerings: [["2026-1", "O"], ["2026-2", "O"], ["2027-2", "O"]] },
  { category: "대학원", name: "제품공학", type: "핵심", offerings: [["2026-1", "O"], ["2027-2", "O"]] },
  { category: "대학원", name: "재고관리", type: "핵심", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "생산계획 및 통제", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "데이터마이닝기법", type: "핵심", offerings: [["2027-2", "O"]] },
  { category: "대학원", name: "데이터기반학습", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "응용 다변량 통계분석", type: "핵심", offerings: [["2027-1", "O"]] },
  { category: "대학원", name: "기술혁신이론 및 연구방법론", type: "핵심", offerings: [["2026-1", "O"], ["2027-1", "O"]] },
  { category: "대학원", name: "공업경제분석", type: "핵심", offerings: [["2026-1", "O"]] },
  { category: "대학원", name: "산업공학세미나", type: "필수", offerings: [["2026-1", "O"]] },
  { category: "대학원", name: "인간-기계 인터페이스 설계 및 평가", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "자동차 인간공학", type: "", offerings: [["2026-1", "O"], ["2027-2", "O"]] },
  { category: "대학원", name: "통계학습 고등논제", type: "", offerings: [["2027-2", "O"]] },
  { category: "대학원", name: "경쟁시스템분석", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "산업공학특론", type: "", offerings: [["2026-2", "O"], ["2027-2", "O"]] },
  { category: "대학원", name: "조합최적화", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "기술예측과 인텔리전스", type: "", offerings: [["2026-2", "O"]] },
  { category: "대학원", name: "선형최적화", type: "", offerings: [["2027-1", "O"]] },
  { category: "대학원", name: "수치최적화", type: "", offerings: [["2027-1", "O"]] },
  { category: "대학원", name: "스케줄링이론및응용", type: "", offerings: [["2026-1", "O"]] }
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

const requirementPdfs = {
  2020: "docs/requirements/20.pdf",
  2021: "docs/requirements/21.pdf",
  2022: "docs/requirements/22.pdf",
  2023: "docs/requirements/23.pdf",
  2024: "docs/requirements/24.pdf",
  2025: "docs/requirements/25.pdf",
  2026: "docs/requirements/26.pdf"
};

const multiMajorRules = [
  "복수전공: 해당 기준년도의 모든 전공필수 교과목을 이수해야 하며, 인간공학실험 및 산업공학의 이해는 면제됩니다.",
  "복수전공: 학과 개설 전공선택 교과목을 추가로 이수하여 최소 39학점을 만족해야 합니다.",
  "부전공: 전공교과목 21학점 이상, 이 중 전공필수 12학점 이상을 이수해야 하며 산업공학의 이해는 제외됩니다.",
  "복수전공/부전공 학생에게는 대학원 세미나 과목 이수 요건이 적용되지 않습니다.",
  "자유전공학부 주전공자는 공과대학 졸업이수기준과 산업공학과 졸업 요건을 동일하게 적용받습니다."
];

const recognizedElectives = {
  "2020-2022": [
    ["컴퓨터공학부", ["4190.101 이산수학", "M1522.000900 자료구조", "4190.301 데이타베이스", "4190.306 오토마타이론", "M1522.001400 데이터마이닝개론", "4190.407 알고리즘", "4190.408 인공지능", "4190.426A 인간컴퓨터상호작용"]],
    ["기계항공공학부", ["M2794.001700 기계제품설계(구, M2794.005100 기계제도)", "M2794.002100 시스템제어이론", "M2794.002400 컴퓨터이용설계및제작", "M2794.002700 로봇공학입문", "M2794.002800 센서개론", "M2794.003300 자동차공학", "M2794.003500 마이크로가공생산", "M2794.003600 최적설계", "M2794.004400 통합기계설계 및 해석"]],
    ["조선해양공학과", ["414.463 조선해양 PLM개론(구, 414.436A 설계자동화개론)"]],
    ["건설환경공학부", ["457.203 도시계획", "457.208 교통공학 및 실험", "457.210A 환경공학", "457.301 교통계획 및 실험", "457.302 도시설계", "457.307 건설계획 및 관리"]],
    ["화학생물공학부", ["458.308 공정제어 및 설계", "458.401 공정 및 제품설계", "458.405 환경공학개론"]],
    ["에너지자원공학과", ["465.202 에너지환경기술경영", "465.319 신재생에너지", "465.413 에너지경제학(구, 465.422 에너지 미래기술)", "465.435 에너지환경공학"]],
    ["수학과", ["300.204 미분방정식 및 연습 / 881.003 미분방정식 (둘 중 하나만 인정)", "881.319 수치선형대수", "881.320 수치해석개론", "3341.201 해석개론1 / 881.008 해석개론 (둘 중 하나만 인정)", "3341.202 해석개론2"]],
    ["통계학과", ["326.313 회귀분석 및 실습", "326.315 실험계획 및 실습", "326.416 통계적품질관리 및 실습"]],
    ["경영학과", ["251.209 조직행위론", "251.301 재무관리", "251.303 인사관리", "251.305 원가회계", "251.306 관리회계", "251.321 마케팅관리", "251.322 국제경영"]],
    ["경제학부", ["212.201 미시경제이론", "212.202 거시경제이론"]]
  ],
  "2023-2025": [
    ["컴퓨터공학부", ["4190.101 이산수학", "M1522.000900 자료구조", "4190.301 데이타베이스", "4190.306 오토마타이론", "M1522.001400 데이터마이닝개론", "4190.407 알고리즘", "4190.408 인공지능", "4190.426A 인간컴퓨터상호작용"]],
    ["기계항공공학부", ["M2794.001700 기계제품설계", "M2794.002100 시스템제어이론", "M2794.002700 로봇공학입문", "M2794.003300 자동차공학", "M2794.013600 마이크로나노 가공생산", "M2794.003600 최적설계", "M2794.004400 통합기계설계 및 해석"]],
    ["건설환경공학부", ["457.203 도시계획", "457.208 교통공학 및 실험", "457.210A 환경공학", "457.301 교통계획 및 실험", "457.302 도시설계", "457.307 건설계획 및 관리"]],
    ["화학생물공학부", ["458.308 공정제어 및 설계", "458.401 공정 및 제품설계", "458.405 환경공학개론"]],
    ["에너지자원공학과", ["465.202 에너지환경기술경영", "465.319 신재생에너지", "465.413 에너지경제학", "465.435 에너지환경공학"]],
    ["자연과학대학 공통과목 및 수리과학부", ["300.204 미분방정식 및 연습 / 881.003 미분방정식 (둘 중 하나만 인정)", "881.319 수치선형대수", "881.320 수치해석개론", "3341.201 해석개론1 / 881.008 해석개론 (둘 중 하나만 인정)", "3341.202 해석개론2"]],
    ["통계학과", ["326.313 회귀분석 및 실습", "326.315 실험계획 및 실습", "326.416 통계적품질관리 및 실습"]],
    ["경영학과", ["251.209 조직행위론", "251.301 재무관리", "251.303 인사관리", "251.305 원가회계", "251.306 관리회계", "251.321 마케팅관리", "251.322 국제경영"]],
    ["경제학부", ["212.201 미시경제이론", "212.202 거시경제이론"]],
    ["연합전공 기술경영", ["M1540.000100 기술창업론"]]
  ],
  "2026": [
    ["컴퓨터공학부", ["4190.101 이산수학", "M1522.000900 자료구조", "4190.301 데이타베이스", "4190.306 오토마타이론", "M1522.001400 데이터마이닝개론", "4190.407 알고리즘", "4190.408 인공지능", "4190.426A 인간컴퓨터상호작용"]],
    ["기계항공공학부", ["M2794.001700 기계제품설계", "M2794.002100 시스템제어이론", "M2794.002700 로봇공학입문", "M2794.003300 자동차공학", "M2794.013600 마이크로나노 가공생산", "M2794.003600 최적설계", "M2794.004400 통합기계설계 및 해석"]],
    ["건설환경공학부", ["457.203 도시계획", "457.208 교통공학 및 실험", "457.210A 환경공학", "457.301 교통계획 및 실험", "457.302 도시설계", "457.307 건설계획 및 관리"]],
    ["화학생물공학부", ["458.308 공정제어 및 설계", "458.401 공정 및 제품설계", "458.405 환경공학개론"]],
    ["에너지자원공학과", ["465.202 에너지환경기술경영", "465.319 신재생에너지", "465.413 에너지경제학", "465.435 에너지환경공학"]],
    ["자연과학대학 공통과목 및 수리과학부", ["300.204 미분방정식 및 연습 / 881.003 미분방정식 (둘 중 하나만 인정)", "881.319 수치선형대수", "881.320 수치해석개론", "3341.201 해석개론1 / 881.008 해석개론 (둘 중 하나만 인정)", "3341.202 해석개론2"]],
    ["통계학과", ["326.313 회귀분석 및 실습", "326.315 실험계획 및 실습", "326.416 통계적품질관리 및 실습"]],
    ["경영학과", ["251.209 조직행위론", "251.301 재무관리", "251.303 인사관리", "251.305 원가회계", "251.306 관리회계", "251.321 마케팅관리", "251.322 국제경영"]],
    ["경제학부", ["212.201 미시경제이론", "212.202 거시경제이론"]],
    ["연합전공 기술경영", ["M1540.000100 기술창업론", "M1540.000200 기술경영개론", "M1540.000300 기술경영 프로젝트", "M1540.000500 지식재산경영", "M1540.000400 전략로드맵핑", "4251.002A 지식경영전략"]]
  ]
};

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

const majorCreditRows = [
  ["주전공", "59학점"],
  ["전공필수", "28학점"],
  ["학과 전공선택", "21학점 이상"],
  ["대학원 세미나", "1학점"]
];

const courseGrid = document.querySelector("#courseGrid");
const courseSearch = document.querySelector("#courseSearch");
const filterButtons = document.querySelectorAll(".filter");
let activeFilter = "all";

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

  function electiveDepartments(year) {
    return recognizedElectives[electiveGroupForYear(year)].map(([department, subjects]) => `
      <article class="elective-dept">
        <h3>${department}</h3>
        <ul class="elective-subjects">
          ${subjects.map((subject) => `<li><span>${subject}</span><strong>3학점</strong></li>`).join("")}
        </ul>
      </article>
    `).join("");
  }

  function pdfLinks(activeYear) {
    return Object.entries(requirementPdfs).map(([year, path]) => `
      <a class="${Number(year) === activeYear ? "active" : ""}" href="${path}" target="_blank" rel="noreferrer">${String(year).slice(2)}학번 PDF</a>
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
        <div class="credit-table compact">${creditRows(majorCreditRows)}</div>
      </section>

      <section class="rule-section">
        <h2>전공필수 과목</h2>
        <div class="placeholder-box">${commonMajorRequired.join(" / ")}</div>
      </section>

      <section class="rule-section">
        <h2>전선 인정 과목</h2>
        <div class="elective-grid">${electiveDepartments(year)}</div>
      </section>

      <section class="rule-section multi-major-section">
        <h2>복수전공·부전공·자유전공</h2>
        <p class="section-note">단전공생 이수학점과 별도로 확인해야 하는 다전공 기준입니다. 복수전공, 부전공, 자유전공학부 학생은 이 섹션을 꼭 확인하세요.</p>
        <ul class="required-list">${listItems(multiMajorRules)}</ul>
      </section>

      <section class="rule-section">
        <h2>PDF로 확인하기</h2>
        <p>선택한 학번의 원문 PDF와 다른 학번 PDF를 함께 확인할 수 있습니다.</p>
        <div class="pdf-link-grid">${pdfLinks(year)}</div>
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

function initRoadmapLines() {
  const board = document.querySelector(".roadmap-board");
  const svg = document.querySelector(".roadmap-lines");

  if (!board || !svg) return;

  const solidConnections = [
    ["수학1 및 연습", "수학2 및 연습"],
    ["수학2 및 연습", "공학수학1"],
    ["공학수학1", "공학수학2"],
    ["컴퓨터의 개념 및 실습", "데이터관리와 분석"],
    ["경영과학1", "경영과학2"],
    ["경영과학2", "최적화모형 및 응용"],
    ["경영과학2", "산업경영 수리기법"],
    ["최적화모형 및 응용", "시뮬레이션"],
    ["산업경영 수리기법", "최적화 알고리즘"],
    ["인간공학", "인간공학 설계"],
    ["인간공학 설계", "휴먼인터페이스 디자인"]
  ];

  const dottedConnections = [
    ["산업컴퓨팅개론", "데이터관리와 분석"],
    ["데이터마이닝", "데이터마이닝 기법"],
    ["빅데이터 산업응용", "데이터기반학습"],
    ["산업 텍스트 애널리틱스", "응용 다변량 통계분석"],
    ["시뮬레이션", "볼록최적화"],
    ["시뮬레이션", "정수최적화"],
    ["시뮬레이션", "추계학"],
    ["산업공학통계", "물류관리"],
    ["생산관리", "재고관리"],
    ["생산관리", "생산계획 및 통제"],
    ["서비스공학", "제품공학"],
    ["금융학개론", "공업경제분석"],
    ["핀테크 개론", "기술혁신이론 및 연구방법론"],
    ["인간공학", "인간공학 실험"],
    ["인간공학", "인간성능"],
    ["인간공학", "작업생체역학"]
  ];

  const findCourse = (name) => {
    return [...board.querySelectorAll("[data-course]")].find((node) => node.dataset.course === name);
  };

  const rectFor = (element) => {
    const boardRect = board.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left - boardRect.left,
      right: rect.right - boardRect.left,
      top: rect.top - boardRect.top,
      bottom: rect.bottom - boardRect.top,
      centerX: rect.left - boardRect.left + rect.width / 2,
      centerY: rect.top - boardRect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    };
  };

  const pathBetween = (from, to) => {
    const a = rectFor(from);
    const b = rectFor(to);
    const sameColumn = Math.abs(a.centerX - b.centerX) < Math.max(a.width, b.width) * 0.65;

    if (sameColumn) {
      if (b.centerY >= a.centerY) {
        return `M ${a.centerX} ${a.bottom} V ${b.top}`;
      }
      return `M ${a.centerX} ${a.top} V ${b.bottom}`;
    }

    if (b.left >= a.right) {
      const start = { x: a.right, y: a.centerY };
      const end = { x: b.left, y: b.centerY };

      if (Math.abs(start.y - end.y) < 8) {
        return `M ${start.x} ${start.y} H ${end.x}`;
      }

      const bendX = start.x + (end.x - start.x) / 2;
      return `M ${start.x} ${start.y} H ${bendX} V ${end.y} H ${end.x}`;
    }

    if (b.centerY >= a.centerY) {
      const bendY = a.bottom + Math.max(10, (b.top - a.bottom) / 2);
      return `M ${a.centerX} ${a.bottom} V ${bendY} H ${b.centerX} V ${b.top}`;
    }

    const bendY = a.top - Math.max(10, (a.top - b.bottom) / 2);
    return `M ${a.centerX} ${a.top} V ${bendY} H ${b.centerX} V ${b.bottom}`;
  };

  const sideLoopPath = (from, to) => {
    const a = rectFor(from);
    const b = rectFor(to);
    const loopX = Math.max(12, Math.min(a.left, b.left) - 220);
    return `M ${a.left} ${a.centerY} H ${loopX} V ${b.centerY} H ${b.left}`;
  };

  const managementSciencePath = (from, to) => {
    const a = rectFor(from);
    const b = rectFor(to);

    if (from.dataset.course === "경영과학2") {
      const trunkX = a.right + 8;
      return `M ${a.right} ${a.centerY} H ${trunkX} V ${b.centerY} H ${b.left}`;
    }

    return `M ${a.right} ${a.centerY} H ${b.left}`;
  };

  const customPath = (fromName, toName, from, to) => {
    if (fromName === "산업공학통계" && toName === "물류관리") {
      return sideLoopPath(from, to);
    }

    const managementSciencePairs = [
      "경영과학2->최적화모형 및 응용",
      "경영과학2->산업경영 수리기법",
      "최적화모형 및 응용->시뮬레이션",
      "산업경영 수리기법->최적화 알고리즘"
    ];

    if (managementSciencePairs.includes(`${fromName}->${toName}`)) {
      return managementSciencePath(from, to);
    }

    return pathBetween(from, to);
  };

  const appendPath = (d, type) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", `line ${type}`);
    path.setAttribute("d", d);
    svg.appendChild(path);
  };

  const draw = (fromName, toName, type) => {
    const from = findCourse(fromName);
    const to = findCourse(toName);

    if (!from || !to) return;

    appendPath(customPath(fromName, toName, from, to), type);
  };

  const drawDataMerge = () => {
    const dataManagement = findCourse("데이터관리와 분석");
    const statistics = findCourse("산업공학통계");
    const targets = [
      findCourse("데이터마이닝"),
      findCourse("빅데이터 산업응용"),
      findCourse("산업 텍스트 애널리틱스")
    ];

    if (!dataManagement || !statistics || targets.some((target) => !target)) return;

    const dataRect = rectFor(dataManagement);
    const statRect = rectFor(statistics);
    const targetRects = targets.map(rectFor);
    const trunkX = Math.min(...targetRects.map((rect) => rect.left)) - 18;
    const ys = [dataRect.centerY, statRect.centerY, ...targetRects.map((rect) => rect.centerY)];
    const trunkTop = Math.min(...ys);
    const trunkBottom = Math.max(...ys);
    const branches = targetRects.map((rect) => `M ${trunkX} ${rect.centerY} H ${rect.left}`).join(" ");

    appendPath(
      `M ${dataRect.right} ${dataRect.centerY} H ${trunkX} ` +
        `M ${statRect.right} ${statRect.centerY} H ${trunkX} ` +
        `M ${trunkX} ${trunkTop} V ${trunkBottom} ${branches}`,
      "solid"
    );
  };

  const render = () => {
    const boardRect = board.getBoundingClientRect();
    const width = boardRect.width;
    const height = boardRect.height;

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.style.width = `${width}px`;
    svg.style.height = `${height}px`;
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    solidConnections.forEach(([from, to]) => draw(from, to, "solid"));
    drawDataMerge();
    dottedConnections.forEach(([from, to]) => draw(from, to, "dotted"));
  };

  requestAnimationFrame(render);
  window.addEventListener("load", render);
  window.addEventListener("resize", render);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(render);
    observer.observe(board);
  }
}

initRoadmapLines();

Array.from(filterButtons).forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    Array.from(filterButtons).forEach((target) => target.classList.toggle("active", target === button));
    renderCourses();
  });
});

if (courseSearch) {
  courseSearch.addEventListener("input", renderCourses);
}

initFaqs();
renderCourses();
initRulesPage();
