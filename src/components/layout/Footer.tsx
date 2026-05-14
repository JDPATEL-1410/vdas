import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-10 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Social Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 pb-12 border-b border-slate-200">
          <Link to="/" className="inline-flex items-center">
            <img 
              src="/vdas_logo_new.png" 
              alt="VDAS Financial Logo" 
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </Link>
          
          <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Vishwas-Deshpande/61575131799781/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                title="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/vvd_officials" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all shadow-sm"
                title="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3 w-full">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secure Client Portals</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full">
                <a href="https://ewa.njindiaonline.com/ewa/login" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-vdas-blue uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all shadow-sm">NJ EWA</a>
                <a href="https://www.njindiaonline.in/cdesk/login.fin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-vdas-blue uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all shadow-sm">NJ Desk</a>
                <a href="https://invest.motilaloswal.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-vdas-blue uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all shadow-sm">Motilal</a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Grid - Improved Spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          <div className="col-span-1">
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-4 border-vdas-orange pl-4">Navigate</h4>
            <ul className="space-y-3 text-[13px] font-bold">
              <li><Link to="/" className="text-slate-500 hover:text-vdas-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-vdas-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-vdas-blue transition-colors">Expertise</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-vdas-blue transition-colors">Knowledge</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-vdas-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-4 border-vdas-orange pl-4">Analysis</h4>
            <ul className="space-y-3 text-[13px] font-bold">
              <li><Link to="/calculator/sip" className="text-slate-500 hover:text-vdas-blue transition-colors">SIP Engine</Link></li>
              <li><Link to="/calculator/retirement" className="text-slate-500 hover:text-vdas-blue transition-colors">Retirement</Link></li>
              <li><Link to="/calculator/delay" className="text-slate-500 hover:text-vdas-blue transition-colors">Cost of Delay</Link></li>
              <li><Link to="/calculator/tax" className="text-slate-500 hover:text-vdas-blue transition-colors">Tax Optimizer</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-4 border-vdas-orange pl-4">Solutions</h4>
            <ul className="space-y-3 text-[13px] font-bold">
              <li><Link to="/services/mutual-fund" className="text-slate-500 hover:text-vdas-blue transition-colors">Mutual Funds</Link></li>
              <li><Link to="/services/stocks" className="text-slate-500 hover:text-vdas-blue transition-colors">Equities</Link></li>
              <li><Link to="/services/life-insurance" className="text-slate-500 hover:text-vdas-blue transition-colors">Protection</Link></li>
              <li><Link to="/services/fixed-deposit" className="text-slate-500 hover:text-vdas-blue transition-colors">Debt / FDs</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-4 border-vdas-orange pl-4">Corporate</h4>
            <p className="text-[13px] font-medium text-slate-500 leading-relaxed mb-6">
              Serving 5,000+ elite families with research-driven wisdom since 1991.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-vdas-blue text-white rounded-xl flex items-center justify-center font-black text-xs">AMFI</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">ARN-90854</div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Card - Premium Minimalist */}
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 mb-12 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-vdas-orange/5 text-vdas-orange text-[9px] font-black uppercase tracking-widest rounded-full mb-6 border border-vdas-orange/10">Official Disclosure</span>
            <p className="text-[11px] leading-[1.8] text-slate-400 font-medium mb-10 text-justify md:text-center italic">
              Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances may or may not be sustained in future. We deal in Regular Solutions only and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made at the time of investments. Option of Direct Solution is available with lower expense ratio, but we do not deal in them.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
               {[
                  { label: 'SEBI', to: 'https://www.sebi.gov.in' },
                  { label: 'RBI', to: 'https://www.rbi.org.in' },
                  { label: 'NSE', to: 'https://www.nseindia.com' },
                  { label: 'BSE', to: 'https://www.bseindia.com' }
                ].map((link) => (
                  <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-slate-300 hover:text-vdas-blue transition-colors tracking-[0.3em] uppercase">{link.label}</a>
                ))}
            </div>
          </div>
        </div>

        {/* Grievance & Legal Bar - Simplified */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link to="/disclaimer" className="hover:text-vdas-blue transition-colors">Disclaimer</Link>
            <Link to="/privacy-policy" className="hover:text-vdas-blue transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-vdas-blue transition-colors">Terms</Link>
            <Link to="/commission-disclosure" className="hover:text-vdas-blue transition-colors">Commission</Link>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest">
            <p>Copyright © {new Date().getFullYear()} VDAS Financial. All Rights Reserved.</p>
            <p>Created by <a href="https://ainatech.in" target="_blank" rel="noopener noreferrer" className="text-vdas-blue/60 hover:text-vdas-orange">AINATECH SERVICES LLP</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
