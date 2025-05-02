import logo from '~/assets/logo.png'
import login_image from '~/assets/login_form.jpg'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <div className='flex w-[75%] h-[90%]'>
        <div className='w-1/2 mr-20 pt-10'>
          <div className='flex items-center justify-center mb-10'>
            <img src={logo} alt="" className='w-32'/>
          </div>
          <div className='mb-6'>
            <div className='cursor-pointer hover:!scale-105 hover:duration-300 hover:text-mainColor-700 hover:font-semibold hover:ease-in-out transition-transform mb-4 text-mainColor-500'><Link to='/login'>&larr; Back to Login</Link> </div>
            <div className='text-4xl font-bold mb-2'>Forgot your password?</div>
            <p className='text-gray-500'>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
          </div>
          <form action="">
            <div className='flex flex-col gap-2 mb-8'>
              <label htmlFor="email" className='font-semibold text-mainColor-700'>Email</label>
              <input type="email" placeholder='Email' id='email' name='email' className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800' />
            </div>
            <button type="submit" className='bg-mainColor-500 text-white py-3 px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all'>Submit</button>
          </form>
        </div>
        <div className='w-1/2 h-full'>
          <img src={login_image} alt="" className='h-full w-full object-cover rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword