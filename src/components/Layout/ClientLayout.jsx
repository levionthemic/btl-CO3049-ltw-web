import Header from '../Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'

function ClientLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ClientLayout
