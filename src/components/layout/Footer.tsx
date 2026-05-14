import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-24 pb-12 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Tagline - Simple Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-slate-50">
          <Link to="/" className="inline-flex items-center">
            <img 
              src="/vdas_logo_new.png" 
              alt="VDAS Financial Logo" 
              className="h-20 w-auto object-contain"
            />
          </Link>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Vishwas-Deshpande/61575131799781/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-vdas-blue hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shadow-sm"
                title="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/vvd_officials" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-vdas-blue hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all shadow-sm"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Client Portals</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-3">
                <a href="https://ewa.njindiaonline.com/ewa/login" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-black text-vdas-blue uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all">NJ EWA Login</a>
                <a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-black text-vdas-blue uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all">NJ Desk Login</a>
                <a href="https://invest.motilaloswal.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-black text-vdas-blue uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all">Motilal Oswal</a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[11px] font-black text-vdas-blue uppercase tracking-[0.2em] mb-8">Main Pages</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-vdas-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-vdas-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-vdas-orange transition-colors">Services</Link></li>
              <li><Link to="/goals" className="hover:text-vdas-orange transition-colors">Planning Goals</Link></li>
              <li><Link to="/blog" className="hover:text-vdas-orange transition-colors">Insights Blog</Link></li>
              <li><Link to="/contact" className="hover:text-vdas-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-vdas-blue uppercase tracking-[0.2em] mb-8">Major Calculators</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/calculator/sip" className="hover:text-vdas-orange transition-colors">SIP Calculator</Link></li>
              <li><Link to="/calculator/lumpsum" className="hover:text-vdas-orange transition-colors">Lumpsum Calc</Link></li>
              <li><Link to="/calculator/retirement" className="hover:text-vdas-orange transition-colors">Retirement Planning</Link></li>
              <li><Link to="/calculator/delay" className="hover:text-vdas-orange transition-colors">Cost of Delay</Link></li>
              <li><Link to="/calculator/emi" className="hover:text-vdas-orange transition-colors">Loan EMI Calc</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-vdas-blue uppercase tracking-[0.2em] mb-8">Investment Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services/mutual-fund" className="hover:text-vdas-orange transition-colors">Mutual Funds</Link></li>
              <li><Link to="/services/stocks" className="hover:text-vdas-orange transition-colors">Equity / Stocks</Link></li>
              <li><Link to="/services/life-insurance" className="hover:text-vdas-orange transition-colors">Insurance</Link></li>
              <li><Link to="/services/tax-solution" className="hover:text-vdas-orange transition-colors">Tax Saving</Link></li>
              <li><Link to="/services/fixed-deposit" className="hover:text-vdas-orange transition-colors">Fixed Deposits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-vdas-blue uppercase tracking-[0.2em] mb-8">Our Heritage</h4>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6">
              Founded by Vishwas Deshpande in 1991, helping 5,000+ families achieve financial freedom.
            </p>
            <Link to="/login" className="inline-block px-6 py-3 bg-vdas-blue-light text-vdas-blue rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all">Client Login Page</Link>
          </div>
        </div>

        {/* Regulatory & Institutional Section (Layout like wcfw.in) */}
        <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-16 border border-slate-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-vdas-blue/5 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            {/* Regulatory Logos / Links Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-12 border-b border-slate-200 pb-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center font-black text-xs text-vdas-blue-dark">AMFI</div>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Registered</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center font-black text-xs text-vdas-orange">MFD</div>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">ARN-90854</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden md:block" />
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {[
                  { label: 'NSE', to: 'https://www.nseindia.com' },
                  { label: 'BSE', to: 'https://www.bseindia.com' },
                  { label: 'SEBI', to: 'https://www.sebi.gov.in' },
                  { label: 'RBI', to: 'https://www.rbi.org.in' },
                  { label: 'CDSL', to: 'https://www.cdslindia.com' },
                  { label: 'KYC', to: 'https://www.cvlkra.com' }
                ].map((link) => (
                  <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-vdas-blue transition-colors">{link.label}</a>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              <h5 className="text-[10px] font-black text-vdas-orange uppercase tracking-[0.5em] mb-6">Mandatory Disclosure</h5>
              <p className="text-[11px] leading-[1.8] text-slate-500 font-medium italic mb-10 text-justify md:text-center">
                Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other exit structure and TER applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes. We deal in Regular Solutions only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made to clients at the time of investments. Option of Direct Solution for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct Solutions. Hence we do not deal in Direct Solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-widest text-vdas-blue-dark">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-vdas-orange shadow-lg shadow-vdas-orange/30" />
                  AMFI Registered Mutual Fund Distributor
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-vdas-blue shadow-lg shadow-vdas-blue/30" />
                  ARN: 90854
                </span>
                <span className="flex items-center gap-2 text-slate-400 font-bold">
                  Validity: 25/05/2028
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grievance & Legal Bar (Last two sections style) */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-y border-slate-100">
            <div className="flex items-center gap-10">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Grievance Officer</p>
                <p className="text-xs font-black text-vdas-blue-dark">Vishwas Deshpande</p>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Customer Care</p>
                <p className="text-xs font-black text-vdas-blue-dark">+91 98220 00000 | info@vdasfinancial.in</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <Link to="/disclaimer" className="hover:text-vdas-blue transition-colors">Disclaimer</Link>
              <Link to="/privacy-policy" className="hover:text-vdas-blue transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-vdas-blue transition-colors">Terms</Link>
              <Link to="/commission-disclosure" className="hover:text-vdas-blue transition-colors">Commission</Link>
              <a href="/AMFI_Code-of-Conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-vdas-blue transition-colors">Code of Conduct</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Copyright &copy; {new Date().getFullYear()} VDAS Financial. ARN-90854
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Created by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-blue hover:text-vdas-orange transition-colors">AINATECH SERVICES LLP</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
