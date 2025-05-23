import clsx from 'clsx'
import { MenuIcon, SearchIcon } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '~/assets/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog'
import { logoutUserAPI } from '~/apis'
import { useAuth } from '~/contexts/AuthContext'
import { API_ROOT } from '~/utils/constants'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '~/components/ui/popover'
import { PopoverClose } from '@radix-ui/react-popover'

const menus = [
  {
    id: 'menuitem1',
    to: '/',
    label: 'Home'
  },
  {
    id: 'menuitem6',
    to: '/search',
    label: 'Search'
  },
  {
    id: 'menuitem2',
    to: '/blog',
    label: 'Blog'
  },
  {
    id: 'menuitem3',
    to: '/about-us',
    label: 'About Us'
  },
  {
    id: 'menuitem4',
    to: '/contact',
    label: 'Contact'
  },
  {
    id: 'menuitem5',
    to: '/faq',
    label: 'FAQ'
  }
]

function Header() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const { currentUser, logout } = useAuth()

  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logoutUserAPI().then(() => {
      logout()
    })
  }

  return (
    <header className='flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-2 sticky top-0 left-0 z-10 bg-white shadow-md'>
      <div className='flex items-center gap-4 text-[#1C160C]'>
        <img
          src={logo}
          className='w-20 cursor-pointer'
          onClick={() => navigate('/')}
        />
      </div>

      <Popover>
        <PopoverTrigger>
          <MenuIcon className='block md:hidden' />
        </PopoverTrigger>
        <PopoverContent className='flex flex-col items-center justify-center gap-4'>
          {menus.map((menuItem) => (
            <PopoverClose key={menuItem.id} asChild>
              <Link
                className={clsx(
                  'text-sm font-medium leading-normal menu-item',
                  {
                    'menu-item-active': pathname === menuItem.to
                  }
                )}
                to={menuItem.to}
              >
                {menuItem.label}
              </Link>
            </PopoverClose>
          ))}
        </PopoverContent>
      </Popover>

      <div className='flex justify-end gap-8'>
        <div className='hidden md:flex items-center gap-9'>
          {menus.map((menuItem) => (
            <Link
              key={menuItem.id}
              className={clsx('text-sm font-medium leading-normal menu-item', {
                'menu-item-active': pathname === menuItem.to
              })}
              to={menuItem.to}
            >
              {menuItem.label}
            </Link>
          ))}
        </div>

        {currentUser ? (
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-1.5 rounded-lg hover:duration-300 hover:ease-in-out transition-all'>
                <Avatar>
                  <AvatarImage src={API_ROOT + currentUser?.avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex items-center gap-1'>
                  <div>Hello,</div>
                  <div className='font-semibold'>
                    {currentUser?.name || 'Ẩn danh'}
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => navigate('/account')}
              >
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className='text-destructive hover:!bg-destructive/10 hover:!text-destructive cursor-pointer'
                    onSelect={(event) => {
                      event.preventDefault()
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Warning!</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure to log you out?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpen(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className='flex gap-2'>
            <button
              className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-mainColor-600 text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 hover:duration-300 hover:ease-in-out transition-all'
              onClick={() => navigate('/register')}
            >
              <span className='truncate'>Sign Up</span>
            </button>
            <button
              className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 hover:duration-300 hover:ease-in-out transition-all'
              onClick={() => navigate('/login')}
            >
              <span className='truncate'>Log In</span>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
