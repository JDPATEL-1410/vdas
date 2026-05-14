import { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function formatINR(val: number) {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`
  if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`
  return `₹${Math.round(val).toLocaleString('en-IN')}`
}

export default function LumpsumCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)

  const { total, returns, chartData } = useMemo(() => {
    const data = []
    for (let y = 0; y <= years; y++) {
      const value = principal * Math.pow(1 + rate / 100, y)
      data.push({ year: `Year ${y}`, 'Portfolio Value': Math.round(value), Principal: principal })
    }
    const finalValue = principal * Math.pow(1 + rate / 100, years)
    return {
      total: Math.round(finalValue),
      returns: Math.round(finalValue - principal),
      chartData: data,
    }
  }, [principal, years, rate])

  return (
    <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-slate-100">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Controls */}
        <div className="lg:w-1/3 space-y-12">
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Lumpsum Calculator</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calculate One-Time Investments</p>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Investment Amount</label>
                <span className="text-2xl font-black text-vdas-orange">{formatINR(principal)}</span>
              </div>
              <input type="range" min={5000} max={1000000} step={5000} value={principal} onChange={e => setPrincipal(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-orange" />
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Investment Period</label>
                  <span className="text-2xl font-black text-slate-900">{years} <span className="text-sm text-slate-400">Yrs</span></span>
                </div>
                <input type="range" min={1} max={30} step={1} value={years} onChange={e => setYears(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-royal" />
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Expected Return Rate</label>
                  <span className="text-2xl font-black text-slate-900">{rate}<span className="text-sm text-slate-400">%</span></span>
                </div>
                <input type="range" min={4} max={20} step={0.5} value={rate} onChange={e => setRate(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-orange" />
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Projected Total Value</p>
            <p className="text-4xl font-black tracking-tight">{formatINR(total)}</p>
          </div>
        </div>

        {/* Results & Chart */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Investment</p>
              <p className="text-2xl font-black text-slate-900">{formatINR(principal)}</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-[10px] font-bold text-vdas-orange uppercase tracking-widest mb-1">Estimated Returns</p>
              <p className="text-2xl font-black text-vdas-orange">{formatINR(returns)}</p>
            </div>
          </div>

          <div className="flex-1 min-h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" tick={{fontSize: 10, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => formatINR(v).replace('₹', '')} tick={{fontSize: 10, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}}
                  formatter={(v: any) => formatINR(Number(v))}
                />
                <Line type="monotone" dataKey="Principal" stroke="#cbd5e1" strokeDasharray="10 10" dot={false} strokeWidth={2} />
                <Line type="monotone" dataKey="Portfolio Value" stroke="#f97316" dot={false} strokeWidth={4} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-10 text-[10px] text-slate-400 font-medium italic text-center">
            * Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
        </div>
      </div>
    </div>
  )
}
