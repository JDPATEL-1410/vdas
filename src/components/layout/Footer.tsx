import { Link } from 'react-router-dom'

const LINKS_COL1 = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Goals', to: '/goals' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const LINKS_COL2 = [
  { label: 'Mutual Funds', to: '/services/mutual-fund' },
  { label: 'Equities', to: '/services/stocks' },
  { label: 'Life Insurance', to: '/services/life-insurance' },
  { label: 'Fixed Deposits', to: '/services/fixed-deposit' },
  { label: 'Tax Solutions', to: '/services/tax-solution' },
  { label: 'Goal Investing', to: '/services/goal-base-investing' },
]

const LINKS_COL3 = [
  { label: 'SIP Calculator', to: '/calculator/sip' },
  { label: 'Lumpsum Calc', to: '/calculator/lumpsum' },
  { label: 'Retirement Planner', to: '/calculator/retirement' },
  { label: 'Cost of Delay', to: '/calculator/delay' },
  { label: 'EMI Calculator', to: '/calculator/emi' },
  { label: 'Tax Calculator', to: '/calculator/tax' },
]

const LEGAL_LINKS = [
  { label: 'Disclaimer', to: '/disclaimer' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Commission Disclosure', to: '/commission-disclosure' },
  { label: 'Code of Conduct', href: '/AMFI_Code-of-Conduct.pdf', external: true },
]

const REGULATORS = [
  { label: 'SEBI', href: 'https://www.sebi.gov.in' },
  { label: 'AMFI', href: 'https://www.amfiindia.com' },
  { label: 'NSE', href: 'https://www.nseindia.com' },
  { label: 'BSE', href: 'https://www.bseindia.com' },
  { label: 'RBI', href: 'https://www.rbi.org.in' },
  { label: 'CDSL', href: 'https://www.cdslindia.com' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 font-body relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-vdas-blue/5 blur-[120px] rounded-full -mr-32 -mt-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 pb-20 border-b border-white/5">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block group">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/40 text-lg leading-relaxed font-medium">
              Institutional-grade wealth advisory and systematic investment frameworks for India's elite families. Established 1991.
            </p>
            
            {/* AMFI Certification Badge */}
            <div className="flex items-center gap-5 bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="w-14 h-14 bg-vdas-orange rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-vdas-orange/20">AMFI</div>
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Registered Distributor</p>
                <p className="text-lg font-black text-white uppercase tracking-tight">ARN-90854</p>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex items-center gap-4">
              {[
                { label: 'FB', href: 'https://facebook.com/people/Vishwas-Deshpande/61575131799781/' },
                { label: 'IG', href: 'https://instagram.com/vvd_officials' },
                { label: 'WA', href: 'https://wa.me/919822000000' }
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-vdas-orange hover:border-vdas-orange transition-all duration-500 font-black text-xs">{s.label}</a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-10">Solutions</h4>
              <ul className="space-y-5">
                {LINKS_COL2.map(l => (
                  <li key={l.to}><Link to={l.to} className="text-sm font-bold text-white/40 hover:text-white transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-10">Calculators</h4>
              <ul className="space-y-5">
                {LINKS_COL3.map(l => (
                  <li key={l.to}><Link to={l.to} className="text-sm font-bold text-white/40 hover:text-white transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-10">Corporate</h4>
              <ul className="space-y-5">
                {LINKS_COL1.map(l => (
                  <li key={l.to}><Link to={l.to} className="text-sm font-bold text-white/40 hover:text-white transition-colors">{l.label}</Link></li>
                ))}
                <li><a href="https://ewa.njindiaonline.com" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-black text-vdas-orange uppercase tracking-widest border-b-2 border-vdas-orange/20 hover:border-vdas-orange transition-all pb-1">Client Login</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Regulatory Disclosure ── */}
        <div className="py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Regulatory Body Links</h5>
              <div className="flex flex-wrap gap-2.5">
                {REGULATORS.map(r => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] font-black text-white/30 hover:bg-white/10 hover:text-white transition-all uppercase tracking-widest">{r.label}</a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="p-10 bg-white/5 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-vdas-orange/5 rounded-full blur-3xl" />
                <p className="text-[11px] leading-relaxed text-white/30 font-medium italic relative z-10">
                  <span className="block text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-4 not-italic">Statutory Warning & Disclosure:</span>
                  Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances may not be sustained in future. We operate as a Regular Distributor (ARN-90854) and receive trailing commission from Asset Management Companies for the services rendered. Full commission disclosure is provided to clients prior to any transaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Legal & Credits ── */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {LEGAL_LINKS.map(l => (
              l.external 
                ? <a key={l.label} href={l.href || l.to} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">{l.label}</a>
                : <Link key={l.label} to={l.to!} className="text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">{l.label}</Link>
            ))}
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.3em]">© {new Date().getFullYear()} VDAS Financial · SEBI Registered Distributor</p>
            <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.3em]">Crafted by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-orange/50 hover:text-vdas-orange transition-colors">AINATECH SERVICES</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
