import Slider from 'react-slick'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Rajesh Mehta',
    role: 'Senior Manager, TCS',
    text: 'I have been investing with VDAS for over 12 years. Vishwas sir’s guidance helped me build a retirement corpus I never thought was possible. The personalized attention is invaluable.',
    avatar: 'RM',
  },
  {
    name: 'Priya Sharma',
    role: 'Entrepreneur',
    text: 'As a business owner, I struggled to separate personal and business finances. VDAS helped structure everything—from SIPs to insurance. Highly recommend their holistic approach.',
    avatar: 'PS',
  },
  {
    name: 'Sudhir Nair',
    role: 'Retired Officer',
    text: 'After retirement, managing a lump sum was daunting. VDAS systematically deployed it into a mix of funds. Today I have a steady income and my corpus is still growing.',
    avatar: 'SN',
  },
  {
    name: 'Anamika Joshi',
    role: 'Medical Professional',
    text: 'VDAS structured my investments across ELSS and NPS. Saved significantly in taxes while building wealth simultaneously. Their professional approach is refreshing.',
    avatar: 'AJ',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vdas-royal text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            Client Success Stories
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Voices of <span className="text-vdas-royal">Trust.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Helping over 5,000 families achieve their financial goals with professional guidance and disciplined planning.
          </p>
        </div>

        <Slider {...settings} className="testimonial-slider pb-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="px-4">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 h-full flex flex-col">
                <div className="mb-6"><StarRating /></div>
                <p className="text-slate-600 text-lg font-medium leading-relaxed italic mb-8 flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-vdas-royal font-black text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-900 tracking-tight">{t.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
