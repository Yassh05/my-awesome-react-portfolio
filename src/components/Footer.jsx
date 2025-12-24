import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <p className="font-display text-lg font-bold text-gradient">
              YASH SHARMA
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with React & ❤️
            </p>
          </div>
          
          {/* Reference Section */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm border-t border-border/50 pt-4 w-full justify-center">
            <FileText size={16} className="text-primary" />
            <span>
              This portfolio was built using my{' '}
              <a 
                href="#" 
                className="text-primary hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                original resume
              </a>
              {' '}as reference
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
