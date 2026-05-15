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
    <footer className="bg-white border-t border-slate-100 font-body">
      {/* ── Upper CTA Strip: High-Impact ── */}
      <div className="bg-vdas-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-black tracking-tight mb-1">Empower Your Wealth Today.</h3>
            <p className="text-white/60 text-sm font-medium">Connect with our principal advisor for a bespoke financial roadmap.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-vdas-orange text-white px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-vdas-orange transition-all duration-500 shadow-2xl shadow-black/20"
          >
            Start Your Journey →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* ── Top Row: Brand & Strategic Info ── */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 pb-20 border-b border-slate-100">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              Vishwas Deshpande Associates provides institutional-grade wealth advisory and systematic investment frameworks for India's elite families.
            </p>
            
            {/* AMFI Certification Badge */}
            <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
              <div className="w-12 h-12 bg-vdas-blue rounded-xl flex items-center justify-center text-white font-black text-[10px] shadow-lg shadow-vdas-blue/20">AMFI</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Registered Distributor</p>
                <p className="text-sm font-black text-vdas-blue-dark uppercase tracking-tight">ARN-90854</p>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex items-center gap-3">
              {[
                { label: 'FB', href: 'https://facebook.com/people/Vishwas-Deshpande/61575131799781/' },
                { label: 'IG', href: 'https://instagram.com/vvd_officials' },
                { label: 'WA', href: 'https://wa.me/919822000000' }
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-vdas-blue hover:border-vdas-blue hover:shadow-lg transition-all font-black text-[10px]">{s.label}</a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-8">Solutions</h4>
              <ul className="space-y-4">
                {LINKS_COL2.map(l => (
                  <li key={l.to}><Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-8">Calculators</h4>
              <ul className="space-y-4">
                {LINKS_COL3.map(l => (
                  <li key={l.to}><Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-vdas-orange mb-8">Corporate</h4>
              <ul className="space-y-4">
                {LINKS_COL1.map(l => (
                  <li key={l.to}><Link to={l.to} className="text-sm font-bold text-slate-500 hover:text-vdas-blue transition-colors">{l.label}</Link></li>
                ))}
                <li><a href="https://ewa.njindiaonline.com" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-vdas-blue uppercase tracking-widest">Client Login</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Regulatory Disclosure ── */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Regulatory Body Links</h5>
              <div className="flex flex-wrap gap-2">
                {REGULATORS.map(r => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg border border-slate-200 text-[9px] font-black text-slate-400 hover:border-vdas-blue hover:text-vdas-blue transition-all uppercase tracking-widest">{r.label}</a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium italic bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <span className="block text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-3 not-italic">Statutory Warning & Disclosure:</span>
                Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances may not be sustained in future. We operate as a Regular Distributor (ARN-90854) and receive trailing commission from Asset Management Companies for the services rendered. Full commission disclosure is provided to clients prior to any transaction.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Legal & Credits ── */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {LEGAL_LINKS.map(l => (
              l.external 
                ? <a key={l.label} href={l.href || l.to} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-widest">{l.label}</a>
                : <Link key={l.label} to={l.to!} className="text-[10px] font-bold text-slate-400 hover:text-vdas-blue transition-colors uppercase tracking-widest">{l.label}</Link>
            ))}
          </div>
          <div className="text-center md:text-right space-y-1">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">© {new Date().getFullYear()} VDAS Financial · SEBI Registered Distributor</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Crafted by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-blue">AINATECH SERVICES</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
