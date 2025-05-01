import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { AuthProvider } from './contexts/AuthContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <AuthProvider>
      <App />
      <Toaster richColors/>
    </AuthProvider>
  </BrowserRouter>

)
