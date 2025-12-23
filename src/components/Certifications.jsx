import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Programming In Java',
    issuer: 'NPTEL ONLINE CERTIFICATION',
    date: 'May 2025',
    tags: ['Java'],
    verified: true,
  },
  {
    title: 'C Programming Training Certificate',
    issuer: 'Spoken Tutorial - IIT Bombay',
    date: 'July 2024',
    tags: ['C'],
    verified: true,
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Goldman Sachs - Forage',
    date: 'September 2024',
    tags: ['Security', 'Password Analysis'],
    verified: true,
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Accenture - Forage',
    date: 'September 2024',
    tags: ['Architecture', 'Testing', 'Debugging'],
    verified: true,
  },
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'AWS - Forage',
    date: 'December 2024',
    tags: ['AWS', 'Scalable Architecture'],
    verified: true,
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Infosys',
    date: 'April 2024',
    tags: ['DSA'],
    verified: true,
  },
  {
    title: 'Software Engineer Intern Certificate',
    issuer: 'HackerRank',
    date: 'January 2025',
    tags: ['Algorithms', 'C++', 'OOP'],
    verified: true,
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating my expertise
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={`${cert.title}-${cert.issuer}`}
              variants={itemVariants}
              className="group p-6 bg-card rounded-xl border border-border card-hover relative overflow-hidden"
            >
              {cert.verified && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    <Award size={12} />
                    Verified
                  </span>
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors pr-20">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <p className="text-primary text-sm mt-1">{cert.date}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
