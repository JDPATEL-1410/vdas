import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useState } from 'react'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

const PROFILES = [
  {
    name: 'Conservative',
    desc: 'Capital preservation with stable, predictable returns',
    colors: ['#0056b3', '#60a5fa', '#bfdbfe', '#dbeafe'],
    data: [{ name: 'Debt Funds', value: 60 }, { name: 'Hybrid Funds', value: 20 }, { name: 'Equity Funds', value: 15 }, { name: 'Liquid Fund', value: 5 }],
  },
  {
    name: 'Moderate',
    desc: 'Balanced growth with managed risk',
    colors: ['#0056b3', '#ff6b00', '#60a5fa', '#bfdbfe'],
    data: [{ name: 'Equity Funds', value: 50 }, { name: 'Debt Funds', value: 30 }, { name: 'Hybrid Funds', value: 15 }, { name: 'Liquid Fund', value: 5 }],
  },
  {
    name: 'Aggressive',
    desc: 'Maximum long-term wealth creation through equity',
    colors: ['#0056b3', '#ff6b00', '#0a1a4f', '#60a5fa'],
    data: [{ name: 'Equity Funds', value: 75 }, { name: 'International', value: 10 }, { name: 'Debt Funds', value: 10 }, { name: 'Liquid Fund', value: 5 }],
  },
]

export default function AssetAllocation() {
  const [active, setActive] = useState(1)
  const profile = PROFILES[active]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title="Asset Allocation Guide | VDAS Financial" description="Understand asset allocation — how to divide your investments across equity, debt, and other assets based on your risk profile." />
      
      <PageHero 
        title="Portfolio Architecture."
        description="Asset allocation determines over 90% of your long-term returns. We help you design the structural foundation for your wealth."
        image="/wealth_management_dashboard_1778479882040.png"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex gap-3 justify-center">
            {PROFILES.map((p, i) => (
              <button key={p.name} onClick={() => setActive(i)}
                className={`px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest border transition-all ${active === i ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300'}`}>
                {p.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">{profile.name} Portfolio</h2>
              <p className="text-slate-500 font-medium mb-8">{profile.desc}</p>
              <div className="space-y-4">
                {profile.data.map((item, i) => (
                  <div key={item.name} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: profile.colors[i] }} />
                      <span className="font-black text-slate-900 text-sm">{item.name}</span>
                    </div>
                    <span className="text-2xl font-black text-slate-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={profile.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130} innerRadius={60}>
                    {profile.data.map((_, i) => <Cell key={i} fill={profile.colors[i]} />)}
                  </Pie>
                  <Tooltip formatter={(v: any) => `${Number(v)}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
