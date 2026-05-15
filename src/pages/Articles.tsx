import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import ArticleCard from '../components/articles/ArticleCard'
import PageHero from '../components/ui/PageHero'

const ARTICLES = [
  {
    id: '1',
    title: 'The Power of Compounding: Why Starting SIP Early Matters',
    excerpt: 'Discover how small monthly investments can turn into a massive corpus over 20 years through the magic of compounding.',
    date: 'Oct 24, 2024',
    category: 'SIP',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    slug: 'power-of-compounding',
  },
  {
    id: '2',
    title: 'Tax Planning with ELSS: Save ₹46,800 Every Year',
    excerpt: 'Learn how Equity Linked Savings Schemes (ELSS) can help you save tax under Section 80C while providing equity growth.',
    date: 'Oct 15, 2024',
    category: 'Tax Planning',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    slug: 'tax-planning-elss',
  },
  {
    id: '3',
    title: 'Asset Allocation: The Secret to Long-Term Wealth',
    excerpt: 'Why putting all your eggs in one basket is a mistake and how to balance equity, debt, and gold for better risk-adjusted returns.',
    date: 'Sep 28, 2024',
    category: 'Investment Strategy',
    image: 'https://images.unsplash.com/photo-1611974717482-48cd9a77ad46?auto=format&fit=crop&q=80&w=800',
    slug: 'asset-allocation-secret',
  },
  {
    id: '4',
    title: 'Retirement Planning: How Much is Enough?',
    excerpt: 'A step-by-step guide to calculating your retirement corpus considering inflation and future lifestyle expenses.',
    date: 'Sep 12, 2024',
    category: 'Retirement',
    image: 'https://images.unsplash.com/photo-1454165833767-027558a46067?auto=format&fit=crop&q=80&w=800',
    slug: 'retirement-planning-guide',
  },
]

export default function Articles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageSEO 
        title="Financial Articles & Insights | Expert Guidance | VDAS"
        description="Stay updated with the latest financial insights, investment strategies, and tax-saving tips from the experts at VDAS."
      />

      <PageHero 
        title="Financial Insights."
        description="Expert articles and strategic wisdom to guide your investment journey and empower your financial decisions."
        image="/images/professional-advice.png"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
