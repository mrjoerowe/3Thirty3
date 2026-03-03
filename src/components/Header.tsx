import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'The Show', href: '#show' },
    { name: 'Hiring Story', href: '#hiring' },
    { name: 'Sponsorship', href: '#sponsorship' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'ROI', href: '#roi' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[var(--header-height)] z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border-[var(--border)]' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-extrabold text-xl whitespace-nowrap">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczOUnmQzjX4883e4wJfa9LZMiEF791g7x4Akcvu8CS4ylVNIpoNk6wtAXtwPiwhImIgXCshziBTJnntcKBQSRWGDey9rypEOveoqv33dTZxPiMTPrTpTdk1xki4cc1hn0wEAf-TyxBGFf4ccsPfWw3WH=w1260-h366-s-no-gm?authuser=0" 
            alt="333 Live" 
            className="h-12 w-auto" 
            referrerPolicy="no-referrer"
          />
          <span className="font-normal text-[var(--text-secondary)] hidden sm:inline">x ZipRecruiter</span>
        </a>

        {/* Hamburger Menu Button */}
        <button 
          className="text-white p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Full Screen Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[var(--bg-body)]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-3xl md:text-5xl font-bold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`btn btn-primary px-12 py-4 text-xl mt-8 transform transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Call
          </a>
        </div>
      </div>
    </header>
  );
}
