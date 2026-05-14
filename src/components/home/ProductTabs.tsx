import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const TABS = [
  { 
    id: 'mutual-funds', 
    label: 'Mutual Funds', 
    detailsLink: '/services/mutual-fund',
    calcLink: '/calculator/sip',
    content: { 
      title: 'Wealth Creation via SIP', 
      desc: 'Systematic Investment Plans (SIP) allow you to invest small amounts regularly, harnessing the power of compounding to build substantial long-term wealth.', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ) 
    } 
  },
  { 
    id: 'insurance', 
    label: 'Insurance', 
    detailsLink: '/services/life-insurance',
    calcLink: '/calculator/insurance',
    content: { 
      title: 'Protection for Family', 
      desc: 'Secure your family\'s future with Term Insurance and Health covers tailored to your human life value, ensuring peace of mind for your loved ones.', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ) 
    } 
  },
  { 
    id: 'retirement', 
    label: 'Retirement', 
    detailsLink: '/goals/retirement',
    calcLink: '/calculator/retirement',
    content: { 
      title: 'Golden Years Planning', 
      desc: 'Build a robust retirement corpus that sustains your desired lifestyle post-retirement with strategic pension funds and NPS contributions.', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) 
    } 
  },
  { 
    id: 'tax', 
    label: 'Tax Solutions', 
    detailsLink: '/services/tax-solution',
    calcLink: '/calculator/tax',
    content: { 
      title: 'Smart Tax Saving', 
      desc: 'Maximize your take-home pay with ELSS and other Section 80C compliant investment strategies that also offer the potential for capital appreciation.', 
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ) 
    } 
  },
]

export default function ProductTabs() {
  const [active, setActive] = useState(TABS[0].id)
  const currentTab = TABS.find(t => t.id === active)!

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vdas-orange text-[11px] font-black uppercase tracking-[0.4em] mb-6"
          >
            Explore Solutions
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-vdas-blue-dark tracking-tighter">
            Smart Products for <br />
            <span className="text-vdas-orange">Financial Freedom.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                active === t.id
                  ? 'bg-vdas-blue text-white shadow-premium -translate-y-1'
                  : 'bg-white text-slate-500 hover:bg-slate-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="bg-white p-12 rounded-[3rem] shadow-premium border border-slate-100 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="w-24 h-24 bg-vdas-orange-light rounded-3xl flex items-center justify-center text-5xl shadow-inner text-vdas-orange">
                {currentTab.content.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-black text-vdas-blue-dark mb-4">{currentTab.content.title}</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                  {currentTab.content.desc}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link 
                    to={currentTab.detailsLink}
                    className="bg-vdas-orange text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange-dark transition-all shadow-lg shadow-vdas-orange/20"
                  >
                    Get Details
                  </Link>
                  <Link 
                    to={currentTab.calcLink}
                    className="bg-vdas-blue-light text-vdas-blue px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-blue hover:text-white transition-all"
                  >
                    View Calculators
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

