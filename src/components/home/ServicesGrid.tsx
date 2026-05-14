import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    image: '/modern_financial_advisor_client_meeting_1778336570859.png',
    title: 'Mutual Fund Advisory',
    description: 'Personalized fund selection guided by expert analysis. We meet you where you are to build a roadmap that aligns with your specific life milestones.',
    features: ['Systematic Planning (SIP)', 'Portfolio Review', 'ELSS Tax Savings'],
    link: '/services/mutual-fund',
    accent: 'vdas-blue',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    image: '/wealth_management_growth_concept_1778336584128.png',
    title: 'Wealth Management',
    description: 'Advanced asset allocation strategies designed for high-net-worth growth. We utilize sophisticated models to ensure your capital grows with stability.',
    features: ['PMS & AIF Advisory', 'Custom Portfolios', 'Asset Allocation'],
    link: '/services/goal-base-investing',
    accent: 'vdas-orange',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    image: '/family_security_insurance_concept_1778336598904.png',
    title: 'Insurance Planning',
    description: 'Comprehensive protection for what matters most. Our strategies ensure your family\'s legacy and lifestyle remain secure across generations.',
    features: ['Term Protection', 'Health Mediclaim', 'Claim Assistance'],
    link: '/services/life-insurance',
    accent: 'vdas-blue',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    image: '/retirement_lifestyle_active_seniors_1778336620889.png',
    title: 'Retirement Planning',
    description: 'Design your golden years with confidence. We help you build an inflation-adjusted corpus for a life of freedom and peace post-retirement.',
    features: ['Pension Generation', 'Early Retirement', 'Corpus Management'],
    link: '/goals/retirement',
    accent: 'vdas-orange',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vdas-orange text-[11px] font-black uppercase tracking-[0.4em] mb-6"
          >
            Our Core Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-black text-vdas-blue-dark tracking-tighter"
          >
            Financial Services for <br />
            <span className="text-vdas-blue">Every Life Stage.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:border-vdas-blue/20 shadow-premium transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-vdas-blue-dark/80 via-transparent to-transparent" />
                <div className={`absolute bottom-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl ${svc.accent === 'vdas-orange' ? 'bg-vdas-orange' : 'bg-vdas-blue'}`}>
                  {svc.icon}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-vdas-blue-dark mb-4">{svc.title}</h3>
                <p className="text-slate-500 text-base font-medium mb-8 leading-relaxed">{svc.description}</p>
                <div className="space-y-3 mb-10">
                  {svc.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${svc.accent === 'vdas-orange' ? 'bg-vdas-orange' : 'bg-vdas-blue'}`} />
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={svc.link} className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:gap-4 ${svc.accent === 'vdas-orange' ? 'text-vdas-orange' : 'text-vdas-blue'}`}>
                  Explore Service
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


