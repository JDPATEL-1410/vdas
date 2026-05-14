import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    id: 1,
    badge: 'Institutional Grade Advisory',
    title: 'Visionary Wealth.\nCrystal Clear Clarity.',
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
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-0">
      {/* Dynamic Background Design - Responsive */}
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-1/2 lg:h-full bg-slate-50/50 -z-10 rounded-b-[5rem] lg:rounded-b-none lg:rounded-l-[15rem] opacity-70" />
      <div className="absolute -top-24 -left-24 w-64 lg:w-[35rem] h-64 lg:h-[35rem] bg-vdas-orange/5 rounded-full blur-[80px] lg:blur-[140px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content Area */}
          <div className="lg:col-span-7 relative z-10 order-2 lg:order-1 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-vdas-orange/10 border border-vdas-orange/20 px-5 py-2.5 rounded-full mb-8 lg:mb-10 shadow-sm mx-auto lg:mx-0">
                  <div className="w-2 h-2 bg-vdas-orange rounded-full animate-pulse shadow-[0_0_10px_rgba(255,107,0,0.6)]" />
                  <span className="text-vdas-orange text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] font-heading">
                    {SLIDES[current].badge}
                  </span>
                </div>

                {/* Heading - Responsive Sizing */}
                <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black text-slate-900 leading-[1.05] lg:leading-[1] tracking-tight mb-6 lg:mb-8 font-heading whitespace-pre-line">
                  {SLIDES[current].title}
                </h1>

                {/* Subtitle - Responsive Styling */}
                <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 lg:mb-12 max-w-2xl lg:max-w-xl font-medium lg:border-l-4 border-vdas-orange/20 lg:pl-6 mx-auto lg:mx-0">
                  {SLIDES[current].subtitle}
                </p>

                {/* Actions - Mobile Stacked */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12">
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
                    className="inline-flex items-center justify-center bg-white border-2 border-slate-100 text-slate-900 px-10 py-4 lg:py-5 rounded-2xl text-[12px] lg:text-[13px] font-black uppercase tracking-widest transition-all hover:bg-slate-50 hover:border-slate-200 lg:hover:translate-y-[-2px] shadow-sm"
                  >
                    {SLIDES[current].secondaryBtn.text}
                  </Link>
                </div>

                {/* Social Proof - Enhancement */}
                <div className="flex items-center justify-center lg:justify-start gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                     ))}
                   </div>
                   <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                     Trusted by 5,000+ Elite Families
                   </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Visual Frame - Hidden/Condensed on Mobile */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Visual Frame */}
                <div className="relative z-10 rounded-[3rem] lg:rounded-[6rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border-[8px] lg:border-[16px] border-white bg-white group">
                  <img
                    src={SLIDES[current].image}
                    alt={SLIDES[current].title}
                    className="w-full h-[350px] lg:h-[650px] object-cover transition-transform duration-[5000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                </div>

                {/* Floating Milestone Card - Responsive Positioning */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-6 lg:-bottom-12 -right-4 lg:-left-20 bg-white/95 backdrop-blur-2xl p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white z-20 min-w-[200px] lg:min-w-[300px]"
                >
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 bg-vdas-orange rounded-[1rem] lg:rounded-[1.5rem] flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 lg:w-8 h-6 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none mb-1 font-heading">{SLIDES[current].stat}</p>
                      <p className="text-[9px] lg:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{SLIDES[current].statLabel}</p>
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
