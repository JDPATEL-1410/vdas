import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../components/ui/PageSEO'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 flex items-center justify-center pt-36 pb-24 px-4">
      <PageSEO title="Client Login | VDAS Financial" description="Log in to your VDAS client portal to access your portfolio, statements, and financial plan." />

      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#0A1A4F] rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-xl">V</span>
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-slate-900">VDAS Financial</div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Trusted Since 1991</div>
            </div>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Client Portal</h1>
          <p className="text-slate-500 text-sm font-medium">Sign in to access your investment portfolio</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-10">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
            </div>
            <button className="w-full bg-[#0A1A4F] text-white py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-900 transition-colors">
              Sign In to Portal
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-500 text-center mb-4">OR ACCESS YOUR PORTAL DIRECTLY</p>
            <div className="space-y-3">
              {[
                { label: 'NJ eWealth Portal', url: 'https://ewealth.njindiaonline.in/', desc: 'Mutual Fund Portfolio' },
                { label: 'NJ Client Desk', url: 'https://clientdesk.njindiaonline.in/', desc: 'Support & Reports' },
                { label: 'Motilal Oswal', url: 'https://www.motilaloswal.com/', desc: 'Stock Portfolio' },
              ].map(portal => (
                <a key={portal.url} href={portal.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-blue-50 hover:border-blue-200 transition-all">
                  <div>
                    <p className="text-sm font-black text-slate-900">{portal.label}</p>
                    <p className="text-[10px] font-bold text-slate-400">{portal.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">Not a client yet? <Link to="/contact" className="text-blue-600 font-bold hover:underline">Book a free consultation</Link></p>
      </div>
    </motion.div>
  )
}
