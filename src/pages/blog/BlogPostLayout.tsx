import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../../components/ui/PageSEO'

interface BlogPostLayoutProps {
  title: string
  category: string
  date: string
  readTime: string
  image: string
  children: React.ReactNode
}

export default function BlogPostLayout({ title, category, date, readTime, image, children }: BlogPostLayoutProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-[#0A1A4F] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[10px] font-bold text-blue-300/60 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-blue-300">Home</Link> <span>/</span>
            <Link to="/blog" className="hover:text-blue-300">Blog</Link> <span>/</span>
            <span className="text-blue-300">{category}</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-widest rounded-full">{category}</span>
            <span className="text-slate-500 text-[10px] font-bold">{date} · {readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">{title}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-24">
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <img src={image} alt={title} className="w-full h-64 sm:h-80 object-cover" />
        </div>
        <div className="prose prose-lg prose-slate max-w-none">
          {children}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-sm font-bold text-slate-500 mb-4">Share this article:</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
