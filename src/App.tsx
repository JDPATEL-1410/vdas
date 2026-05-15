import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import SEBIDisclaimer from './components/ui/SEBIDisclaimer'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import Login from './pages/Login'
import FinancialFreedom from './pages/FinancialFreedom'
import AssetAllocation from './pages/AssetAllocation'
import NotFound from './pages/NotFound'

// Blog
import Blog from './pages/Blog'
import GoalBasedBlog from './pages/blog/GoalBasedBlog'
import MutualFundBlog from './pages/blog/MutualFundBlog'
import DirectEquitiesBlog from './pages/blog/DirectEquitiesBlog'

// Services
import GoalBaseInvesting from './pages/services/GoalBaseInvesting'
import Stocks from './pages/services/Stocks'
import FixedDeposit from './pages/services/FixedDeposit'
import TaxSolution from './pages/services/TaxSolution'
import LifeInsurance from './pages/services/LifeInsurance'
import MutualFund from './pages/services/MutualFund'

// Goals
import GoalsIndex from './pages/goals/GoalsIndex'
import Retirement from './pages/goals/Retirement'
import DreamHome from './pages/goals/DreamHome'
import ChildEducation from './pages/goals/ChildEducation'
import ChildWedding from './pages/goals/ChildWedding'
import EmergencyFund from './pages/goals/EmergencyFund'
import WealthCreation from './pages/goals/WealthCreation'

// Calculators Hub
import Calculators from './pages/Calculators'
// Individual Calculators
import SIPCalcPage from './pages/calculators/SIPCalc'
import LumpsumCalcPage from './pages/calculators/LumpsumCalc'
import SWPCalcPage from './pages/calculators/SWPCalc'
import STPCalcPage from './pages/calculators/STPCalc'
import RetirementCalcPage from './pages/calculators/RetirementCalc'
import DelayCalcPage from './pages/calculators/DelayCalc'
import EMICalcPage from './pages/calculators/EMICalc'
import InsuranceCalcPage from './pages/calculators/InsuranceCalc'
import TaxCalcPage from './pages/calculators/TaxCalc'
import MarriageCalcPage from './pages/calculators/MarriageCalc'
import EducationCalcPage from './pages/calculators/EducationCalc'
import HomeLoanCalcPage from './pages/calculators/HomeLoanCalc'
import CarLoanCalcPage from './pages/calculators/CarLoanCalc'
import VacationCalcPage from './pages/calculators/VacationCalc'

// Legal
import { PrivacyPolicy, TermsOfService, Disclaimer, CommissionDisclosure } from './pages/Legal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* ── Main Pages ────────────────── */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/financial-freedom" element={<FinancialFreedom />} />
            <Route path="/asset-allocation" element={<AssetAllocation />} />

            {/* ── Blog ─────────────────────── */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/goal-based-financial-planning" element={<GoalBasedBlog />} />
            <Route path="/blog/mutual-fund-investment-guide" element={<MutualFundBlog />} />
            <Route path="/blog/direct-equities-wealth-building" element={<DirectEquitiesBlog />} />

            {/* ── Services ──────────────────── */}
            <Route path="/services" element={<GoalBaseInvesting />} />
            <Route path="/services/goal-base-investing" element={<GoalBaseInvesting />} />
            <Route path="/services/stocks" element={<Stocks />} />
            <Route path="/services/fixed-deposit" element={<FixedDeposit />} />
            <Route path="/services/tax-solution" element={<TaxSolution />} />
            <Route path="/services/life-insurance" element={<LifeInsurance />} />
            <Route path="/services/mutual-fund" element={<MutualFund />} />

            {/* ── Goals ─────────────────────── */}
            <Route path="/goals" element={<GoalsIndex />} />
            <Route path="/goals/retirement" element={<Retirement />} />
            <Route path="/goals/dream-home" element={<DreamHome />} />
            <Route path="/goals/child-education" element={<ChildEducation />} />
            <Route path="/goals/child-wedding" element={<ChildWedding />} />
            <Route path="/goals/emergency-fund" element={<EmergencyFund />} />
            <Route path="/goals/wealth-creation" element={<WealthCreation />} />

            {/* ── Calculators ───────────────── */}
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/calculator/sip" element={<SIPCalcPage />} />
            <Route path="/calculator/lumpsum" element={<LumpsumCalcPage />} />
            <Route path="/calculator/swp" element={<SWPCalcPage />} />
            <Route path="/calculator/stp" element={<STPCalcPage />} />
            <Route path="/calculator/retirement" element={<RetirementCalcPage />} />
            <Route path="/calculator/delay" element={<DelayCalcPage />} />
            <Route path="/calculator/emi" element={<EMICalcPage />} />
            <Route path="/calculator/insurance" element={<InsuranceCalcPage />} />
            <Route path="/calculator/tax" element={<TaxCalcPage />} />
            <Route path="/calculator/marriage" element={<MarriageCalcPage />} />
            <Route path="/calculator/education" element={<EducationCalcPage />} />
            <Route path="/calculator/home-loan" element={<HomeLoanCalcPage />} />
            <Route path="/calculator/car-loan" element={<CarLoanCalcPage />} />
            <Route path="/calculator/vacation" element={<VacationCalcPage />} />

            {/* ── Legal ─────────────────────── */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/commission-disclosure" element={<CommissionDisclosure />} />

            {/* ── Legacy / Redirects ──────── */}
            <Route path="/products" element={<GoalBaseInvesting />} />
            <Route path="/mutual-funds" element={<MutualFund />} />
            <Route path="/articles" element={<Blog />} />

            {/* ── 404 ───────────────────────── */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppButton />
      <SEBIDisclaimer />
    </div>
  )
}
