import { motion } from 'framer-motion'

const CARDS = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Financial Planning',
    subtitle: 'Strategic Foundation',
    points: [
      'Systematic Investment (SIP)',
      'Goal-based Wealth Creation',
      'Asset Allocation Models',
      'Education & Legacy Planning',
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Tax & Security',
    subtitle: 'Protect & Optimize',
    points: [
      'Tax-Saving (ELSS) Plans',
      'Life & Health Insurance',
      'Retirement (NPS) Strategies',
      'Estate Guidance',
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Wealth Management',
    subtitle: 'Advanced Growth',
    points: [
      'Portfolio Management (PMS)',
      'HNI Advisory Services',
      'Alternative Investments (AIF)',
      'Global Asset Access',
    ],
  },
]

export default function WhyVDAS() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <img src="/holistic_wealth_solutions_concept_1778336797600.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vdas-orange text-[11px] font-black uppercase tracking-[0.5em] mb-6"
          >
            Institutional Advisory
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-vdas-blue-dark tracking-tighter leading-[1.1] mb-8 font-display">
            Holistic Wealth <br />
            <span className="text-vdas-blue italic">Solutions.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            We provide a 360-degree approach to your finances, ensuring every aspect of your wealth is interconnected and optimized for generational growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:border-vdas-blue/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-premium transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-vdas-blue to-vdas-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 text-4xl group-hover:scale-110 group-hover:bg-vdas-blue group-hover:text-white transition-all duration-700">
                <div className="text-vdas-blue group-hover:text-white transition-colors">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-3xl font-black text-vdas-blue-dark mb-2 tracking-tighter">{card.title}</h3>
              <p className="text-[10px] font-black text-vdas-orange uppercase tracking-[0.3em] mb-10">{card.subtitle}</p>
              <ul className="space-y-4">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-4 text-base font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-vdas-orange/30 group-hover:bg-vdas-orange transition-colors" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Institutional Trust Bar ── */}
        <div className="mt-32">
          <hr className="border-slate-100 mb-20" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-sm text-center lg:text-left flex-shrink-0">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Strategic Partners</p>
              <h4 className="text-2xl font-black text-vdas-blue-dark tracking-tight">Access to India's leading financial institutions.</h4>
            </div>
            
            <div className="flex-1 overflow-hidden relative">
              <div className="flex gap-20 animate-marquee whitespace-nowrap py-4">
                {[...['HDFC Bank', 'ICICI Prudential', 'SBI Mutual Fund', 'Kotak', 'Axis Bank', 'Nippon India', 'Tata Mutual Fund', 'DSP Mutual Fund'], ...['HDFC Bank', 'ICICI Prudential', 'SBI Mutual Fund', 'Kotak', 'Axis Bank', 'Nippon India', 'Tata Mutual Fund', 'DSP Mutual Fund']].map((brand, idx) => (
                  <span key={`${brand}-${idx}`} className="text-2xl font-black text-slate-300 uppercase tracking-[0.2em] hover:text-vdas-blue transition-colors cursor-default select-none">
                    {brand}
                  </span>
                ))}
              </div>
              {/* Fade masks */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

