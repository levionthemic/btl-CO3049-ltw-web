import logo from '~/assets/logo.png'
import login_image from '~/assets/login_form.jpg'
import { Link } from 'react-router-dom'

function VerifyCode() {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <div className='flex w-[75%] h-[90%]'>
        <div className='w-1/2 mr-20 pt-10'>
          <div className='flex items-center justify-center mb-10'>
            <img src={logo} alt="" className='w-32'/>
          </div>
          <div className='mb-6'>
            <div className='cursor-pointer hover:!scale-105 hover:duration-300 hover:text-mainColor-700 hover:font-semibold hover:ease-in-out transition-transform mb-4 text-mainColor-500'><Link to='/login'>&larr; Back to Login</Link> </div>
            <div className='text-4xl font-bold mb-2'>Verify Code</div>
            <p className='text-gray-500'>An authentication code has been sent to your email.</p>
          </div>
          <form action="">
            <div className='flex flex-col gap-2 mb-2'>
              <label htmlFor="verify-code" className='font-semibold text-mainColor-700'>Enter Code</label>
              <input type="text" placeholder='Verify Code' id='verify-code' name='verify-code' className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800' />
            </div>
            <div className='mb-6'>
            Didn’t receive a code? <button className='text-mainColor1-500 hover:text-mainColor1-700 hover:scale-105 hover:duration-300 hover:font-semibold hover:ease-in-out transition-all'>Resend</button>
            </div>
            <button type="submit" className='bg-mainColor-500 text-white py-3 px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all'>Verify</button>
          </form>
        </div>
        <div className='w-1/2 h-full'>
          <img src={login_image} alt="" className='h-full w-full object-cover rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default VerifyCode