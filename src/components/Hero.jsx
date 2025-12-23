import { Download, Github, Linkedin, Code2 } from 'lucide-react';

const Hero = () => {
  const roles = ['Frontend Developer', 'AI/ML Enthusiast', 'Problem Solver'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
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
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
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
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
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
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
