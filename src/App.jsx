import { Route, Routes } from 'react-router-dom'
import LoginForm from '~/pages/Auth/LoginForm'
import RegisterForm from '~/pages/Auth/RegisterForm'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
    </Routes>
  )
}

export default App
