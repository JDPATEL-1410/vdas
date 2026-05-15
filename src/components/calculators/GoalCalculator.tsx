import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

function formatINR(val: number) {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`
  if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`
  return `₹${Math.round(val).toLocaleString('en-IN')}`
}

const GOALS = ['Education', 'Marriage', 'Home', 'Car', 'Travel', 'Emergency', 'Retirement']

export default function GoalCalculator() {
  const [goalAmount, setGoalAmount] = useState(1000000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)
  const [inflation, setInflation] = useState(6)
  const [selectedGoal, setSelectedGoal] = useState('Education')

  const { requiredSIP, inflationAdjustedGoal, chartData } = useMemo(() => {
    const inflAdjusted = goalAmount * Math.pow(1 + inflation / 100, years)
    const n = years * 12
    const r = rate / 100 / 12
    const sip = inflAdjusted * r / ((Math.pow(1 + r, n) - 1) * (1 + r))
    const invested = sip * n
    return {
      requiredSIP: Math.round(sip),
      inflationAdjustedGoal: Math.round(inflAdjusted),
      chartData: [
        { name: "Today's Cost", value: goalAmount },
        { name: 'Future Cost', value: Math.round(inflAdjusted) },
        { name: 'Total Investment', value: Math.round(invested) },
      ],
    }
  }, [goalAmount, years, rate, inflation])

  return (
    <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-slate-100">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Controls */}
        <div className="lg:w-1/3 space-y-12">
          <div className="bg-slate-50 p-8 rounded-3xl">
            <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Goal Calculator</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plan Your Financial Goals</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {GOALS.map(g => (
              <button 
                key={g} 
                onClick={() => setSelectedGoal(g)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  selectedGoal === g 
                  ? 'bg-vdas-royal border-vdas-royal text-white shadow-lg' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-vdas-royal/30'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Goal Amount (Today)</label>
                <span className="text-2xl font-black text-vdas-royal">{formatINR(goalAmount)}</span>
              </div>
              <input type="range" min={100000} max={10000000} step={100000} value={goalAmount} onChange={e => setGoalAmount(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-royal" />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Years</label>
                  <span className="text-2xl font-black text-slate-900">{years}</span>
                </div>
                <input type="range" min={1} max={30} step={1} value={years} onChange={e => setYears(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-royal" />
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Returns %</label>
                  <span className="text-2xl font-black text-slate-900">{rate}%</span>
                </div>
                <input type="range" min={6} max={18} step={0.5} value={rate} onChange={e => setRate(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-royal" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Inflation Rate</label>
                <span className="text-2xl font-black text-vdas-orange">{inflation}%</span>
              </div>
              <input type="range" min={3} max={10} step={0.5} value={inflation} onChange={e => setInflation(+e.target.value)} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-orange" />
            </div>
          </div>

          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Monthly Savings Required</p>
            <p className="text-4xl font-black tracking-tight">{formatINR(requiredSIP)}</p>
          </div>
        </div>

        {/* Results & Chart */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 mb-12">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Future Cost of Goal</p>
            <p className="text-3xl font-black text-slate-900">{formatINR(inflationAdjustedGoal)}</p>
          </div>

          <div className="flex-1 min-h-[350px]">
            <ResponsiveContainer width="100%" height="100%" minHeight={300}>
              <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b', fontWeight: 'bold'}} width={120} />
                <Tooltip 
                  contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}}
                  formatter={(v: any) => formatINR(Number(v))}
                />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={30}>
                  <Cell fill="#e2e8f0" />
                  <Cell fill="#f97316" />
                  <Cell fill="#2563eb" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-10 text-[10px] text-slate-400 font-medium italic text-center uppercase tracking-widest">
            * Accounting for {inflation}% inflation, your {formatINR(goalAmount)} goal will cost {formatINR(inflationAdjustedGoal)} in {years} years.
          </p>
        </div>
      </div>
    </div>
  )
}
