import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 'var(--page-margin)',
        left: 'var(--page-margin)',
        right: 'var(--page-margin)',
        zIndex: 50,
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.3s ease',
        borderRadius: scrolled ? '16px' : '24px 24px 0 0',
      }}
      className={scrolled ? 'glass' : ''}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
            <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
            <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
          </button>
          
          {/* Asterisk / Flower Logo Alternative */}
          <div style={{ fontSize: '2.5rem', color: 'var(--accent-light)', lineHeight: 1, marginTop: '8px' }}>
            ❋
          </div>
        </div>

        <a 
          href="https://velog.io/@ka0son/posts" 
          target="_blank" 
          rel="noreferrer"
          style={{
            backgroundColor: 'var(--accent-light)',
            color: '#111',
            padding: '0.5rem 1.5rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(238, 143, 178, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.backgroundColor = 'var(--accent)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = 'var(--accent-light)';
          }}
        >
          See on Velog
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
