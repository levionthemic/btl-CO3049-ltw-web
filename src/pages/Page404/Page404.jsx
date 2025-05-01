import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="min-h-screen bg-[#CDEAE1] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-bold text-[#65B599]">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-gray-800">
        Page not found
      </h2>
      <p className="text-gray-600 mt-2 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2 bg-[#65B599] text-white rounded-full hover:bg-[#519f85] transition duration-200"
        replace={true}
      >
        <FaArrowLeft />
        Go back home
      </Link>
    </div>
  )
}

export default Page404