import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ramprastha Real Estate Website',
    description: 'Developed a professional, responsive website for Ramprastha Group to showcase real estate projects and company details.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/Ramprastha/',
    sourceUrl: 'https://github.com/Yassh05/Ramprastha/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Wisdom Bharati Forum Website',
    description: 'Created a modern informational website for Wisdom Bharati Forum to present organizational goals, events, and resources.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/WBF/',
    sourceUrl: 'https://github.com/Yassh05/WBF/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Foxx Fitness Gym Website',
    description: 'Created a professional website for a fitness brand with pages for home, services, membership, and contact.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/Foxx-Fitness/',
    sourceUrl: 'https://github.com/Yassh05/Foxx-Fitness/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Weather App',
    description: 'Developed a real-time weather app that fetches weather data based on user location with beautiful UI.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/Weather_website/',
    sourceUrl: 'https://github.com/Yassh05/Weather_website/',
    tags: ['JavaScript', 'API', 'CSS'],
  },
  {
    title: 'Calculator',
    description: 'Designed a fully functional calculator supporting basic arithmetic operations with sleek design.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/CALCULATOR/',
    sourceUrl: 'https://github.com/Yassh05/CALCULATOR/',
    tags: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Rock Paper Scissors Game',
    description: 'Built an interactive browser-based game with smooth animations and score tracking.',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop',
    liveUrl: 'https://yassh05.github.io/Rock-Paper-Scissors_Game/',
    sourceUrl: 'https://github.com/Yassh05/Rock-Paper-Scissors_Game/',
    tags: ['JavaScript', 'Game Dev', 'CSS'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden border border-border card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary rounded-lg text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg text-foreground hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
