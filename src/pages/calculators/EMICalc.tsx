import { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcEMI } from '../../utils/finance'

const RELATED = [
  { title: 'Home Loan', to: '/calculator/home-loan', icon: '🏠' },
  { title: 'Car Loan', to: '/calculator/car-loan', icon: '🚗' },
]

export default function EMICalcPage() {
  const [principal, setPrincipal] = useState(1000000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const result = useMemo(() => calcEMI(principal, rate, tenure * 12), [principal, rate, tenure])

  const chartData = [
    { name: 'Principal', value: principal, color: '#1a56db' },
    { name: 'Interest', value: result.totalInterest, color: '#f97316' },
  ]

  return (
    <CalculatorLayout
      title="EMI Calculator"
      titleAccent="Equated Monthly Instalment"
      description="Calculate your loan EMI, total interest payable, and the total cost of borrowing."
      image="/calc_emi_header_1778571835180.png"
      relatedCalcs={RELATED}
      disclaimer="EMI calculations are illustrative. Actual EMI may vary based on processing fees, insurance, and other bank charges."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs & Primary Result */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Loan Amount" value={principal} min={50000} max={10000000} step={50000}
              onChange={setPrincipal} display={formatINR(principal)} />
            <SliderInput label="Annual Interest Rate" value={rate} min={5} max={20} step={0.1}
              onChange={setRate} display={`${rate}%`} accent="orange" />
            <SliderInput label="Loan Tenure" value={tenure} min={1} max={30} step={1}
              onChange={setTenure} display={`${tenure} Yrs`} />
          </div>
          
          <ResultCard label="Monthly EMI" value={formatINR(result.emi)} accent="blue" large />
        </div>

        {/* Right Side: Detailed Results & Charts */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center lg:text-left">Breakdown Analysis</h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Chart Container */}
              <div className="h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: any) => formatINR(Number(value))}
                      contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Payable</p>
                  <p className="text-sm font-black text-slate-900">{formatINR(result.totalPayable)}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Principal Amount</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">{formatINR(principal)}</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Total Interest</span>
                  </div>
                  <span className="text-sm font-black text-slate-900">{formatINR(result.totalInterest)}</span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Interest Percentage</span>
                    <span className="text-lg font-black text-orange-600">{((result.totalInterest / result.totalPayable) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ResultCard label="Principal Amount" value={formatINR(principal)} accent="slate" />
            <ResultCard label="Total Interest Payable" value={formatINR(result.totalInterest)} accent="orange" />
          </div>
        </div>
      </div>

      {/* New Section: Debt Insights & Payment Schedule */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Debt <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'The Prepayment Magic', 
                desc: 'Paying just one extra EMI per year can reduce a 20-year loan tenure by nearly 3-4 years.',
                icon: '🪄'
              },
              { 
                title: 'Interest Front-loading', 
                desc: 'In the early years of your loan, up to 70% of your EMI goes towards interest. Early prepayments save the most money.',
                icon: '📈'
              },
              { 
                title: 'Credit Score Impact', 
                desc: 'Maintaining a 750+ CIBIL score can help you negotiate 0.5% lower interest rates, saving lakhs over time.',
                icon: '⭐'
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Amortization Milestone Projection</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Timeline</th>
                    <th className="pb-4">Principal Paid</th>
                    <th className="pb-4">Interest Paid</th>
                    <th className="pb-4 text-right">Balance Owed</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[1, 5, 10, 15, 20, 25, 30].filter(y => y <= tenure || y === 1).map((y) => {
                    const months = y * 12
                    const r = rate / 12 / 100
                    const emi = result.emi
                    // Remaining balance formula: P * [(1+r)^n - (1+r)^p] / [(1+r)^n - 1]
                    const n = tenure * 12
                    const p = months
                    const balance = principal * (Math.pow(1 + r, n) - Math.pow(1 + r, p)) / (Math.pow(1 + r, n) - 1)
                    const totalPaid = emi * months
                    const principalPaid = principal - Math.max(0, balance)
                    const interestPaid = totalPaid - principalPaid

                    return (
                      <tr key={y} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">Year {y}</td>
                        <td className="py-4 text-sm font-medium">{formatINR(principalPaid)}</td>
                        <td className="py-4 text-sm font-medium text-vdas-orange-light">{formatINR(interestPaid)}</td>
                        <td className="py-4 font-black text-right text-vdas-blue-light">{formatINR(Math.max(0, balance))}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic">
              * The table shows how your loan balance decreases over time. Note how interest dominates in the early years.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
