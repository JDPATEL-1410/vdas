import { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcLumpsum } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'SWP', to: '/calculator/swp', icon: '📤' },
  { title: 'STP', to: '/calculator/stp', icon: '🔄' },
  { title: 'Goal Planner', to: '/calculator/retirement', icon: '🎯' },
]

export default function LumpsumCalcPage() {
  const [principal, setPrincipal] = useState(100000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)

  const { total, returns, chartData, pieData } = useMemo(() => {
    const { total, returns } = calcLumpsum(principal, years, rate)
    const data = []
    for (let y = 0; y <= years; y++) {
      const v = calcLumpsum(principal, y, rate)
      data.push({ year: `Yr ${y}`, Value: v.total, Principal: principal })
    }
    const pie = [
      { name: 'Principal', value: principal, color: '#1a56db' },
      { name: 'Returns', value: returns, color: '#f97316' },
    ]
    return { total, returns, chartData: data, pieData: pie }
  }, [principal, years, rate])

  return (
    <CalculatorLayout
      title="Lumpsum Calculator"
      titleAccent="One-Time Investment Growth"
      description="See how a single lump sum investment grows over time with compound interest."
      relatedCalcs={RELATED}
      image="/wealth_management_dashboard_1778479882040.png"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs & Primary Result */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Investment Amount" value={principal} min={10000} max={10000000} step={10000}
              onChange={setPrincipal} display={formatINR(principal)} accent="orange" />
            <SliderInput label="Investment Period" value={years} min={1} max={30} step={1}
              onChange={setYears} display={`${years} Yrs`} />
            <SliderInput label="Expected Return Rate" value={rate} min={4} max={20} step={0.5}
              onChange={setRate} display={`${rate}%`} accent="orange" />
          </div>
          <ResultCard label="Total Value" value={formatINR(total)} accent="blue" large />
        </div>

        {/* Right Side: Charts & Breakdown */}
        <div className="lg:col-span-2 space-y-8">
          {/* Growth Chart */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Portfolio Value Projection</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={v => formatINR(v).replace('₹', '')} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} formatter={(v: any) => formatINR(Number(v))} />
                  <Line type="monotone" dataKey="Principal" stroke="#cbd5e1" strokeDasharray="8 8" dot={false} strokeWidth={2} name="Principal" />
                  <Line type="monotone" dataKey="Value" stroke="#f97316" dot={false} strokeWidth={3} name="Total Value" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Breakdown Stats */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <div className="h-52 relative">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(value: any) => formatINR(Number(value))} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</p>
                <p className="text-sm font-black text-vdas-blue">{((returns/total)*100).toFixed(0)}%</p>
              </div>
            </div>
          <div className="space-y-4">
              <ResultCard label="Principal Invested" value={formatINR(principal)} accent="slate" />
              <ResultCard label="Estimated Returns" value={formatINR(returns)} accent="orange" />
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Lumpsum Insights & Growth Milestones */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Investment <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'The STP Strategy', 
                desc: 'If you have a large sum, avoid investing it all at once. Use a Systematic Transfer Plan (STP) to move money from Liquid to Equity over 6-12 months.',
                icon: '🔄'
              },
              { 
                title: 'Rule of 72', 
                desc: 'At 12% returns, your money doubles every 6 years. At 15%, it doubles every 4.8 years. Small differences in rates lead to massive differences in wealth.',
                icon: '🔢'
              },
              { 
                title: 'Tax Implications', 
                desc: 'Long Term Capital Gains (LTCG) over ₹1 Lakh in equity are taxed at 10%. Plan your withdrawals to optimize tax liability.',
                icon: '📋'
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Wealth Accumulation Milestones</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Timeline</th>
                    <th className="pb-4">Multiplier</th>
                    <th className="pb-4">Growth Gain</th>
                    <th className="pb-4 text-right">Portfolio Value</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[3, 5, 10, 15, 20, 25, 30].filter(y => y <= years || y === 3).map((y) => {
                    const data = calcLumpsum(principal, y, rate)
                    const multiplier = (data.total / principal).toFixed(1)
                    return (
                      <tr key={y} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">Year {y}</td>
                        <td className="py-4 text-sm font-medium text-vdas-blue-light">{multiplier}x Principal</td>
                        <td className="py-4 text-sm font-medium text-vdas-orange-light">{formatINR(data.returns)}</td>
                        <td className="py-4 font-black text-right text-white">{formatINR(data.total)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic">
              * Calculations are based on compound interest. Equity markets do not give linear returns year-on-year.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
