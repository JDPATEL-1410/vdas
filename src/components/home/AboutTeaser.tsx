import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AboutTeaser() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[400px]"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-premium border-8 border-slate-50 bg-white">
              <img 
                src="/founder_portrait.png" 
                alt="Vishwas Deshpande" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-vdas-blue p-10 rounded-[3rem] text-white shadow-premium hidden sm:block border-8 border-white">
              <p className="text-5xl font-black mb-1">33+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Years of Experience</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-vdas-orange text-[11px] font-black uppercase tracking-[0.4em] mb-6"
            >
              Our Heritage & Trust
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-vdas-blue-dark mb-10 tracking-tighter leading-[1.1]">
              A Legacy of <br />
              <span className="text-vdas-orange">Integrity.</span>
            </h2>
            
            <p className="text-slate-500 text-xl leading-relaxed mb-10 font-medium">
              Founded by <strong className="text-vdas-blue-dark">Vishwas Deshpande</strong> in 1991, VDAS has stood as a bastion of financial wisdom for over 33 years. We don't just manage assets; we cultivate long-term peace of mind through disciplined, research-driven wealth strategies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: 'Personalized', desc: 'Custom wealth roadmaps for every family.' },
                { title: 'Professional', desc: 'Certified expertise in mutual fund advisory.' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-vdas-blue/10 transition-colors">
                  <p className="text-vdas-blue font-black text-sm mb-1 uppercase tracking-widest">{item.title}</p>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-vdas-blue text-[11px] font-black uppercase tracking-widest group px-8 py-4 bg-vdas-blue-light rounded-2xl hover:bg-vdas-blue hover:text-white transition-all"
            >
              Learn More About Our History
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

