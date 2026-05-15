import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/ui/PageSEO'
import PageHero from '../../components/ui/PageHero'

const GOALS = [
  { 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ), 
    title: 'Retirement', 
    desc: 'Build a corpus for a comfortable, financially independent retirement life.', 
    to: '/goals/retirement', 
    badge: 'Independence'
  },
  { 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), 
    title: 'Dream Home', 
    desc: 'Plan and save systematically to own your ideal home debt-free and stress-free.', 
    to: '/goals/dream-home',
    badge: 'Security'
  },
  { 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ), 
    title: "Child's Education", 
    desc: "Fund your child's higher education at prestigious global institutions.", 
    to: '/goals/child-education',
    badge: 'Future'
  },
  { 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ), 
    title: "Child's Wedding", 
    desc: 'Plan ahead for your child\'s wedding and be prepared for the grand celebration.', 
    to: '/goals/child-wedding',
    badge: 'Celebration'
  },
  { 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), 
    title: 'Emergency Fund', 
    desc: 'Build a liquid safety net to cover 6-12 months of expenses for total peace.', 
    to: '/goals/emergency-fund',
    badge: 'Peace'
  },
  { 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ), 
    title: 'Wealth Creation', 
    desc: 'Grow your wealth systematically over the long term through curated equity.', 
    to: '/goals/wealth-creation',
    badge: 'Growth'
  },
]

export default function GoalsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title="Financial Goals | Plan Your Future | VDAS" description="Plan and achieve your financial goals — retirement, home, education, wedding, and more with VDAS expert guidance." />
      
      <PageHero 
        title="Map Your Life's Destiny."
        description="We help you architect, plan, and achieve your most significant life milestones through research-backed, goal-based investing."
        image="/goal_index_header_1778571678464.png"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GOALS.map((goal, i) => (
              <motion.div key={goal.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={goal.to} className="group relative block bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-vdas-blue transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,86,179,0.12)] h-full overflow-hidden">
                  {/* Decorative background circle */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-vdas-blue/5 transition-colors duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-vdas-blue mb-8 group-hover:bg-vdas-blue group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-vdas-blue/20">
                      {goal.icon}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-vdas-orange/5 text-vdas-orange text-[9px] font-black uppercase tracking-widest rounded-full border border-vdas-orange/10">
                        {goal.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-vdas-blue transition-colors">
                      {goal.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                      {goal.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-vdas-blue uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Achieve This Goal <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
