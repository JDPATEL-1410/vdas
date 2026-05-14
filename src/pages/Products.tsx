import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import ProductTabs from '../components/home/ProductTabs'
import SIPWidget from '../components/home/SIPWidget'
import CTABanner from '../components/home/CTABanner'
import PageHeader from '../components/ui/PageHeader'

export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageSEO 
        title="Our Investment Products | Mutual Funds & Wealth Management | VDAS"
        description="Explore our range of curated investment products including Mutual Funds, SIPs, and PMS. Tailored solutions for your financial goals."
      />

      <PageHeader 
        title="Institutional-Grade Selection."
        subtitle="Access top-tier mutual fund schemes and structured products, curated through 33+ years of market cycles."
        image="/wealth_management_dashboard_1778479882040.png"
      />

      <div className="bg-white">
        <ProductTabs />
      </div>

      <SIPWidget />

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              The <span className="text-vdas-royal">VDAS Advantage.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Professional guidance and disciplined planning to help you achieve your financial milestones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Expert Selection', desc: "We filter through thousands of schemes to select the ones that best align with your goals." },
              { icon: '📱', title: 'Digital Investing', desc: 'Seamlessly invest through our secure and paperless digital platforms with real-time tracking.' },
              { icon: '🔄', title: 'Portfolio Review', desc: 'Continuous monitoring and periodic rebalancing to ensure your investments stay on track.' },
              { icon: '🛡️', title: 'Dedicated Support', desc: 'Personalized assistance for all your service requests, from nominations to withdrawals.' },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl group hover:border-vdas-royal/20 transition-all"
              >
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  )
}
