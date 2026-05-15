import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Breadcrumb {
  label: string
  to?: string
}

interface PageHeaderProps {
  title: string
  titleAccent?: string
  subtitle?: string
  image: string
  breadcrumbs?: Breadcrumb[]
  badge?: string
}

export default function PageHeader({ title, titleAccent, subtitle, image, breadcrumbs, badge }: PageHeaderProps) {
  return (
    <section className="relative min-h-[500px] lg:h-[60vh] lg:min-h-[600px] flex items-center overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-40 lg:pb-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 object-[center_30%]"
        />
        {/* Base overlay for contrast - lighter to show image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Breadcrumbs - High Visibility White */}
        {breadcrumbs && (
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[10px] font-black text-white/80 uppercase tracking-[0.4em] mb-12"
          >
            <Link to="/" className="hover:text-vdas-orange transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="opacity-30 text-white">/</span>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-vdas-orange transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Uniform Glassmorphic Card - More Professional Sizing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl backdrop-blur-3xl bg-white/[0.02] border border-white/10 rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle flare */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vdas-blue/5 via-transparent to-vdas-orange/5 opacity-50" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-1 bg-vdas-orange rounded-full shadow-[0_0_20px_rgba(255,107,0,0.5)]" />
              <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">
                {badge || 'Institutional Grade'}
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black !text-white tracking-tighter leading-[1.1] mb-2 font-heading">
                  {title}
                  {titleAccent && (
                    <span className="block text-vdas-orange mt-2 font-display">{titleAccent}</span>
                  )}
                </h1>
              </div>

              {subtitle && (
                <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-12">
                  <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed italic">
                    {subtitle}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}

