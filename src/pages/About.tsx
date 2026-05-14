import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import PageHeader from '../components/ui/PageHeader'

const TIMELINE = [
  { year: '1991', title: 'The Foundation', desc: 'Vishwas Deshpande established VDAS with a vision to bring transparency to family wealth management.' },
  { year: '2005', title: 'Strategic Growth', desc: 'Expanded our technology and product suite to offer comprehensive financial solutions.' },
  { year: '2015', title: 'Global Recognition', desc: 'Achieved MDRT status, joining the elite global circle of financial professionals.' },
  { year: '2021', title: '30 Years of Trust', desc: 'Proudly serving over 5,000 families with a commitment to their long-term prosperity.' },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageSEO 
        title="Our Heritage & Commitment | 33+ Years of Wealth Management | VDAS"
        description="Learn about the history and values of VDAS. Founded by Vishwas Deshpande, we have been helping families achieve financial peace since 1991."
      />

      <PageHeader 
        title="Heritage of Trust. Future of Growth."
        subtitle="Serving over 5,000 families since 1991 with research-driven wisdom and unwavering integrity."
        image="/vdas_office_heritage_1778481089115.png"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Founder Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-premium border-8 border-slate-50 bg-white">
                <img 
                  src="/professional_executive_portrait_1778220813591.png" 
                  alt="Vishwas Deshpande" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-vdas-orange text-white p-10 rounded-[3rem] shadow-premium hidden sm:block border-8 border-white">
                <p className="text-sm font-black uppercase tracking-widest opacity-80">Our Founder</p>
                <p className="text-3xl font-black">Vishwas Deshpande</p>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-vdas-blue text-[11px] font-black uppercase tracking-[0.4em] mb-6"
              >
                Leadership & Excellence
              </motion.div>
              <h2 className="text-4xl sm:text-6xl font-black text-vdas-blue-dark mb-10 tracking-tighter leading-tight">
                33 Years of <br />
                <span className="text-vdas-orange">Financial Integrity.</span>
              </h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed mb-10">
                For over three decades, VDAS has been a trusted partner for families seeking financial security. Our approach combines time-tested wisdom with modern investment strategies.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <p className="text-4xl font-black text-vdas-blue-dark">33+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Years Legacy</p>
                </div>
                <div className="p-8 rounded-3xl bg-vdas-orange-light border border-vdas-orange/10">
                  <p className="text-4xl font-black text-vdas-orange">5,000+</p>
                  <p className="text-[10px] font-bold text-vdas-orange uppercase tracking-widest mt-2">Families Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-10 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Our Philosophy</h2>
          <p className="text-slate-500 text-2xl font-medium leading-relaxed mb-16 italic">
            "Financial planning is not about predicting the future. It's about being prepared for it. Our goal remains to provide absolute peace through disciplined wealth management."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-slate-200" />
            <p className="text-lg font-black text-slate-900">Vishwas Deshpande</p>
            <div className="w-12 h-px bg-slate-200" />
          </div>
          <p className="text-vdas-royal text-[10px] font-black uppercase tracking-widest mt-2">Founder & Principal Advisor</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Our Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100">
                <p className="text-3xl font-black text-vdas-royal mb-4">{item.year}</p>
                <h3 className="text-slate-900 font-black text-lg mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
