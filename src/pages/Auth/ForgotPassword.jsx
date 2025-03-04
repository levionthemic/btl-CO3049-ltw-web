import { Link } from 'react-router-dom'
import { FaInfoCircle } from 'react-icons/fa'

function ForgotPassword() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[url("~/assets/bg-auth.jpg")] bg-cover bg-no-repeat'>
      <div className="bg-[#EAEAEA]/50 w-full h-full flex items-center justify-center">
        <div className="w-[450px] h-fit rounded-2xl bg-white/95 px-12 py-4">
          <div className="my-12 text-center text-3xl font-bold">
            Quên mật khẩu
          </div>

          <form action="" className="mb-12">
            <div className="mb-2">
              <label htmlFor="email" className="block font-bold">Nhập Email</label>
              <input
                type="text"
                name='email'
                id="email"
                placeholder="VD: example@gmail.com"
                className="border rounded-full border-mainColor1-400 drop-shadow-lg w-full my-2 px-4 py-1.5 placeholder:text-sm placeholder:opacity-40 focus:outline-none focus:border-[2px] focus:border-mainColor1-400"
              />
            </div>

            <div className='mb-6 bg-[#E8F8FF] w-full h-fit rounded-lg p-3 flex gap-3'>
              <div className='relative top-3'>
                <FaInfoCircle />
              </div>
              <div>
                <div className='font-semibold'>Thông báo</div>
                <div className="text-sm text-justify">Một mã xác thực 6 chữ số đã gửi đến email: ... Vui lòng kiểm tra email của bạn và nhập mã vào ô bên dưới!</div>
              </div>
            </div>

            <div className="mb-12">
              <label htmlFor="password" className="block font-bold">Nhập OTP</label>
              <input
                type="number"
                name='password'
                id="password"
                placeholder="VD: abc123"
                className="border rounded-full border-mainColor1-400 drop-shadow-lg w-[50%] my-2 px-4 py-1.5 placeholder:text-sm placeholder:opacity-40 focus:outline-none focus:border-[2px] focus:border-mainColor1-400"
              />
            </div>

            <div>
              <button type="submit" className="w-full rounded-full bg-mainColor1-400 text-white text-xl font-bold uppercase py-2 hover:bg-mainColor1-500 hover:scale-95 hover:ease-in-out hover:duration-300 transition-all">Lấy lại mật khẩu</button>
            </div>
          </form>

          <div className="text-xs flex items-center justify-center gap-1">
            <Link to={'/login'} className="font-bold cursor-pointer hover:scale-90 hover:ease-in-out hover:duration-300 transition-transform">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword