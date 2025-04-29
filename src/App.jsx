/* eslint-disable react/prop-types */
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import ForgotPassword from '~/pages/Auth/ForgotPassword'
import LoginForm from '~/pages/Auth/LoginForm'
import HomePage from '~/pages/Client/HomePage/HomePage'
import RegisterForm from '~/pages/Auth/RegisterForm'
import ContactPage from '~/pages/Client/ContactPage/ContactPage'
import TestPage from './pages/Test/TestPage'
import SettingsPage from './pages/Client/Settings/SettingsPage'
import CustomerPage from './pages/Client/CustomerPage/CustomerPage'
import AboutUsPage from './pages/Client/AboutUsPage/AboutUsPage'
import ClientLayout from './components/Layout/ClientLayout'
import Page404 from './pages/Page404/Page404'
import Account from './pages/Account/Account'
import ResetPassword from './pages/Auth/ResetPassword'
import VerifyCode from './pages/Auth/VerifyCode'
import FaqPage from './pages/Client/FaqPage/FaqPage'
import { useAuth } from './contexts/AuthContext'

const PrivateRoute = ({ user }) => {
  if (!user) return <Navigate to='/login' replace={true} />
  return <Outlet />
}

function App() {
  const { currentUser } = useAuth()
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

        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="faq" element={<FaqPage />} />
      </Route>

      <Route element={<PrivateRoute user={currentUser} />}>
        <Route path='/' element={<ClientLayout />}>
          <Route path="settings" element={<SettingsPage />} />
          <Route path="customer" element={<CustomerPage />} />

          {/* Account Flow */}
          <Route path="account" element={<Account />} />
        </Route>
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
