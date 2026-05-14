import { useState, useMemo } from 'react'
import CalculatorLayout from '../../components/calculators/CalculatorLayout'
import SliderInput from '../../components/calculators/SliderInput'
import ResultCard from '../../components/calculators/ResultCard'
import { formatINR, calcGoal } from '../../utils/finance'

const RELATED = [
  { title: 'Education', to: '/calculator/education', icon: '🎓' },
  { title: 'Retirement', to: '/calculator/retirement', icon: '🌅' },
  { title: 'Dream Home', to: '/calculator/home-loan', icon: '🏠' },
  { title: 'Vacation', to: '/calculator/vacation', icon: '✈️' },
]

export default function MarriageCalcPage() {
  const [weddingCost, setWeddingCost] = useState(2000000)
  const [years, setYears] = useState(10)
  const [inflation, setInflation] = useState(8)
  const [rate, setRate] = useState(12)

  const result = useMemo(() => calcGoal(weddingCost, years, rate, inflation), [weddingCost, years, rate, inflation])

  return (
    <CalculatorLayout
      title="Marriage Calculator"
      titleAccent="Plan Your Dream Wedding"
      description="Calculate the future cost of a wedding and the monthly savings needed to fund it comfortably."
      relatedCalcs={RELATED}
      image="/modern_wedding_couple_india_1778483932790.png"
      accentColor="#f472b6"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-8">
            <SliderInput label="Current Wedding Budget" value={weddingCost} min={500000} max={20000000} step={100000}
              onChange={setWeddingCost} display={formatINR(weddingCost)} />
            <SliderInput label="Years Until Wedding" value={years} min={1} max={25} step={1}
              onChange={setYears} display={`${years} Yrs`} accent="orange" />
            <SliderInput label="Wedding Inflation Rate" value={inflation} min={5} max={15} step={0.5}
              onChange={setInflation} display={`${inflation}%`} />
          </div>
          <ResultCard label="Monthly SIP Required" value={formatINR(result.sip)} accent="blue" large />
        </div>
        
        <div className="lg:col-span-2 space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard label="Current Budget" value={formatINR(weddingCost)} accent="slate" />
            <ResultCard label="Future Target Cost" value={formatINR(result.futureTarget)} accent="orange" />
          </div>
          <div className="p-8 bg-pink-50 border border-pink-100 rounded-[2rem] flex items-center gap-6">
            <div className="text-3xl">💍</div>
            <div>
              <h4 className="text-pink-800 font-black uppercase tracking-widest text-xs mb-1">Celebration Planning</h4>
              <p className="text-pink-700/80 text-sm leading-relaxed font-medium">
                Wedding costs in India are rising fast. Your <strong className="text-pink-900">{formatINR(weddingCost)}</strong> budget today will need <strong className="text-pink-900">{formatINR(result.futureTarget)}</strong> in {years} years.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Marriage Insights & Milestones */}
      <div className="mt-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Wealth <span className="text-vdas-orange">Insights.</span></h3>
          <div className="space-y-6">
            {[
              { 
                title: 'Beating Inflation', 
                desc: 'Wedding inflation is often higher than CPI. Using Equity SIPs is essential for goals beyond 5 years to preserve purchasing power.',
                icon: '📈'
              },
              { 
                title: 'Gold as a Hedge', 
                desc: 'Consider allocating a portion to Sovereign Gold Bonds (SGBs) for wedding goals to hedge against rising gold prices.',
                icon: '🪙'
              },
              { 
                title: 'Smart Spending', 
                desc: 'Investing the "wedding budget" for a few extra years can often fund a down payment for a home. Balance is key.',
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
            <h3 className="text-white font-black text-xl mb-8 relative z-10">Future Cost Milestones</h3>
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-800">
                    <th className="pb-4">Timeline</th>
                    <th className="pb-4">Years From Now</th>
                    <th className="pb-4 text-right">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {[1, 5, 10, 15, 20].filter(y => y <= years || y === 1).map((y) => {
                    const cost = weddingCost * Math.pow(1 + inflation / 100, y)
                    return (
                      <tr key={y} className="border-b border-slate-800/50 group hover:bg-white/5 transition-colors">
                        <td className="py-4 font-black text-white">{y === 0 ? 'Today' : `Year ${y}`}</td>
                        <td className="py-4 text-sm font-medium">{y} Years Away</td>
                        <td className="py-4 font-black text-right text-vdas-orange-light">{formatINR(cost)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  )
}
