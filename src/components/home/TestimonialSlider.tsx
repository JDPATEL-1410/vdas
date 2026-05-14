import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Aakash A',
    role: 'Verified Investor',
    text: 'Excellent team.. Most reliable advisor with immense knowledge of investment management.',
    avatar: 'AA',
    date: '3 years ago'
  },
  {
    name: 'Dinesh Gavas',
    role: 'Business Professional',
    text: 'Professional Service with Excellent team of Professionals. Truly institutional grade advisory.',
    avatar: 'DG',
    date: '5 years ago'
  },
  {
    name: 'Kishor Rane',
    role: 'Wealth Client',
    text: 'Honesty, integrity and excellent advisory services. They have managed my portfolio with great precision.',
    avatar: 'KR',
    date: '5 years ago'
  },
  {
    name: 'Santosh Gawas',
    role: 'Long-term Investor',
    text: 'Excellent advisory services. Their disciplined approach to wealth creation is what sets them apart.',
    avatar: 'SG',
    date: '5 years ago'
  },
  {
    name: 'Sudheer Haldankar',
    role: 'Finance Professional',
    text: 'Expertise at its Best. The team at VDAS understands complex financial needs like no other.',
    avatar: 'SH',
    date: '5 years ago'
  }
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
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vdas-blue/5 rounded-full blur-[120px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vdas-orange/5 rounded-full blur-[100px] -ml-24 -mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-0.5 bg-vdas-orange rounded-full" />
            <span className="text-vdas-blue text-[10px] font-black uppercase tracking-[0.4em]">Client Testimonials</span>
            <div className="w-10 h-0.5 bg-vdas-orange rounded-full" />
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-8 tracking-tighter font-heading leading-tight">
            Voices of <span className="text-vdas-blue">Institutional Trust.</span>
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 shadow-sm">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5 w-auto" />
              <div className="w-px h-4 bg-slate-300 mx-2" />
              <div className="flex items-center gap-1">
                <span className="text-lg font-black text-slate-800">4.9</span>
                <div className="flex">
                   {[1,2,3,4,5].map(i => (
                     <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Rating</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Over 5,000 elite families trust VDAS for research-driven financial planning and absolute integrity.
            </p>
          </div>
        </div>

        <Slider {...settings} className="testimonial-slider-enhanced pb-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="px-6 py-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_70px_-15px_rgba(0,86,179,0.1)] border border-slate-100 h-full flex flex-col group relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-10 right-12 text-slate-100 group-hover:text-vdas-blue/10 transition-colors duration-500">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V13.5H12.017V9C12.017 7.34315 13.3601 6 15.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46469 8 2.01697 8.44772 2.01697 9V13.5H0.016973V9C0.016973 7.34315 1.36012 6 3.01697 6H7.01697C8.67383 6 10.017 7.34315 10.017 9V15C10.017 16.6569 8.67383 18 7.01697 18H4.01697V21H2.01697Z" />
                  </svg>
                </div>

                <div className="mb-8"><StarRating /></div>
                
                <p className="text-slate-600 text-lg lg:text-xl font-medium leading-relaxed mb-12 flex-1 italic relative z-10">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-vdas-blue to-vdas-blue-dark rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-vdas-blue/20">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1">{t.name}</p>
                      <p className="text-[10px] font-black text-vdas-orange uppercase tracking-[0.2em]">{t.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3 w-auto opacity-30 group-hover:opacity-100 transition-opacity mb-1 ml-auto" />
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.date}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/maps/place/Vishwas+Deshpande+Alliance+Private+Limited/@19.1196,72.8464,15z/data=!4m8!3m7!1s0x3be7c9ce35555555:0x5555555555555555!8m2!3d19.1196!4d72.8464!9m1!1b1!16s%2Fg%2F11b7z5y2y7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[11px] font-black text-vdas-blue uppercase tracking-[0.3em] group hover:text-vdas-orange transition-colors"
          >
            Read All 18 Google Reviews
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .testimonial-slider-enhanced .slick-dots li button:before {
          color: #0056b3;
          font-size: 10px;
          opacity: 0.2;
        }
        .testimonial-slider-enhanced .slick-dots li.slick-active button:before {
          color: #ff6b00;
          opacity: 1;
        }
        .testimonial-slider-enhanced .slick-dots {
          bottom: -40px;
        }
      `}</style>
    </section>
  )
}
