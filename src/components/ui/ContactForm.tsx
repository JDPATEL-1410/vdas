import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  service: string
  message: string
  consent: boolean
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form submitted:', data)
    toast.success('Thank you! We will get back to you shortly.')
    reset()
  }

  const inputClass =
    'w-full px-5 py-4 rounded-xl border text-sm outline-none transition-all focus:ring-4 focus:ring-vdas-blue/5 focus:border-vdas-blue bg-white'
  
  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">
            Full Name <span className="text-vdas-blue">*</span>
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="John Doe"
            className={`${inputClass} ${errors.name ? 'border-red-300' : 'border-slate-200'}`}
          />
          {errors.name && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">
            Email Address <span className="text-vdas-blue">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
            })}
            type="email"
            placeholder="john@example.com"
            className={`${inputClass} ${errors.email ? 'border-red-300' : 'border-slate-200'}`}
          />
          {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">
            Phone Number <span className="text-vdas-blue">*</span>
          </label>
          <input
            {...register('phone', {
              required: 'Phone is required',
              pattern: { value: /^[6-9]\d{9}$/, message: 'Invalid mobile' },
            })}
            type="tel"
            placeholder="9876543210"
            className={`${inputClass} ${errors.phone ? 'border-red-300' : 'border-slate-200'}`}
          />
          {errors.phone && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.phone.message}</p>}
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">City</label>
          <input
            {...register('city')}
            type="text"
            placeholder="Mumbai"
            className={`${inputClass} border-slate-200`}
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">
          Service Interested In <span className="text-vdas-blue">*</span>
        </label>
        <select
          {...register('service', { required: 'Please select a service' })}
          className={`${inputClass} ${errors.service ? 'border-red-300' : 'border-slate-200'}`}
        >
          <option value="">Select a service...</option>
          <option>Mutual Funds / SIP</option>
          <option>Retirement Planning</option>
          <option>Insurance Planning</option>
          <option>Wealth Management (PMS)</option>
          <option>Tax Saving (ELSS)</option>
          <option>General Inquiry</option>
        </select>
        {errors.service && <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{errors.service.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Message (Optional)</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="How can we help you?"
          className={`${inputClass} border-slate-200 resize-none`}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          {...register('consent', { required: 'Required' })}
          type="checkbox"
          id="consent"
          className="mt-1 w-4 h-4 rounded border-slate-300 text-vdas-blue focus:ring-vdas-blue"
        />
        <label htmlFor="consent" className="text-[11px] text-slate-500 font-medium leading-relaxed">
          I consent to being contacted by VDAS regarding my query. My information will be kept confidential. <span className="text-vdas-blue">*</span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 rounded-2xl bg-vdas-blue text-white font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-vdas-blue/20 hover:shadow-vdas-blue/40 hover:-translate-y-1 transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
      >
        {isSubmitting ? 'Sending Request...' : 'Send Message'}
        {!isSubmitting && (
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    </motion.form>
  )
}
