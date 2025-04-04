import { Link } from 'react-router-dom'

function RegisterForm() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[url("~/assets/bg-auth.jpg")] bg-cover bg-no-repeat'>
      <div className="bg-[#EAEAEA]/50 w-full h-full flex items-center justify-center">
        <div className="w-[450px] h-fit rounded-2xl bg-white/95 px-12 py-4">
          <div className="my-16 text-center uppercase text-3xl font-bold">
            Đăng ký
          </div>

          <form action="" className="mb-12">
            <div className="mb-6">
              <label htmlFor="email" className="block font-bold">Email</label>
              <input
                type="text"
                name='email'
                id="email"
                placeholder="VD: example@gmail.com"
                className="border rounded-full border-mainColor1-400 drop-shadow-lg w-full my-2 px-4 py-1.5 placeholder:text-sm placeholder:opacity-40 focus:outline-none focus:border-[2px] focus:border-mainColor1-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block font-bold">Mật khẩu</label>
              <input
                type="password"
                name='password'
                id="password"
                placeholder="VD: abc123"
                className="border rounded-full border-mainColor1-400 drop-shadow-lg w-full my-2 px-4 py-1.5 placeholder:text-sm placeholder:opacity-40 focus:outline-none focus:border-[2px] focus:border-mainColor1-400"
              />
            </div>

            <div className="mb-12">
              <label htmlFor="confirmPassword" className="block font-bold">Xác nhận Mật khẩu</label>
              <input
                type="password"
                name='confirmPassword'
                id="confirmPassword"
                className="border rounded-full border-mainColor1-400 drop-shadow-lg w-full my-2 px-4 py-1.5 placeholder:text-sm placeholder:opacity-40 focus:outline-none focus:border-[2px] focus:border-mainColor1-400"
              />
            </div>

            <div>
              <button type="submit" className="w-full rounded-full bg-mainColor1-400 text-white text-xl font-bold uppercase py-2 hover:bg-mainColor1-500 hover:scale-95 hover:ease-in-out hover:duration-300 transition-all">Đăng ký</button>
            </div>

          </form>

          <div className="text-xs flex items-center justify-center gap-1">
            <span>Đã có tài khoản?</span>
            <Link to='/login' className="font-bold cursor-pointer hover:scale-90 hover:ease-in-out hover:duration-300 transition-transform">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm