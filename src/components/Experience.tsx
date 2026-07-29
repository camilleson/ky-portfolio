import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    /* 
      💡 이력서 작성 가이드 (참고용)
      - 어떤 화면·기능을 맡았고, 그 과정에서 어떤 고민과 판단을 했는지 적어주세요.
      - 무엇을 만들었는지 나열만 하기보다, 사용성·구조·성능 면에서 무엇을 개선했는지 보여주시면 좋습니다.
      - 개인·팀·실무 프로젝트 모두 환영합니다. 단, 본인의 역할과 기여가 드러나게 써주세요.
    */
    company: '(주)MDS모빌리티',
    role: '대리 | 개발팀 | 프론트엔드',
    period: '2026.11. ~ 재직 중',
    desc: 'BO 시스템과 사용자 서비스를 고도화하며, 파편화된 구조를 확장 가능하고 유지보수에 유리한 공통 아키텍처로 재설계하여 운영 효율성과 사용자 경험을 동시에 개선',
    link: 'https://onsite.hmobility.co.kr/ars-order/form?tel=null',
    tech: ['TypeScript', 'VITE', 'React', 'React Query'],
    details: [
      'BO 예약 조회 시스템 시즌2 대응 구조 재설계',
      '운영자 시스템을 공통 플랫폼 구조로 전환 (검색·테이블·상세 UI 공통 컴포넌트화)',
      {
        type: 'thought',
        title: '운영자 시스템 공통 플랫폼화 및 BO 예약 조회 시즌2 대응',
        problem: '각 운영자 페이지마다 검색조건, 테이블, 상세 보기 UI 및 데이터 호출 방식이 파편화되어 있어 신규 기능 추가 시 중복 개발과 유지보수 비용이 크게 발생하고 있었습니다.',
        solution: '이를 해결하기 위해 개별 페이지 개발 방식에서 공통 플랫폼 구조로의 전환을 판단했습니다.'
      },
      '현장 결제 웹 UI/UX 시즌2 신규 개편',
      '지도 기반 UI로 혼잡도·잔여 좌석 정보 시각화',
      {
        type: 'thought',
        title: '현장 결제 웹 UI/UX 시즌2 신규 개편',
        problem: '기존 텍스트 기반 정보 전달 방식으로는 사용자가 현장의 혼잡도나 잔여 좌석 상태를 직관적으로 파악하기 어려웠습니다.',
        solution: '결제 유저의 탈락률을 줄이고 빠른 의사결정을 돕기 위해 지도 기반 시각화 UI 도입을 결정했습니다.'
      },
      'fetcher를 React-Query 기반으로 개선',
      'CRA -> VITE로 빌드 환경 변경 (50% 빌드 속도 개선)',
      'AI 카메라 관제 관리자 사이트 개발',
      ' - AI카메라로 실시간으로 차량정보를 인식해서 부정주차 차량 여부 판별 및 부정주차 신고 기능 개발',
      {
        type: 'thought',
        title: 'AI 카메라 관제 관리자 사이트 개발 및 프론트엔드 성능·환경 개선',
        problem: 'AI 카메라에서 실시간으로 유입되는 차량 데이터를 안정적이고 효율적으로 처리·캐싱할 필요성이 있었습니다. 또한 기존 CRA 기반 빌드 환경이 프로젝트 규모 확장에 따라 속도가 저하되어 개발 생산성에 병목이 되었습니다.',
        solution: '기존 fetcher 구조를 React-Query 기반으로 전환하여 실시간 서버 데이터의 상태 관리 최적화 및 Caching/Stale 관리를 통한 불필요한 네트워크 요청을 최소화했습니다. 빌드 도구를 CRA에서 Vite로 전환하여 개발 서버 기동 및 빌드 속도를 50% 이상 개선하여 팀 전체의 개발 생산성을 극대화했습니다.'
      }
    ],
    videos: [
      '/images/parkingfriends/MicrosoftTeams-video.mp4'
    ],
    images: [
      '/images/parkingfriends/BO1.png',
      '/images/parkingfriends/BO2.png',
      '/images/parkingfriends/BO3.png',
      '/images/parkingfriends/BO4.png',
      '/images/parkingfriends/BO5.png',
      '/images/parkingfriends/BO6.png',
      '/images/parkingfriends/BO7.png',
      '/images/parkingfriends/BO8.png'
    ]
  },
  {
    /* 
      💡 이력서 작성 가이드 (참고용)
      - 어떤 화면·기능을 맡았고, 그 과정에서 어떤 고민과 판단을 했는지 적어주세요.
      - 무엇을 만들었는지 나열만 하기보다, 사용성·구조·성능 면에서 무엇을 개선했는지 보여주시면 좋습니다.
      - 개인·팀·실무 프로젝트 모두 환영합니다. 단, 본인의 역할과 기여가 드러나게 써주세요.
    */
    company: '무무즈 (MOOMOOZ)',
    role: '프리랜서 | 프론트엔드',
    period: '2025.02. ~ 2025.04.',
    desc: '유아동을 타게팅한 패션 전문 플랫폼 서비스',
    link: 'https://www.moomooz.co.kr/live',
    tech: ['Next.js', 'React', 'TypeScript', 'Zustand', 'SWR', 'React Query'],
    details: [
      'Shoplive SDK 연동을 통한 라이브 커머스 기능 구축 및 실시간 방송/커머스 인터랙션 UI 개발',
      {
        type: 'thought',
        title: '트러블슈팅: 동일 세션 다중 접속으로 인한 세션 끊김 문제 해결',
        problem: '동일 세션 다중 접속 시 세션이 끊기는 문제가 지속적으로 발생했습니다.',
        solution: '컴포넌트 불필요한 리렌더링을 제어하고 SDK 및 API 최소 호출 구조로 로직을 최적화하여, 세션 유지 안정성을 향상시키고 네트워크 트래픽 감소를 달성했습니다.'
      },
      'Multi-OAuth 간편 로그인 및 회원 정보 관리 고도화',
      {
        type: 'thought',
        title: 'Apple / Naver / Kakao OAuth 2.0 간편 로그인 및 통합 회원 관리 체계 구축',
        problem: '계정 도용 및 불필요한 개인정보 변경 위험을 사전에 차단하여 서비스 보안성을 제어할 필요성이 컸습니다.',
        solution: '로그인 유형(일반/SNS)별 프로필 수정을 동적으로 분기 처리하고, 계정 유형에 따른 정보 변경 권한 및 입력 폼 유효성 검증을 분기하여 보안성 제어를 크게 강화했습니다.'
      },
      '어드민 메인 페이지 및 스케줄 관리 시스템 구축',
      {
        type: 'thought',
        title: '메인 페이지 컴포넌트 순서 조작 및 수수료 타임라인 시각화 기능 개발',
        problem: '메인 화면 노출 컴포넌트 순서 조작이 불편하고, 다양한 기간별 수수료 정책을 한눈에 파악하기 어려워 어드민 운영 편의성이 떨어졌습니다.',
        solution: 'react-dnd를 활용한 드래그 앤 드롭(DnD) 인터페이스를 구현해 메인 화면 컴포넌트 순서 조작 기능을 제공하였고, react-big-calendar 및 gantt-task-react를 활용해 공급사별 수수료 정책을 간트 차트 형식으로 직관적으로 시각화했습니다.'
      },
      '상품별 전환 분석 도구 SERA(세라) 프론트엔드 개발',
      {
        type: 'thought',
        title: 'Zustand 기반 대시보드 전역 상태(seraStore) 관리 구조 설계',
        problem: '분석 대시보드의 특성상 복잡한 조건 필터링 요구사항이 겹쳐 데이터 흐름 관리가 어려웠습니다.',
        solution: '상태 중앙화를 통해 복잡한 필터링 데이터 흐름을 단일화하였으며, 조건별 핵심 성과 지표(RPC, 주문율 등)를 동적으로 시각화하는 대시보드를 구축해 실시간 데이터 분석 및 의사결정 환경을 제공했습니다.'
      }
    ],
    images: [
      '/images/moomooz/라이브.png',
      '/images/moomooz/sera0.png',
      '/images/moomooz/sera1.png',
      '/images/moomooz/sera2.png',
      '/images/moomooz/sera3.png',
      '/images/moomooz/메인페이지.png',
      '/images/moomooz/스케줄어드민1.png',
      '/images/moomooz/스케줄어드민2.png',
      '/images/moomooz/전시1.png',
      '/images/moomooz/전시2.png',
      '/images/moomooz/전시3.png',
    ]
  },
  {
    /* 
      💡 이력서 작성 가이드 (참고용)
      - 어떤 화면·기능을 맡았고, 그 과정에서 어떤 고민과 판단을 했는지 적어주세요.
      - 무엇을 만들었는지 나열만 하기보다, 사용성·구조·성능 면에서 무엇을 개선했는지 보여주시면 좋습니다.
      - 개인·팀·실무 프로젝트 모두 환영합니다. 단, 본인의 역할과 기여가 드러나게 써주세요.
    */
    company: '오케스트로주식회사',
    role: '프론트엔드 엔지니어 | 퍼블릭 클라우드',
    period: '2022.10. ~ 2025.01. (2년 4개월)',
    desc: '마이크로 서비스 기반 멀티클라우드 관리 플랫폼 프론트엔드 초기 구축',
    tech: ['Vue 3', 'TypeScript', 'Webpack 5', 'Module Federation'],
    details: [
      'Vue 3 · TypeScript 기반 플랫폼 공통 구조 및 핵심 UI 개발',
      'Webpack 5 Module Federation 기반 마이크로 프론트엔드(MFE) 아키텍처 구축',
      {
        type: 'thought',
        title: '단일 프론트엔드 환경의 한계 극복 및 모듈 결합도 감소',
        problem: '단일 구조에서는 특정 서비스의 오류가 전체 시스템으로 파급될 위험이 높았으며, 모듈 간 결합도로 인해 빌드 및 로딩 속도가 저하되는 문제가 있었습니다.',
        solution: 'Webpack 5 Module Federation을 도입해 각 서비스 모듈을 독립적으로 빌드 및 배포할 수 있는 유연한 구조를 구현했습니다. 이를 통해 서비스 간 장애 전파를 방지하는 격리 구조를 형성하고, 원격 모듈의 동적 레이지 로딩 및 공통 의존성 분리를 적용해 초기 로딩 속도를 50%(4초 → 2초) 단축시켰습니다.'
      },
      '멀티 클라우드 통합 관리 서비스 \'Oboe\' 플랫폼 고도화',
      {
        type: 'thought',
        title: '퍼블릭 클라우드 인프라 통합 관리 UX 환경 구축',
        problem: 'AWS, NCP 등 다양한 클라우드 제공업체(CSP)별로 자원 및 설정 방식이 상이하여 관리 파편화가 발생하고 있었습니다.',
        solution: '다종 퍼블릭 클라우드 인프라를 통합 관리할 수 있는 UI를 구축하고, 상이한 자원 및 설정을 일관된 사용자 경험(UX)으로 통합하여 인프라 운용 편의성을 증대시켰습니다.'
      },
      'Cisco ACI 연동 네트워크 제어 및 시각화 기능 개발',
      {
        type: 'thought',
        title: '네트워크 동기화 흐름 및 트래픽 설정 시각화',
        problem: '복잡한 네트워크 동기화 흐름과 트래픽 플로우 설정 과정을 직관적으로 파악하기 어려워 인프라 운용 효율성이 떨어졌습니다.',
        solution: '배포 위치 선택 및 트래픽 플로우 설정 인터페이스를 구현하고, 복잡한 네트워크 동기화 흐름을 직관적인 다이어그램으로 시각화하여 인프라 운용 효율성을 크게 향상시켰습니다.'
      }
    ]
  }
];

const MediaCarousel = ({ videos, images, onMediaClick }: { videos?: string[], images?: string[], onMediaClick: (context: { mediaList: { type: 'image' | 'video', src: string }[], currentIndex: number }) => void }) => {
  const allMedia = [
    ...(videos || []).map(v => ({ type: 'video' as const, src: v })),
    ...(images || []).map(i => ({ type: 'image' as const, src: i }))
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (allMedia.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? allMedia.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(prev => (prev === allMedia.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%', margin: '0 auto' }}>
      <div style={{
        overflow: 'hidden',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        position: 'relative',
        backgroundColor: 'var(--bg-secondary, rgba(0,0,0,0.02))',
        height: 'clamp(200px, 40vh, 400px)'
      }}>
        <div style={{
          display: 'flex',
          height: '100%',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.3s ease-in-out'
        }}>
          {allMedia.map((media, idx) => (
            <div key={idx} style={{ minWidth: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  controls
                  muted
                  autoPlay
                  loop
                  playsInline
                  onClick={() => onMediaClick({ mediaList: allMedia, currentIndex: idx })}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
                />
              ) : (
                <img
                  src={media.src}
                  alt=""
                  onClick={() => onMediaClick({ mediaList: allMedia, currentIndex: idx })}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {allMedia.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '8px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              color: '#333'
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              color: '#333'
            }}
          >
            <ChevronRight size={24} />
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
            {allMedia.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === currentIndex ? 'var(--text-primary)' : 'var(--border-color)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  padding: 0
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ThoughtBlock = ({ detail }: { detail: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      backgroundColor: 'var(--bg-tertiary, rgba(100, 116, 139, 0.05))',
      borderLeft: '4px solid var(--accent)',
      borderRadius: '0 8px 8px 0',
      margin: '0.5rem 0 1.5rem -1rem',
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '1.25rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <h4 style={{ color: 'var(--text-primary)', fontSize: '0.8rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, flexWrap: 'wrap', wordBreak: 'keep-all' }}>
          💡 고민과 판단
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>| {detail.title}</span>
        </h4>
        <div style={{ color: 'var(--text-muted)' }}>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {isOpen && (
        <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: 'var(--accent)', marginRight: '0.4rem' }}>AS-IS</span>
            {detail.problem}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 600, color: 'var(--accent)', marginRight: '0.4rem' }}>TO-BE</span>
            {detail.solution}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  const [selectedMediaContext, setSelectedMediaContext] = useState<{ mediaList: { type: 'image' | 'video', src: string }[], currentIndex: number } | null>(null);

  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="title-md" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300 }}>
          EXPERIENCE 💼
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="title-sm" style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.company}
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid var(--accent)', padding: '2px 8px', borderRadius: '12px' }}>
                        🔗 서비스 보기
                      </a>
                    )}
                  </h3>
                  <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {exp.role}
                  </div>
                </div>
                <div className="text-small" style={{ padding: '0.25rem 0.75rem', background: 'rgba(0,0,0,0.05)', borderRadius: '999px' }}>
                  {exp.period}
                </div>
              </div>

              <p className="text-body" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                {exp.desc}
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '1rem', color: 'var(--text-muted)' }}>
                {exp.details.map((detail, idx) => {
                  if (typeof detail === 'object' && detail.type === 'thought') {
                    return <ThoughtBlock key={idx} detail={detail} />;
                  }

                  if (typeof detail !== 'string') return null;

                  const isSubItem = detail.startsWith(' - ');
                  const content = isSubItem ? detail.substring(3) : detail;
                  return (
                    <li
                      key={idx}
                      style={{
                        lineHeight: 1.5,
                        fontSize: '0.95rem',
                        marginLeft: isSubItem ? '1.5rem' : '0',
                        listStyleType: isSubItem ? 'circle' : 'disc'
                      }}
                    >
                      {content}
                    </li>
                  );
                })}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {exp.tech.map((t, idx) => (
                  <span key={idx} className="badge">{t}</span>
                ))}
              </div>

              {/* Image & Video Gallery */}
              {((exp.images && exp.images.length > 0) || (exp.videos && exp.videos.length > 0)) && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h4 className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 600 }}>📸 프로젝트 미리보기</h4>
                  <MediaCarousel videos={exp.videos} images={exp.images} onMediaClick={setSelectedMediaContext} />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMediaContext && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMediaContext(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <button
              onClick={() => setSelectedMediaContext(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001
              }}
            >
              <X size={32} />
            </button>
            
            {selectedMediaContext.mediaList.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMediaContext(prev => prev ? {
                      ...prev,
                      currentIndex: prev.currentIndex === 0 ? prev.mediaList.length - 1 : prev.currentIndex - 1
                    } : null);
                  }}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    zIndex: 1001
                  }}
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMediaContext(prev => prev ? {
                      ...prev,
                      currentIndex: prev.currentIndex === prev.mediaList.length - 1 ? 0 : prev.currentIndex + 1
                    } : null);
                  }}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    zIndex: 1001
                  }}
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            <motion.div
              key={selectedMediaContext.currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                position: 'relative'
              }}
            >
              {selectedMediaContext.mediaList[selectedMediaContext.currentIndex].type === 'image' ? (
                <img
                  src={selectedMediaContext.mediaList[selectedMediaContext.currentIndex].src}
                  alt="Enlarged view"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                  }}
                />
              ) : (
                <video
                  src={selectedMediaContext.mediaList[selectedMediaContext.currentIndex].src}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    borderRadius: '8px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
