import { useState } from 'react'
import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import PageHeader from '../components/ui/PageHeader'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title="Financial Newsletter | VDAS Monthly Insights" description="Subscribe to VDAS monthly financial newsletter — market updates, tax tips, and investment ideas delivered free." />
      
      <PageHeader 
        title="Institutional Wisdom. Monthly."
        subtitle="Join our inner circle of informed investors who receive our curated market intelligence and strategic insights delivered to their inbox."
        image="/financial_newsletter_tablet_1778481209762.png"
      />

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-3xl p-16">
              <span className="text-6xl block mb-6">🎉</span>
              <h2 className="text-3xl font-black text-green-800 mb-3">You're In!</h2>
              <p className="text-green-700 font-medium">Thank you for subscribing to the VDAS Monthly Digest. Check your inbox for a confirmation email.</p>
            </motion.div>
          ) : (
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4">What You'll Get</h2>
              <ul className="space-y-3 mb-10 text-left">
                {['Monthly market outlook and what it means for your portfolio', 'Tax-saving tips before each financial year deadline', 'New fund launches and our honest assessment', 'Financial planning checklists for every life stage', 'Q&A from our subscriber community'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={() => email && setSubmitted(true)}
                  className="bg-blue-600 text-white px-6 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-[10px] text-slate-400 mt-3">No spam. Unsubscribe anytime. Your email stays private.</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
