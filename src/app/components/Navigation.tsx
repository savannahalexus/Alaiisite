import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import logo from 'figma:asset/5d44201d4f978fbc5bc255d0ffe24f03820c375f.png';
import cmuLogo from 'figma:asset/c345cb9c859c36689ed1f23eac031905d1668b3d.png';
import { Button } from '@/app/components/ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo with Carnegie Mellon Badge */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="alaii - AI-powered booking and payments platform for beauty, fitness, and wellness businesses" className="h-20" />
          </Link>
          
          {/* Carnegie Mellon Badge - Desktop */}
          <Link 
            to="/why-we-built" 
            className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-full bg-gradient-to-r from-red-50 to-red-100 border border-red-200 hover:shadow-md transition-all group"
          >
            <img 
              src={cmuLogo}
              alt="Carnegie Mellon"
              className="h-3.5 object-contain"
            />
            <span className="text-[10px] font-semibold text-slate-700">Built By Carnegie Mellon Founders</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('industries')} 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Use Cases
          </button>
          <Link 
            to="/resources" 
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Resources
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://calendly.com/anthonye-alaii/quick_chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 hover:text-[#75a6d4] transition-colors font-medium"
          >
            Book a Demo
          </a>
          <a 
            href="https://web.alaii.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-10 px-5 rounded-full bg-[#75A6D4] hover:bg-[#38BDF8] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg">
              Build App
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 p-6 shadow-xl flex flex-col gap-6">
          {/* Carnegie Mellon Badge - Mobile */}
          <Link 
            to="/why-we-built" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 border border-red-200"
          >
            <img 
              src={cmuLogo}
              alt="Carnegie Mellon"
              className="h-5 object-contain"
            />
            <span className="text-xs font-semibold text-slate-700">Built By Carnegie Mellon Founders</span>
          </Link>
          
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-left text-lg font-medium text-slate-900"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-left text-lg font-medium text-slate-900"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-left text-lg font-medium text-slate-900"
          >
            Pricing
          </button>
          <Link 
            to="/resources" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-left text-lg font-medium text-slate-900"
          >
            Resources
          </Link>
          
          <a 
            href="https://calendly.com/anthonye-alaii/quick_chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-medium"
            >
              Book a Demo
            </Button>
          </a>
          
          <a 
            href="https://web.alaii.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full h-12 rounded-xl bg-[#75A6D4] hover:bg-[#38BDF8] text-white font-bold">
              Build Your App
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}