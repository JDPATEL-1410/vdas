import { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcGoal } from '../../utils/finance'

const RELATED = [
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
  { title: 'Marriage', to: '/calculator/marriage', icon: '💍' },
  { title: 'Home Loan', to: '/calculator/home-loan', icon: '🏠' },
]

export default function EducationCalcPage() {
  const [childAge, setChildAge] = useState(5)
  const [collegeCost, setCollegeCost] = useState(2000000)
  const [inflation, setInflation] = useState(10)
  const [rate, setRate] = useState(12)

  const yearsToCollege = Math.max(1, 18 - childAge)
  const result = useMemo(() => calcGoal(collegeCost, yearsToCollege, rate, inflation), [collegeCost, yearsToCollege, rate, inflation])

  const chartData = [
    { name: 'Principal Needed', value: result.sip * 12 * yearsToCollege, color: '#1a56db' },
    { name: 'Returns Contribution', value: Math.max(0, result.futureTarget - (result.sip * 12 * yearsToCollege)), color: '#f97316' },
  ]

  return (
    <CalculatorLayout
      title="Education Calculator"
      titleAccent="Fund Your Child's Future"
      description="Calculate the future cost of your child's higher education and how much to save monthly to fund it fully."
      relatedCalcs={RELATED}
      image="/graduation_cap_university_concept_1778484145155.png"
      accentColor="#fbbf24"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Child's Current Age" value={childAge} min={0} max={17} step={1}
              onChange={setChildAge} display={`${childAge} Yrs`} accent="orange" />
            <SliderInput label="Current Cost" value={collegeCost} min={200000} max={10000000} step={100000}
              onChange={setCollegeCost} display={formatINR(collegeCost)} />
            <SliderInput label="Education Inflation" value={inflation} min={6} max={15} step={0.5}
              onChange={setInflation} display={`${inflation}%`} accent="orange" />
            <SliderInput label="Expected Return" value={rate} min={8} max={18} step={0.5}
              onChange={setRate} display={`${rate}%`} />
          </div>
          <ResultCard label="Monthly SIP Required" value={formatINR(result.sip)} accent="blue" large />
        </div>

        {/* Right Side: Charts & Analysis */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center lg:text-left">Future Cost & Funding Strategy</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip formatter={(value: any) => formatINR(Number(value))} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Future Cost</p>
                  <p className="text-sm font-black text-slate-900">{formatINR(result.futureTarget)}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Time Horizon</p>
                  <p className="text-2xl font-black text-slate-900">{yearsToCollege} Years</p>
                </div>
                <ResultCard label="Current Cost" value={formatINR(collegeCost)} accent="slate" />
              </div>
            </div>
          </div>

          <div className="p-8 bg-amber-50 border border-amber-200 rounded-[2.5rem] flex items-start gap-6">
            <div className="text-3xl">🎓</div>
            <div>
              <h4 className="text-amber-800 font-black uppercase tracking-widest text-xs mb-2">Education Inflation Warning</h4>
              <p className="text-amber-700/80 text-sm leading-relaxed font-medium">
                Education costs in India are rising at <strong className="text-amber-900">{inflation}%</strong> per year. Your child's education costing <strong className="text-amber-900">{formatINR(collegeCost)}</strong> today will cost <strong className="text-amber-900">{formatINR(result.futureTarget)}</strong> in {yearsToCollege} years.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Education Funding & Milestones */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Funding <span className="text-vdas-orange">Strategy.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'Start at Birth', 
                desc: 'Starting an SIP when your child is born gives you 18 years for compounding. Starting at age 10 requires 3x more monthly savings.',
                icon: '👶'
              },
              { 
                title: 'Equities are Key', 
                desc: 'For a 10+ year horizon, Equity Mutual Funds are the only asset class that consistently beats education inflation (10-12%).',
                icon: '📈'
              },
              { 
                title: 'Goal Protection', 
                desc: 'Ensure you have a Term Insurance plan. In your absence, the insurance payout will fund your child\'s degree as planned.',
                icon: '🛡️'
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Future Cost Milestones</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Age</th>
                    <th className="pb-4">Years Away</th>
                    <th className="pb-4 text-right">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[childAge, childAge + 5, childAge + 10, 18, 21].filter(a => a >= childAge && a <= 25).map((a) => {
                    const years = a - childAge
                    const cost = collegeCost * Math.pow(1 + inflation / 100, years)
                    return (
                      <tr key={a} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">Age {a} {a >= 18 && <span className="ml-2 text-[10px] bg-vdas-blue text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">College</span>}</td>
                        <td className="py-4 text-sm font-medium">{years} Years</td>
                        <td className="py-4 font-black text-right text-vdas-orange-light">{formatINR(cost)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic">
              * Assuming education inflation of {inflation}% p.a. Professional degrees often see higher inflation than general education.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
