import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import ServicesGrid from '../components/home/ServicesGrid'
import CTABanner from '../components/home/CTABanner'
import PageHero from '../components/ui/PageHero'

const PROCESS = [
  { step: '01', title: 'Consultation', desc: 'We begin by understanding your unique financial situation and long-term aspirations.' },
  { step: '02', title: 'Analysis', desc: 'Our experts evaluate your current portfolio and identify opportunities for optimization.' },
  { step: '03', title: 'Strategy', desc: 'We design a personalized roadmap tailored to your specific goals and risk tolerance.' },
  { step: '04', title: 'Execution', desc: 'Implementation of your plan through our secure and efficient digital platforms.' },
  { step: '05', title: 'Review', desc: 'Continuous monitoring and periodic adjustments to keep your plan on the right track.' },
]

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageSEO 
        title="Our Services | Professional Wealth Management | VDAS"
        description="Discover our range of financial services including Mutual Funds, Retirement Planning, and Insurance. Expert guidance for a secure future."
      />

      <PageHero 
        title="Comprehensive Wealth Strategies."
        description="Protecting your capital and accelerating your growth through research-backed financial planning and disciplined execution."
        image="/vdas_office_heritage_1778481089115.png"
      />

      <ServicesGrid />

      {/* Process Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>How We Work</h2>
            <p className="text-slate-500 mt-4 text-lg font-medium">A disciplined approach to achieving your financial goals.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative">
                <div className="text-6xl font-black text-slate-100 absolute -top-10 left-0 -z-0">{p.step}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-vdas-blue text-white rounded-xl flex items-center justify-center font-black mb-6 shadow-lg shadow-vdas-blue/20">
                    {p.step}
                  </div>
                  <h3 className="text-slate-900 font-black text-xl mb-3 tracking-tight font-heading">{p.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Advice? */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-12 tracking-tighter leading-tight font-display">
                The Value of <br />
                <span className="text-vdas-blue italic">Professional</span> Advice.
              </h2>
              <div className="space-y-10">
                {[
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-vdas-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ), 
                    title: 'Emotional Discipline', 
                    desc: 'We help you stay focused during market volatility, preventing impulsive decisions that could derail your long-term goals.' 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-vdas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ), 
                    title: 'Tax Optimization', 
                    desc: 'Sophisticated strategies designed to minimize your tax liability and maximize your net returns through smart asset selection.' 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-vdas-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    ), 
                    title: 'Regular Monitoring', 
                    desc: 'Continuous surveillance of your portfolio to ensure it remains perfectly aligned with your evolving financial objectives.' 
                  },
                  { 
                    icon: (
                      <svg className="w-8 h-8 text-vdas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ), 
                    title: 'Expert Insights', 
                    desc: 'Direct access to institutional-grade research and deep market understanding to guide every investment choice you make.' 
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-slate-900 font-black text-xl mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-base font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
            >
              <img 
                src="/financial_advisor_meeting_1778220581056.png" 
                alt="Professional Consultation" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  )
}
