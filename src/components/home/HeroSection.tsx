import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    id: 1,
    eyebrow: 'Est. 1991 · ARN-90854',
    badge: 'Institutional Grade Advisory',
    title: 'Visionary Wealth.',
    titleLine2: 'Crystal Clarity.',
    subtitle: "We transform complex financial landscapes into precise, high-performance pathways for India's most discerning families.",
    image: '/wealth_management_light_hero_1778502035521.png',
    stats: [
      { value: '33+', label: 'Years' },
      { value: '5,000+', label: 'Families' },
      { value: '₹500Cr+', label: 'AUM' },
    ],
    primaryBtn: { text: 'Secure Your Future', link: '/contact' },
    secondaryBtn: { text: 'Our Expertise', link: '/services' },
    color: 'from-amber-500/10 to-orange-600/5',
  },
  {
    id: 2,
    eyebrow: 'Strategic Retirement Planning',
    badge: 'Zero Compromise Security',
    title: 'Golden Years.',
    titleLine2: 'Absolute Peace.',
    subtitle: 'Engineered for absolute security. We build inflation-proof portfolios that safeguard your lifestyle and your peace of mind.',
    image: '/retirement_light_hero_1778502050360.png',
    stats: [
      { value: '100%', label: 'Commitment' },
      { value: '33+', label: 'Years' },
      { value: 'MDRT', label: 'Status' },
    ],
    primaryBtn: { text: 'Plan Retirement', link: '/contact' },
    secondaryBtn: { text: 'Retirement Hub', link: '/goals/retirement' },
    color: 'from-blue-500/10 to-indigo-600/5',
  },
  {
    id: 3,
    eyebrow: 'SIP · Goals · Wealth Creation',
    badge: 'Disciplined Growth Engine',
    title: 'Generational Goals.',
    titleLine2: 'Mathematical Precision.',
    subtitle: "From elite global education to bespoke real estate—our SIP frameworks turn your highest aspirations into mathematical certainties.",
    image: '/sip_goals_light_hero_1778502068391.png',
    stats: [
      { value: '14+', label: 'Products' },
      { value: '₹500Cr+', label: 'AUM' },
      { value: '5,000+', label: 'Investors' },
    ],
    primaryBtn: { text: 'Start Growth Journey', link: '/contact' },
    secondaryBtn: { text: 'SIP Calculator', link: '/calculator/sip' },
    color: 'from-emerald-500/10 to-teal-600/5',
  }
]

const TICKER_ITEMS = [
  'AMFI Registered · ARN-90854',
  'Mutual Funds are subject to market risks',
  '33+ Years of Institutional Excellence',
  '5,000+ Elite Families Trust VDAS',
  'MDRT Status · Global Recognition',
  '₹500Cr+ Assets Under Advisory',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [tickerPos, setTickerPos] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  useEffect(() => {
    const ticker = setInterval(() => {
      setTickerPos(prev => (prev + 1) % TICKER_ITEMS.length)
    }, 3000)
    return () => clearInterval(ticker)
  }, [])

  const slide = SLIDES[current]

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      
      {/* ── Premium Top Ticker Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[45] bg-vdas-blue-dark h-8 flex items-center overflow-hidden">
        <div className="flex items-center gap-0 w-full overflow-hidden">
          <div className="flex-shrink-0 px-4 bg-vdas-orange text-white text-[9px] font-black uppercase tracking-widest h-8 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
          <div className="flex-1 overflow-hidden relative h-8">
            <div className="flex animate-[marquee_30s_linear_infinite] items-center h-8 whitespace-nowrap gap-10">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="text-white/80 text-[9px] font-bold uppercase tracking-[0.25em] flex items-center gap-3">
                  <span className="w-1 h-1 bg-vdas-orange rounded-full flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Hero Content ── */}
      <div className="flex-1 flex items-center pt-[calc(4rem+2rem)] lg:pt-[calc(5rem+2rem)] pb-16 relative">
        
        {/* Background Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={`absolute inset-0 bg-gradient-to-br ${slide.color}`}
            />
          </AnimatePresence>
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full -translate-y-1/4 translate-x-1/3 opacity-60" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-vdas-orange/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* ── Left: Text Content ── */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Eyebrow */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[10px] font-black text-vdas-blue uppercase tracking-[0.5em] mb-6 flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <span className="w-8 h-px bg-vdas-blue" />
                    {slide.eyebrow}
                  </motion.p>

                  {/* Badge Pill */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-2 bg-vdas-orange/10 border border-vdas-orange/20 px-5 py-2 rounded-full mb-8 mx-auto lg:mx-0"
                  >
                    <div className="w-1.5 h-1.5 bg-vdas-orange rounded-full animate-pulse" />
                    <span className="text-vdas-orange text-[10px] font-black uppercase tracking-[0.3em]">{slide.badge}</span>
                  </motion.div>

                  {/* Headline */}
                  <h1 className="font-heading font-black text-slate-900 tracking-tighter leading-[1.0] mb-6">
                    <span className="block text-[2.6rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem]">{slide.title}</span>
                    <span className="block text-[2.6rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-vdas-blue to-vdas-orange">
                      {slide.titleLine2}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-10 max-w-lg font-medium mx-auto lg:mx-0 border-l-4 border-vdas-orange/30 pl-6 text-left">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                    <Link
                      to={slide.primaryBtn.link}
                      className="group relative inline-flex items-center justify-center overflow-hidden bg-vdas-orange text-white px-10 py-4 lg:py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(255,107,0,0.6)] hover:-translate-y-1 active:scale-95 shadow-[0_10px_30px_-10px_rgba(255,107,0,0.4)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-vdas-orange to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center gap-3">
                        {slide.primaryBtn.text}
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <Link
                      to={slide.secondaryBtn.link}
                      className="group inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 hover:border-vdas-blue hover:text-vdas-blue px-10 py-4 lg:py-5 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all duration-300 hover:-translate-y-1"
                    >
                      {slide.secondaryBtn.text}
                    </Link>
                  </div>

                  {/* Mini Stats Row */}
                  <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-100">
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="text-center lg:text-left">
                        <p className="text-2xl font-black text-slate-900 tracking-tighter font-heading leading-none">{stat.value}</p>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right: Visual Frame ── */}
            <div className="relative order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Decorative ring */}
                  <div className="absolute inset-[-16px] rounded-[5rem] border-2 border-slate-100 z-0" />
                  <div className="absolute inset-[-32px] rounded-[6rem] border border-slate-50 z-0" />

                  {/* Image Frame */}
                  <div className="relative z-10 rounded-[4rem] overflow-hidden border-[10px] border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] bg-slate-100 group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[420px] sm:h-[520px] lg:h-[580px] object-cover transition-transform duration-[8000ms] ease-linear group-hover:scale-105"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                  </div>

                  {/* Floating Achievement Card – Bottom Left */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-8 -left-6 lg:-left-16 z-20 bg-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] p-6 border border-slate-50 min-w-[200px] lg:min-w-[240px]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-vdas-orange rounded-2xl flex items-center justify-center shadow-lg shadow-vdas-orange/30 flex-shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-slate-900 leading-none mb-1 font-heading">{slide.stats[0].value}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{slide.stats[0].label}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Trust Badge – Top Right */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="absolute -top-6 -right-4 lg:-right-10 z-20 bg-vdas-blue text-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-70">AMFI Verified</p>
                      <p className="text-sm font-black">ARN-90854</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Slide Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current
                  ? 'w-10 h-2.5 bg-vdas-orange shadow-lg shadow-vdas-orange/40'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Marquee CSS ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
