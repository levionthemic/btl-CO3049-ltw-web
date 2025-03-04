import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '~/pages/Auth/ForgotPassword'
import LoginForm from '~/pages/Auth/LoginForm'
import RegisterForm from '~/pages/Auth/RegisterForm'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
