import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Breadcrumb {
  label: string
  to?: string
}

interface PageHeroProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  image?: string
  badge?: string
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  breadcrumbs,
  badge,
  image,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[450px] lg:h-[60vh] lg:min-h-[600px] flex items-center overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-40 lg:pb-0">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {image ? (
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={image} 
            alt="" 
            className="w-full h-full object-cover grayscale" 
          />
        ) : (
          <div className="absolute inset-0 bg-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Breadcrumbs - Clean White */}
        {breadcrumbs && (
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[10px] font-black text-white/70 uppercase tracking-[0.4em] mb-12"
          >
            <Link to="/" className="hover:text-vdas-orange transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="opacity-20 text-white">/</span>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-vdas-orange transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                animate={{ width: [30, 50, 30] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 bg-vdas-orange rounded-full shadow-lg shadow-vdas-orange/40" 
              />
              <span className="text-white text-[11px] font-black uppercase tracking-[0.5em]">
                {badge || eyebrow || 'AMFI REGISTERED DISTRIBUTOR'}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] font-heading"
            >
              <span className="text-white">{title}</span>
              {titleAccent && (
                <span className="block text-vdas-orange mt-2 font-display text-[0.8em]">{titleAccent}</span>
              )}
            </motion.h1>
          </div>

          {description && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-4 pb-4 lg:border-l lg:border-white/10 lg:pl-12"
            >
              <p className="text-white/70 text-lg sm:text-xl font-medium leading-relaxed italic border-l-4 lg:border-l-0 border-vdas-orange/30 pl-6 lg:pl-0">
                {description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
