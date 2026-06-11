export interface Project {
  title: string;
  category: string; // 도메인 라벨 (예: 'MES · 제조실행시스템')
  description: string;
  role?: string; // 담당 역할
  highlights?: string[]; // 핵심 기능 / 과제
  impact?: string; // 규모·성과 (실제 수치가 있을 때만)
  tags: string[];
  web?: boolean; // 웹 구현 여부 → Web 배지
  github?: string; // 개인 프로젝트용 (사내 프로젝트는 비움)
  demo?: string;
}

export const projects: Project[] = [
  {
    title: '이리도스 MES 구축',
    category: 'MES · 제조실행시스템',
    description:
      '제조 현장의 작업지시·생산실적·품질·설비를 실시간으로 관리하는 웹 기반 MES. PC 관리자 화면과 현장용 PDA(모바일) 화면을 함께 구축했습니다.',
    role: 'PM / 풀스택 개발',
    highlights: [
      '기초정보(품목·공정·설비·거래처) 마스터 및 수입검사 모듈 구축',
      'PO/SO 현황 실시간 대시보드 (WebSocket 기반)',
      '현장 작업자용 PDA 화면 별도 구축',
    ],
    tags: ['Java', 'Spring Boot', 'Vue 3', 'TypeScript', 'PostgreSQL', 'MyBatis'],
    web: true,
  },
  {
    title: '아성 WMS 구축',
    category: 'WMS · 창고관리시스템',
    description:
      '입고·출고·재고·로케이션을 관리하는 창고관리시스템(WMS). C# 기반 데스크톱 애플리케이션으로 구축했습니다.',
    role: '개발 PM',
    highlights: [
      '입출고 및 재고 실시간 관리',
      '로케이션·바코드 기반 작업 처리',
    ],
    tags: ['C#', 'MSSQL'],
  },
  {
    title: '네패스 APS 구축',
    category: 'APS · 생산계획/스케줄링',
    description:
      '생산 계획과 작업 일정을 수립·관리하는 APS(Advanced Planning & Scheduling) 시스템. C# 기반으로 구축했습니다.',
    role: '개발 PM',
    highlights: [
      '수요·주문 기반 생산계획 수립',
      '작업 일정 스케줄링 및 시뮬레이션',
    ],
    tags: ['C#', 'MSSQL'],
  },
  {
    title: '선진인더스트리 온양지점 MES 구축',
    category: 'MES · 제조실행시스템',
    description:
      '제조 현장의 작업지시·생산실적·품질을 관리하는 MES. (주)에이티지소프트 재직 중 SI 개발로 참여해 구축했습니다.',
    role: '팀장 / SI 개발',
    highlights: [
      '작업지시·생산실적 관리',
      '품질 검사 및 이력 관리',
    ],
    tags: ['ASP', 'C#', 'MSSQL'],
  },
];
