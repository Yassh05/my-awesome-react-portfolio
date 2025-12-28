import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML',
    description: 'Skilled in HTML markup, structure, and semantic elements.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    description: 'Mastering CSS: Styling, Layout, Responsiveness, and Animations.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    description: 'Proficient in JavaScript, modern ES6+ features and DOM manipulation.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    description: 'Building modern, interactive UIs with React and its ecosystem.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Python',
    description: 'Proficient in Python, adept at data analysis and automation. 4 star coder at HackerRank.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'C++',
    description: 'Proficient in C++ programming, adept at object-oriented design. 5 star coder at HackerRank.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'Java',
    description: 'Proficient in Java. Achieved Elite Silver Rank in Programming in Java by NPTEL.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'C',
    description: 'Proficient in C programming language, adept at problem-solving.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="section-subtitle">
            Technologies and programming languages I've mastered throughout my journey
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants} className="card">
              <div className="flex flex-col items-center text-center">
                <div className="card-icon">
                  <img src={skill.icon} alt={skill.name} className="object-contain" style={{ width: '100%', height: '100%' }} />
                </div>
                <h3 className="card-title">{skill.name}</h3>
                <p className="card-description">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
