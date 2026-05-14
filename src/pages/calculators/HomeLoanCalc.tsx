import { useState, useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcEMI } from '../../utils/finance'

const RELATED = [
  { title: 'EMI', to: '/calculator/emi', icon: '💳' },
  { title: 'Car Loan', to: '/calculator/car-loan', icon: '🚗' },
  { title: 'SIP', to: '/calculator/sip', icon: '📈' },
]

export default function HomeLoanCalcPage() {
  const [propertyValue, setPropertyValue] = useState(5000000)
  const [downPaymentPct, setDownPaymentPct] = useState(20)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)
  const [savingsRate, setSavingsRate] = useState(12)

  const downPayment = Math.round(propertyValue * downPaymentPct / 100)
  const loanAmount = propertyValue - downPayment

  const emi = useMemo(() => calcEMI(loanAmount, rate, tenure * 12), [loanAmount, rate, tenure])
  
  const sipForDown = useMemo(() => {
    if (downPayment <= 0) return { sip: 0 }
    const n = 5 * 12, r = savingsRate / 100 / 12
    const sip = (downPayment * r) / ((Math.pow(1 + r, n) - 1) * (1 + r))
    return { sip: Math.round(sip) }
  }, [downPayment, savingsRate])

  const chartData = [
    { name: 'Down Payment', value: downPayment, color: '#f97316' },
    { name: 'Loan Principal', value: loanAmount, color: '#1a56db' },
    { name: 'Total Interest', value: emi.totalInterest, color: '#94a3b8' },
  ]

  return (
    <CalculatorLayout
      title="Home Loan Calculator"
      titleAccent="Plan Your Dream Home"
      description="Calculate your home loan EMI, total interest, and how much to save for the down payment."
      relatedCalcs={RELATED}
      disclaimer="Home loan calculations are indicative. Actual terms, processing fees, and eligibility depend on the lender."
      image="/modern_home_exterior_1778480068838.png"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Property Value" value={propertyValue} min={1000000} max={50000000} step={500000}
              onChange={setPropertyValue} display={formatINR(propertyValue)} />
            <SliderInput label="Down Payment %" value={downPaymentPct} min={10} max={50} step={1}
              onChange={setDownPaymentPct} display={`${downPaymentPct}% (${formatINR(downPayment)})`} accent="orange" />
            <SliderInput label="Home Loan Rate" value={rate} min={7} max={14} step={0.1}
              onChange={setRate} display={`${rate}%`} />
            <SliderInput label="Loan Tenure" value={tenure} min={5} max={30} step={1}
              onChange={setTenure} display={`${tenure} Yrs`} accent="orange" />
          </div>
          <ResultCard label="Monthly EMI" value={formatINR(emi.emi)} accent="blue" large />
        </div>

        {/* Right Side: Charts & Breakdown */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center lg:text-left">Home Acquisition Cost Breakdown</h3>
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
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Cost</p>
                  <p className="text-sm font-black text-slate-900">{formatINR(propertyValue + emi.totalInterest)}</p>
                </div>
              </div>
              <div className="space-y-4">
                <ResultCard label="Total Interest" value={formatINR(emi.totalInterest)} accent="slate" />
                <ResultCard label="Total Repayment" value={formatINR(emi.totalPayable)} accent="green" />
              </div>
            </div>
          </div>

          <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2rem] flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-vdas-blue rounded-2xl flex items-center justify-center text-white text-2xl font-black">
              🎯
            </div>
            <div>
              <h4 className="text-vdas-blue font-black uppercase tracking-widest text-xs mb-2">Build Your Down Payment</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Save <strong className="text-vdas-blue">{formatINR(sipForDown.sip)}/month</strong> in a {savingsRate}% SIP to reach your <strong className="text-vdas-blue">{formatINR(downPayment)}</strong> down payment target in just 5 years.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Home Buying Insights & Payment Milestones */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Home Buying <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'Tax Benefit Sec 24', 
                desc: 'You can claim up to ₹2 Lakhs deduction per year on interest paid for a self-occupied property. This effectively reduces your interest rate.',
                icon: '🧾'
              },
              { 
                title: 'Home Loan Insurance', 
                desc: 'Always buy a Term Insurance cover equal to your loan amount. This ensures your family keeps the home even in your absence.',
                icon: '🛡️'
              },
              { 
                title: 'LTV Ratio Matters', 
                desc: 'Lenders typically fund 80% of property value. Higher down payment reduces your EMI and total interest significantly.',
                icon: '🏠'
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
                    const e = emi.emi
                    const n = tenure * 12
                    const p = months
                    const balance = loanAmount * (Math.pow(1 + r, n) - Math.pow(1 + r, p)) / (Math.pow(1 + r, n) - 1)
                    const totalPaid = e * months
                    const principalPaid = loanAmount - Math.max(0, balance)
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
              * Calculations are based on a fixed rate of {rate}%. Actual EMI may change if the repo rate or MCLR is adjusted.
            </p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
