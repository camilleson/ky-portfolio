import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: '무무즈 라이브 커머스 기능 개발',
    period: '2025.02. ~ 2025.04.',
    role: 'Frontend Developer',
    desc: '실시간 방송 환경에서 상품 노출부터 구매까지 이어지는 라이브 커머스 기능 개발',
    tech: ['Next.js', 'React', 'TypeScript'],
    links: [],
    details: [
      'Shoplive SDK 기반 라이브 커머스 프론트엔드 구조 설계 및 구현',
      '실시간 방송 중 상품 노출, 상품 상세 이동, 구매 전환을 고려한 UI 구성',
      '라이브 시청 -> 상품 클릭 -> 구매로 이어지는 사용자 플로우 설계',
      '라이브 환경에서도 안정적인 렌더링을 위한 컴포넌트 분리 및 상태 관리 개선'
    ]
  },
  {
    title: 'Quant Trading Dashboard',
    period: '2023.10. ~ 2023.11.',
    role: 'Personal Side Project',
    desc: '실시간 시장 데이터를 확인하고 트레이딩 지표를 모니터링할 수 있는 퀀트 트레이딩 대시보드 웹 애플리케이션',
    tech: ['React', 'Vite', 'TypeScript', 'TailwindCSS'],
    links: [
      { type: 'link', url: 'https://quant-trading-seven.vercel.app/' }
    ],
    details: [
      '웹소켓(또는 REST API)을 활용한 실시간 시세 데이터 연동 및 차트 렌더링',
      '다크/라이트 모드 지원 및 직관적인 UI/UX 설계',
      'Vercel을 통한 CI/CD 배포 파이프라인 구축'
    ]
  },
  {
    title: '마켓컬리 커뮤니티 플랫폼 Kurmmunity',
    period: '2022.08. ~ 2022.09.',
    role: 'Frontend Developer & UI/UX Designer & Team Leader',
    desc: '마켓컬리 회원들이 각자의 레시피와 생활 팁 등을 공유할 수 있는 커뮤니티 사이트 (마켓컬리 해커톤 본선 진출)',
    tech: ['Next.js', 'Styled-component', 'Git', 'Github'],
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=Bk5nmkSkW0U' }
    ],
    details: [
      '레시피 상세페이지 구현: 단락별로 프로필, 재료, 구매 제품, 요리순서, 댓글 등으로 컴포넌트 분리하여 재사용성 향상',
      '댓글 라벨링 시스템 도입: 일반 댓글과 질문을 분리하여 작성할 수 있도록 구현',
      '대댓글 동적 로직 구현: 아이콘 클릭 시 백엔드에 GET 요청 및 dependency array 활용',
      '회원 상세페이지 제작: 카테고리에 따라 동적 라우팅 및 정보 로드',
    ]
  },
  {
    title: '항공권 예매 사이트 Ourtrip',
    period: '2022.06. ~ 2022.06.',
    role: 'Frontend Developer',
    desc: 'Myrealtrip을 참조하여 항공권 예매 웹 Ourtrip 제작',
    tech: ['React', 'Styled-component', 'Git', 'Github'],
    links: [],
    details: [
      'useLocation을 이용해 조건에 따라 Navigation bar style을 동적으로 변화하도록 구현',
      '마이페이지와 예약상세페이지 제작, 동적라우팅을 활용하여 예약 정보에 따른 로직 구현'
    ]
  },
  {
    title: '티 상품 판매 쇼핑몰 Wesulloc',
    period: '2022.05. ~ 2022.05.',
    role: 'Frontend Developer',
    desc: 'Osulloc을 모티브로한 차 브랜드 웹 Wesulloc 구현',
    tech: ['React', 'JavaScript', 'SCSS', 'Git', 'Github'],
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=hi08z17A2s0' }
    ],
    details: [
      '메인페이지 담당: Banner carousel과 card 형식의 Product carousel 구현',
      '다중 Map 함수를 활용하여 Navigation bar 제작'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="title-md" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300 }}>
          MY PROJECT 🧢
        </h2>

        {/* Tab Style Header matching leeboa.com */}
        <div className="projects-tabs" style={{ 
          display: 'flex', 
          borderTop: '1px solid var(--border-color)', 
          borderBottom: '1px solid var(--border-color)',
          marginBottom: '2rem'
        }}>
          {['PERSONAL', 'TEAM', 'WORK'].map((tab, idx) => (
            <div key={tab} style={{ 
              flex: 1, 
              padding: '1rem', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderRight: idx !== 2 ? '1px solid var(--border-color)' : 'none',
              background: idx === 1 ? 'rgba(0,0,0,0.02)' : 'transparent',
              color: idx === 0 ? 'var(--text-primary)' : 'var(--text-muted)'
            }}>
              <span style={{ fontWeight: idx === 0 ? 500 : 300 }}>{tab}</span>
              <div style={{ 
                width: '16px', height: '16px', 
                borderRadius: idx === 0 ? '4px' : '50%', 
                backgroundColor: idx === 0 ? '#111' : 'transparent',
                border: idx !== 0 ? '1px solid var(--border-color)' : 'none'
              }} />
            </div>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 className="title-sm" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {project.links.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-secondary" style={{ padding: '0.25rem' }}>
                        {link.type === 'youtube' ? <Play size={20} /> : <ExternalLink size={20} />}
                      </a>
                    ))}
                  </div>
                </div>
                
                <p className="text-small" style={{ marginBottom: '1rem', color: 'var(--accent-light)' }}>
                  {project.role} | {project.period}
                </p>
                
                <p className="text-body" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {project.desc}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem', listStyleType: 'circle', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  {project.details.map((detail, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, idx) => (
                  <span key={idx} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
