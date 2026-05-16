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
  { label: 'Grievance / SCORES', href: 'https://scores.gov.in/scores/Welcome.html', external: true },
]

const REGULATORS = [
  { label: 'SEBI', href: 'https://www.sebi.gov.in' },
  { label: 'AMFI', href: 'https://www.amfiindia.com' },
  { label: 'NSE India', href: 'https://www.nseindia.com' },
  { label: 'BSE India', href: 'https://www.bseindia.com' },
  { label: 'RBI', href: 'https://www.rbi.org.in' },
]

const SOCIAL_LINKS = [
  { 
    label: 'Facebook', 
    href: 'https://facebook.com/people/Vishwas-Deshpande/61575131799781/',
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  { 
    label: 'Instagram', 
    href: 'https://instagram.com/vvd_officials',
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  { 
    label: 'WhatsApp', 
    href: 'https://wa.me/919822000000',
    hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366]',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.604 6.04L0 24l6.104-1.602a11.803 11.803 0 005.94 1.597h.005c6.634 0 12.031-5.397 12.034-12.03a11.75 11.75 0 00-3.483-8.528z"/>
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 sm:pt-32 pb-12 font-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Top Block: Primary Navigation ── */}
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 mb-16 sm:mb-24 items-start">
          <div className="lg:col-span-4 space-y-8 sm:space-y-12">
            <Link to="/" className="inline-block group">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-16 sm:h-24 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-black text-vdas-blue-dark tracking-tight leading-tight">
                Architecting Wealth. <br />
                <span className="text-vdas-orange italic">Preserving Legacies.</span>
              </h3>
              <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed max-w-sm">
                Institutional-grade wealth advisory and systematic investment frameworks since 1991. Serving India's elite families with integrity.
              </p>
              {/* Registered Office Address - SEBI Compliance */}
              <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                Registered Office:<br />
                102, Business Square, Andheri West, Mumbai 400053
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {SOCIAL_LINKS.map(s => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:shadow-xl transition-all duration-500 group ${s.hoverClass}`}
                  title={s.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200/60 shadow-sm inline-flex items-center gap-6">
              <div className="w-16 h-16 bg-vdas-blue rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-xl shadow-vdas-blue/20">AMFI</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Registered Distributor</p>
                <p className="text-xl font-black text-vdas-blue-dark uppercase tracking-tighter">ARN-90854</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 lg:pl-20">
            <div className="space-y-6 sm:space-y-10">
              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-vdas-orange">Solutions</h4>
              <ul className="space-y-3 sm:space-y-5">
                {SOLUTIONS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm sm:text-[15px] font-bold text-slate-500 hover:text-vdas-blue transition-all hover:translate-x-1 inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 sm:space-y-10">
              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-vdas-orange">Calculators</h4>
              <ul className="space-y-3 sm:space-y-5">
                {CALCULATORS.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm sm:text-[15px] font-bold text-slate-500 hover:text-vdas-blue transition-all hover:translate-x-1 inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 sm:space-y-10">
              <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-vdas-orange">Corporate</h4>
              <ul className="space-y-3 sm:space-y-5">
                {CORPORATE.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm sm:text-[15px] font-bold text-slate-500 hover:text-vdas-blue transition-all hover:translate-x-1 inline-block">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://ewa.njindiaonline.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center gap-2 bg-vdas-blue text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange transition-all shadow-lg shadow-vdas-blue/20">
                    Client Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Unified Compliance Section ── */}
        <div className="bg-slate-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-vdas-orange/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 space-y-10 sm:space-y-16">
            {/* Tier 1: Regulators */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <h5 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] flex-shrink-0">Regulatory Governance</h5>
              <div className="flex flex-wrap gap-3">
                {REGULATORS.map(r => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" 
                     className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-[10px] font-black text-slate-500 hover:border-vdas-blue hover:text-vdas-blue transition-all uppercase tracking-widest">
                    {r.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Tier 2: Disclosure */}
            <div className="border-y border-slate-200/60 py-6 sm:py-10 space-y-4 sm:space-y-6">
              <p className="text-[11px] sm:text-[13px] leading-relaxed text-slate-400 font-medium italic">
                <span className="block text-[9px] sm:text-[11px] font-black text-vdas-orange uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 not-italic">Statutory Warning & Global Disclosure:</span>
                Investments in Mutual Funds are subject to market risks. Please read all scheme related documents carefully before investing. Mutual Fund schemes do not assure or guarantee any returns. Past performance may or may not be sustained in the future.
              </p>
              <p className="text-[11px] sm:text-[12px] leading-relaxed text-slate-400 font-medium italic">
                Vishwas Deshpande Associates (VDAS) operates as a Regular Mutual Fund Distributor (ARN-90854) and receives trailing commission from AMCs for the services rendered. Registration granted by SEBI, membership of AMFI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
              </p>
            </div>

            {/* Tier 3: Legal & Credits */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 pt-4">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
                {LEGAL.map(l => (
                  l.external ? (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[9px] sm:text-[11px] font-black text-slate-500 hover:text-vdas-blue transition-colors uppercase tracking-[0.2em] sm:tracking-[0.3em]">{l.label}</a>
                  ) : (
                    <Link key={l.label} to={l.to!} className="text-[9px] sm:text-[11px] font-black text-slate-500 hover:text-vdas-blue transition-colors uppercase tracking-[0.2em] sm:tracking-[0.3em]">{l.label}</Link>
                  )
                ))}
              </div>

              <div className="text-center lg:text-right">
                <p className="text-[8px] sm:text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-1">© {new Date().getFullYear()} VDAS FINANCIAL · AMFI REGISTERED MUTUAL FUND DISTRIBUTOR</p>
                <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Design by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-blue hover:text-vdas-orange transition-colors">AINATECH</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
