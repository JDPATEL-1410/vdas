import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../components/ui/PageSEO'
import PageHero from '../components/ui/PageHero'

interface LegalPageProps { 
  title: string; 
  seoTitle: string; 
  lastUpdated: string; 
  image: string;
  description?: string;
  children: React.ReactNode 
}

export function LegalPage({ title, seoTitle, lastUpdated, image, description, children }: LegalPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title={`${seoTitle} | VDAS Financial`} description={`${title} for VDAS Financial — Vishwas Deshpande Associates.`} />
      
      <PageHero 
        title={title}
        description={description || `Version 2.2 • Last Modified ${lastUpdated}`}
        image={image}
        breadcrumbs={[{ label: 'Legal', to: '/legal' }, { label: title }]}
        badge="Institutional Compliance"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-slate prose-lg max-w-none 
          prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
          prose-p:text-slate-500 prose-p:font-medium prose-p:leading-relaxed
          prose-a:text-vdas-blue prose-a:font-bold hover:prose-a:text-vdas-orange transition-colors
          prose-li:text-slate-500 prose-li:font-medium">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" seoTitle="Privacy Policy" lastUpdated="May 13, 2026" image="/legal_privacy_header.png">
      <h2>1. Commitment to Privacy</h2>
      <p>At VDAS Financial (Vishwas Deshpande Associates), we hold the privacy and security of our clients in the highest regard. This Privacy Policy outlines our standards for collecting, managing, and protecting your personal and financial information in accordance with IT Act 2000 and subsequent amendments.</p>
      
      <h2>2. Nature of Data Collection</h2>
      <p>To provide institutional-grade wealth management services, we may collect the following information:</p>
      <ul>
        <li><strong>Identity Information:</strong> Full name, PAN details, and KYC-related documentation as mandated by SEBI/AMFI.</li>
        <li><strong>Contact Details:</strong> Verified email addresses, residential addresses, and phone numbers for official communication.</li>
        <li><strong>Financial Profile:</strong> Income ranges, risk appetite, existing investment portfolios, and financial goals.</li>
        <li><strong>Digital Footprint:</strong> Interaction data, IP addresses, and cookie-based preferences to enhance your digital experience.</li>
      </ul>

      <h2>3. Strategic Use of Information</h2>
      <p>Your information is utilized strictly for professional purposes, including:</p>
      <ul>
        <li>Conducting detailed financial planning and asset allocation analysis.</li>
        <li>Facilitating seamless transactions through platforms like NJ Wealth and Motilal Oswal.</li>
        <li>Providing regular portfolio updates, research insights, and regulatory disclosures.</li>
        <li>Internal quality audits and enhancement of our advisory frameworks.</li>
      </ul>

      <h2>4. Information Security & Disclosure</h2>
      <p>We employ enterprise-grade encryption and security protocols to safeguard your data. We do not engage in the sale or trade of client data to third-party marketing entities. Disclosure is limited to:</p>
      <ul>
        <li>Asset Management Companies (AMCs) for processing your investments.</li>
        <li>Regulatory bodies including SEBI, AMFI, and IT departments when legally required.</li>
        <li>Trusted technology partners who maintain strict confidentiality agreements with VDAS.</li>
      </ul>
    </LegalPage>
  )
}

export function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" seoTitle="Terms of Service" lastUpdated="May 13, 2026" image="/legal_terms_header.png">
      <h2>1. Acceptance of Terms</h2>
      <p>Accessing the VDAS Financial digital ecosystem constitutes your agreement to abide by these Terms of Service. These terms govern the relationship between you (the user/investor) and VDAS Financial (Vishwas Deshpande Associates).</p>
      
      <h2>2. Advisory Disclaimer</h2>
      <p>The information provided on this platform is for educational and advisory purposes. While we strive for absolute precision, the content does not substitute for a formal financial planning session. All investment decisions should be made after considering your individual risk profile and consulting with our principal advisor.</p>

      <h2>3. Intellectual & Digital Property</h2>
      <p>All proprietary frameworks, calculator logic, research reports, and brand aesthetics are the exclusive intellectual property of VDAS Financial. Unauthorized reproduction or redistribution is strictly prohibited and subject to legal action.</p>

      <h2>4. Use of Digital Tools</h2>
      <p>Our calculators and planning tools are designed to provide mathematical estimates based on historical data and user-defined inputs. These are illustrative tools and should not be construed as a guarantee of future portfolio performance.</p>

      <h2>5. Jurisdiction</h2>
      <p>Any disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
    </LegalPage>
  )
}

export function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" seoTitle="Investment Disclaimer" lastUpdated="May 13, 2026" image="/legal_disclaimer_header.png">
      <div className="p-10 bg-vdas-orange/5 border-l-8 border-vdas-orange rounded-3xl mb-12 shadow-sm">
        <p className="text-2xl font-black text-vdas-blue-dark mb-3">Institutional Risk Disclosure</p>
        <p className="text-slate-600 font-medium leading-relaxed">Mutual Fund investments are subject to market risks. Past performance is not a guarantee of future returns. Please read all scheme-related documents carefully before investing.</p>
      </div>

      <h2>Market Dynamics</h2>
      <p>The value of mutual fund units and the income derived from them can fluctuate based on market conditions, interest rates, and overall economic performance. Investors should be aware that their principal capital is subject to market volatility.</p>

      <h2>No Performance Guarantee</h2>
      <p>While VDAS Financial employs rigorous research and historical analysis, we do not provide any explicit or implicit guarantee regarding the achievement of investment objectives or specific returns for any scheme recommended.</p>

      <h2>Third-Party Platforms</h2>
      <p>VDAS Financial acts as a distributor and provides advisory through secondary platforms (NJ Wealth, Motilal Oswal). Users are subject to the terms and privacy protocols of these respective platforms during transaction execution.</p>
      
      <h2>Independent Verification</h2>
      <p>Investors are encouraged to independently verify the details of schemes from the respective AMC's Offer Documents (SID/SAI/KIM) before finalizing any investment decisions.</p>
    </LegalPage>
  )
}

export function CommissionDisclosure() {
  return (
    <LegalPage title="Commission Disclosure" seoTitle="Commission Rates" lastUpdated="May 13, 2026" image="/legal_commission_header.png">
      <h2>Transparency & Professionalism</h2>
      <p>In adherence to SEBI circular SEBI/IMD/CIR No. 4/168230/09, VDAS Financial maintains absolute transparency regarding the remuneration we receive from Asset Management Companies (AMCs). This disclosure ensures our clients understand the commercial framework of our advisory services.</p>

      <div className="my-16 overflow-hidden border border-slate-100 rounded-[2.5rem] shadow-premium">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-vdas-blue">Scheme Category</th>
              <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-vdas-blue text-right">Trail Commission (p.a.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-medium text-base text-slate-500">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-10 py-5 font-black text-slate-900">Equity Funds (Growth)</td>
              <td className="px-10 py-5 text-right font-black text-vdas-orange">0.75% – 1.25%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-10 py-5 font-black text-slate-900">Hybrid / BAF</td>
              <td className="px-10 py-5 text-right font-black text-vdas-orange">0.60% – 1.00%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-10 py-5 font-black text-slate-900">Debt / Fixed Income</td>
              <td className="px-10 py-5 text-right font-black text-vdas-orange">0.25% – 0.75%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-10 py-5 font-black text-slate-900">Liquid / Cash Funds</td>
              <td className="px-10 py-5 text-right font-black text-vdas-orange">0.05% – 0.15%</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-10 py-5 font-black text-slate-900">Tax Saving (ELSS)</td>
              <td className="px-10 py-5 text-right font-black text-vdas-orange">0.80% – 1.10%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-10 bg-vdas-blue-light/30 rounded-[2.5rem] border border-vdas-blue/10 mb-12">
        <p className="text-sm font-bold text-vdas-blue-dark leading-relaxed">
          Note: These commission rates are paid directly by the AMCs from the scheme's Expense Ratio. No direct advisory fee is charged to the client for regular plan distribution. Rates are subject to periodic revision by the AMCs.
        </p>
      </div>

      <h2>Advisory Choice</h2>
      <p>VDAS Financial specializes in providing high-value advisory through 'Regular' plans. However, we acknowledge that 'Direct' plans are available for all mutual fund schemes, offering lower expense ratios for investors who do not require external advisory or distribution support.</p>
    </LegalPage>
  )
}

export function GrievanceRedressal() {
  return (
    <LegalPage 
      title="Grievance Redressal" 
      seoTitle="Grievance & SCORES" 
      lastUpdated="May 16, 2026" 
      image="/legal_grievance_header.png"
      description="Ensuring absolute transparency and systematic investor protection through SEBI mandated resolution frameworks."
    >
      <div className="p-10 bg-vdas-blue/5 border-l-8 border-vdas-orange rounded-3xl mb-12 shadow-sm">
        <p className="text-2xl font-black text-vdas-blue-dark mb-3">Investor Grievance Policy</p>
        <p className="text-slate-600 font-medium leading-relaxed">At VDAS Financial, we are committed to providing a transparent and efficient mechanism for the resolution of investor grievances in accordance with SEBI regulations.</p>
      </div>

      <h2>Level 1: Internal Redressal</h2>
      <p>If you have any grievance or complaint regarding our services, please contact our Principal Officer directly. We aim to resolve all internal complaints within 15 working days.</p>
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-2">Contact Person</p>
            <p className="text-slate-900 font-black">Mr. Vishwas Deshpande</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-2">Email Address</p>
            <p className="text-slate-900 font-black">vishwas@vdasfinancial.com</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-2">Phone Number</p>
            <p className="text-slate-900 font-black">+91 98220 00000</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-2">Registered Address</p>
            <p className="text-slate-900 font-black">102, Business Square, Andheri West, Mumbai 400053</p>
          </div>
        </div>
      </div>

      <h2>Level 2: SEBI SCORES Portal</h2>
      <p>If the grievance is not redressed within 30 days of filing the complaint with us, you may lodge a complaint with SEBI through the SCORES (SEBI Complaints Redress System) portal.</p>
      <p>SCORES facilitates you to lodge your complaint online with SEBI and subsequently view its status. The platform ensures a transparent and structured resolution process monitored by the regulator.</p>
      
      <div className="bg-vdas-orange/5 rounded-2xl p-6 border border-vdas-orange/10 mb-8 inline-flex items-center gap-4">
        <div className="w-12 h-12 bg-vdas-orange/10 rounded-xl flex items-center justify-center text-vdas-orange">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
          <p className="text-[10px] font-black text-vdas-orange uppercase tracking-widest mb-1">Entity Registration Number (ARN)</p>
          <p className="text-xl font-black text-vdas-blue-dark">ARN-90854</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" 
           className="inline-flex items-center gap-3 bg-vdas-blue text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-vdas-orange transition-all shadow-lg shadow-vdas-blue/20">
          Lodge Complaint on SCORES
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
        <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" 
           className="inline-flex items-center gap-3 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
          Online Dispute Resolution (SMART ODR)
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>

      <div className="mt-16 p-8 border border-slate-100 rounded-[2.5rem] bg-slate-50/50">
        <h3 className="text-lg font-black text-slate-900 mb-4">Mandatory Disclosures</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          Filing of a complaint on SCORES is a prerequisite for initiating a complaint on the SMART ODR portal. Investor may lodge a complaint on SCORES within 3 years from the date of cause of action.
        </p>
      </div>
    </LegalPage>
  )
}
