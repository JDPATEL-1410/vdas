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

const CLIENT_PORTALS = [
  { label: 'NJ EWA Login', href: 'https://ewa.njindiaonline.com/ewa/login' },
  { label: 'NJ Client Desk', href: 'https://www.njindiaonline.in/cdesk/login.fin' },
  { label: 'Motilal Oswal', href: 'https://invest.motilaloswal.com/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">

      {/* ── Upper CTA Strip ── */}
      <div className="bg-vdas-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-black text-sm uppercase tracking-widest">
            Start your wealth journey today — speak with our Principal Advisor.
          </p>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-white text-vdas-orange px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg"
          >
            Book a Consultation →
          </Link>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">

        {/* ── Top Row: Brand + Portals + Social ── */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 pb-16 border-b border-white/10">

          {/* Brand Block */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link to="/">
              <img
                src="/vdas_logo_new.png"
                alt="VDAS Financial"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm font-medium leading-relaxed max-w-xs">
              Vishwas Deshpande Associates — Institutional-grade wealth management serving 5,000+ families across India since 1991.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.facebook.com/people/Vishwas-Deshpande/61575131799781/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-[#1877F2] border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent group"
                title="Facebook"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vvd_officials"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent group"
                title="Instagram"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919822000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-[#25D366] border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent group"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Client Portal Block */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Secure Client Portals</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLIENT_PORTALS.map(p => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-white/5 hover:bg-vdas-blue border border-white/10 hover:border-vdas-blue rounded-2xl px-5 py-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-black text-white/80 group-hover:text-white uppercase tracking-widest">{p.label}</span>
                  </div>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-vdas-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-vdas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Call / WhatsApp</p>
                  <p className="text-sm font-black text-white">+91 98220 00000</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-vdas-blue/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-vdas-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-black text-white">info@vdasfinancial.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigation Links Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 py-14 border-b border-white/10">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-vdas-orange" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {LINKS_COL1.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-vdas-orange transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-vdas-orange" />
              Solutions
            </h4>
            <ul className="space-y-3">
              {LINKS_COL2.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-vdas-orange transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-vdas-orange" />
              Calculators
            </h4>
            <ul className="space-y-3">
              {LINKS_COL3.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-vdas-orange transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Regulatory Disclosure ── */}
        <div className="py-10 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-3 bg-vdas-orange/10 border border-vdas-orange/20 rounded-xl px-4 py-2">
              <div className="w-2 h-2 bg-vdas-orange rounded-full animate-pulse" />
              <span className="text-vdas-orange text-[9px] font-black uppercase tracking-widest">AMFI Registered · ARN-90854 · Valid till 25/05/2028</span>
            </div>
          </div>
          <p className="text-white/35 text-[11px] leading-[1.9] font-medium italic max-w-4xl">
            Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. We deal in Regular Solutions only for Mutual Fund Schemes and earn a Trailing Commission on client investments.
          </p>
          {/* Regulatory Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            {REGULATORS.map(r => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-white/40 hover:text-white hover:bg-white/10 uppercase tracking-widest transition-all"
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {LEGAL_LINKS.map(l => (
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-white/30 hover:text-white/70 transition-colors uppercase tracking-wider">{l.label}</a>
              ) : (
                <Link key={l.label} to={l.to!} className="text-[10px] font-bold text-white/30 hover:text-white/70 transition-colors uppercase tracking-wider">{l.label}</Link>
              )
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[9px] font-bold text-white/25 uppercase tracking-widest">
              © {new Date().getFullYear()} VDAS Financial · All Rights Reserved
            </p>
            <p className="text-[9px] font-bold text-white/25 uppercase tracking-widest">
              Crafted by{' '}
              <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-orange/60 hover:text-vdas-orange transition-colors">
                AINATECH SERVICES LLP
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
