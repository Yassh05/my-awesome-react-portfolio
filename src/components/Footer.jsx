const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold text-gradient">
            YASH SHARMA
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
