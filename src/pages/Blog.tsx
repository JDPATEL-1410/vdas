import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

interface ETArticle {
  title: string
  link: string
  pubDate: string
  timestamp: number
  thumbnail: string
  description: string
  categories: string[]
  source: 'NJ' | 'ET'
}

const FEEDS = [
  { url: 'https://economictimes.indiatimes.com/wealth/rssfeeds/8375551.cms', label: 'Personal Finance', source: 'ET' as const },
  { url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms', label: 'Market Pulse', source: 'ET' as const },
  { url: 'https://economictimes.indiatimes.com/news/economy/rssfeeds/1286551815.cms', label: 'Economic View', source: 'ET' as const }
]

const FALLBACK_ARTICLES: ETArticle[] = [
  {
    title: "Mastering Asset Allocation in Volatile Markets",
    link: "https://economictimes.indiatimes.com/wealth",
    pubDate: "May 15, 2026",
    timestamp: Date.now(),
    thumbnail: "/wealth_management_dashboard_1778479882040.png",
    description: "Discover why asset allocation is the cornerstone of successful wealth management and how to rebalance your portfolio for maximum stability.",
    categories: ["Personal Finance"],
    source: "ET"
  },
  {
    title: "SIP vs Lumpsum: Which Works Best in 2026?",
    link: "https://economictimes.indiatimes.com/wealth",
    pubDate: "May 14, 2026",
    timestamp: Date.now() - 86400000,
    thumbnail: "/wealth_management_light_hero_1778502035521.png",
    description: "A detailed breakdown of SIP and Lumpsum investing strategies tailored for the current market environment and interest rate cycle.",
    categories: ["Market Pulse"],
    source: "ET"
  },
  {
    title: "The Rise of Mid-cap Funds: Growth and Risk Factors",
    link: "https://economictimes.indiatimes.com/wealth",
    pubDate: "May 14, 2026",
    timestamp: Date.now() - 90000000,
    thumbnail: "/sip_goals_light_hero_1778502068391.png",
    description: "Mid-cap mutual funds have seen significant inflows. We analyze if the risk-reward ratio still favors new investors in the current rally.",
    categories: ["Market Pulse"],
    source: "ET"
  },
  {
    title: "Tax Planning Before the Financial Year Ends",
    link: "https://economictimes.indiatimes.com/wealth",
    pubDate: "May 13, 2026",
    timestamp: Date.now() - 172800000,
    thumbnail: "/sip_goals_light_hero_1778502068391.png",
    description: "Essential last-minute tax-saving strategies including ELSS, NPS contributions, and HRA calculations for salaried professionals.",
    categories: ["Economic View"],
    source: "ET"
  },
  {
    title: "Retirement Planning: How Much is Enough for 2040?",
    link: "https://economictimes.indiatimes.com/wealth",
    pubDate: "May 12, 2026",
    timestamp: Date.now() - 259200000,
    thumbnail: "/wealth_management_dashboard_1778479882040.png",
    description: "Calculating your retirement corpus requires accounting for lifestyle inflation. Learn how to build a resilient retirement fund.",
    categories: ["Personal Finance"],
    source: "ET"
  },
  {
    title: "Global Economic Shifts and Indian Markets",
    link: "https://economictimes.indiatimes.com/wealth",
    pubDate: "May 11, 2026",
    timestamp: Date.now() - 345600000,
    thumbnail: "/wealth_management_light_hero_1778502035521.png",
    description: "How changes in US Federal Reserve policies and global supply chains are impacting Indian equity and debt markets in 2026.",
    categories: ["Economic View"],
    source: "ET"
  }
]

const fetchFeed = async (url: string, defaultLabel: string, source: 'NJ' | 'ET'): Promise<ETArticle[]> => {
  const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
  ]

  let text = ''
  for (const proxy of proxies) {
    try {
      // Use a timeout to avoid 408s
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 5000);
      
      const res = await fetch(proxy, { signal: controller.signal })
      clearTimeout(id);
      
      if (!res.ok) continue
      
      text = await res.text()
      if (text && (text.includes('<rss') || text.includes('<channel'))) break
    } catch (_) { 
      continue 
    }
  }

  if (!text) return []

  try {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(text, 'text/xml')
    const items = xmlDoc.querySelectorAll('item')

    return Array.from(items).map(item => {
      const title = item.querySelector('title')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''
      const desc = item.querySelector('description')?.textContent || ''

      let category = item.querySelector('category')?.textContent || defaultLabel
      if (category.toLowerCase().includes('wealth') || category.toLowerCase().includes('personal')) category = 'Personal Finance'
      if (category.toLowerCase().includes('market') || category.toLowerCase().includes('stock')) category = 'Market Pulse'
      if (category.toLowerCase().includes('economy') || category.toLowerCase().includes('policy')) category = 'Economic View'

      let thumb = ''
      const media = item.getElementsByTagName('media:content')
      if (media.length > 0) thumb = media[0].getAttribute('url') || ''
      if (!thumb) {
        const enclosure = item.querySelector('enclosure')
        if (enclosure) thumb = enclosure.getAttribute("url") || ""
      }
      if (!thumb) {
        const imgMatch = desc.match(/<img[^>]+src="([^">]+)"/)
        if (imgMatch) thumb = imgMatch[1]
      }

      const date = new Date(pubDate)
      const isValid = !isNaN(date.getTime())

      return {
        title,
        link,
        pubDate: isValid ? date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Recent Edition',
        timestamp: isValid ? date.getTime() : Date.now(),
        thumbnail: thumb || '/wealth_management_dashboard_1778479882040.png',
        description: desc.replace(/<[^>]*>?/gm, '').slice(0, 150).trim() + '...',
        categories: [category],
        source
      }
    })
  } catch (_) {
    return []
  }
}

export default function Blog() {
  const [articles, setArticles] = useState<ETArticle[]>(FALLBACK_ARTICLES)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('All Insights')

  useEffect(() => {
    const fetchAllArticles = async () => {
      // Don't set loading if we have fallback data already showing, 
      // but we'll use it for the initial mount pulse if desired.
      try {
        const results = await Promise.all(FEEDS.map(f => fetchFeed(f.url, f.label, f.source)))
        const allFetched = results.flat()

        if (allFetched.length > 0) {
          const sorted = allFetched
            .sort((a, b) => b.timestamp - a.timestamp)
            .filter((v, i, a) => a.findIndex(t => t.link === v.link) === i)

          const newestDate = new Date(sorted[0].timestamp).toLocaleDateString()
          const dailyArticles = sorted.filter(a => new Date(a.timestamp).toLocaleDateString() === newestDate)

          // On the main blog page, we show all from the most recent day (up to 24)
          // If there are too few daily articles, we fallback to the last 12
          const processed = dailyArticles.length >= 6
            ? dailyArticles.slice(0, 24)
            : sorted.slice(0, 12)
            
          setArticles(processed)
        }
      } catch (err) {
        console.warn("Blog fetch failed, keeping fallbacks")
      } finally {
        setLoading(false)
      }
    }

    fetchAllArticles()
  }, [])

  const tabs = ['All Insights', 'Personal Finance', 'Market Pulse', 'Economic View']

  const filteredArticles = useMemo(() => {
    if (activeTab === 'All Insights') return articles
    return articles.filter(a => a.categories.includes(activeTab))
  }, [articles, activeTab])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO 
        title="Knowledge Centre | ET Finance & NJ Market Insights | VDAS" 
        description="Comprehensive financial intelligence featuring live feeds from Economic Times and NJ Wealth. Stay updated with the latest market trends." 
      />

      <PageHero 
        title="Intelligence Centre."
        titleAccent="Market Pulse."
        description="Real-time financial syndication. Merging global market research from Economic Times and institutional analysis."
        image="/wealth_management_dashboard_1778479882040.png"
        badge="Live Financial Syndication"
        breadcrumbs={[{ label: 'Knowledge Centre' }]}
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1.5 bg-vdas-orange rounded-full" />
                <span className="text-vdas-orange text-[10px] font-black uppercase tracking-[0.4em]">Live Multi-Source Feed</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-vdas-blue-dark tracking-tighter leading-[1.1] font-display">
                Economic Times & <br />
                <span className="text-vdas-blue italic">Market Insights.</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2 bg-slate-50 p-2 rounded-[1.5rem] border border-slate-100">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-[1.25rem] text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-vdas-blue text-white shadow-xl shadow-vdas-blue/20 transform scale-105' 
                      : 'text-slate-400 hover:text-vdas-blue hover:bg-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[16/10] bg-slate-50 rounded-[3.5rem] mb-10" />
                  <div className="h-6 bg-slate-50 rounded-full w-3/4 mb-4" />
                  <div className="h-4 bg-slate-50 rounded-full w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16 lg:gap-y-24">
              {filteredArticles.map((article, i) => (
                <motion.article 
                  key={article.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="group flex flex-col bg-white rounded-[3rem] border border-slate-100 hover:border-vdas-blue transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative overflow-hidden aspect-[16/10]"
                  >
                    <img 
                      src={article.thumbnail} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    />
                    <div className="absolute top-6 right-6">
                       <span className="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest backdrop-blur-md bg-white/20 text-white border border-white/30">
                         {article.source === 'ET' ? 'Market Syndication' : 'Institutional'}
                       </span>
                    </div>
                  </a>
                  
                  <div className="p-10 lg:p-12 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-black text-vdas-orange uppercase tracking-[0.25em] bg-vdas-orange/5 px-3 py-1 rounded-full border border-vdas-orange/10">
                        {article.categories[0]}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{article.pubDate}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-[1.2] group-hover:text-vdas-blue transition-colors font-heading tracking-tight">
                      <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </h3>
                    
                    <p className="text-slate-500 text-base font-medium leading-relaxed mb-10 line-clamp-3">
                      {article.description}
                    </p>

                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-3 text-[11px] font-black text-vdas-blue uppercase tracking-[0.3em] group/link w-fit"
                    >
                      Explore Analysis <span className="text-xl transition-transform group-hover/link:translate-x-2">→</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-black !text-white mb-8 tracking-tighter leading-tight">Institutional Research.</h2>
          <p className="text-slate-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Our Knowledge Centre merges the speed of global market news with the depth of institutional advisory. Stay ahead of the curve.
          </p>
          <a href="/contact" className="bg-vdas-orange text-white px-12 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange-dark transition-all shadow-2xl shadow-vdas-orange/40">
            Consult Principal Advisor
          </a>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[12px] text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto italic">
            This Intelligence Centre syndicates content from The Economic Times & NJ Wealth. VDAS Financial (ARN-90854) provides these updates for educational purposes. All market investments are subject to risk.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
