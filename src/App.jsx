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
import ProcurementAI from "./pages/AI/Procurement"; // Fayl nomi to'g'riligini tekshiring
import DeepAnalytics from "./pages/Analytics/DeepAnalytics";
import Roles from "./pages/Admin/Role";

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
          path="/documents"
          element={
            <MainLayout>
              <Documents />
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
        <Route
          path="/ai-assistant"
          element={
            <MainLayout>
          
            </MainLayout>
          }
        />
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
