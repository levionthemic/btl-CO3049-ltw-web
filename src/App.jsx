import { Route, Routes } from "react-router-dom";
import ForgotPassword from "~/pages/Auth/ForgotPassword";
import LoginForm from "~/pages/Auth/LoginForm";
import HomePage from "~/pages/HomePage/HomePage";
import RegisterForm from "~/pages/Auth/RegisterForm";
import ContactPage from "~/pages/ContactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
