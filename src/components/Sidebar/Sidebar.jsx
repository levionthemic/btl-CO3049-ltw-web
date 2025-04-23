
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { calculateChildrenHeight } from '~/utils/helpers'
import isDesktop from '../../../public/assets/static/js/helper/isDesktop'

const sidebarItems = [
  {
    isTitle: true,
    name: 'Main Menu'
  },
  {
    name: 'Dashboard',
    icon: 'speedometer2', // Bootstrap icon name (bi bi-speedometer2)
    url: '/dashboard'
  },
  {
    name: 'Products',
    icon: 'box-seam',
    url: '/products',
    submenu: [
      {
        name: 'All Products',
        url: '/products/all'
      },
      {
        name: 'Categories',
        url: '/products/categories'
      },
      {
        name: 'Submenu Example',
        url: '#',
        submenu: [
          {
            name: 'Level 2 - A',
            url: '/products/submenu/a'
          },
          {
            name: 'Level 2 - B',
            url: '/products/submenu/b'
          }
        ]
      }
    ]
  },
  {
    name: 'Orders',
    icon: 'cart',
    url: '/orders'
  },
  {
    isTitle: true,
    name: 'Settings'
  },
  {
    name: 'User Profile',
    icon: 'person',
    url: '/profile'
  },
  {
    name: 'Logout',
    icon: 'box-arrow-right',
    url: '/logout'
  }
]

const THEME_KEY = 'theme'


export default function Sidebar() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const [theme, setThemeState] = useState('light') // for checkbox binding

  const setTheme = (theme, persist = false) => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    document.documentElement.setAttribute('data-bs-theme', theme)

    if (persist) {
      localStorage.setItem(THEME_KEY, theme)
    }
    setThemeState(theme)
  }

  const toggleDarkTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme, true)
  }

  useEffect(() => {
    // Init theme
    const storedTheme = localStorage.getItem(THEME_KEY)
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')
      if (prefersDark) {
        setTheme(prefersDark.matches ? 'dark' : 'light', true)

        prefersDark.addEventListener('change', (e) =>
          setTheme(e.matches ? 'dark' : 'light', true)
        )
      }
    }
  }, [])

  useEffect(() => {
    const sidebarEl = document.getElementById('sidebar')
    if (!sidebarEl) return

    if (isDesktop(window)) {
      sidebarEl.classList.add('active')
      sidebarEl.classList.add('sidebar-desktop')
    }

    const submenus = sidebarEl.querySelectorAll('.sidebar-item.has-sub .submenu')
    submenus.forEach((submenu) => {
      const sidebarItem = submenu.parentElement
      if (sidebarItem.classList.contains('active')) {
        submenu.classList.add('submenu-open')
      } else {
        submenu.classList.add('submenu-closed')
      }

      setTimeout(() => {
        calculateChildrenHeight(submenu, true)
      }, 50)

    })
    const sidebar = new window.Sidebar(sidebarEl)
  }, [])

  return (
    <div className={`sidebar-wrapper ${isSidebarOpen ? 'active' : ''}`}>
      <div className="sidebar-header position-relative">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <img src="/assets/static/images/logo/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="theme-toggle d-flex gap-2 align-items-center mt-2">
            {/* Theme toggle icons */}
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="img" className="iconify iconify--system-uicons" width="20" height="20"
              preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21">
              <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round">
                <path
                  d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                  opacity=".3"></path>
                <g transform="translate(-210 -1)">
                  <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                  <circle cx="220.5" cy="11.5" r="4"></circle>
                  <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                </g>
              </g>
            </svg>
            <div className="form-check form-switch fs-6">
              <input
                className="form-check-input me-0"
                type="checkbox"
                id="toggle-dark"
                checked={theme === 'dark'}
                style={{ cursor: 'pointer' }}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light', true)}
              />
              <label className="form-check-label" htmlFor="toggle-dark"></label>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="img" className="iconify iconify--mdi" width="20" height="20" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z">
              </path>
            </svg>
          </div>
          <div className="sidebar-toggler x">
            <a href="#" className="sidebar-hide d-xl-none d-block" onClick={() => setIsSidebarOpen(false)}>
              <i className="bi bi-x bi-middle"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="sidebar-menu">
        <ul className="menu">
          {sidebarItems.map((item, index) =>
            item.isTitle ? (
              <li className="sidebar-title" key={index}>
                {item.name}
              </li>
            ) : (
              <li
                key={index}
                className={`sidebar-item ${
                  location.pathname.startsWith(item.url) ? 'active' : ''
                } ${item.submenu?.length ? 'has-sub' : ''}`}
              >
                <Link to={item.url || '#'} className="sidebar-link">
                  <i className={`bi bi-${item.icon}`}></i>
                  <span>{item.name}</span>
                </Link>

                {item.submenu?.length > 0 && (
                  <ul className="submenu">
                    {item.submenu.map((sub, idx) => (
                      <li
                        className={`submenu-item ${
                          location.pathname.startsWith(sub.url) ? 'active' : ''
                        } ${sub.submenu?.length ? 'has-sub' : ''}`}
                        key={idx}
                      >
                        <Link to={sub.url} className="submenu-link">
                          {sub.name}
                        </Link>
                        {sub.submenu?.length > 0 && (
                          <ul className="submenu submenu-level-2">
                            {sub.submenu.map((subsub, i) => (
                              <li
                                key={i}
                                className={`submenu-item ${
                                  location.pathname === subsub.url ? 'active' : ''
                                }`}
                              >
                                <Link to={subsub.url} className="submenu-link">
                                  {subsub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}
