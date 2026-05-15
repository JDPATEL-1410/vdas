import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

const CALC_CATEGORIES = [
  {
    category: 'Investment Calculators',
    items: [
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ), 
        title: 'SIP Calculator', desc: 'Monthly investment growth via compounding', to: '/calculator/sip', accent: '#1a56db' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ), 
        title: 'Lumpsum Calculator', desc: 'One-time investment returns', to: '/calculator/lumpsum', accent: '#f97316' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
        ), 
        title: 'SWP Calculator', desc: 'Sustainable monthly withdrawals', to: '/calculator/swp', accent: '#1a56db' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        ), 
        title: 'STP Calculator', desc: 'Debt-to-equity transfer strategy', to: '/calculator/stp', accent: '#f97316' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ), 
        title: 'Delay Calculator', desc: 'Cost of postponing investments', to: '/calculator/delay', accent: '#1a56db' 
      },
    ],
  },
  {
    category: 'Life Goal Calculators',
    items: [
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ), 
        title: 'Retirement Calculator', desc: 'Corpus and SIP for retirement', to: '/calculator/retirement', accent: '#f97316' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        ), 
        title: 'Education Calculator', desc: "Plan child's higher education", to: '/calculator/education', accent: '#1a56db' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ), 
        title: 'Marriage Calculator', desc: 'Fund your dream wedding', to: '/calculator/marriage', accent: '#f97316' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ), 
        title: 'Vacation Calculator', desc: 'Save for your dream holiday', to: '/calculator/vacation', accent: '#1a56db' 
      },
    ],
  },
  {
    category: 'Loan & EMI Calculators',
    items: [
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        ), 
        title: 'EMI Calculator', desc: 'Any loan EMI and total cost', to: '/calculator/emi', accent: '#f97316' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ), 
        title: 'Home Loan Calculator', desc: 'EMI, interest, and down-payment', to: '/calculator/home-loan', accent: '#1a56db' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        ), 
        title: 'Car Loan Calculator', desc: 'Vehicle financing cost calculator', to: '/calculator/car-loan', accent: '#f97316' 
      },
    ],
  },
  {
    category: 'Insurance & Tax Calculators',
    items: [
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ), 
        title: 'Insurance Calculator', desc: 'How much life cover do you need?', to: '/calculator/insurance', accent: '#1a56db' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ), 
        title: 'Tax Calculator', desc: 'Old vs New tax regime comparison', to: '/calculator/tax', accent: '#f97316' 
      },
    ],
  },
]

export default function Calculators() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO
        title="Financial Calculators | SIP, EMI, Retirement & More | VDAS"
        description="14 professional financial calculators — SIP, lumpsum, SWP, retirement, EMI, home loan, tax, insurance, and more. Plan your investments with precision."
      />
      
      <PageHero 
        title="Precision Planning Tools."
        titleAccent="Visualize Your Destiny."
        description="14 Professional-grade calculators to help you simulate investments, plan goals, and visualize your financial destiny."
        image="/financial_planning_precision_tools_1778484192484.png"
        breadcrumbs={[{ label: 'Calculators' }]}
      />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Stats - Dark Glass */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            {[
              { value: '14', label: 'Calculators' },
              { value: '100%', label: 'Free to Use' },
              { value: 'All Goals', label: 'Covered' },
            ].map(stat => (
              <div key={stat.label} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-xl">
                <p className="text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-24">
            {CALC_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
                  <div className="w-1.5 h-8 bg-vdas-orange rounded-full shadow-lg shadow-vdas-orange/20" />
                  {cat.category}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {cat.items.map((calc, i) => (
                    <motion.div key={calc.to}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                      <Link to={calc.to}
                        className="group block p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                        
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                          style={{ backgroundColor: `${calc.accent}20`, color: calc.accent }}>
                          {calc.icon}
                        </div>
                        <h3 className="font-black text-white text-lg mb-2 group-hover:text-white transition-colors relative z-10">{calc.title}</h3>
                        <p className="text-white/40 text-xs font-medium leading-relaxed mb-6 relative z-10">{calc.desc}</p>
                        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all group-hover:gap-2.5 relative z-10"
                          style={{ color: calc.accent }}>
                          Calculate <span>→</span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA - Premium Dark */}
          <div className="mt-24 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-vdas-blue/10 rounded-full blur-[120px] -ml-48 -mt-48" />
            <h3 className="text-4xl font-black text-white mb-6 relative z-10">Need Help Interpreting Your Numbers?</h3>
            <p className="text-white/50 text-lg font-medium mb-10 max-w-xl mx-auto relative z-10">Our advisors can help translate calculator outputs into a real, actionable investment plan for you.</p>
            <Link to="/contact" className="inline-block bg-vdas-orange text-white px-12 py-5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-vdas-orange transition-all shadow-xl shadow-vdas-orange/20 relative z-10 transform hover:-translate-y-1">
              Talk to an Advisor
            </Link>
          </div>

          {/* Disclaimer - Institutional */}
          <div className="mt-12 p-6 bg-white/5 border border-white/5 rounded-2xl">
            <p className="text-[11px] text-white/30 font-medium text-center">
              ⚠️ All calculators are for illustrative purposes only. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
