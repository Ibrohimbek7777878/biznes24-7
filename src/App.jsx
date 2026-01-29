import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import OTP from "./pages/Auth/OTP";
import ForcePasswordChange from "./pages/Auth/ForcePasswordChange";
import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Documents from "./pages/Documents";
import AIChat from "./pages/AIChat";
import MainLayout from "./layouts/MainLayout";
import AccountDetail from "./pages/AccountDetail";
import CreatePayment from "./pages/CreatePayment";
import SuccessPage from "./pages/SuccessPages";
import ProcurementAI from "./pages/AI/Procurement"; 
import DeepAnalytics from "./pages/Analytics/DeepAnalytics";
import CashFlow from "./pages/Analytics/CashFlow";
import Roles from "./pages/Admin/Role";
import AIInsights from "./pages/Analytics/AIInsights";
import TransactionHistory from "./pages/Finance/TransactionHistory"
import PartnerDetail from "./pages/Finance/ParentDetail";
import Services from "./pages/Services/Services";
import CheckPartner from "./pages/Services/CheckPartner";
import FXForecast from "./pages/Services/FXForecast";
import TenderBot from "./pages/Services/TenderBot";
import SmartTax from "./pages/Services/SmartTax";
import GlobalMarkets from "./pages/Services/GlobalMarkets"

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Flow */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route
          path="/force-password-change"
          element={<ForcePasswordChange />}
        />

        {/* Protected App (MainLayout ichida) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/payments"
          element={
            <MainLayout>
              <Payments />
            </MainLayout>
          }
        />
        <Route
          path="/transaction-history"
          element={
            <MainLayout>
              <TransactionHistory />
            </MainLayout>
          }
        />
        <Route
          path="/documents"
          element={
            <MainLayout>
              <Documents />
            </MainLayout>
          }
        />
        <Route
          path="/partner-detail/:id"
          element={
            <MainLayout>
              <PartnerDetail />
            </MainLayout>
          }
        />
        <Route
          path="/ai-assistant"
          element={
            <MainLayout>
              <AIChat />
            </MainLayout>
          }
        />
        <Route
          path="/cash-flow"
          element={
            <MainLayout>
              <CashFlow />
            </MainLayout>
          }
        />
        <Route
          path="/ai-insights"
          element={
            <MainLayout>
              <AIInsights />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route path="/services/tender-bot" element={<TenderBot />} />

        <Route path="/services/tax-calc" element={<SmartTax />} />

        <Route path="/services/partner-check" element={<CheckPartner />} />

        <Route path="/services/fx-forecast" element={<FXForecast />} />

        <Route
          path="/services/fx-forecast"
          element={
            <MainLayout>
              <GlobalMarkets />
            </MainLayout>
          }
        />
        <Route
          path="/account-detail"
          element={
            <MainLayout>
              <AccountDetail />
            </MainLayout>
          }
        />
        <Route
          path="/create-payment"
          element={
            <MainLayout>
              <CreatePayment />
            </MainLayout>
          }
        />

        {/* Chala qolgan joyni mana bunday yopamiz: */}
        <Route
          path="/procurement"
          element={
            <MainLayout>
              <ProcurementAI />
            </MainLayout>
          }
        />
        <Route path="/ai-assistant" element={<MainLayout></MainLayout>} />
        <Route
          path="/analytics"
          element={
            <MainLayout>
              <DeepAnalytics />
            </MainLayout>
          }
        />
        <Route
          path="/admin-roles"
          element={
            <MainLayout>
              <Roles />
            </MainLayout>
          }
        />
        <Route
          path="/procurement"
          element={
            <MainLayout>
              <ProcurementAI />
            </MainLayout>
          }
        />

        {/* Success Page (Layoutsiz bo'lgani ma'qul) */}
        <Route path="/payment-success" element={<SuccessPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
