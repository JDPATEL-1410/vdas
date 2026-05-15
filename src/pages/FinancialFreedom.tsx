import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

const PRINCIPLES = [
  { no: '01', title: 'Money Is a Tool, Not the Goal', desc: 'Financial freedom means having enough money to do what matters most — more time with family, pursuing passions, and giving back.' },
  { no: '02', title: 'Start Early, Stay Consistent', desc: 'A ₹5,000 SIP at 25 is worth more than ₹50,000 SIP at 45. Time in the market beats timing the market, every time.' },
  { no: '03', title: 'Protect Before You Grow', desc: 'Adequate term insurance and health cover must come before any investment. One medical emergency without cover can wipe out years of savings.' },
  { no: '04', title: 'Emergency Fund First', desc: '6 months of expenses in a liquid fund is non-negotiable. Only after this safety net is built should wealth creation investments begin.' },
  { no: '05', title: 'Invest Across Goal Buckets', desc: 'Every investment must be tied to a specific goal with a specific timeline. Goal-less investing leads to goal-less outcomes.' },
  { no: '06', title: 'Review Annually, Rebalance Wisely', desc: 'Markets change. Incomes change. Goals change. Annual reviews ensure your portfolio evolves with your life, not against it.' },
]

export default function FinancialFreedom() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title="Financial Freedom Framework | VDAS" description="The VDAS Financial Freedom Framework — 6 timeless principles to achieve financial independence in India." />
      
      <PageHero 
        title="Your Path to Autonomy."
        titleAccent="Architecting Freedom."
        description="Financial freedom isn't about being rich. It's about having enough resources to choose how you spend your time, your energy, and your life."
        image="/financial_freedom_family_1778479843533.png"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">The 6 Principles of <span className="text-blue-600">Financial Freedom</span></h2>
            <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto">Built from 33 years of helping 5,000+ families achieve financial independence — these principles have stood the test of time.</p>
          </div>

          <div className="space-y-6">
            {PRINCIPLES.map((p, i) => (
              <motion.div key={p.no} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-8 items-start p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-lg transition-all">
                <span className="text-4xl font-black text-blue-100 flex-shrink-0 w-12">{p.no}</span>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#0A1A4F] rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-black text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-slate-400 text-base font-medium mb-8 max-w-md mx-auto">Book a free consultation with Vishwas Deshpande and get a personalised roadmap to financial freedom.</p>
            <Link to="/contact" className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
