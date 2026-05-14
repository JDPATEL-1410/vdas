import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 py-32">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="text-vdas-blue mb-8"
      >
        <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
      <h1 className="text-[120px] font-black text-vdas-blue/10 leading-none mb-4">404</h1>
      <h2 className="text-3xl font-black text-vdas-blue-dark mb-4 -mt-8">Page Not Found</h2>
      <p className="text-slate-500 font-medium text-lg mb-10 max-w-md">
        Like a market correction — this is temporary! The page you're looking for doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="bg-vdas-blue text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-blue-dark transition-colors shadow-blue">
          Back to Home
        </Link>
        <Link to="/contact" className="border-2 border-vdas-orange text-vdas-orange px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange transition-colors">
          Contact Support
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
        {[
          { 
            label: 'Calculators', to: '/calculators', 
            icon: (
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )
          },
          { 
            label: 'Blog', to: '/blog', 
            icon: (
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            )
          },
          { 
            label: 'Services', to: '/services', 
            icon: (
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )
          },
          { 
            label: 'Goals', to: '/goals', 
            icon: (
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )
          },
        ].map(l => (
          <Link key={l.to} to={l.to} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all text-center group">
            <div className="text-slate-400 mb-3 group-hover:text-blue-600 transition-colors">{l.icon}</div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-900 transition-colors">{l.label}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
