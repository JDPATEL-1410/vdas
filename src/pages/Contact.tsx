import { motion } from 'framer-motion'
import ContactForm from '../components/ui/ContactForm'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      <PageSEO 
        title="Get in Touch | Professional Financial Guidance | VDAS"
        description="Contact VDAS for professional wealth management and financial planning. Our team in Mumbai is ready to help you help you achieve your goals."
      />

      <PageHero 
        title="Let's Plan Your Future."
        titleAccent="Begin Your Legacy."
        description="Expert financial guidance is just a message away. Reach out today to start building your generational legacy."
        image="/financial_consultation_meeting_1778481110902.png"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-vdas-blue/10 text-vdas-blue rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Our Office</h3>
                  <p className="text-lg font-medium text-slate-500 leading-relaxed">
                    102, Business Square,<br />
                    Andheri West, Mumbai 400053
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-vdas-blue/10 text-vdas-blue rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-lg font-medium text-slate-500">info@vdasfinancial.in</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-vdas-blue/10 text-vdas-blue rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-lg font-medium text-slate-500">+91 98220 00000</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 lg:p-16 rounded-[4rem] border border-slate-100 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.08)]">
              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tighter font-display uppercase">Send a <span className="text-vdas-blue">Message.</span></h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
