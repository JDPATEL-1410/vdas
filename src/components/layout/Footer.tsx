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
  { label: 'Client Login', href: 'https://ewa.njindiaonline.com', external: true },
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
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 font-body relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-[100px] -ml-48 -mb-48 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Matrix */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="text-slate-500 text-base leading-relaxed font-medium max-w-sm">
              Providing institutional-grade wealth advisory and systematic investment frameworks since 1991. Serving 5,000+ families with integrity.
            </p>
            
            {/* AMFI Badge - Redesigned for Light Theme */}
            <div className="flex items-center gap-5 bg-slate-50 p-6 rounded-[2rem] border border-slate-200/60 w-fit">
              <div className="w-12 h-12 bg-vdas-blue rounded-2xl flex items-center justify-center text-white font-black text-[10px] shadow-lg shadow-vdas-blue/20">AMFI</div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Registered Distributor</p>
                <p className="text-base font-black text-vdas-blue-dark uppercase tracking-tight">ARN-90854</p>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex items-center gap-3">
              {[
                { label: 'FB', href: 'https://facebook.com/people/Vishwas-Deshpande/61575131799781/' },
                { label: 'IG', href: 'https://instagram.com/vvd_officials' },
                { label: 'WA', href: 'https://wa.me/919822000000' }
              ].map(s => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-vdas-blue hover:border-vdas-blue hover:shadow-md transition-all font-black text-[10px]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:pl-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-8">Solutions</h4>
              <ul className="space-y-4">
                {SOLUTIONS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-8">Calculators</h4>
              <ul className="space-y-4">
                {CALCULATORS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-8">Corporate</h4>
              <ul className="space-y-4">
                {CORPORATE.map(l => (
                  <li key={l.label}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm font-black text-vdas-blue uppercase tracking-widest hover:text-vdas-orange transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to!} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Regulatory Strip */}
        <div className="pt-16 pb-12 border-t border-slate-100">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="flex flex-wrap gap-2">
                {REGULATORS.map(r => (
                  <a 
                    key={r.label} 
                    href={r.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60 text-[9px] font-black text-slate-400 hover:border-vdas-blue hover:text-vdas-blue transition-all uppercase tracking-widest"
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[10px] leading-relaxed text-slate-400 font-medium italic bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                <span className="font-black text-vdas-orange uppercase tracking-widest mr-2 not-italic">Disclosure:</span>
                Mutual fund investments are subject to market risks. Read all scheme related documents carefully. We operate as a Regular Distributor (ARN-90854) and receive trail commission from AMCs for services rendered.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {LEGAL.map(l => (
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-widest">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to!} className="text-[10px] font-bold text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-widest">
                  {l.label}
                </Link>
              )
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">
              © {new Date().getFullYear()} Vishwas Deshpande Associates
            </p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Crafted by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-blue hover:text-vdas-orange transition-colors">AINATECH SERVICES</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
