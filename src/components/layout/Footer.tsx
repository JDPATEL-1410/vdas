import { Link } from 'react-router-dom'

const SOLUTIONS = [
  { label: 'Mutual Funds', to: '/services/mutual-fund' },
  { label: 'Equity Markets', to: '/services/stocks' },
  { label: 'Life Insurance', to: '/services/life-insurance' },
  { label: 'Fixed Deposits', to: '/services/fixed-deposit' },
  { label: 'Tax Solutions', to: '/services/tax-solution' },
  { label: 'Goal Planning', to: '/services/goal-base-investing' },
]

const CALCULATORS = [
  { label: 'SIP Calculator', to: '/calculator/sip' },
  { label: 'Lumpsum Calculator', to: '/calculator/lumpsum' },
  { label: 'Retirement Planner', to: '/calculator/retirement' },
  { label: 'Education Planner', to: '/calculator/education' },
  { label: 'EMI Calculator', to: '/calculator/emi' },
  { label: 'SWP Calculator', to: '/calculator/swp' },
]

const CORPORATE = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Knowledge Centre', to: '/blog' },
  { label: 'Newsletters', to: '/newsletter' },
  { label: 'Contact Us', to: '/contact' },
]

const LEGAL = [
  { label: 'Disclaimer', to: '/disclaimer' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-service' },
  { label: 'Commission Disclosure', to: '/commission-disclosure' },
  { label: 'Code of Conduct', href: '/AMFI_Code-of-Conduct.pdf', external: true },
]

const REGULATORS = [
  { label: 'SEBI', href: 'https://www.sebi.gov.in' },
  { label: 'AMFI', href: 'https://www.amfiindia.com' },
  { label: 'NSE India', href: 'https://www.nseindia.com' },
  { label: 'BSE India', href: 'https://www.bseindia.com' },
  { label: 'RBI', href: 'https://www.rbi.org.in' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-32 pb-16 font-body relative overflow-hidden">
      {/* Structural Background Accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-slate-100 hidden lg:block" />
      <div className="absolute top-0 left-2/4 w-px h-full bg-slate-100 hidden lg:block" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-slate-100 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Brand & Identity */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-4 space-y-12">
            <Link to="/" className="inline-block group">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-24 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-vdas-blue-dark tracking-tight leading-tight">
                Architecting Wealth. <br />
                <span className="text-vdas-orange italic">Preserving Legacies.</span>
              </h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">
                Vishwas Deshpande Associates provides institutional-grade wealth advisory and systematic investment frameworks for India's elite families since 1991.
              </p>
            </div>
            
            {/* AMFI Registry - Enhanced Structure */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm inline-flex items-center gap-6">
              <div className="w-16 h-16 bg-vdas-blue rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-xl shadow-vdas-blue/20">AMFI</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Registered Distributor</p>
                <p className="text-xl font-black text-vdas-blue-dark uppercase tracking-tighter">ARN-90854</p>
              </div>
            </div>
          </div>

          {/* Links Grid - Structured in 3 distinct columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-16 lg:pl-20">
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-vdas-orange">Solutions</h4>
              <ul className="space-y-5">
                {SOLUTIONS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] font-bold text-slate-500 hover:text-vdas-blue transition-all hover:translate-x-1 inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-vdas-orange">Calculators</h4>
              <ul className="space-y-5">
                {CALCULATORS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] font-bold text-slate-500 hover:text-vdas-blue transition-all hover:translate-x-1 inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-vdas-orange">Connect</h4>
              <ul className="space-y-5">
                {CORPORATE.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[15px] font-bold text-slate-500 hover:text-vdas-blue transition-all hover:translate-x-1 inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://ewa.njindiaonline.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center gap-2 bg-vdas-blue text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange transition-all shadow-lg shadow-vdas-blue/20">
                    Client Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Regulatory & Trust Section - Highly Structured */}
        <div className="border-t border-slate-100 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">Regulatory Governance</p>
              <div className="flex flex-wrap gap-3">
                {REGULATORS.map(r => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" 
                     className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[10px] font-black text-slate-500 hover:border-vdas-blue hover:text-vdas-blue hover:bg-white transition-all uppercase tracking-widest">
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vdas-orange/5 rounded-full blur-[80px] group-hover:bg-vdas-orange/10 transition-colors duration-700" />
                <p className="text-[12px] leading-relaxed text-slate-400 font-medium italic relative z-10">
                  <span className="block text-[11px] font-black text-vdas-orange uppercase tracking-[0.4em] mb-4 not-italic">Statutory Warning & Global Disclosure:</span>
                  Investments in Mutual Funds are subject to market risks. Please read all scheme related documents carefully before investing. Mutual Fund schemes do not assure or guarantee any returns. Past performance may or may not be sustained in the future. VDAS operates as a Regular Distributor (ARN-90854) and receives trailing commission from AMCs. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Social */}
        <div className="pt-12 border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {LEGAL.map(l => (
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[11px] font-black text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-[0.3em]">{l.label}</a>
              ) : (
                <Link key={l.label} to={l.to!} className="text-[11px] font-black text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-[0.3em]">{l.label}</Link>
              )
            ))}
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-4 border-r border-slate-100 pr-8">
                <a href="https://facebook.com/people/Vishwas-Deshpande/61575131799781/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-vdas-blue transition-colors"><span className="text-[11px] font-black uppercase tracking-widest">FB</span></a>
                <a href="https://instagram.com/vvd_officials" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-vdas-blue transition-colors"><span className="text-[11px] font-black uppercase tracking-widest">IG</span></a>
                <a href="https://wa.me/919822000000" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-vdas-blue transition-colors"><span className="text-[11px] font-black uppercase tracking-widest">WA</span></a>
             </div>
             <div className="text-right">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-1">© {new Date().getFullYear()} VDAS FINANCIAL</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Design by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-blue hover:text-vdas-orange transition-colors">AINATECH</a></p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
