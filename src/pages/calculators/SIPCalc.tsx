import { useState, useMemo, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcSIP } from '../../utils/finance'

const RELATED = [
  { title: 'Lumpsum', to: '/calculator/lumpsum', icon: '💰' },
  { title: 'SWP', to: '/calculator/swp', icon: '📤' },
  { title: 'Goal Planner', to: '/calculator/retirement', icon: '🎯' },
  { title: 'Delay Cost', to: '/calculator/delay', icon: '⏰' },
]

export default function SIPCalcPage() {
  const [amount, setAmount] = useState(10000)
  const [years, setYears] = useState(15)
  const [rate, setRate] = useState(12)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const { total, invested, returns, chartData, pieData } = useMemo(() => {
    const { total, invested, returns } = calcSIP(amount, years, rate)
    const data = []
    for (let y = 1; y <= years; y++) {
      const r = calcSIP(amount, y, rate)
      data.push({ year: `Yr ${y}`, Invested: r.invested, Returns: r.returns })
    }
    const pie = [
      { name: 'Invested', value: invested, color: '#1a56db' },
      { name: 'Returns', value: returns, color: '#f97316' },
    ]
    return { total, invested, returns, chartData: data, pieData: pie }
  }, [amount, years, rate])

  return (
    <CalculatorLayout
      title="SIP Calculator"
      titleAccent="Systematic Investment Plan"
      description="Calculate how your monthly SIP investments grow over time using the power of compounding."
      relatedCalcs={RELATED}
      image="/financial_freedom_family_1778479843533.png"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs & Result Summary */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Monthly SIP Amount" value={amount} min={500} max={100000} step={500}
              onChange={setAmount} display={formatINR(amount)} />
            <SliderInput label="Investment Period" value={years} min={1} max={30} step={1}
              onChange={setYears} display={`${years} Yrs`} accent="orange" />
            <SliderInput label="Expected Return Rate" value={rate} min={6} max={20} step={0.5}
              onChange={setRate} display={`${rate}%`} />
          </div>
          <ResultCard label="Total Value" value={formatINR(total)} accent="blue" large />
        </div>

        {/* Right Side: Charts & Breakdown */}
        <div className="lg:col-span-2 space-y-8">
          {/* Growth Chart */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Estimated Growth</h3>
            <div className="h-72">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="sipInv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1a56db" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#1a56db" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="sipRet" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <YAxis tickFormatter={v => formatINR(v).replace('₹', '')} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} formatter={(v: any) => formatINR(Number(v))} />
                    <Area type="monotone" dataKey="Invested" stroke="#1a56db" fill="url(#sipInv)" strokeWidth={2.5} name="Invested" stackId="1" />
                    <Area type="monotone" dataKey="Returns" stroke="#f97316" fill="url(#sipRet)" strokeWidth={2.5} name="Returns" stackId="1" />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Breakdown Stats */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="h-52 relative">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                      {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip formatter={(value: any) => formatINR(Number(value))} />
                  </PieChart>
                </ResponsiveContainer>
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Returns</p>
                <p className="text-sm font-black text-vdas-orange">{((returns/total)*100).toFixed(0)}%</p>
              </div>
            </div>
            <div className="space-y-4">
              <ResultCard label="Total Investment" value={formatINR(invested)} accent="slate" />
              <ResultCard label="Estimated Returns" value={formatINR(returns)} accent="orange" />
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Tips & Detailed Breakdown */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Wealth <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'Power of Compounding', 
                desc: 'Your returns in the last 5 years will likely be more than your total investment in the first 10 years. Stay invested long-term.',
                icon: '⚡'
              },
              { 
                title: 'The Step-up Advantage', 
                desc: 'Increasing your SIP by just 10% every year can nearly double your final corpus. Consistency is key.',
                icon: '🚀'
              },
              { 
                title: 'Market Volatility', 
                desc: 'SIPs thrive in volatile markets by averaging out your purchase cost. Never stop your SIP when markets are down.',
                icon: '📉'
              }
            ].map((tip) => (
              <div key={tip.title} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{tip.icon}</div>
                <h4 className="font-black text-slate-900 mb-2 uppercase text-xs tracking-widest">{tip.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vdas-blue/20 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Year-wise Projection</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Year</th>
                    <th className="pb-4">Invested</th>
                    <th className="pb-4">Returns</th>
                    <th className="pb-4 text-right">Total Value</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[1, 5, 10, 15, 20, 25, 30].filter(y => y <= years || y === 1).map((y) => {
                    const data = calcSIP(amount, y, rate)
                    return (
                      <tr key={y} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">Year {y}</td>
                        <td className="py-4 text-sm font-medium">{formatINR(data.invested)}</td>
                        <td className="py-4 text-sm font-medium text-vdas-orange-light">{formatINR(data.returns)}</td>
                        <td className="py-4 font-black text-right text-vdas-blue-light">{formatINR(data.total)}</td>
                      </tr>
                    )
                  })}
                  {years > 1 && ![1, 5, 10, 15, 20, 25, 30].includes(years) && (
                    <tr className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                      <td className="py-4 font-black text-white">Year {years}</td>
                      <td className="py-4 text-sm font-medium">{formatINR(invested)}</td>
                      <td className="py-4 text-sm font-medium text-vdas-orange-light">{formatINR(returns)}</td>
                      <td className="py-4 font-black text-right text-vdas-blue-light">{formatINR(total)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic">
              * Calculations assume a fixed return rate of {rate}% p.a. Actual returns may vary based on market performance.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
