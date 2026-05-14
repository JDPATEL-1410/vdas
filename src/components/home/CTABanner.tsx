import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-blue-400" />
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.35em]">Start Your Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Build a <br />
              <span className="text-blue-400">Secure Financial Future?</span>
            </h2>
            <p className="text-slate-400 text-base font-medium leading-relaxed mb-8 max-w-md">
              Book a complimentary consultation with our financial advisor. Get a personalized wealth roadmap tailored to your goals — no obligations, no jargon.
            </p>
            <div className="flex flex-wrap gap-6">
              {['SEBI Compliant', 'AMFI Certified', '33+ Years Trusted'].map((text) => (
                <span key={text} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Action panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Book a Free Consultation</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">Speak directly with Vishwas Deshpande (CFP℠) — no pressure, just expert guidance.</p>

            <div className="space-y-4 mb-8">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ), 
                  text: '30-minute one-on-one session' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ), 
                  text: 'Goal-based financial assessment' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ), 
                  text: 'Personalized investment plan' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ), 
                  text: '100% confidential & obligation-free' 
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/30 transition-all"
              >
                Schedule Consultation
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
