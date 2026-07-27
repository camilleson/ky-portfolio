import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import laptopImg from '../assets/main_notebook.webp';
import dumbbellImg from '../assets/main_dumbbells.webp';

const Hero = () => {
  return (
    <section id="about" className="section container" style={{ paddingTop: '8rem', paddingBottom: '4rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Scattered Typography with Emojis */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            marginBottom: '4rem', 
            padding: '2rem 0' 
          }}>
            <h1 className="title-lg" style={{ 
              alignSelf: 'flex-start', textAlign: 'left',
              color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0,
              display: 'flex', alignItems: 'center', gap: '1rem'
            }}>
              INTUITIVE UI 
              <motion.img 
                src={laptopImg} 
                alt="laptop" 
                style={{ height: 'clamp(3rem, 6vw, 4.5rem)', objectFit: 'contain' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </h1>
            <h1 className="title-lg" style={{ 
              alignSelf: 'center', textAlign: 'center',
              color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0
            }}>
              USER ENGAGEMENT
            </h1>
            <h1 className="title-lg" style={{ 
              alignSelf: 'flex-end', textAlign: 'right',
              color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem'
            }}>
              <motion.img 
                src={dumbbellImg} 
                alt="dumbbell" 
                style={{ height: 'clamp(3rem, 6vw, 4.5rem)', objectFit: 'contain' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              PERFORMANCE
            </h1>
            <h1 className="title-lg" style={{ 
              alignSelf: 'flex-start', textAlign: 'left',
              color: 'var(--text-primary)', letterSpacing: '-0.03em', margin: 0
            }}>
              IMPROVEMENT
            </h1>
          </div>

          {/* Dark Terminal Box */}
          <div style={{
            backgroundColor: '#0a0a0a',
            borderRadius: '24px',
            padding: '4rem 2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{
              fontFamily: 'monospace',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              color: '#34d399', /* Mint green terminal text */
              fontWeight: 800,
              letterSpacing: '2px',
              margin: 0,
              textShadow: '0 0 10px rgba(52, 211, 153, 0.5)',
              wordBreak: 'keep-all'
            }}>
              HELLO WORLD!<br />AND I AM KAYOUNG ✌️
            </h2>
            
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '6px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '4px'
            }} />
          </div>

          {/* Intro Text & Contact */}
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p className="text-body" style={{ marginBottom: '2.5rem', fontSize: '1.25rem' }}>
              대규모 플랫폼의 초기 구조 설계와 실서비스 운영 경험을 바탕으로,<br />
              커머스·클라우드 서비스에서 <span style={{ color: 'var(--accent)', fontWeight: 500 }}>전환율, 성능, 운영 효율</span>을<br />
              동시에 개선하는 프론트엔드 개발자 <b>손가영</b>입니다.
            </p>

            <div className="hero-contact" style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '2rem',
              background: 'rgba(255,255,255,0.5)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Phone size={18} className="accent-text" />
                <span className="text-small">+82 010-2387-0509</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Mail size={18} className="accent-text" />
                <a href="mailto:asa.son59@gmail.com" className="text-small">asa.son59@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Globe size={18} className="accent-text" />
                <a href="https://velog.io/@ka0son/posts" target="_blank" rel="noopener noreferrer" className="text-small">velog.io/@ka0son</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <MapPin size={18} className="accent-text" />
                <span className="text-small">서울 송파구</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
