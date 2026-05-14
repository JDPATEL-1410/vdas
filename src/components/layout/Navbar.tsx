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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-xl shadow-slate-100 py-3' : 'bg-white/80 backdrop-blur-md py-5'
      } ${mobileOpen ? 'opacity-0 lg:opacity-100' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/vdas_logo_new.png" 
                alt="VDAS Financial Logo" 
                className="h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}>
                  {item.to ? (
                    <Link to={item.to}
                      className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                        location.pathname === item.to ? 'text-vdas-orange bg-vdas-orange-light' : 'text-slate-600 hover:text-vdas-blue hover:bg-slate-50'
                      }`}>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                        openMenu === item.label ? 'text-vdas-blue bg-vdas-blue-light' : 'text-slate-600 hover:text-vdas-blue hover:bg-slate-50'
                      }`}>
                      {item.label}
                      <svg className={`w-3 h-3 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-premium border border-slate-50 p-2 min-w-[240px]"
                      >
                        <div className={`grid ${item.label === 'Calculators' ? 'grid-cols-2 w-[480px]' : 'grid-cols-1'} gap-1`}>
                          {item.children.map((child: any) => (
                            child.external ? (
                              <a key={child.to} href={child.to} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black text-slate-600 hover:text-vdas-orange hover:bg-vdas-orange-light transition-all">
                                {child.label}
                              </a>
                            ) : (
                              <Link key={child.to} to={child.to}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black text-slate-600 hover:text-vdas-orange hover:bg-vdas-orange-light transition-all">
                                {child.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Action */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact"
                className="bg-vdas-orange text-white px-7 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange-dark shadow-orange transition-all">
                Contact Us
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
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex items-center justify-between border-b border-slate-100 flex-shrink-0">
                <img src="/vdas_logo_new.png" alt="Logo" className="h-10 w-auto" />
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-1 min-h-0">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="py-0.5">
                    {item.to ? (
                      <Link 
                        to={item.to} 
                        className={`block px-5 py-3.5 rounded-2xl text-[13px] font-black uppercase tracking-widest transition-all ${
                          location.pathname === item.to ? 'bg-vdas-orange-light text-vdas-orange' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button 
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-black uppercase tracking-widest transition-all ${
                            mobileExpanded === item.label ? 'bg-vdas-blue-light text-vdas-blue' : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                          <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50 rounded-2xl mt-1 ml-2"
                            >
                              <div className="p-2 space-y-0.5">
                                {item.children?.map((child: any) => (
                                  child.external ? (
                                    <a 
                                      key={child.to} 
                                      href={child.to} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="block px-6 py-3 text-[12px] font-bold text-slate-500 hover:text-vdas-orange transition-colors"
                                    >
                                      {child.label}
                                    </a>
                                  ) : (
                                    <Link 
                                      key={child.to} 
                                      to={child.to} 
                                      className={`block px-6 py-3 text-[12px] font-bold transition-colors ${
                                        location.pathname === child.to ? 'text-vdas-orange' : 'text-slate-500 hover:text-vdas-orange'
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
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-slate-100 bg-white flex-shrink-0">
                <Link 
                  to="/contact" 
                  className="block text-center bg-vdas-orange text-white py-4 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] shadow-lg shadow-vdas-orange/30 hover:bg-vdas-orange-dark transition-all"
                >
                  Contact Us
                </Link>
                <p className="mt-4 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  ARN-90854 • VDAS Financial
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
