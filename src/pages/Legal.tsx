import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageSEO from '../components/ui/PageSEO'
import PageHeader from '../components/ui/PageHeader'

interface LegalPageProps { 
  title: string; 
  seoTitle: string; 
  lastUpdated: string; 
  image: string;
  children: React.ReactNode 
}

export function LegalPage({ title, seoTitle, lastUpdated, image, children }: LegalPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageSEO title={`${seoTitle} | VDAS Financial`} description={`${title} for VDAS Financial — Vishwas Deshpande Associates.`} />
      
      <PageHeader 
        title={title}
        subtitle={`Version 2.2 • Last Modified ${lastUpdated}`}
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
