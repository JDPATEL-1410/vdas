import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../ui/PageHero'

interface RelatedCalc {
  title: string
  to: string
  icon: React.ReactNode
}

interface CalculatorLayoutProps {
  title: string
  titleAccent?: string
  description: string
  eyebrow?: string
  children: ReactNode
  relatedCalcs?: RelatedCalc[]
  disclaimer?: string
  image?: string
  accentColor?: string
}

const DEFAULT_DISCLAIMER =
  'This calculator is for illustrative purposes only. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.'

export default function CalculatorLayout({
  title,
  titleAccent,
  description,
  eyebrow = 'Financial Calculator',
  children,
  relatedCalcs,
  disclaimer,
  image,
  accentColor,
}: CalculatorLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      <PageHero
        badge={eyebrow}
        title={title}
        titleAccent={titleAccent}
        description={description}
        breadcrumbs={[{ label: 'Calculators', to: '/calculators' }, { label: title }]}
        image={image || '/financial_freedom_family_1778479843533.png'}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
          <p className="text-xs text-amber-800 font-medium leading-relaxed">
            <strong>⚠️ Disclaimer:</strong> {disclaimer || DEFAULT_DISCLAIMER}
          </p>
        </div>

        {/* Related Calculators */}
        {relatedCalcs && relatedCalcs.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Related Calculators</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedCalcs.map((calc) => (
                <Link
                  key={calc.to}
                  to={calc.to}
                  className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl transition-all group"
                >
                  <span className="text-2xl">{calc.icon}</span>
                  <span className="text-xs font-black text-slate-700 group-hover:text-blue-700 uppercase tracking-wide">{calc.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
