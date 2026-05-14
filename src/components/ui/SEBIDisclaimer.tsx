export default function SEBIDisclaimer() {
  return (
    <div className="w-full py-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <div className="flex-shrink-0 flex items-center gap-2 bg-vdas-orange/10 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-vdas-orange rounded-full animate-pulse" />
          <span className="text-[9px] font-black text-vdas-orange uppercase tracking-[0.2em]">Mandatory Disclosure</span>
        </div>
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
          Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          Past performance is not indicative of future returns. <span className="text-slate-900 font-bold">AMFI Registration No: ARN-90854.</span>
          Investment in securities market are subject to market risks. For investor awareness visit{' '}
          <a
            href="https://www.amfiindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vdas-blue hover:text-vdas-orange font-bold transition-colors"
          >
            www.amfiindia.com
          </a>.
        </p>
      </div>
    </div>
  )
}
