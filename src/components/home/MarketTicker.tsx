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
      className="w-full py-3 overflow-hidden bg-slate-950 border-y border-white/5"
    >
      <div className="flex items-center">
        <div
          className="flex-shrink-0 px-8 py-1.5 text-[10px] font-black text-white uppercase tracking-[0.4em] relative overflow-hidden"
          style={{ background: 'var(--mixed-gradient)' }}
        >
          <span className="relative z-10">Live Market Pulse</span>
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex ticker-animate whitespace-nowrap py-1">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 px-10">
                <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">{item.name}</span>
                <span className="text-white font-black text-xs tracking-tighter">{item.value}</span>
                <span className={`text-[10px] font-black tracking-widest ${item.isPositive ? 'text-vdas-royal' : 'text-vdas-orange'}`}>
                  {item.isPositive ? '▲' : '▼'} {item.isPositive ? '+' : '-'}{item.change}%
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/5 mx-2" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
