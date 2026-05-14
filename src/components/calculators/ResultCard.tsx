interface ResultCardProps {
  label: string
  value: string
  sub?: string
  accent?: 'blue' | 'orange' | 'green' | 'slate'
  large?: boolean
}

const ACCENT_STYLES = {
  blue: { bg: 'bg-blue-50 border-blue-100', text: 'text-blue-700', label: 'text-blue-500' },
  orange: { bg: 'bg-orange-50 border-orange-100', text: 'text-orange-600', label: 'text-orange-400' },
  green: { bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', label: 'text-emerald-500' },
  slate: { bg: 'bg-slate-900 border-slate-800', text: 'text-white', label: 'text-slate-400' },
}

export default function ResultCard({ label, value, sub, accent = 'blue', large = false }: ResultCardProps) {
  const styles = ACCENT_STYLES[accent]

  return (
    <div className={`${styles.bg} border rounded-2xl p-6`}>
      <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${styles.label}`}>{label}</p>
      <p className={`font-black tracking-tight ${large ? 'text-4xl' : 'text-2xl'} ${styles.text}`}>{value}</p>
      {sub && <p className="text-xs text-slate-400 mt-1 font-medium">{sub}</p>}
    </div>
  )
}
