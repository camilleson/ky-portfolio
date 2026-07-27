import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Vue 3',
  'SCSS', 'Zustand', 'React Query',
  'Vite', 'Webpack 5', 'Module Federation'
];

const Skills = () => {
  return (
    <section id="skills" className="section container" style={{ minHeight: '50vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="title-md" style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300 }}>
          TECH STACK 🚀
        </h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                cursor: 'pointer'
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
