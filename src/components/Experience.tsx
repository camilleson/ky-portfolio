import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: '(주)MDS모빌리티',
    role: '대리 | 개발팀 | 프론트엔드',
    period: '2026.11. ~ 재직 중',
    desc: 'BO 시스템과 사용자 서비스를 고도화하며, 파편화된 구조를 확장 가능하고 유지보수에 유리한 공통 아키텍처로 재설계하여 운영 효율성과 사용자 경험을 동시에 개선',
    link: 'https://onsite.hmobility.co.kr/ars-order/form?tel=null',
    tech: ['TypeScript', 'VITE', 'React', 'React Query'],
    details: [
      'BO 예약 조회 시스템 시즌2 대응 구조 재설계',
      '운영자 시스템을 공통 플랫폼 구조로 전환 (검색·테이블·상세 UI 공통 컴포넌트화)',
      '현장 결제 웹 UI/UX 개선 및 앱과의 UI 일관성 확보',
      '지도 기반 UI로 혼잡도·잔여 좌석 정보 시각화',
      'fetcher를 React-Query 기반으로 개선',
      'CRA -> VITE로 빌드 환경 변경 (50% 빌드 속도 개선)',
      'AI 카메라 관제 관리자 사이트 개발',
      ' - AI카메라로 실시간으로 차량정보를 인식해서 부정주차 차량 여부 판별 및 부정주차 신고 기능 개발',
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
    company: '무무즈 (MOOMOOZ)',
    role: '프리랜서 | 프론트엔드',
    period: '2025.02. ~ 2025.04.',
    desc: '유아동을 타게팅한 패션 전문 플랫폼 서비스',
    link: 'https://www.moomooz.co.kr/live',
    tech: ['Next.js', 'React', 'TypeScript', 'Zustand', 'SWR', 'React Query'],
    details: [
      'Shoplive SDK 기반 라이브 커머스 프론트엔드 구축 및 트러블슈팅',
      ' - [해결] 동일 세션 다중 접속 시 세션 끊김 문제: 컴포넌트 렌더링 횟수를 제어하여 최소 호출로 최적화',
      'Apple / Naver / Kakao OAuth 간편 로그인 및 회원 정보 관리 고도화',
      ' - 로그인 유형(일반/SNS)에 따라 수정 가능한 정보 항목을 동적으로 분기 처리하여 보안성 확보',
      '어드민 메인 페이지 및 스케줄 관리 시스템 구축',
      ' - react-dnd를 활용한 드래그 앤 드롭 방식의 메인 컴포넌트 순서 변경 기능 구현',
      ' - react-big-calendar 및 gantt-task-react를 활용해 공급사 수수료 타임라인 시각화',
      '상품별 전환 분석 도구 SERA(세라) 프론트엔드 개발',
      ' - Zustand를 활용한 글로벌 상태(seraStore) 관리 및 조건에 따른 지표(RPC, 주문율 등) 시각화',
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
    company: '오케스트로주식회사',
    role: '프론트엔드 엔지니어 | 퍼블릭 클라우드',
    period: '2022.10. ~ 2025.01. (2년 4개월)',
    desc: '마이크로 서비스 기반 멀티클라우드 관리 플랫폼 프론트엔드 초기 구축',
    tech: ['Vue 3', 'TypeScript', 'Webpack 5', 'Module Federation'],
    details: [
      'Vue 3 · TypeScript 기반 플랫폼 공통 구조 및 핵심 UI 개발',
      'Webpack 5 Module Federation 기반 마이크로 프론트엔드(MFE) 아키텍처 도입',
      '서비스별 독립 배포 구조 설계로 장애 전파 방지',
      '레이지 로딩 및 컴포넌트 분리를 통해 초기 로딩 속도 개선 (4초 -> 2초)',
      'AWS, NCP 등 다수 퍼블릭 클라우드 서비스를 통합 관리하는 Oboe 플랫폼 고도화',
      '[Cisco ACI] 배포 위치 선택, 트래픽 플로우 설정 UI 및 네트워크 동기화 흐름 시각화',
    ]
  }
];

const MediaCarousel = ({ videos, images, onMediaClick }: { videos?: string[], images?: string[], onMediaClick: (media: {type: 'image'|'video', src: string}) => void }) => {
  const allMedia = [
    ...(videos || []).map(v => ({ type: 'video' as const, src: v })),
    ...(images || []).map(i => ({ type: 'image' as const, src: i }))
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (allMedia.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? allMedia.length - 1 : prev - 1));
  };
  
  const handleNext = (e: React.MouseEvent) => {
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
                  onClick={() => onMediaClick(media)}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }} 
                />
              ) : (
                <img 
                  src={media.src} 
                  alt="" 
                  onClick={() => onMediaClick(media)}
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
              top: 'calc(50% - 12px)',
              left: '8px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              color: '#333'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: 'calc(50% - 12px)',
              right: '8px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              color: '#333'
            }}
          >
            <ChevronRight size={20} />
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

const Experience = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string } | null>(null);

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
                  <MediaCarousel videos={exp.videos} images={exp.images} onMediaClick={setSelectedMedia} />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <button 
              onClick={() => setSelectedMedia(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                position: 'relative'
              }}
            >
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt="Enlarged view" 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }} 
                />
              ) : (
                <video 
                  src={selectedMedia.src} 
                  controls
                  autoPlay
                  playsInline
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    borderRadius: '12px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
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
