import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import loginImage from '~/assets/login_form.jpg'
import logo from '~/assets/logo.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, FIELD_REQUIRED_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from '~/utils/validators'
import clsx from 'clsx'
import { loginUserAPI } from '~/apis'
import { toast } from 'sonner'
import { useEffect } from 'react'

function LoginForm() {
  const navigate = useNavigate()

  const formSchema = z.object({
    email: z.string().min(1, { message: FIELD_REQUIRED_MESSAGE }).regex(EMAIL_RULE, { message: EMAIL_RULE_MESSAGE }),
    password: z.string().min(1, { message: FIELD_REQUIRED_MESSAGE }).regex(PASSWORD_RULE, { message: PASSWORD_RULE_MESSAGE })
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleLogin = (data) => {
    toast.promise(
      loginUserAPI(data),
      {
        loading: 'Login is in progress...',
        success: (res) => {
          if (!res.error) {
            localStorage.setItem('currentUser', JSON.stringify(res.data.data.user))
            navigate('/')
            return 'Login successfully!'
          }
        }
      }
    )
  }

  useEffect(() => {
    if (localStorage.getItem('currentUser'))
      navigate('/', { replace: true })
  }, [navigate])

  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <div className="bg-white flex items-center h-[90%] w-[75%] ">
        <div className='w-1/2 pr-20'>
          <div className='flex justify-center mb-14'>
            <img className=' w-32' src={logo} alt="Logo" />
          </div>
          <div className='mb-6'>
            <div className='text-4xl font-bold mb-1'>Login</div>
            <p className='text-gray-500'>Login to access your Levi Account</p>
          </div>
          <form onSubmit={form.handleSubmit(handleLogin)} noValidate>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor="email"
                className={clsx(
                  'font-semibold text-mainColor-700',
                  { 'text-red-500': form.formState.errors['email'] }
                )}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={clsx(
                  'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                  { '!border-red-600 outline-red-600': form.formState.errors['email'] }
                )}
                {...form.register('email')}
              />
              {form.formState.errors['email'] &&
                <div className="text-red-500">{form.formState.errors['email'].message}</div>
              }
            </div>
            <div className='flex flex-col gap-2 mt-3'>
              <label
                htmlFor="email"
                className={clsx(
                  'font-semibold text-mainColor-700',
                  { 'text-red-500': form.formState.errors['password'] }
                )}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className={clsx(
                  'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                  { '!border-red-600 outline-red-600': form.formState.errors['password'] }
                )}
                {...form.register('password')}
              />
              {form.formState.errors['password'] &&
                <div className="text-red-500">{form.formState.errors['password'].message}</div>
              }
            </div>
            <div className='mt-2 flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <input type="checkbox" id="remember" name="remember" value="remember"
                  className="w-4 h-4"/>
                <label className='text-sm font-semibold cursor-pointer' htmlFor="remember">Remember me</label>
              </div>
              <Link to='/forgot-password' className='text-sm text-mainColor1-500 hover:scale-105
              hover:duration-300 hover:ease-in-out transition-transform cursor-pointer'>Forgot password</Link>
            </div>
            <button type="submit" className='bg-mainColor-500 text-white py-3 px-4 rounded w-full mt-8 hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all'>Login</button>
          </form>
          <div className='mt-1 text-sm flex justify-center gap-1'>
            <p>Don&apos;t have an account? </p>
            <Link to="/register" className='text-mainColor1-500 hover:scale-105 hover:duration-300 hover:ease-in-out transition-transform block'>Register</Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center h-full">
          <img className='h-full w-full object-cover rounded-2xl' src={loginImage} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default LoginForm