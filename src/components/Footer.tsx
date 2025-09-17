import { Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-portfolio-skill-item-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Name and Title */}
          <div>
            <h3 className="text-xl font-bold text-portfolio-hero-text mb-2">
              Anmol Upadhyay
            </h3>
            <p className="text-portfolio-description-text">
              Full Stack Developer
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <a
              href="mailto:uanmol47@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-skill-item-bg border border-portfolio-skill-item-border rounded-lg text-portfolio-nav-link hover:text-portfolio-nav-link-hover hover:border-primary transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              uanmol47@gmail.com
            </a>
          </div>

          {/* Made by Attribution */}
          <div className="text-right md:text-right text-center">
            <p className="text-portfolio-description-text flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by{' '}
              <span className="text-portfolio-hero-text font-medium">Anmol</span>
            </p>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-8 pt-6 border-t border-portfolio-skill-item-border text-center">
          <p className="text-sm text-portfolio-description-text">
            © {new Date().getFullYear()} Anmol Upadhyay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;