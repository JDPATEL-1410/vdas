export function formatINR(val: number): string {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`
  if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`
  return `₹${Math.round(val).toLocaleString('en-IN')}`
}

export function formatINRShort(val: number): string {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`
  if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`
  if (val >= 1000) return `₹${(val / 1000).toFixed(1)}K`
  return `₹${Math.round(val)}`
}

export function calcSIP(amount: number, years: number, rate: number) {
  const n = years * 12
  const r = rate / 100 / 12
  const fv = amount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  const invested = amount * n
  return { total: Math.round(fv), invested, returns: Math.round(fv - invested) }
}

export function calcLumpsum(principal: number, years: number, rate: number) {
  const fv = principal * Math.pow(1 + rate / 100, years)
  return { total: Math.round(fv), returns: Math.round(fv - principal) }
}

export function calcSWP(corpus: number, withdrawal: number, rate: number) {
  // Months until corpus depletes
  const r = rate / 100 / 12
  if (withdrawal <= corpus * r) return { months: Infinity, sustainable: true }
  const months = Math.log(withdrawal / (withdrawal - corpus * r)) / Math.log(1 + r)
  return { months: Math.round(months), sustainable: false }
}

export function calcEMI(principal: number, rate: number, tenureMonths: number) {
  const r = rate / 100 / 12
  const emi = (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1)
  const totalPayable = emi * tenureMonths
  return { emi: Math.round(emi), totalInterest: Math.round(totalPayable - principal), totalPayable: Math.round(totalPayable) }
}

export function calcGoal(target: number, years: number, rate: number, inflation: number) {
  const futureTarget = target * Math.pow(1 + inflation / 100, years)
  const n = years * 12
  const r = rate / 100 / 12
  const sip = (futureTarget * r) / ((Math.pow(1 + r, n) - 1) * (1 + r))
  return { sip: Math.round(sip), futureTarget: Math.round(futureTarget) }
}
