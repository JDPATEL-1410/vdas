import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    id: 1,
    badge: 'Institutional Grade Advisory',
    eyebrow: 'Wealth Management · Since 1991',
    title: 'Visionary',
    titleAccent: 'Wealth.',
    titleLine3: 'Crystal Clarity.',
    subtitle: "We transform complex financial landscapes into precise, high-performance pathways for India's most discerning families.",
    image: '/wealth_management_light_hero_1778502035521.png',
    stat: '33+', statSub: 'Years Legacy',
    tag: 'ARN-90854',
    primaryBtn: { text: 'Secure Your Future', link: '/contact' },
    secondaryBtn: { text: 'Our Expertise', link: '/services' },
  },
  {
    id: 2,
    badge: 'Strategic Retirement Planning',
    eyebrow: 'Zero Compromise · Total Security',
    title: 'Golden',
    titleAccent: 'Years.',
    titleLine3: 'Absolute Peace.',
    subtitle: 'Engineered for absolute security. We build inflation-proof portfolios that safeguard your lifestyle and your peace of mind.',
    image: '/retirement_light_hero_1778502050360.png',
    stat: '100%', statSub: 'Commitment',
    tag: 'MDRT Status',
    primaryBtn: { text: 'Plan Retirement', link: '/contact' },
    secondaryBtn: { text: 'Retirement Hub', link: '/goals/retirement' },
  },
  {
    id: 3,
    badge: 'Disciplined SIP Growth',
    eyebrow: 'Goals · SIP · Wealth Creation',
    title: 'Generational',
    titleAccent: 'Goals.',
    titleLine3: 'Planned Perfectly.',
    subtitle: "From elite global education to bespoke real estate — our SIP frameworks turn your highest aspirations into mathematical certainties.",
    image: '/sip_goals_light_hero_1778502068391.png',
    stat: '₹500Cr+', statSub: 'Advisory AUM',
    tag: '5,000+ Families',
    primaryBtn: { text: 'Start Growing', link: '/contact' },
    secondaryBtn: { text: 'SIP Calculator', link: '/calculator/sip' },
  }
]

const TRUST_BADGES = [
  { icon: '🏆', label: 'MDRT Member' },
  { icon: '✅', label: 'AMFI Certified' },
  { icon: '🔒', label: 'SEBI Compliant' },
  { icon: '⭐', label: '33 Yrs Experience' },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 100 / 70 // ~7s total
      })
    }, 100)
    return () => clearInterval(interval)
  }, [nextSlide])

  const slide = SLIDES[current]

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">

      {/* ── Decorative Background Shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large blue arc top-right */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border-[60px] border-vdas-blue/5" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border-[40px] border-vdas-orange/5" />
        {/* Orange blob bottom-left */}
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-vdas-orange/5 rounded-full blur-[80px]" />
        {/* Blue blob bottom-right */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-vdas-blue/5 rounded-full blur-[60px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#0056b3 1px, transparent 1px), linear-gradient(90deg, #0056b3 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="flex-1 flex items-center pt-28 lg:pt-32 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── LEFT: Content ── */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                    <span className="w-6 h-px bg-vdas-orange" />
                    <span className="text-[10px] font-black text-vdas-orange uppercase tracking-[0.5em]">{slide.eyebrow}</span>
                  </div>

                  {/* Heading */}
                  <h1 className="font-heading font-black tracking-tighter leading-[1.0] mb-6 text-center lg:text-left">
                    {/* Line 1 – blue */}
                    <span className="block text-vdas-blue text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem]">
                      {slide.title}
                    </span>
                    {/* Line 2 – orange with outline style */}
                    <span className="block text-vdas-orange text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.5rem] -mt-2">
                      {slide.titleAccent}
                    </span>
                    {/* Line 3 – dark slate, smaller */}
                    <span className="block text-slate-800 text-[1.4rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.5rem] mt-1 font-bold tracking-normal">
                      {slide.titleLine3}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8 max-w-lg font-medium mx-auto lg:mx-0 text-center lg:text-left">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                    <Link
                      to={slide.primaryBtn.link}
                      className="group relative inline-flex items-center justify-center gap-3 bg-vdas-orange text-white px-10 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(255,107,0,0.55)] shadow-[0_8px_30px_-8px_rgba(255,107,0,0.4)]"
                    >
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {slide.primaryBtn.text}
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      to={slide.secondaryBtn.link}
                      className="group inline-flex items-center justify-center gap-3 bg-white border-2 border-vdas-blue text-vdas-blue px-10 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all duration-300 hover:bg-vdas-blue hover:text-white hover:-translate-y-1 hover:shadow-lg"
                    >
                      {slide.secondaryBtn.text}
                    </Link>
                  </div>

                  {/* Trust Badges Row */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {TRUST_BADGES.map((b) => (
                      <div key={b.label} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
                        <span className="text-base">{b.icon}</span>
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── RIGHT: Visual ── */}
            <div className="order-1 lg:order-2 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Orange corner accent */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-vdas-orange rounded-[2rem] z-0 opacity-20" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-vdas-blue rounded-[1.5rem] z-0 opacity-20" />

                  {/* Main Image */}
                  <div className="relative z-10 rounded-[3.5rem] overflow-hidden border-[8px] border-white shadow-[0_30px_80px_-20px_rgba(0,86,179,0.2)] bg-slate-100 group">
                    {/* Orange top bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vdas-orange via-vdas-orange to-vdas-blue z-20" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[340px] sm:h-[440px] lg:h-[560px] object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-105"
                    />
                    {/* Gradient on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-vdas-blue-dark/30 via-transparent to-transparent" />
                    {/* Bottom tag on image */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-20">
                      <span className="bg-white/95 backdrop-blur-md text-vdas-blue text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                        {slide.badge}
                      </span>
                      <span className="bg-vdas-orange text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                        {slide.tag}
                      </span>
                    </div>
                  </div>

                  {/* ── Floating Stat Card ── */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -left-6 lg:-left-14 top-1/2 -translate-y-1/2 z-20 bg-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,86,179,0.2)] border border-slate-100 p-6 min-w-[150px]"
                  >
                    <div className="w-10 h-10 bg-vdas-blue rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-vdas-blue/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-3xl font-black text-slate-900 leading-none font-heading">{slide.stat}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{slide.statSub}</p>
                  </motion.div>

                  {/* ── Floating Trust Score Card ── */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="absolute -right-4 lg:-right-10 bottom-20 z-20 bg-vdas-orange rounded-[1.5rem] shadow-[0_20px_50px_-10px_rgba(255,107,0,0.4)] p-5 min-w-[130px]"
                  >
                    <p className="text-[9px] font-black text-white/80 uppercase tracking-widest mb-1">Client Trust</p>
                    <p className="text-3xl font-black text-white leading-none font-heading">5K+</p>
                    <div className="flex gap-0.5 mt-2">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[8px] font-black text-white/70 mt-1 uppercase tracking-widest">Families Served</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Slide Controls & Progress ── */}
      <div className="relative z-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">

            {/* Slide Thumbnails */}
            <div className="flex items-center gap-4">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { setCurrent(i); setProgress(0) }}
                  className={`relative flex items-center gap-3 transition-all duration-300 rounded-2xl px-4 py-3 ${
                    i === current
                      ? 'bg-vdas-blue text-white shadow-lg shadow-vdas-blue/30'
                      : 'bg-slate-50 border border-slate-200 text-slate-400 hover:border-vdas-blue hover:text-vdas-blue'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i === current ? 'bg-vdas-orange' : 'bg-slate-300'}`} />
                  <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
                    {s.badge.split(' ')[0]}
                  </span>
                  {/* Progress bar */}
                  {i === current && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-vdas-blue/20 overflow-hidden">
                      <motion.div
                        className="h-full bg-vdas-orange rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Scroll Down hint */}
            <div className="hidden lg:flex items-center gap-3 text-slate-300">
              <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex items-start justify-center pt-1.5">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="w-1.5 h-1.5 bg-vdas-orange rounded-full"
                />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Scroll Down</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
