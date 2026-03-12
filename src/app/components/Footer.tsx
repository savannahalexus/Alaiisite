import { Link } from 'react-router';
import logo from 'figma:asset/5d44201d4f978fbc5bc255d0ffe24f03820c375f.png';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 pt-20 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="alaii logo - AI-powered booking and scheduling platform" className="h-20" />
            </Link>
            <p className="text-slate-500 mb-6 leading-relaxed max-w-sm">
              The AI infrastructure for beauty, fitness & wellness brands. Build once, own forever.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/alaiihq" target="_blank" rel="noopener noreferrer" className="text-[#75A6D4] hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/alaiihq" target="_blank" rel="noopener noreferrer" className="text-[#75A6D4] hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
               <a href="https://linkedin.com/company/alaiihq" target="_blank" rel="noopener noreferrer" className="text-[#75A6D4] hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Compare */}
          <div>
            <h4 className="font-bold text-[#75A6D4] mb-6 uppercase tracking-wider text-sm">Compare</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/compare/vagaro-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Vagaro Alternative</Link></li>
              <li><Link to="/compare/acuity-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Acuity Alternative</Link></li>
              <li><Link to="/compare/mindbody-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Mindbody Alternative</Link></li>
              <li><Link to="/compare/trainerize-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Trainerize Alternative</Link></li>
              <li><Link to="/compare/hubfit-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Hubfit Alternative</Link></li>
              <li><Link to="/compare/everfit-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Everfit Alternative</Link></li>
              <li><Link to="/compare/gloss-genius-alternative" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Gloss Genius Alternative</Link></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-bold text-[#75A6D4] mb-6 uppercase tracking-wider text-sm">Use Cases</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/for/trainers" className="text-slate-500 hover:text-[#75A6D4] transition-colors">For Trainers</Link></li>
              <li><Link to="/for/salons" className="text-slate-500 hover:text-[#75A6D4] transition-colors">For Salons</Link></li>
              <li><Link to="/for/coaches" className="text-slate-500 hover:text-[#75A6D4] transition-colors">For Coaches</Link></li>
              <li><Link to="/for/real-estate" className="text-slate-500 hover:text-[#75A6D4] transition-colors">For Real Estate</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-bold text-[#75A6D4] mb-6 uppercase tracking-wider text-sm">Blog</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/blog/ai-app-builder" className="text-slate-500 hover:text-[#75A6D4] transition-colors">AI App Builder</Link></li>
              <li><Link to="/blog/all-in-one-builder" className="text-slate-500 hover:text-[#75A6D4] transition-colors">All-in-One Builder</Link></li>
              <li><Link to="/blog/replace-your-stack" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Replace Your Stack</Link></li>
            </ul>
          </div>

           {/* Guides */}
           <div>
            <h4 className="font-bold text-[#75A6D4] mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/resources" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Growth Guides</Link></li>
              <li><Link to="/resources/barber-200k-year-guide" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Barber $200k Guide</Link></li>
              <li><Link to="/resources/salon-six-figures-guide" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Salon Six Figures</Link></li>
              <li><Link to="/resources/personal-trainer-200k-blueprint" className="text-slate-500 hover:text-[#75A6D4] transition-colors">Trainer Revenue Guide</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ALAII Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
             <Link to="/terms" className="hover:text-slate-600 transition-colors">
               Terms
             </Link>
             <Link to="/privacy" className="hover:text-slate-600 transition-colors">
               Privacy
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}