import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/ui/PageSEO'
import PageHeader from '../../components/ui/PageHeader'

const GOALS = [
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ), 
    title: 'Retirement', desc: 'Build a corpus for a comfortable, financially independent retirement.', to: '/goals/retirement', color: 'bg-blue-50 border-blue-100', iconColor: 'text-blue-600' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), 
    title: 'Dream Home', desc: 'Plan and save systematically to own your ideal home debt-free.', to: '/goals/dream-home', color: 'bg-orange-50 border-orange-100', iconColor: 'text-orange-600' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ), 
    title: "Child's Education", desc: "Fund your child's higher education — IIT, IIM or international degree.", to: '/goals/child-education', color: 'bg-emerald-50 border-emerald-100', iconColor: 'text-emerald-600' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ), 
    title: "Child's Wedding", desc: 'Plan ahead for your child\'s wedding and be prepared financially.', to: '/goals/child-wedding', color: 'bg-pink-50 border-pink-100', iconColor: 'text-pink-600' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), 
    title: 'Emergency Fund', desc: 'Build 6 months of expenses as a liquid safety net.', to: '/goals/emergency-fund', color: 'bg-amber-50 border-amber-100', iconColor: 'text-amber-600' 
  },
  { 
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ), 
    title: 'Wealth Creation', desc: 'Grow your wealth systematically over the long term through equity.', to: '/goals/wealth-creation', color: 'bg-purple-50 border-purple-100', iconColor: 'text-purple-600' 
  },
]

export default function GoalsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title="Financial Goals | Plan Your Future | VDAS" description="Plan and achieve your financial goals — retirement, home, education, wedding, and more with VDAS expert guidance." />
      
      <PageHeader 
        title="Map Your Life's Destiny."
        subtitle="We help you architect, plan, and achieve your most significant life milestones through research-backed, goal-based investing."
        image="/goal_index_header_1778571678464.png"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GOALS.map((goal, i) => (
              <motion.div key={goal.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={goal.to} className={`block p-8 rounded-3xl border ${goal.color} hover:shadow-xl transition-all group`}>
                  <div className={`mb-5 ${goal.iconColor}`}>{goal.icon}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{goal.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-4">{goal.desc}</p>
                  <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    Plan This Goal <span>→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
