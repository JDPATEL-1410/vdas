import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcSIP } from '../../utils/finance'

const RELATED = [
  { 
    title: 'SIP', 
    to: '/calculator/sip', 
    icon: (
      <svg className="w-6 h-6 text-vdas-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ) 
  },
  { 
    title: 'Retirement', 
    to: '/calculator/retirement', 
    icon: (
      <svg className="w-6 h-6 text-vdas-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ) 
  },
  { 
    title: 'Goal Planner', 
    to: '/calculator/education', 
    icon: (
      <svg className="w-6 h-6 text-vdas-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ) 
  },
]

export default function DelayCalcPage() {
  const [amount, setAmount] = useState(10000)
  const [delayYears, setDelayYears] = useState(5)
  const [totalYears, setTotalYears] = useState(20)
  const [rate, setRate] = useState(12)

  const result = useMemo(() => {
    const withoutDelay = calcSIP(amount, totalYears, rate)
    const withDelay = calcSIP(amount, totalYears - delayYears, rate)
    return {
      withoutDelay,
      withDelay,
      costOfDelay: withoutDelay.total - withDelay.total,
      extraInvested: amount * delayYears * 12,
    }
  }, [amount, delayYears, totalYears, rate])

  const chartData = [
    { name: 'Start Today', value: result.withoutDelay.total, fill: '#1a56db' },
    { name: `Delay ${delayYears} Yrs`, value: result.withDelay.total, fill: '#f97316' },
  ]

  return (
    <CalculatorLayout
      title="Delay Calculator"
      titleAccent="The True Cost of Waiting"
      description="Understand the real financial impact of delaying your investments by even a few years."
      relatedCalcs={RELATED}
      image="/golden_clock_wealth_concept_1778483993812.png"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Monthly SIP Amount" value={amount} min={1000} max={100000} step={1000}
              onChange={setAmount} display={formatINR(amount)} />
            <SliderInput label="Total Investment Period" value={totalYears} min={5} max={40} step={1}
              onChange={setTotalYears} display={`${totalYears} Yrs`} />
            <SliderInput label="Delay Period" value={delayYears} min={1} max={Math.min(15, totalYears - 5)} step={1}
              onChange={setDelayYears} display={`${delayYears} Yrs`} accent="orange" />
            <SliderInput label="Expected Return" value={rate} min={8} max={18} step={0.5}
              onChange={setRate} display={`${rate}%`} />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <ResultCard label="If You Start Today" value={formatINR(result.withoutDelay.total)} accent="blue" large />
            <ResultCard label={`If You Delay ${delayYears} Years`} value={formatINR(result.withDelay.total)} accent="orange" large />
          </div>
          <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
            <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">💸 Cost of Delay</p>
            <p className="text-4xl font-black text-red-600">{formatINR(result.costOfDelay)}</p>
            <p className="text-xs text-red-700 mt-2 font-medium">
              By delaying {delayYears} years, you invest {formatINR(result.extraInvested)} less but lose {formatINR(result.costOfDelay)} in final corpus!
            </p>
          </div>
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 h-56">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
              <BarChart data={chartData} barSize={60}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={v => formatINR(v).replace('₹', '')} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none' }} formatter={(v: any) => formatINR(Number(v))} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* New Section: Delay Insights & Impact Table */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Time <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'The Procrastination Tax', 
                desc: 'Waiting is the most expensive thing you can do. Every 1-year delay at age 25 can cost you over ₹15 Lakhs by age 60.',
                icon: '⏰'
              },
              { 
                title: 'Catch-up is Impossible', 
                desc: 'If you delay by 5 years, you might need to double your SIP amount to reach the same final goal. Time is more powerful than capital.',
                icon: '📉'
              },
              { 
                title: 'Compound Interest Curve', 
                desc: 'Compounding works like a hockey stick. Most of your wealth is created in the final few years of the tenure. Don\'t cut it short.',
                icon: '🏒'
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Procrastination Cost Projection</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Delay Period</th>
                    <th className="pb-4">Final Corpus</th>
                    <th className="pb-4">Loss of Wealth</th>
                    <th className="pb-4 text-right">% Impact</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[0, 1, 3, 5, 10].filter(d => d < totalYears).map((d) => {
                    const data = calcSIP(amount, totalYears - d, rate)
                    const loss = result.withoutDelay.total - data.total
                    const impact = ((loss / result.withoutDelay.total) * 100).toFixed(1)
                    return (
                      <tr key={d} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">{d === 0 ? 'Start Now' : `${d} Year Delay`}</td>
                        <td className="py-4 text-sm font-medium">{formatINR(data.total)}</td>
                        <td className="py-4 text-sm font-medium text-red-400">{d === 0 ? '-' : formatINR(loss)}</td>
                        <td className="py-4 font-black text-right text-red-500">{d === 0 ? '0%' : `-${impact}%`}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic">
              * Calculations assume a constant SIP of {formatINR(amount)} for a total period of {totalYears} years at {rate}% return.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
