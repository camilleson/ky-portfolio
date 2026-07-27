

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 0',
      borderTop: '1px solid var(--border-color)',
      marginTop: '4rem',
      backgroundColor: 'transparent'
    }}>
      <div className="container footer-content" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {/* Left Side: Email & Github */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="mailto:asa.son59@gmail.com" className="text-small" style={{ color: 'var(--text-primary)' }}>asa.son59@gmail.com</a>
          <a href="https://velog.io/@ka0son/posts" target="_blank" rel="noreferrer" className="text-small" style={{ color: 'var(--text-primary)' }}>https://velog.io/@ka0son/posts</a>
        </div>
        
        {/* Right Side: Links & Copyright */}
        <div className="footer-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#about" className="text-small" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-primary)' }}>🏠 Home</a>
            <a href="#projects" className="text-small" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-primary)' }}>📁 Project</a>
            <a href="#experience" className="text-small" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-primary)' }}>🎁 About</a>
          </div>
          <p className="text-small text-muted footer-copyright" style={{ textAlign: 'right' }}>
            ©2026 Kayoung. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
