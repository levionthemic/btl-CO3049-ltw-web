import { Route, Routes } from 'react-router-dom'
import LoginForm from '~/pages/Auth/LoginForm'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
    </Routes>
  )
}

export default App
