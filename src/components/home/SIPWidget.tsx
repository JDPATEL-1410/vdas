import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Link } from 'react-router-dom'

export default function SIPWidget() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const totalInvestment = monthlyInvestment * 12 * timePeriod
  const totalValue = monthlyInvestment * ((Math.pow(1 + (expectedReturn / 100 / 12), timePeriod * 12) - 1) / (expectedReturn / 100 / 12)) * (1 + (expectedReturn / 100 / 12))
  const estReturns = totalValue - totalInvestment

  const data = [
    { name: 'Total Investment', value: totalInvestment, color: '#e6f0ff' },
    { name: 'Estimated Returns', value: estReturns, color: '#ff6b00' },
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4rem] shadow-premium border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Inputs */}
            <div className="p-12 lg:p-20 bg-slate-50">
              <div className="mb-12">
                <span className="text-vdas-orange text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Interactive Tool</span>
                <h2 className="text-4xl font-black text-vdas-blue-dark tracking-tighter">Power of <span className="text-vdas-blue">Compounding.</span></h2>
              </div>

              <div className="space-y-10">
                {/* Monthly Investment */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Monthly Investment</label>
                    <span className="text-xl font-black text-vdas-blue-dark">₹{monthlyInvestment.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-blue"
                  />
                </div>

                {/* Expected Return */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Expected Return (p.a)</label>
                    <span className="text-xl font-black text-vdas-blue-dark">{expectedReturn}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-orange"
                  />
                </div>

                {/* Time Period */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Time Period (Years)</label>
                    <span className="text-xl font-black text-vdas-blue-dark">{timePeriod} Yrs</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vdas-blue"
                  />
                </div>
              </div>
            </div>

            {/* Visuals */}
            <div className="p-12 lg:p-20 flex flex-col justify-center items-center text-center bg-white">
              <div className="w-full h-64 mb-12">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        formatter={(val: any) => `₹${Math.round(val).toLocaleString()}`}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="grid grid-cols-2 gap-8 w-full mb-12">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Investment</p>
                  <p className="text-xl font-black text-vdas-blue-dark">₹{Math.round(totalInvestment).toLocaleString()}</p>
                </div>
                <div className="p-6 rounded-3xl bg-vdas-orange-light border border-vdas-orange/10">
                  <p className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-1">Wealth Gained</p>
                  <p className="text-xl font-black text-vdas-orange">₹{Math.round(estReturns).toLocaleString()}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 w-full mb-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Estimated Future Value</p>
                <p className="text-5xl font-black text-vdas-blue-dark">₹{Math.round(totalValue).toLocaleString()}</p>
              </div>

              <Link
                to="/calculator/sip"
                className="w-full text-center bg-vdas-blue-dark text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-blue transition-all"
              >
                View Full Calculator
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
