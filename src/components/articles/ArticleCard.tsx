import { motion } from 'framer-motion'

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  slug: string
  index?: number
}

export default function ArticleCard({ title, excerpt, date, category, image, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-all group"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-vdas-royal/10 text-vdas-royal text-[10px] font-black uppercase tracking-widest rounded-full">
            {category}
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{date}</span>
        </div>

        <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug flex-1">
          {title}
        </h3>

        <p className="text-sm text-slate-500 font-medium line-clamp-2 mb-6 leading-relaxed">
          {excerpt}
        </p>

        <button className="text-vdas-royal text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
          Read Article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </motion.article>
  )
}
