import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Certifications',
  href: '#certifications'
}, {
  name: 'Achievements',
  href: '#achievements'
}, {
  name: 'Hobbies',
  href: '#hobbies'
}, {
  name: 'Contact',
  href: '#contact'
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-display text-xl font-bold text-gradient">
            ​PORTFOLIO  
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300">
                {link.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block py-3 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>)}
          </div>}
      </div>
    </nav>;
};
export default Navbar;