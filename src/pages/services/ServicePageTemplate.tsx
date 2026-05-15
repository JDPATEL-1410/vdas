import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/ui/PageSEO'
import PageHero from '../../components/ui/PageHero'

interface ServiceFeature { title: string; desc: string }

interface ServicePageProps {
  icon: string; title: string; subtitle?: string; image: string
  seoTitle: string; seoDesc: string; breadcrumbLabel: string
  features: ServiceFeature[]
  whyVDAS: string[]
  relatedServices: { label: string; to: string }[]
  ctaText?: string
  children?: ReactNode
}

export default function ServicePageTemplate({
  icon, title, subtitle, image, seoTitle, seoDesc, breadcrumbLabel,
  features, whyVDAS, relatedServices, ctaText, children
}: ServicePageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title={seoTitle} description={seoDesc} />
      <PageHero 
        title={title}
        description={subtitle}
        image={image}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: breadcrumbLabel }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-8">What We <span className="text-blue-600">Offer</span></h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((f, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                      <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <h3 className="font-black text-slate-900 mb-2">{f.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Why VDAS */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">Why Choose <span className="text-blue-600">VDAS?</span></h2>
                <ul className="space-y-3">
                  {whyVDAS.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {children}
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0A1A4F] rounded-3xl p-8 text-center">
                <span className="text-5xl block mb-4">{icon}</span>
                <h3 className="!text-white font-black text-lg mb-3">{ctaText || 'Get Expert Advice'}</h3>
                <p className="text-slate-400 text-sm font-medium mb-6">Book a free consultation with our certified advisor.</p>
                <Link to="/contact" className="block w-full bg-blue-500 hover:bg-blue-400 text-white py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors">
                  Book Free Consultation
                </Link>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
                <h4 className="font-black text-slate-900 text-sm mb-4">Our Other Services</h4>
                <div className="space-y-2">
                  {relatedServices.map(l => (
                    <Link key={l.to} to={l.to} className="block text-sm text-slate-600 hover:text-blue-600 font-medium py-1 transition-colors">{l.label}</Link>
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
