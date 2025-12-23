import { Download, Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase">Welcome to my portfolio</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient glow-text">Yash Sharma</span>
            </h1>
            <h2 className="font-display text-2xl md:text-3xl text-accent font-semibold mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Computer Science student specializing in Artificial Intelligence and Machine Learning 
              with a strong foundation in Data Structures, Algorithms, and Web Development. 
              Skilled in problem-solving and programming, with a passion for tackling real-world technical challenges.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://yassh05.github.io/PORTFOLIO/RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary hover:scale-105 transition-transform duration-300"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://linkedin.com/in/yasshsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Yassh05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/yash_sharma0512"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Code2 size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50 glow-primary">
                <img
                  src="https://yassh05.github.io/PORTFOLIO/gaara.jpg"
                  alt="Yash Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
