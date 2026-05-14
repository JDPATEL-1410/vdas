export default function SEBIDisclaimer() {
  return (
    <div
      className="w-full py-3 px-4 border-t"
      style={{ background: '#FFF3EC', borderColor: '#E8610A33' }}
    >
      <div className="max-w-7xl mx-auto flex items-start gap-3">
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
          style={{ background: 'var(--vdas-orange)' }}
        >
          ⚠
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-semibold" style={{ color: 'var(--vdas-orange)' }}>
            SEBI Disclosure:{' '}
          </span>
          Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          Past performance is not indicative of future returns.{' '}
          <span className="font-medium">AMFI Registration No: ARN-90854.</span>{' '}
          Investment in securities market are subject to market risks. For investor awareness visit{' '}
          <a
            href="https://www.amfiindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: 'var(--vdas-blue)' }}
          >
            www.amfiindia.com
          </a>.
        </p>
      </div>
    </div>
  )
}
