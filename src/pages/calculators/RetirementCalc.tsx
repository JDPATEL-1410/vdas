import { useState, useMemo } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcSIP } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'Delay Cost', to: '/calculator/delay', icon: '⏰' },
  { title: 'SWP', to: '/calculator/swp', icon: '📤' },
]

export default function RetirementCalcPage() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retireAge, setRetireAge] = useState(60)
  const [monthlyExpense, setMonthlyExpense] = useState(50000)
  const [inflation, setInflation] = useState(6)
  const [rate, setRate] = useState(12)
  const [postRetireReturn, setPostRetireReturn] = useState(7)

  const { yearsToRetire, futureExpense, corpusNeeded, sipRequired, chartData, pieData } = useMemo(() => {
    const yearsToRetire = retireAge - currentAge
    const retirementYears = 85 - retireAge // assume life expectancy 85

    // Future monthly expense at retirement
    const futureExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetire)
    // Corpus needed (annuity formula)
    const r = postRetireReturn / 100 / 12
    const n = retirementYears * 12
    const corpusNeeded = futureExpense * ((1 - Math.pow(1 + r, -n)) / r)
    // Required monthly SIP to build corpus
    const sipAmount = corpusNeeded / (((Math.pow(1 + rate / 100 / 12, yearsToRetire * 12) - 1) / (rate / 100 / 12)) * (1 + rate / 100 / 12))

    const data = []
    for (let y = 0; y <= yearsToRetire; y += 5) {
      if (y === 0) y = 1;
      const { total } = calcSIP(sipAmount, y, rate)
      data.push({ age: currentAge + y, value: total })
    }

    const pie = [
      { name: 'Principal', value: sipAmount * 12 * yearsToRetire, color: '#1a56db' },
      { name: 'Wealth Gain', value: Math.max(0, corpusNeeded - (sipAmount * 12 * yearsToRetire)), color: '#f97316' },
    ]

    return {
      yearsToRetire,
      futureExpense: Math.round(futureExpense),
      corpusNeeded: Math.round(corpusNeeded),
      sipRequired: Math.round(sipAmount),
      chartData: data,
      pieData: pie
    }
  }, [currentAge, retireAge, monthlyExpense, inflation, rate, postRetireReturn])

  return (
    <CalculatorLayout
      title="Retirement Calculator"
      titleAccent="Plan Your Financial Freedom"
      description="Calculate exactly how much corpus you need to retire comfortably and the monthly SIP required to get there."
      relatedCalcs={RELATED}
      image="/retirement_planning_senior_couple_1778479863024.png"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Current Age" value={currentAge} min={20} max={55} step={1}
              onChange={setCurrentAge} display={`${currentAge} Yrs`} />
            <SliderInput label="Retirement Age" value={retireAge} min={currentAge + 5} max={70} step={1}
              onChange={setRetireAge} display={`${retireAge} Yrs`} accent="orange" />
            <SliderInput label="Current Monthly Expenses" value={monthlyExpense} min={10000} max={500000} step={5000}
              onChange={setMonthlyExpense} display={formatINR(monthlyExpense)} />
            <SliderInput label="Inflation Rate" value={inflation} min={3} max={10} step={0.5}
              onChange={setInflation} display={`${inflation}%`} accent="orange" />
          </div>
          <ResultCard label="Monthly SIP Required" value={formatINR(sipRequired)} accent="blue" large />
        </div>

        {/* Right Side: Visuals */}
        <div className="lg:col-span-2 space-y-8">
          {/* Corpus Growth */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Wealth Accumulation Path</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorRet" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1a56db" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#1a56db" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="age" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} label={{ value: 'Age', position: 'insideBottom', offset: -5, fontSize: 10 }} />
                  <YAxis tickFormatter={v => formatINR(v).replace('₹', '')} tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} formatter={(v: any) => formatINR(Number(v))} />
                  <Area type="monotone" dataKey="value" stroke="#1a56db" fill="url(#colorRet)" strokeWidth={3} name="Corpus" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col items-center">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Corpus Breakdown</h4>
                <div className="h-40 w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={5} dataKey="value">
                        {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(value: any) => formatINR(Number(value))} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase"><div className="w-2 h-2 rounded-full bg-blue-600"/> Principal</span>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-500 uppercase"><div className="w-2 h-2 rounded-full bg-orange-500"/> Gains</span>
                </div>
             </div>
             <div className="space-y-4">
                <ResultCard label="Retirement Corpus Needed" value={formatINR(corpusNeeded)} accent="blue" />
                <ResultCard label="Future Monthly Expense" value={formatINR(futureExpense)} sub={`Adjusted for ${inflation}% inflation`} accent="orange" />
             </div>
          </div>
        </div>
      </div>

      {/* New Section: Retirement Strategy & Inflation Analysis */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Retirement <span className="text-vdas-orange">Strategy.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'The Silent Killer', 
                desc: 'Inflation at 6% doubles prices every 12 years. Your ₹50k lifestyle today will cost ₹2.8 Lakhs in 30 years.',
                icon: '📉'
              },
              { 
                title: 'Healthcare Buffer', 
                desc: 'Medical costs typically rise faster than general inflation. Ensure your corpus includes a dedicated health fund.',
                icon: '🏥'
              },
              { 
                title: 'Post-Retirement Yield', 
                desc: 'Shift to safer assets like Debt/SWP post-retirement, but keep 20-30% in Equity to fight long-term inflation.',
                icon: '⚖️'
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Cost of Living Projection</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Age</th>
                    <th className="pb-4">Monthly Expense</th>
                    <th className="pb-4 text-right">Equivalent Value Today</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[currentAge, currentAge + 10, currentAge + 20, retireAge, retireAge + 10, retireAge + 20].filter(a => a <= 85).map((a) => {
                    const years = a - currentAge
                    const exp = monthlyExpense * Math.pow(1 + inflation / 100, years)
                    return (
                      <tr key={a} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">Age {a} {a === retireAge && <span className="ml-2 text-[10px] bg-vdas-orange text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Retire</span>}</td>
                        <td className="py-4 text-sm font-medium">{formatINR(exp)}</td>
                        <td className="py-4 font-black text-right text-vdas-blue-light">{formatINR(monthlyExpense)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic leading-relaxed">
              * This table shows how inflation erodes purchasing power. By age {retireAge}, you'll need {formatINR(monthlyExpense * Math.pow(1 + inflation / 100, retireAge - currentAge))} to buy what {formatINR(monthlyExpense)} buys today.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
