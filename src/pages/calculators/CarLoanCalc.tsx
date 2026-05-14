import { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcEMI } from '../../utils/finance'

const RELATED = [
  { title: 'EMI', to: '/calculator/emi', icon: '💳' },
  { title: 'Home Loan', to: '/calculator/home-loan', icon: '🏠' },
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
]

export default function CarLoanCalcPage() {
  const [carPrice, setCarPrice] = useState(1000000)
  const [downPayment, setDownPayment] = useState(200000)
  const [rate, setRate] = useState(9)
  const [tenure, setTenure] = useState(5)

  const loanAmount = carPrice - downPayment
  const emi = useMemo(() => calcEMI(Math.max(0, loanAmount), rate, tenure * 12), [loanAmount, rate, tenure])

  const chartData = [
    { name: 'Down Payment', value: downPayment, color: '#f97316' },
    { name: 'Loan Principal', value: Math.max(0, loanAmount), color: '#1a56db' },
    { name: 'Total Interest', value: emi.totalInterest, color: '#94a3b8' },
  ]

  return (
    <CalculatorLayout
      title="Car Loan Calculator"
      titleAccent="Finance Your Dream Car"
      description="Calculate your car loan EMI, total interest, and total cost of ownership for your vehicle purchase."
      relatedCalcs={RELATED}
      image="/premium_suv_city_drive_1778483952071.png"
      disclaimer="Car loan calculations are illustrative. Actual rates, processing fees, and terms vary by lender."
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Car Price (On-road)" value={carPrice} min={300000} max={10000000} step={50000}
              onChange={setCarPrice} display={formatINR(carPrice)} />
            <SliderInput label="Down Payment" value={downPayment} min={0} max={carPrice * 0.5} step={50000}
              onChange={setDownPayment} display={formatINR(downPayment)} accent="orange" />
            <SliderInput label="Interest Rate" value={rate} min={7} max={16} step={0.1}
              onChange={setRate} display={`${rate}%`} />
            <SliderInput label="Loan Tenure" value={tenure} min={1} max={7} step={1}
              onChange={setTenure} display={`${tenure} Yrs`} accent="orange" />
          </div>
          <ResultCard label="Monthly EMI" value={formatINR(emi.emi)} accent="blue" large />
        </div>

        {/* Right Side: Charts & Breakdown */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center lg:text-left">Cost of Ownership Breakdown</h3>
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
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Outflow</p>
                  <p className="text-sm font-black text-slate-900">{formatINR(downPayment + emi.totalPayable)}</p>
                </div>
              </div>
              <div className="space-y-4">
                <ResultCard label="Total Interest" value={formatINR(emi.totalInterest)} accent="slate" />
                <ResultCard label="Total Car Cost" value={formatINR(downPayment + emi.totalPayable)} accent="green" />
              </div>
            </div>
          </div>

          <div className="p-8 bg-amber-50 border border-amber-200 rounded-[2.5rem] flex items-start gap-6">
            <div className="text-3xl">🚗</div>
            <div>
              <h4 className="text-amber-800 font-black uppercase tracking-widest text-xs mb-2">Depreciation Warning</h4>
              <p className="text-amber-700/80 text-sm leading-relaxed font-medium">
                Cars lose <strong className="text-amber-900">15-20%</strong> of their value the moment they leave the showroom. A car costing <strong className="text-amber-900">{formatINR(carPrice)}</strong> today may be worth only <strong className="text-amber-900">{formatINR(carPrice * 0.5)}</strong> in {tenure} years.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Car Buying Insights & Depreciation Table */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Smart Buying <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'The 20/4/10 Rule', 
                desc: 'Put 20% down, limit the loan to 4 years, and ensure total car costs (EMI + Insurance + Fuel) are under 10% of your income.',
                icon: '📏'
              },
              { 
                title: 'Zero-Dep Insurance', 
                desc: 'Always opt for Zero Depreciation insurance for the first 3-5 years. It prevents massive out-of-pocket expenses during claims.',
                icon: '🛡️'
              },
              { 
                title: 'Resale Value Focus', 
                desc: 'Popular models from reliable brands hold 10-15% more resale value. This "hidden profit" reduces your actual cost of ownership.',
                icon: '💰'
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Depreciation vs Loan Balance</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Year</th>
                    <th className="pb-4">Estimated Value</th>
                    <th className="pb-4">Loan Balance</th>
                    <th className="pb-4 text-right">Your Equity</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[0, 1, 3, 5, 7].filter(y => y <= tenure).map((y) => {
                    // Simple depreciation: 20% first year, 10% thereafter
                    const estValue = y === 0 ? carPrice : carPrice * Math.pow(0.8, 1) * Math.pow(0.9, y - 1)
                    
                    const months = y * 12
                    const r = rate / 12 / 100
                    const e = emi.emi
                    const n = tenure * 12
                    const p = months
                    const balance = y === 0 ? loanAmount : loanAmount * (Math.pow(1 + r, n) - Math.pow(1 + r, p)) / (Math.pow(1 + r, n) - 1)
                    
                    const equity = estValue - Math.max(0, balance)

                    return (
                      <tr key={y} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">Year {y} {y === 0 && <span className="ml-2 text-[10px] bg-vdas-blue text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">New</span>}</td>
                        <td className="py-4 text-sm font-medium">{formatINR(estValue)}</td>
                        <td className="py-4 text-sm font-medium text-vdas-orange-light">{formatINR(Math.max(0, balance))}</td>
                        <td className="py-4 font-black text-right text-vdas-blue-light">{formatINR(equity)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-[10px] mt-8 font-medium italic">
              * Depreciation is estimated and varies by model and usage. "Equity" is the estimated cash you'd have if you sold the car and paid off the loan.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
