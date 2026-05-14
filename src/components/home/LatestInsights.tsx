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
  { url: 'https://www.njindiaonline.com/wealth/common/rss/newsletter.php?id=wealth', label: 'Personal Finance', source: 'NJ' },
  { url: 'https://economictimes.indiatimes.com/wealth/rssfeeds/8375551.cms', label: 'Personal Finance', source: 'ET' },
  { url: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms', label: 'Market Pulse', source: 'ET' }
]

export default function LatestInsights() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatest = async () => {
      setLoading(true)
      try {
        let allFetched: Article[] = []
        
        const fetchAndParse = async (url: string, defaultLabel: string, source: string) => {
          // Primary: rss2json
          const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=4v1g9l5v3m8s7j2r0q6p4n5z8y3x1w0v`;
          
          try {
            const res = await fetch(rss2jsonUrl)
            if (res.ok) {
              const data = await res.json()
              if (data.status === 'ok' && data.items) {
                return data.items.map((item: any) => {
                  const date = new Date(item.pubDate)
                  const isValid = !isNaN(date.getTime())
                  return {
                    title: item.title,
                    link: item.link,
                    pubDate: isValid ? date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'Recent',
                    timestamp: isValid ? date.getTime() : Date.now(),
                    thumbnail: item.thumbnail || item.enclosure?.link || "/wealth_management_dashboard_1778479882040.png",
                    category: defaultLabel,
                    source
                  }
                })
              }
            }
          } catch (e) {
            console.warn(`rss2json failed for ${url} in LatestInsights`)
          }

          // Fallback: CORS proxies
          const proxies = [
            `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
            `https://corsproxy.io/?${encodeURIComponent(url)}`
          ]
          
          let text = ""
          for (const proxy of proxies) {
            try {
              const response = await fetch(proxy)
              if (response.ok) {
                text = await response.text()
                if (text && text.includes('<rss')) break
              }
            } catch (e) { continue }
          }
          
          if (text) {
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
          }
          return []
        }

        const results = await Promise.all(FEEDS.map(f => fetchAndParse(f.url, f.label, f.source)))
        allFetched = results.flat()

        const processed = allFetched
          .sort((a, b) => b.timestamp - a.timestamp)
          .filter((v, i, a) => a.findIndex(t => t.link === v.link) === i)
          .slice(0, 3)
        
        setArticles(processed)
      } catch (err) {
        console.error("LatestInsights error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchLatest()
  }, [])

  if (!loading && articles.length === 0) return null

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1.5 bg-vdas-orange rounded-full" />
              <span className="text-vdas-orange text-[10px] font-black uppercase tracking-[0.4em]">Live Intelligence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-vdas-blue-dark tracking-tighter leading-tight font-heading">
              Latest <span className="text-vdas-blue">Financial Insights.</span>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-3 text-[11px] font-black text-vdas-blue uppercase tracking-[0.3em] group hover:text-vdas-orange transition-colors">
            View Knowledge Centre
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[16/10] bg-slate-50 rounded-[3rem] mb-8" />
                <div className="h-6 bg-slate-50 rounded-full w-3/4 mb-4" />
                <div className="h-4 bg-slate-50 rounded-full w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            {articles.map((article, i) => (
              <motion.article 
                key={article.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block relative overflow-hidden rounded-[3rem] mb-8 aspect-[16/11] shadow-premium group-hover:shadow-2xl transition-all duration-700 bg-slate-50 border border-slate-100"
                >
                  <img 
                    src={article.thumbnail} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md border ${
                      article.source === 'ET' 
                        ? 'bg-vdas-orange/10 text-vdas-orange border-vdas-orange/20' 
                        : 'bg-vdas-blue/10 text-vdas-blue border-vdas-blue/20'
                    }`}>
                      {article.source === 'ET' ? 'Economic Times' : 'NJ Wealth'}
                    </span>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-vdas-orange uppercase tracking-widest bg-vdas-orange/5 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{article.pubDate}</span>
                </div>

                <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-vdas-blue transition-colors font-heading tracking-tighter line-clamp-2">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                </h3>

                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[11px] font-black text-vdas-blue uppercase tracking-[0.2em] group/link w-fit"
                >
                  Read Insight
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
