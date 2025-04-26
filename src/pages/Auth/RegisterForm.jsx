import { Link } from 'react-router-dom'
import loginImage from '~/assets/login_form.jpg'
import logo from '~/assets/logo.png'

function RegisterForm() {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <div className='flex items-center w-[75%] h-[90%]'>
        <div className='flex-1 flex items-center justify-center h-full mr-10'>
          <img className='h-full w-full object-cover rounded-2xl' src={loginImage} alt="" />
        </div>
        <div className='w-1/2 h-full'>
          <div className='mb-6 flex justify-center'>
            <img src={logo} alt="Logo" className='w-32'/>
          </div>
          <div className='mb-6'>
            <div className='text-4xl font-bold mb-1'>Sign up</div>
            <p className='text-gray-500'>Let’s get you all set up so you can access your personal account.</p>
          </div>
          <form className='mb-1'>
            <div className='flex itms-center justify-between gap-4 mb-3'>
              <div className='flex flex-col gap-1 w-1/2'>
                <label htmlFor='first-name' className='font-semibold text-mainColor-700'>First Name</label>
                <input type='text' id='first-name' name='first-name' placeholder='First name'
                  className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800' />
              </div>
              <div className='flex flex-col gap-1 w-1/2'>
                <label htmlFor='last-name' className='font-semibold text-mainColor-700'>Last name</label>
                <input type='text' id='last-name' name='last-name' placeholder='Last name'
                  className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800' />
              </div>
            </div>
            <div className='flex items-center justify-between gap-4 mb-3'>
              <div className='flex flex-col gap-1 w-1/2'>
                <label htmlFor='email' className='font-semibold text-mainColor-700'>Email</label>
                <input type='email' id='email' name='email' placeholder='Email'
                  className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
              </div>
              <div className='flex flex-col gap-1 w-1/2'>
                <label htmlFor='phone' className='font-semibold text-mainColor-700'>Phone</label>
                <input type='phone' id='phone' name='phone' placeholder='Phone'
                  className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800' />
              </div>
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label htmlFor='password' className='font-semibold text-mainColor-700'>Password</label>
              <input type='password' id='password' name='password' placeholder='Password'
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className='flex flex-col gap-1 mb-3'>
              <label htmlFor='confirmed-password' className='font-semibold text-mainColor-700'>Confirm Password</label>
              <input type='password' id='confirmed-password' name='confirmed-password' placeholder='Confirm Password'
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className='flex items-center gap-1 mb-4'>
              <input type="checkbox" id="terms" name="terms" value="terms"/>
              <label htmlFor="terms" className='font-semibold cursor-pointer '>I agree to the terms and conditions</label>
            </div>
            <button type="submit" className='bg-mainColor-500 text-white py-3 px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all'>Register</button>
          </form>
          <div className='flex items-center justify-center gap-1 text-sm'>
            <p>Already have an account? </p>
            <Link to="/login" className='text-mainColor1-500 hover:scale-105 hover:duration-300 hover:ease-in-out transition-transform block'>Login</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RegisterForm