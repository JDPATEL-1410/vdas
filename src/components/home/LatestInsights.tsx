import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Article {
  title: string
  link: string
  pubDate: string
  timestamp: number
  thumbnail: string
  category: string
  source: string
}

const FEEDS = [
  { url: 'https://economictimes.indiatimes.com/wealth/rssfeeds/8375551.cms', label: 'Personal Finance', source: 'ET' },
  { url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms', label: 'Market Pulse', source: 'ET' }
]

export default function LatestInsights() {
  const [articles, setArticles] = useState<Article[]>([
    {
      title: "Market Outlook: Navigating Volatility in 2026",
      link: "/blog",
      pubDate: "Today",
      timestamp: Date.now(),
      thumbnail: "/wealth_management_dashboard_1778479882040.png",
      category: "Market Pulse",
      source: "VDAS"
    },
    {
      title: "The Power of SIP: Building Wealth for India's Future",
      link: "/blog",
      pubDate: "Yesterday",
      timestamp: Date.now() - 86400000,
      thumbnail: "/sip_goals_light_hero_1778502068391.png",
      category: "Personal Finance",
      source: "VDAS"
    }
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatest = async () => {
      setLoading(true)
      try {
        let allFetched: Article[] = []
        
        const fetchAndParse = async (url: string, defaultLabel: string, source: string) => {
          const proxies = [
            `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
            `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
            `https://corsproxy.io/?${encodeURIComponent(url)}`
          ]
          
          let text = ""
          for (const proxy of proxies) {
            try {
              const controller = new AbortController();
              const id = setTimeout(() => controller.abort(), 5000);
              
              const res = await fetch(proxy, { signal: controller.signal })
              clearTimeout(id);
              
              if (!res.ok) continue
              text = await res.text()
              
              if (text && (text.includes('<rss') || text.includes('<channel'))) break
            } catch (e) {
              continue
            }
          }
          
          if (!text) {
            // Last resort: rss2json (with a different API key or just the free tier)
            try {
              const rss2json = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`
              const res = await fetch(rss2json)
              if (res.ok) {
                const data = await res.json()
                if (data.status === 'ok' && data.items) {
                  return data.items.map((item: any) => ({
                    title: item.title,
                    link: item.link,
                    pubDate: new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
                    timestamp: new Date(item.pubDate).getTime(),
                    thumbnail: item.thumbnail || item.enclosure?.link || "/wealth_management_dashboard_1778479882040.png",
                    category: defaultLabel,
                    source
                  }))
                }
              }
            } catch (e) {}
          }

          if (text) {
            try {
              const parser = new DOMParser()
              const xmlDoc = parser.parseFromString(text, "text/xml")
              const items = xmlDoc.querySelectorAll("item")
              
              return Array.from(items).map(item => {
                const title = item.querySelector("title")?.textContent || ""
                const link = item.querySelector("link")?.textContent || ""
                const pubDate = item.querySelector("pubDate")?.textContent || ""
                const desc = item.querySelector("description")?.textContent || ""
                
                let thumb = ""
                const media = item.getElementsByTagName("media:content")
                if (media.length > 0) thumb = media[0].getAttribute("url") || ""
                if (!thumb) {
                  const enclosure = item.querySelector("enclosure")
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
                  pubDate: isValid ? date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'Recent',
                  timestamp: isValid ? date.getTime() : Date.now(),
                  thumbnail: thumb || "/wealth_management_dashboard_1778479882040.png",
                  category: defaultLabel,
                  source
                }
              })
            } catch (e) {
              console.error("XML Parse error:", e)
            }
          }
          return []
        }

        const results = await Promise.all(FEEDS.map(f => fetchAndParse(f.url, f.label, f.source)))
        allFetched = results.flat()

        if (allFetched.length > 0) {
          const sorted = allFetched
            .sort((a, b) => b.timestamp - a.timestamp)
            .filter((v, i, a) => a.findIndex(t => t.link === v.link) === i)

          const newestDate = new Date(sorted[0].timestamp).toLocaleDateString()
          const dailyArticles = sorted.filter(a => new Date(a.timestamp).toLocaleDateString() === newestDate)
          
          const processed = dailyArticles.length >= 3 
            ? dailyArticles.slice(0, 6) 
            : sorted.slice(0, 3)
          
          setArticles(processed)
        }
      } catch (err) {
        console.warn("LatestInsights fetch failed, keeping fallbacks")
      } finally {
        setLoading(false)
      }
    }

    fetchLatest()
  }, [])

  if (!loading && articles.length === 0) return null

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-1 sm:h-1.5 bg-vdas-orange rounded-full" />
              <span className="text-vdas-orange text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Live Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-vdas-blue-dark tracking-tighter leading-[1.1] font-display">
              Latest <span className="text-vdas-blue italic">Financial Insights.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-black text-vdas-blue uppercase tracking-[0.2em] sm:tracking-[0.3em] group hover:text-vdas-orange transition-colors">
            View Knowledge Centre
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[16/10] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] mb-6 sm:mb-8" />
                <div className="h-6 bg-slate-50 rounded-full w-3/4 mb-4" />
                <div className="h-4 bg-slate-50 rounded-full w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {articles.map((article, i) => (
              <motion.article 
                key={article.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-vdas-blue transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden"
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
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-[7px] sm:text-[8px] font-black uppercase tracking-widest backdrop-blur-md bg-white/20 text-white border border-white/30">
                      {article.source === 'ET' ? 'Market Intelligence' : 'Institutional'}
                    </span>
                  </div>
                </a>
                
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="text-[8px] sm:text-[9px] font-black text-vdas-orange uppercase tracking-[0.2em]">
                      {article.category}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">{article.pubDate}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight group-hover:text-vdas-blue transition-colors font-heading tracking-tight line-clamp-2">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                  </h3>

                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-black text-vdas-blue uppercase tracking-[0.2em] sm:tracking-[0.25em] group/link w-fit"
                  >
                    Read Insight <span className="text-base sm:text-lg transition-transform group-hover/link:translate-x-1.5">→</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
