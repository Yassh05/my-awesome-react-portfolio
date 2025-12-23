import { Flag, Tv, Gamepad2, Music, Plane, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';

const hobbies = [
  {
    title: 'Formula 1',
    description: 'Passionate F1 fan following every race weekend. Love the strategy, engineering, and adrenaline of motorsport.',
    icon: Flag,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    title: 'UFC / MMA',
    description: 'Big fan of UFC and mixed martial arts. Following fighters, studying techniques, and never missing a big fight night.',
    icon: Dumbbell,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    title: 'Anime',
    description: 'Love watching anime - my Gaara profile pic says it all! Big fan of Naruto, Attack on Titan, and many more.',
    icon: Tv,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    title: 'Gaming',
    description: 'Enjoy gaming in my free time - from competitive multiplayer to immersive single-player experiences.',
    icon: Gamepad2,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'Music',
    description: 'Always have headphones on. Love discovering new artists and genres - music fuels my coding sessions.',
    icon: Music,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    title: 'Exploring',
    description: 'Love exploring new places, trying new food, and experiencing different cultures.',
    icon: Plane,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative">
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
            Beyond <span className="text-gradient">Code</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            When I'm not coding, here's what keeps me entertained
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              variants={itemVariants}
              className="group p-6 bg-card rounded-xl border border-border card-hover"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 ${hobby.bgColor} rounded-xl ${hobby.color} group-hover:scale-110 transition-transform duration-300`}>
                  <hobby.icon size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun F1 & UFC Banner */}
        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-red-500/10 via-card to-accent/10 rounded-2xl border border-border text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            <span className="text-red-500">F1</span> x <span className="text-accent">UFC</span> Enthusiast
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Weekends are for race days and fight nights. From the Monaco Grand Prix to the UFC octagon, 
            I'm always hyped for the action. Who's your favorite driver and fighter? Let's chat!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
