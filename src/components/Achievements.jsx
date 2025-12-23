import { Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    year: '2025',
    title: 'Best Senator Award — Wisdom Bharati Forum',
    organization: 'National Youth Parliament',
    description: 'Honored as the Best Senator for exceptional articulation, leadership, and impactful participation in the National Youth Parliament organized by WBF.',
    tags: ['Public Speaking', 'Leadership', 'National Event'],
    icon: Trophy,
  },
  {
    year: '2025',
    title: 'NPTEL Programming in Java — Elite Silver',
    organization: 'NPTEL Certification',
    description: 'Recognized for outstanding performance in the Programming in Java course conducted by IITs and NPTEL.',
    tags: ['Java Programming', 'Elite Silver'],
    icon: Medal,
  },
  {
    year: '2025',
    title: 'NCAT 2025 — AIR 39',
    organization: 'National Creativity Aptitude Test',
    description: 'Secured All India Rank 39 in a national-level aptitude exam testing creativity, logic, and innovation.',
    tags: ['Aptitude', 'AIR 39', 'Creative Thinking'],
    icon: Star,
  },
  {
    year: '2016-17',
    title: 'Times NIE National Aptitude Challenge — City Finalist',
    organization: 'School-Level Aptitude Competition',
    description: 'Qualified for city finals in a prestigious national-level aptitude challenge hosted by The Times NIE.',
    tags: ['Aptitude Test', 'City Finalist'],
    icon: Trophy,
  },
  {
    year: '2015',
    title: 'International Olympiad of Mathematics — Bronze Medal',
    organization: 'Olympiad Exam',
    description: 'Awarded Bronze medal for exceptional mathematical aptitude and problem-solving skills on an international platform.',
    tags: ['Mathematics', 'Olympiad', 'Bronze Medal'],
    icon: Medal,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-accent">Achievements</span> & Recognition
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and awards that mark my journey of excellence
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-accent glow-accent" />
              
              <div className="group p-6 bg-card rounded-xl border border-border card-hover ml-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:glow-accent transition-all duration-300">
                    <achievement.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-display font-bold">{achievement.year}</span>
                      <span className="text-muted-foreground text-sm">•</span>
                      <span className="text-muted-foreground text-sm">{achievement.organization}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
