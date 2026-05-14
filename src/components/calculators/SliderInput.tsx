interface SliderInputProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  display: string
  accent?: 'blue' | 'orange'
  sublabel?: string
}

export default function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  accent = 'blue',
  sublabel,
}: SliderInputProps) {
  const color = accent === 'blue' ? '#1a56db' : '#f97316'
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <label className="text-xs font-black text-slate-700 uppercase tracking-widest">{label}</label>
          {sublabel && <p className="text-[10px] text-slate-400 mt-0.5">{sublabel}</p>}
        </div>
        <span className="text-xl font-black" style={{ color }}>{display}</span>
      </div>
      <div className="relative h-2 bg-slate-100 rounded-full">
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wide">
        <span>{min.toLocaleString('en-IN')}</span>
        <span>{max.toLocaleString('en-IN')}</span>
      </div>
    </div>
  )
}
