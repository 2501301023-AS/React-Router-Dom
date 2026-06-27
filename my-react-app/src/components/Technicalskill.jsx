import React from 'react';

const TechnicalSkills = () => {
  // Your specific technical skills with details
  const skillsData = [
    { name: "HTML5", level: "Advanced", icon: "🌐", color: "#e34c26" },
    { name: "CSS3", level: "Advanced", icon: "🎨", color: "#264de4" },
    { name: "JavaScript", level: "Intermediate", icon: "🚀", color: "#f0db4f" },
    { name: "C Programming", level: "Intermediate", icon: "👾", color: "#a8b9cc" },
    { name: "C++", level: "Intermediate", icon: "⚙️", color: "#00599c" }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Section Title */}
        <div style={styles.titleWrapper}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.titleUnderline}></div>
        </div>

        {/* Beautiful Grid Layout for Skills */}
        <div style={styles.grid}>
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px ${skill.color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
            >
              {/* Left Side: Skill Icon Box */}
              <div style={{ ...styles.iconBox, background: `${skill.color}15`, border: `1px solid ${skill.color}33` }}>
                <span style={{ fontSize: '1.8rem' }}>{skill.icon}</span>
              </div>

              {/* Right Side: Skill Info */}
              <div style={styles.infoSide}>
                <h3 style={styles.skillName}>{skill.name}</h3>
                <span style={{ ...styles.levelBadge, color: skill.color, background: `${skill.color}10` }}>
                  {skill.level}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Pure Inline CSS Objects
const styles = {
  section: {
    background: 'radial-gradient(circle at 50% 50%, #1a1f38 0%, #0d1117 100%)',
    color: '#f0f6fc',
    padding: '80px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2.3rem',
    fontWeight: '800',
    letterSpacing: '1px',
    margin: '0 0 10px 0',
    background: 'linear-gradient(45deg, #58a6ff, #bc8cff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  titleUnderline: {
    width: '55px',
    height: '4px',
    background: 'linear-gradient(90deg, #58a6ff, #bc8cff)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '20px',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    cursor: 'default',
  },
  iconBox: {
    width: '55px',
    height: '55px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#ffffff',
    margin: 0,
  },
  levelBadge: {
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '3px 8px',
    borderRadius: '6px',
    width: 'fit-content',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }
};

export default TechnicalSkills;