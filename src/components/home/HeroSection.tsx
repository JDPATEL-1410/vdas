import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    id: 1,
    badge: 'Institutional Grade Advisory',
    title: 'Visionary Wealth.\nCrystal Clear Clarity.',
    accent: 'since 1991',
    subtitle: "We transform complex financial landscapes into precise, high-performance pathways for India's most discerning families.",
    image: '/wealth_management_light_hero_1778502035521.png',
    stat: '33+ Years',
    statLabel: 'Legacy of Excellence',
    primaryBtn: { text: 'Secure Your Future', link: '/contact' },
    secondaryBtn: { text: 'Our Expertise', link: '/services' }
  },
  {
    id: 2,
    badge: 'Strategic Retirement',
    title: 'Golden Years.\nZero Compromise.',
    accent: 'Absolute Security',
    subtitle: 'Engineered for absolute security. We build inflation-proof portfolios that safeguard your lifestyle and your peace of mind.',
    image: '/retirement_light_hero_1778502050360.png',
    stat: '100%',
    statLabel: 'Peace of Mind',
    primaryBtn: { text: 'Plan Retirement', link: '/contact' },
    secondaryBtn: { text: 'Retirement Hub', link: '/goals/retirement' }
  },
  {
    id: 3,
    badge: 'Disciplined Growth',
    title: 'Generational Goals.\nPlanned to Perfection.',
    accent: 'Planned Growth',
    subtitle: "From elite global education to bespoke real estate—our SIP frameworks turn your highest aspirations into mathematical certainties.",
    image: '/sip_goals_light_hero_1778502068391.png',
    stat: '₹500Cr+',
    statLabel: 'Advisory AUM',
    primaryBtn: { text: 'Start Growth Journey', link: '/contact' },
    secondaryBtn: { text: 'Growth Tools', link: '/calculators' }
  }
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-white overflow-hidden pt-32 lg:pt-0">
      {/* Dynamic Background Design - Premium Mesh */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-vdas-orange/5 rounded-full blur-[120px] -mr-32 -mt-32 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-vdas-blue/5 rounded-full blur-[100px] -ml-24 -mb-24" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content Area */}
          <div className="lg:col-span-7 text-center lg:text-left pt-8 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-2.5 rounded-full mb-8 lg:mb-10 shadow-sm mx-auto lg:mx-0">
                  <div className="w-2 h-2 bg-vdas-orange rounded-full animate-pulse shadow-[0_0_10px_rgba(255,107,0,0.6)]" />
                  <span className="text-vdas-blue text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em]">
                    {SLIDES[current].badge}
                  </span>
                </div>

                {/* Heading - Refined Sizing */}
                <h1 className="text-[2.5rem] sm:text-6xl lg:text-[5.5rem] font-black text-slate-900 leading-[1] tracking-tighter mb-6 lg:mb-8 font-heading whitespace-pre-line">
                  {SLIDES[current].title}
                  <span className="block text-vdas-orange text-2xl lg:text-4xl mt-4 tracking-normal font-medium italic opacity-80">
                    — {SLIDES[current].accent}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 lg:mb-12 max-w-2xl lg:max-w-xl font-medium mx-auto lg:mx-0">
                  {SLIDES[current].subtitle}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12 justify-center lg:justify-start">
                  <Link
                    to={SLIDES[current].primaryBtn.link}
                    className="group inline-flex items-center justify-center bg-vdas-orange text-white px-10 lg:px-12 py-4 lg:py-5 rounded-2xl text-[12px] lg:text-[13px] font-black uppercase tracking-widest transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-10px_rgba(255,107,0,0.5)] active:scale-95 shadow-[0_15px_30px_-10px_rgba(255,107,0,0.3)]"
                  >
                    {SLIDES[current].primaryBtn.text}
                    <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to={SLIDES[current].secondaryBtn.link}
                    className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-10 py-4 lg:py-5 rounded-2xl text-[12px] lg:text-[13px] font-black uppercase tracking-widest transition-all hover:bg-slate-50 lg:hover:translate-y-[-2px] shadow-sm"
                  >
                    {SLIDES[current].secondaryBtn.text}
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center lg:justify-start gap-4 opacity-70">
                   <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-9 h-9 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">
                         {String.fromCharCode(64 + i)}
                       </div>
                     ))}
                   </div>
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-l border-slate-200 pl-4">
                     Trusted by 5,000+ Elite Families
                   </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Visual Frame */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Visual Frame - Premium Design */}
                <div className="relative z-10 rounded-[4rem] lg:rounded-[6rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-50 group">
                  <img
                    src={SLIDES[current].image}
                    alt={SLIDES[current].title}
                    className="w-full h-[650px] object-cover transition-transform duration-[8s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Stat Card */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-10 -left-20 bg-white/90 backdrop-blur-2xl p-8 lg:p-10 rounded-[3rem] shadow-premium border border-white z-20 min-w-[280px]"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-vdas-orange text-white rounded-2xl flex items-center justify-center shadow-lg shadow-vdas-orange/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-1 font-heading">{SLIDES[current].stat}</p>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{SLIDES[current].statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
