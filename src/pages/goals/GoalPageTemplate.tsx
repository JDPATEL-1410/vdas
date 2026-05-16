import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/ui/PageSEO'
import PageHero from '../../components/ui/PageHero'

interface GoalStep { step: string; title: string; desc: string }
interface GoalFact { label: string; value: string }

interface GoalPageProps {
  icon: ReactNode
  title: string
  subtitle?: string
  image: string
  seoTitle: string
  seoDesc: string
  breadcrumbLabel: string
  steps: GoalStep[]
  facts: GoalFact[]
  calculatorLink: string
  calculatorLabel: string
  children?: ReactNode
}

export default function GoalPageTemplate({
  icon, title, subtitle, image, seoTitle, seoDesc, breadcrumbLabel,
  steps, facts, calculatorLink, calculatorLabel, children
}: GoalPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title={seoTitle} description={seoDesc} />
      <PageHero 
        title={title}
        description={subtitle}
        image={image}
        breadcrumbs={[{ label: 'Goals', to: '/goals' }, { label: breadcrumbLabel }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Key Stats */}
              <div className="grid sm:grid-cols-3 gap-6">
                {facts.map(f => (
                  <div key={f.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                    <p className="text-3xl font-black text-blue-700 mb-1">{f.value}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{f.label}</p>
                  </div>
                ))}
              </div>

              {/* How We Help */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Our <span className="text-blue-600">Action Plan</span></h2>
                <div className="space-y-6">
                  {steps.map((s, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center">{i + 1}</div>
                      <div>
                        <h3 className="font-black text-slate-900 mb-1">{s.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {children}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0A1A4F] rounded-3xl p-8 text-center">
                <div className="text-blue-400 flex justify-center mb-6">{icon}</div>
                <h3 className="!text-white font-black text-lg mb-3">Start Planning Today</h3>
                <p className="text-slate-400 text-sm font-medium mb-6">Get a personalised plan for this goal from our advisor.</p>
                <Link to="/contact" className="block w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors">
                  Book Free Consultation
                </Link>
              </div>
              <Link to={calculatorLink} className="block bg-orange-50 border border-orange-200 rounded-3xl p-6 hover:bg-orange-100 transition-colors group">
                <p className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-2">Calculators</p>
                <p className="text-slate-900 font-black group-hover:text-orange-700 transition-colors">{calculatorLabel}</p>
              </Link>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
                <h4 className="font-black text-slate-900 text-sm mb-4">Other Financial Goals</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Retirement', to: '/goals/retirement' },
                    { label: 'Dream Home', to: '/goals/dream-home' },
                    { label: 'Child Education', to: '/goals/child-education' },
                    { label: 'Child Wedding', to: '/goals/child-wedding' },
                    { label: 'Emergency Fund', to: '/goals/emergency-fund' },
                    { label: 'Wealth Creation', to: '/goals/wealth-creation' },
                  ].map(l => (
                    <Link key={l.to} to={l.to} className="block text-sm text-slate-600 hover:text-blue-600 font-medium py-1 transition-colors border-l-2 border-transparent hover:border-blue-600 pl-4">{l.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
