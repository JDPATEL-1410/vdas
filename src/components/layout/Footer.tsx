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
    <footer className="bg-white border-t border-slate-100 pt-28 pb-12 font-body relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vdas-blue/[0.02] rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vdas-orange/[0.02] rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Row: Brand & Client Ecosystem */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/" className="inline-block group">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-14 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-md">
              Architecting generational wealth through institutional-grade advisory and systematic investment frameworks since 1991.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              {/* AMFI Badge */}
              <div className="flex items-center gap-5 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200/60 shadow-sm">
                <div className="w-14 h-14 bg-vdas-blue rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-vdas-blue/20">AMFI</div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Registered Distributor</p>
                  <p className="text-lg font-black text-vdas-blue-dark uppercase tracking-tight">ARN-90854</p>
                </div>
              </div>

              {/* Social Connect - Enhanced with Icons */}
              <div className="flex items-center gap-4">
                {[
                  { 
                    label: 'Facebook', 
                    href: 'https://facebook.com/people/Vishwas-Deshpande/61575131799781/',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    label: 'Instagram', 
                    href: 'https://instagram.com/vvd_officials',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )
                  },
                  { 
                    label: 'WhatsApp', 
                    href: 'https://wa.me/919822000000',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    )
                  }
                ].map(s => (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vdas-blue hover:border-vdas-blue hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm group"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Client Portal Action Hub */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-14 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-vdas-blue/20 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-vdas-blue/30 transition-colors duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                  <h4 className="text-white text-2xl font-black tracking-tight mb-4">Empower Your Portfolio Today.</h4>
                  <p className="text-white/50 text-sm font-medium leading-relaxed max-w-sm">
                    Access your unified wealth dashboard, track goal progress, and manage investments through our secure institutional portal.
                  </p>
                </div>
                <a 
                  href="https://ewa.njindiaonline.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-shrink-0 bg-vdas-orange text-white px-10 py-5 rounded-[1.25rem] text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-vdas-orange transition-all duration-500 shadow-2xl shadow-black/20 transform hover:-translate-y-1"
                >
                  Client Portal Login →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row: Links Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-slate-100">
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-10">Wealth Solutions</h4>
            <ul className="space-y-4">
              {SOLUTIONS.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-vdas-blue/20 group-hover:bg-vdas-blue group-hover:scale-150 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-10">Decision Tools</h4>
            <ul className="space-y-4">
              {CALCULATORS.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-vdas-blue/20 group-hover:bg-vdas-blue group-hover:scale-150 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-10">Institutional</h4>
            <ul className="space-y-4">
              {CORPORATE.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-vdas-blue/20 group-hover:bg-vdas-blue group-hover:scale-150 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Strip */}
        <div className="py-20 border-b border-slate-100">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Statutory Access</h5>
              <div className="flex flex-wrap gap-2.5">
                {REGULATORS.map(r => (
                  <a 
                    key={r.label} 
                    href={r.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/60 text-[9px] font-black text-slate-400 hover:border-vdas-blue hover:text-vdas-blue transition-all uppercase tracking-widest"
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vdas-orange/5 rounded-full blur-3xl" />
                <p className="text-[11px] leading-relaxed text-slate-400 font-medium italic relative z-10">
                  <span className="font-black text-vdas-orange uppercase tracking-widest mr-3 not-italic">Statutory Warning:</span>
                  Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances may not be sustained in future. We operate as a Regular Distributor (ARN-90854) and receive trailing commission from AMCs for the services rendered.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Crafted */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {LEGAL.map(l => (
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-[0.2em]">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to!} className="text-[10px] font-bold text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-[0.2em]">
                  {l.label}
                </Link>
              )
            ))}
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Vishwas Deshpande Associates · ARN-90854
            </p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
              Crafted by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-orange/50 hover:text-vdas-orange transition-colors">AINATECH SERVICES</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
