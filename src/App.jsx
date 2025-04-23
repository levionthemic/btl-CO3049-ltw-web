import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '~/pages/Auth/ForgotPassword'
import LoginForm from '~/pages/Auth/LoginForm'
import HomePage from '~/pages/HomePage/HomePage'
import RegisterForm from '~/pages/Auth/RegisterForm'
import ContactPage from '~/pages/ContactPage/ContactPage'
import TestPage from './pages/Test/TestPage'
import SettingsPage from './pages/Settings/SettingsPage'
import CustomerPage from './pages/CustomerPage/CustomerPage'
import AdminLayout from '~/components/Layout/AdminLayout'
import Dashboard from '~/pages/Admin/Dashboard/Dashboard'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/test" element={<TestPage />}></Route>
      <Route path="/settings" element={<SettingsPage />}></Route>
      <Route path="/customer" element={<CustomerPage />}></Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
