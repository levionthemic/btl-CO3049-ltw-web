import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '~/pages/Auth/ForgotPassword'
import LoginForm from '~/pages/Auth/LoginForm'
import HomePage from '~/pages/Client/HomePage/HomePage'
import RegisterForm from '~/pages/Auth/RegisterForm'
import ContactPage from '~/pages/Client/ContactPage/ContactPage'
import TestPage from './pages/Test/TestPage'
import SettingsPage from './pages/Client/Settings/SettingsPage'
import CustomerPage from './pages/Client/CustomerPage/CustomerPage'
import AdminLayout from '~/components/Layout/AdminLayout'
import Dashboard from '~/pages/Admin/Dashboard/Dashboard'
import AboutUsPage from './pages/Client/AboutUsPage/AboutUsPage'
import ClientLayout from './components/Layout/ClientLayout'
import Page404 from './pages/Page404/Page404'
import ResetPassword from './pages/Auth/ResetPassword'
import VerifyCode from './pages/Auth/VerifyCode'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Test page */}
      <Route path="/test" element={<TestPage />}></Route>

      <Route path='/' element={<ClientLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="customer" element={<CustomerPage />} />

        <Route path="about-us" element={<AboutUsPage />} />
      </Route>


      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
