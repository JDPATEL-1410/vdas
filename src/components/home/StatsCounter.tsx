import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
  icon: string
}

const STATS: StatItem[] = [
  { value: 5000, suffix: '+', label: 'Happy Clients', description: 'Across Mumbai & India', icon: '👥' },
  { value: 33, suffix: '+', label: 'Years of Experience', description: 'Since 1991', icon: '🏆' },
  { value: 5, suffix: '', label: 'Top 5 in Mumbai', description: 'Among MF Distributors', icon: '🌟' },
  { value: 5, suffix: '-Year', label: 'MDRT Member', description: 'Million Dollar Round Table', icon: '💎' },
]

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {STATS.map((stat, i) => {
        const isEven = i % 2 === 0;
        const accentColor = isEven ? 'var(--vdas-blue)' : 'var(--vdas-orange)';
        const bgOpacity = isEven ? 'bg-vdas-blue/10' : 'bg-vdas-orange/10';

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-premium hover:-translate-y-2 transition-all duration-700 group relative overflow-hidden"
          >
            <div className={`w-16 h-16 rounded-2xl ${bgOpacity} flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-700`}>
              {stat.icon}
            </div>
            
            <div className="mb-4">
              <span className="text-4xl lg:text-6xl font-black tracking-tighter text-slate-900 group-hover:text-vdas-blue transition-colors font-heading">
                <AnimatedValue target={stat.value} suffix={stat.suffix} />
              </span>
            </div>

            <div className="font-black text-[10px] uppercase tracking-[0.3em] mb-2 leading-tight font-heading" style={{ color: accentColor }}>
              {stat.label}
            </div>
            
            <div className="text-slate-400 font-bold text-[9px] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
              {stat.description}
            </div>
          </motion.div>
        );
      })}
    </div>
  )
}

function AnimatedValue({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2500
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}
