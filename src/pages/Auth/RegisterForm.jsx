import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { registerUserAPI } from '~/apis'
import loginImage from '~/assets/login_form.jpg'
import logo from '~/assets/logo.png'
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_CONFIRMATION_MESSAGE,
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE,
  PHONE_RULE,
  PHONE_RULE_MESSAGE
} from '~/utils/validators'

function RegisterForm() {
  const formSchema = z
    .object({
      firstName: z.string().min(1, { message: FIELD_REQUIRED_MESSAGE }),
      lastName: z.string().min(1, { message: FIELD_REQUIRED_MESSAGE }),
      email: z
        .string()
        .min(1, { message: FIELD_REQUIRED_MESSAGE })
        .regex(EMAIL_RULE, { message: EMAIL_RULE_MESSAGE }),
      phone: z
        .string()
        .min(1, { message: FIELD_REQUIRED_MESSAGE })
        .regex(PHONE_RULE, { message: PHONE_RULE_MESSAGE }),
      password: z
        .string()
        .min(1, { message: FIELD_REQUIRED_MESSAGE })
        .regex(PASSWORD_RULE, { message: PASSWORD_RULE_MESSAGE }),
      confirmPassword: z.string().min(1, { message: FIELD_REQUIRED_MESSAGE })
    })
    .required()
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: PASSWORD_CONFIRMATION_MESSAGE,
          path: ['confirmPassword']
        })
      }
    })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  })

  const navigate = useNavigate()

  const onRegister = (data) => {
    const userData = {
      name: `${data.firstName} ${data.lastname}`,
      email: data.email,
      password: data.password,
      phone: data.phone
    }
    toast.promise(registerUserAPI(userData), {
      loading: 'Register is in progress...',
      success: (res) => {
        if (!res.error) {
          navigate('/login')
          return 'Register Successfully!'
        }
      }
    })
  }

  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <div className='flex items-center w-[75%] h-[90%]'>
        <div className='flex-1 flex items-center justify-center h-full mr-10'>
          <img
            className='h-full w-full object-cover rounded-2xl'
            src={loginImage}
            alt=''
          />
        </div>
        <div className='w-1/2 h-full'>
          <div className='mb-6 flex justify-center'>
            <img src={logo} alt='Logo' className='w-32' />
          </div>
          <div className='mb-6'>
            <div className='text-4xl font-bold mb-1'>Sign up</div>
            <p className='text-gray-500'>
              Let’s get you all set up so you can access your personal account.
            </p>
          </div>
          <form className='mb-1' onSubmit={handleSubmit(onRegister)}>
            <div className='flex itms-center justify-between gap-4 mb-3'>
              <div className='flex flex-col gap-1 w-1/2'>
                <label
                  htmlFor='first-name'
                  className={clsx('font-semibold text-mainColor-700', {
                    'text-red-500': errors['firstName']
                  })}
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='first-name'
                  name='first-name'
                  placeholder='First name'
                  className={clsx(
                    'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                    {
                      '!border-red-600 outline-red-600': errors['firstName']
                    }
                  )}
                  {...register('firstName')}
                />
                {errors['firstName'] && (
                  <div className='text-red-500'>
                    {errors['firstName'].message}
                  </div>
                )}
              </div>
              <div className='flex flex-col gap-1 w-1/2'>
                <label
                  htmlFor='last-name'
                  className={clsx('font-semibold text-mainColor-700', {
                    'text-red-500': errors['lastName']
                  })}
                >
                  Last name
                </label>
                <input
                  type='text'
                  id='last-name'
                  name='last-name'
                  placeholder='Last name'
                  className={clsx(
                    'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                    {
                      '!border-red-600 outline-red-600': errors['lastName']
                    }
                  )}
                  {...register('lastName')}
                />
                {errors['lastName'] && (
                  <div className='text-red-500'>
                    {errors['lastName'].message}
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-center justify-between gap-4 mb-3'>
              <div className='flex flex-col gap-1 w-1/2'>
                <label
                  htmlFor='email'
                  className={clsx('font-semibold text-mainColor-700', {
                    'text-red-500': errors['email']
                  })}
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  className={clsx(
                    'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                    {
                      '!border-red-600 outline-red-600': errors['email']
                    }
                  )}
                  {...register('email')}
                />
                {errors['email'] && (
                  <div className='text-red-500'>{errors['email'].message}</div>
                )}
              </div>
              <div className='flex flex-col gap-1 w-1/2'>
                <label
                  htmlFor='phone'
                  className={clsx('font-semibold text-mainColor-700', {
                    'text-red-500': errors['phone']
                  })}
                >
                  Phone
                </label>
                <input
                  type='phone'
                  id='phone'
                  name='phone'
                  placeholder='Phone'
                  className={clsx(
                    'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                    {
                      '!border-red-600 outline-red-600': errors['phone']
                    }
                  )}
                  {...register('phone')}
                />
                {errors['phone'] && (
                  <div className='text-red-500'>{errors['phone'].message}</div>
                )}
              </div>
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label
                htmlFor='password'
                className={clsx('font-semibold text-mainColor-700', {
                  'text-red-500': errors['password']
                })}
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                className={clsx(
                  'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                  {
                    '!border-red-600 outline-red-600': errors['password']
                  }
                )}
                {...register('password')}
              />
              {errors['password'] && (
                <div className='text-red-500'>{errors['password'].message}</div>
              )}
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label
                htmlFor='confirmed-password'
                className={clsx('font-semibold text-mainColor-700', {
                  'text-red-500': errors['confirmPassword']
                })}
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmed-password'
                name='confirmed-password'
                placeholder='Confirm Password'
                className={clsx(
                  'border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800',
                  {
                    '!border-red-600 outline-red-600': errors['confirmPassword']
                  }
                )}
                {...register('confirmPassword')}
              />
              {errors['confirmPassword'] && (
                <div className='text-red-500'>
                  {errors['confirmPassword'].message}
                </div>
              )}
            </div>
            <div className='flex items-center gap-1 mb-4'>
              <input
                type='checkbox'
                id='terms'
                name='terms'
                value='terms'
                required
              />
              <label htmlFor='terms' className='font-semibold cursor-pointer '>
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type='submit'
              className='bg-mainColor-500 text-white py-3 px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all'
            >
              Register
            </button>
          </form>
          <div className='flex items-center justify-center gap-1 text-sm'>
            <p>Already have an account? </p>
            <Link
              to='/login'
              className='text-mainColor1-500 hover:scale-105 hover:duration-300 hover:ease-in-out transition-transform block'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
