import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Goal-Based Investing', to: '/services/goal-base-investing' },
      { label: 'Mutual Funds', to: '/services/mutual-fund' },
      { label: 'Stocks', to: '/services/stocks' },
      { label: 'Fixed Deposits', to: '/services/fixed-deposit' },
      { label: 'Life Insurance', to: '/services/life-insurance' },
      { label: 'Tax Solutions', to: '/services/tax-solution' },
    ],
  },
  {
    label: 'Goals',
    children: [
      { label: 'Retirement', to: '/goals/retirement' },
      { label: 'Dream Home', to: '/goals/dream-home' },
      { label: 'Child Education', to: '/goals/child-education' },
      { label: 'Child Wedding', to: '/goals/child-wedding' },
      { label: 'Emergency Fund', to: '/goals/emergency-fund' },
      { label: 'Wealth Creation', to: '/goals/wealth-creation' },
    ],
  },
  {
    label: 'Calculators',
    children: [
      { label: 'SIP Calculator', to: '/calculator/sip' },
      { label: 'Lumpsum', to: '/calculator/lumpsum' },
      { label: 'SWP', to: '/calculator/swp' },
      { label: 'STP', to: '/calculator/stp' },
      { label: 'Retirement', to: '/calculator/retirement' },
      { label: 'Delay Cost', to: '/calculator/delay' },
      { label: 'EMI', to: '/calculator/emi' },
      { label: 'Home Loan', to: '/calculator/home-loan' },
      { label: 'Car Loan', to: '/calculator/car-loan' },
      { label: 'Education', to: '/calculator/education' },
      { label: 'Marriage', to: '/calculator/marriage' },
      { label: 'Vacation', to: '/calculator/vacation' },
      { label: 'Insurance', to: '/calculator/insurance' },
      { label: 'Tax', to: '/calculator/tax' },
    ],
  },
  { label: 'Blog', to: '/blog' },

  {
    label: 'Client Login',
    children: [
      { label: 'NJ EWA Login', to: 'https://ewa.njindiaonline.com/ewa/login', external: true },
      { label: 'NJ Client Desk', to: 'https://www.njindiaonline.in/cdesk/login.fin', external: true },
      { label: 'Motilal Oswal', to: 'https://invest.motilaloswal.com/', external: true },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setMobileExpanded(null)
  }, [location.pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-2 border-b border-slate-100' 
          : 'bg-white/95 backdrop-blur-md py-4'
      } ${mobileOpen ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-10">
              <motion.img 
                animate={{ height: scrolled ? 48 : 64 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src="/vdas_logo_new.png" 
                alt="VDAS Financial Logo" 
                className="w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.to || (item.children?.some(c => location.pathname === c.to));
                
                return (
                  <div key={item.label} className="relative"
                    onMouseEnter={() => item.children && setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}>
                    
                    {item.to ? (
                      <Link to={item.to}
                        className={`relative px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                          isActive ? 'text-vdas-blue' : 'text-slate-500 hover:text-slate-900'
                        }`}>
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <motion.div 
                            layoutId="nav-bg"
                            className="absolute inset-0 bg-white shadow-sm rounded-xl"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    ) : (
                      <button
                        className={`relative flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                          isActive || openMenu === item.label ? 'text-vdas-blue' : 'text-slate-500 hover:text-slate-900'
                        }`}>
                        <span className="relative z-10">{item.label}</span>
                        {(isActive || openMenu === item.label) && (
                          <motion.div 
                            layoutId="nav-bg"
                            className="absolute inset-0 bg-white shadow-sm rounded-xl"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <svg className={`w-3 h-3 relative z-10 transition-transform duration-300 ${openMenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}

                    {/* Dropdown / Megamenu */}
                    <AnimatePresence>
                      {item.children && openMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full left-0 mt-3 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 p-3 overflow-hidden ${
                            item.label === 'Calculators' ? 'w-[540px]' : 'min-w-[260px]'
                          }`}
                        >
                          {/* Decorative accent */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vdas-blue via-vdas-orange to-vdas-blue opacity-20" />
                          
                          <div className={`grid ${item.label === 'Calculators' ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                            {item.children.map((child: any) => (
                              child.external ? (
                                <a key={child.to} href={child.to} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center group/item px-5 py-3.5 rounded-xl text-[10px] font-black text-slate-500 hover:text-vdas-orange hover:bg-vdas-orange-light/50 transition-all">
                                  <div className="w-1.5 h-1.5 rounded-full bg-vdas-orange opacity-0 group-hover/item:opacity-100 mr-3 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                                  {child.label}
                                </a>
                              ) : (
                                <Link key={child.to} to={child.to}
                                  className="flex items-center group/item px-5 py-3.5 rounded-xl text-[10px] font-black text-slate-500 hover:text-vdas-blue hover:bg-vdas-blue-light/50 transition-all">
                                  <div className="w-1.5 h-1.5 rounded-full bg-vdas-blue opacity-0 group-hover/item:opacity-100 mr-3 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                                  {child.label}
                                </Link>
                              )
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>

            {/* Action */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact"
                className="group relative bg-vdas-blue-dark text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-vdas-blue to-vdas-blue-dark opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 rounded-xl text-slate-700 bg-slate-50 border border-slate-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[60] lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[90%] max-w-[400px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-8 flex items-center justify-between border-b border-slate-50 flex-shrink-0 bg-slate-50/50">
                <img src="/vdas_logo_new.png" alt="Logo" className="h-12 w-auto" />
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-900 border border-slate-100 active:scale-95 transition-transform"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto p-8 space-y-2 min-h-0 custom-scrollbar">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.to ? (
                      <Link 
                        to={item.to} 
                        className={`block px-6 py-4 rounded-[1.5rem] text-[14px] font-black uppercase tracking-[0.15em] transition-all ${
                          location.pathname === item.to 
                            ? 'bg-vdas-blue text-white shadow-xl shadow-vdas-blue/20 scale-[1.02]' 
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <button 
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-6 py-4 rounded-[1.5rem] text-[14px] font-black uppercase tracking-[0.15em] transition-all ${
                            mobileExpanded === item.label ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                          <svg className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50/50 rounded-[2rem] border border-slate-100/50"
                            >
                              <div className="p-4 grid gap-1">
                                {item.children?.map((child: any) => (
                                  child.external ? (
                                    <a 
                                      key={child.to} 
                                      href={child.to} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="block px-6 py-3.5 text-[12px] font-bold text-slate-500 hover:text-vdas-orange active:bg-vdas-orange-light/50 rounded-xl transition-all"
                                    >
                                      {child.label}
                                    </a>
                                  ) : (
                                    <Link 
                                      key={child.to} 
                                      to={child.to} 
                                      className={`block px-6 py-3.5 text-[12px] font-bold rounded-xl transition-all ${
                                        location.pathname === child.to 
                                          ? 'text-vdas-blue bg-white shadow-sm' 
                                          : 'text-slate-500 hover:text-vdas-blue hover:bg-white/50'
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-8 border-t border-slate-50 bg-slate-50/30 flex-shrink-0">
                <Link 
                  to="/contact" 
                  className="block text-center bg-vdas-orange text-white py-5 rounded-[2rem] text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-vdas-orange/40 hover:bg-vdas-orange-dark active:scale-[0.98] transition-all"
                >
                  Book Consultation
                </Link>
                <div className="mt-8 flex flex-col items-center gap-2">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-vdas-orange rounded-full" />
                    ARN-90854
                    <span className="w-1 h-1 bg-vdas-orange rounded-full" />
                  </p>
                  <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Vishwas Deshpande Associates</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
