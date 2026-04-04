export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'AI 채팅 애플리케이션',
    description:
      'OpenAI API를 활용한 실시간 AI 채팅 앱. 스트리밍 응답, 대화 히스토리 관리, 마크다운 렌더링을 지원합니다.',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
    github: 'https://github.com/username/ai-chat',
    demo: 'https://ai-chat-demo.vercel.app',
  },
  {
    title: '실시간 협업 대시보드',
    description:
      'WebSocket 기반의 실시간 데이터 시각화 대시보드. 다중 사용자 동시 편집과 드래그앤드롭 위젯 배치를 지원합니다.',
    tags: ['Next.js', 'WebSocket', 'D3.js', 'PostgreSQL'],
    github: 'https://github.com/username/collab-dashboard',
  },
  {
    title: '개발자 블로그 플랫폼',
    description:
      'MDX 기반의 정적 블로그 플랫폼. 코드 하이라이팅, 다크모드, SEO 최적화, RSS 피드를 지원합니다.',
    tags: ['Astro', 'MDX', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/username/dev-blog',
    demo: 'https://dev-blog-demo.vercel.app',
  },
  {
    title: '포트폴리오 사이트 생성기',
    description:
      'JSON 설정 파일만으로 개인 포트폴리오 사이트를 생성하는 CLI 도구. 다양한 테마와 커스터마이징을 지원합니다.',
    tags: ['TypeScript', 'Node.js', 'CLI', 'Handlebars'],
    github: 'https://github.com/username/folio-gen',
  },
];
