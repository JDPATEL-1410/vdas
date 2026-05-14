import { useState } from 'react'
import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

const RECENT_NEWSLETTERS = [
  { month: 'April 2026', title: 'Navigating Volatility', desc: 'Strategic insights for high-net-worth families in the current market cycle.', link: '#' },
  { month: 'March 2026', title: 'Fiscal Year Planning', desc: 'Essential tax-saving strategies and year-end wealth optimization checklists.', link: '#' },
  { month: 'February 2026', title: 'Budget 2026 Special', desc: 'Comprehensive analysis of the Union Budget and its impact on personal finance.', link: '#' },
  { month: 'January 2026', title: 'The Year Ahead', desc: 'Setting financial goals and asset allocation strategies for the new decade.', link: '#' },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO 
        title="Financial Newsletter | VDAS Monthly Insights" 
        description="Subscribe to VDAS monthly financial newsletter — market updates, tax tips, and investment ideas delivered to your inbox." 
      />
      
      <PageHero 
        title="Institutional Wisdom."
        titleAccent="Monthly."
        description="Join our inner circle of informed investors who receive our curated market intelligence and strategic insights delivered directly to their inbox."
        image="/financial_newsletter_tablet_1778481209762.png"
        badge="Strategic Intelligence"
        breadcrumbs={[{ label: 'Newsletter' }]}
      />

      {/* Subscribe Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vdas-orange/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-black text-vdas-blue-dark mb-8 tracking-tighter">Stay Ahead of the <br /><span className="text-vdas-blue">Market Curve.</span></h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="bg-vdas-blue/5 border border-vdas-blue/10 rounded-3xl p-12"
                >
                  <div className="w-16 h-16 bg-vdas-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-vdas-blue/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-vdas-blue-dark mb-3">Subscription Active</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">Welcome to the VDAS Monthly Digest. You'll receive our next edition in your inbox shortly.</p>
                </motion.div>
              ) : (
                <div className="space-y-10">
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                    Our newsletter isn't just news—it's high-conviction research and tactical guidance for serious investors.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-8 py-5 rounded-2xl bg-white border border-slate-200 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-vdas-blue transition-all" 
                    />
                    <button 
                      onClick={() => email && setSubmitted(true)}
                      className="bg-vdas-blue text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-blue-dark transition-all shadow-xl shadow-vdas-blue/20"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No Spam. Institutional Quality Content Only.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Editions */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-vdas-blue-dark tracking-tighter leading-tight">
              Recent <br />
              <span className="text-vdas-blue">Editions.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RECENT_NEWSLETTERS.map((item, i) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <span className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-4">{item.month}</span>
                <h3 className="text-xl font-black text-vdas-blue-dark mb-4 tracking-tight group-hover:text-vdas-blue transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{item.desc}</p>
                <a 
                  href={item.link} 
                  className="mt-auto inline-flex items-center gap-2 text-[10px] font-black text-vdas-blue uppercase tracking-widest group/link"
                >
                  View Archive
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
