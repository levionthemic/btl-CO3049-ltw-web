import { Outlet } from 'react-router-dom'
import AdminFooter from '~/components/Footer/AdminFooter'
import Sidebar from '~/components/Sidebar/Sidebar'

function AdminLayout() {
  return (
    <div id="app">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        <Outlet />
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminLayout