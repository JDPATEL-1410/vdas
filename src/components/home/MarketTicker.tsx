import { useEffect, useState } from 'react'

interface MarketItem {
  name: string
  value: string
  change: string
  isPositive: boolean
}

function buildMarketData(): MarketItem[] {
  const rand = (base: number, range: number) => (base + Math.random() * range).toFixed(2)
  const mkChange = () => {
    const v = parseFloat((Math.random() * 2 - 0.5).toFixed(2))
    return { change: Math.abs(v).toFixed(2), isPositive: v >= 0 }
  }
  return [
    { name: 'SENSEX', value: `${Number(rand(79000, 2000)).toLocaleString('en-IN')}`, ...mkChange() },
    { name: 'NIFTY 50', value: Number(rand(23800, 600)).toLocaleString('en-IN'), ...mkChange() },
    { name: 'NIFTY MIDCAP 150', value: Number(rand(52000, 1000)).toLocaleString('en-IN'), ...mkChange() },
    { name: 'GOLD (10g)', value: `Rs.${Number(rand(72000, 3000)).toLocaleString('en-IN')}`, ...mkChange() },
    { name: 'SILVER (1kg)', value: `Rs.${Number(rand(90000, 5000)).toLocaleString('en-IN')}`, ...mkChange() },
    { name: 'USD/INR', value: `Rs.${rand(83, 1.5)}`, ...mkChange() },
    { name: 'RBI REPO RATE', value: '6.50%', change: '0.00', isPositive: true },
    { name: 'NIFTY BANK', value: Number(rand(51000, 1000)).toLocaleString('en-IN'), ...mkChange() },
    { name: 'ARN-90854', value: 'AMFI REGISTERED', change: 'LIVE', isPositive: true },
    { name: 'LEGACY', value: '33+ YEARS', change: 'TRUST', isPositive: true },
  ]
}

export default function MarketTicker() {
  const [data, setData] = useState<MarketItem[]>(buildMarketData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(buildMarketData())
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const items = [...data, ...data]

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] w-full h-8 overflow-hidden bg-slate-950 border-b border-white/5 flex items-center"
    >
      <div className="flex items-center">
        <div
          className="flex-shrink-0 px-8 py-2 text-[10px] font-black text-white uppercase tracking-[0.4em] relative overflow-hidden flex items-center gap-3"
          style={{ background: 'var(--vdas-blue)' }}
        >
          <div className="w-2 h-2 bg-vdas-orange rounded-full animate-pulse" />
          <span className="relative z-10">Live Market Pulse</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex ticker-animate whitespace-nowrap py-1">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-5 px-12 border-r border-white/5">
                <span className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">{item.name}</span>
                <span className="text-white font-black text-sm tracking-tighter">{item.value}</span>
                <span className={`text-[10px] font-black tracking-widest flex items-center gap-1.5 ${item.isPositive ? 'text-emerald-400' : 'text-vdas-orange'}`}>
                  {item.isPositive ? (
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  )}
                  {item.isPositive ? '+' : '-'}{item.change}%
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-animate {
          animation: ticker 40s linear infinite;
        }
        .ticker-animate:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
