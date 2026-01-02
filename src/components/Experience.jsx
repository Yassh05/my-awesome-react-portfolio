import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science (AI/ML)',
    organization: 'Your University Name',
    period: '2021 - 2025',
    description: 'Specializing in Artificial Intelligence and Machine Learning with strong foundation in Data Structures and Algorithms.',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Higher Secondary Education',
    organization: 'Your School Name',
    period: '2019 - 2021',
    description: 'Completed 12th grade with focus on Science and Mathematics.',
    icon: GraduationCap,
  },
  {
    type: 'experience',
    title: 'Web Development Intern',
    organization: 'Company Name',
    period: 'Jun 2024 - Present',
    description: 'Building responsive web applications using React, Node.js, and modern web technologies.',
    icon: Briefcase,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="bg-grid" />

      <div className="container relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and professional experience
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="timeline-marker">
                  <div className={`timeline-icon ${item.type === 'education' ? 'timeline-icon-education' : 'timeline-icon-experience'}`}>
                    <IconComponent size={20} />
                  </div>
                  {index < timelineData.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <div className="timeline-card card">
                    <div className="timeline-card-header">
                      <span className={`timeline-badge ${item.type === 'education' ? 'timeline-badge-education' : 'timeline-badge-experience'}`}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                      <div className="timeline-period">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-organization">{item.organization}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
