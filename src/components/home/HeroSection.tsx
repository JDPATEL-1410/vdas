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
  {
    label: 'MDRT Member',
    svg: <svg className="w-4 h-4 text-vdas-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  },
  {
    label: 'AMFI Certified',
    svg: <svg className="w-4 h-4 text-vdas-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    label: 'SEBI Compliant',
    svg: <svg className="w-4 h-4 text-vdas-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  {
    label: '33 Yrs Experience',
    svg: <svg className="w-4 h-4 text-vdas-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
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

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 7000) // 7s total
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
      <div className="flex-1 flex items-center pt-32 lg:pt-32 pb-12 lg:pb-10 relative z-10">
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
                    <span className="block text-vdas-blue text-[2rem] sm:text-[3rem] lg:text-[3.8rem] xl:text-[4.5rem] font-display">
                      {slide.title}
                    </span>
                    {/* Line 2 – orange */}
                    <span className="block text-vdas-orange text-[2.5rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.5rem] -mt-1 lg:-mt-2 font-display">
                      {slide.titleAccent}
                    </span>
                    {/* Line 3 – dark slate */}
                    <span className="block text-slate-800 text-[1.2rem] sm:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.5rem] mt-2 font-bold tracking-normal">
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
                        {b.svg}
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


                </motion.div>
              </AnimatePresence>
            </div>

          </div>
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
