import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyVDAS from '../components/home/WhyVDAS'
import ProductTabs from '../components/home/ProductTabs'
import SIPWidget from '../components/home/SIPWidget'
import LatestInsights from '../components/home/LatestInsights'
import TestimonialSlider from '../components/home/TestimonialSlider'
import PageSEO from '../components/ui/PageSEO'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <PageSEO 
        title="VDAS Financial | Wealth Management & Mutual Fund Advisory | Mumbai"
        description="Vishwas Deshpande Associates (VDAS) — trusted mutual fund distributors and wealth managers in Mumbai since 1991. Serving 5,000+ families with expert financial planning."
      />
      
      {/* 1. Full-bleed Hero */}
      <HeroSection />
      
      {/* 2. Services — what we do */}
      <div id="services" className="bg-white">
        <ServicesGrid />
      </div>

      {/* 3. Why VDAS — our expertise pillars */}
      <WhyVDAS />
      
      {/* 4. Products — our investment universe */}
      <div id="products" className="bg-slate-50">
        <ProductTabs />
      </div>
      

      
      {/* 6. Latest Insights — daily news */}
      <LatestInsights />
      
      {/* 7. Testimonials — social proof */}
      <TestimonialSlider />
      

    </motion.div>
  )
}
