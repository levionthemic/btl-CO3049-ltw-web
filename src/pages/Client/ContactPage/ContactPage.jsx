import { useState, useEffect } from 'react'
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import axios from 'axios'
import sanitizeInput from '~/utils/inputSanitizer.js'
import { use } from 'react'

function ContactPage() {
  const [isSubmited, setIsSubmited] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [hotelInfo, setHotelInfo] = useState({
    hotelName: '',
    phoneNumber: '',
    address: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizeInput(value)
    }))
  }

  useEffect(() => {
    axios
      .get('http://localhost/api/settings/latest')
      .then((response) => {
        const data = response.data
        setHotelInfo({
          hotelName: data.hotel_name || '',
          phoneNumber: data.phone_number || '',
          address: data.address || ''
        })
      })
      .catch((error) => {
        console.error(
          'Error fetching settings:',
          error.response?.data || error.message
        )
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost/api/contacts',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      setIsSubmited(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className='relative h-[60vh] bg-cover bg-center'
        style={{ backgroundImage: "url('reception.webp')" }}
      >
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center'>
          <div className='absolute bottom-auto md:bottom-auto  max-w-4xl mx-auto p-8'>
            <h1 className=' text-2xl lg:text-5xl font-bold mb-4'>
              Liên hệ với Levi
            </h1>

            <span className=' text-md lg:text-xl mx-auto block'>
              Hãy kết nối với chúng tôi để được tư vấn và hỗ trợ.
            </span>

            <span className='text-md lg:text-xl mx-auto block'>
              Liên hệ với chúng tôi để hỏi đáp, đặt phòng, tổ chức hội nghị,
              hoặc ứng tuyển việc làm.
            </span>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <section className='w-full py-16 px-8 max-w-3xl mx-auto'>
        {isSubmited ? (
          <div className='text-center'>
            <h2 className='text-3xl font-semibold text-gray-800'>Thank You!</h2>
            <p className='text-gray-600 mt-2'>
              Your message has been successfully sent. We will get back to you
              shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className='text-3xl font-semibold text-gray-800 text-center'>
              Send Us a Message
            </h2>
            <p className='text-gray-600 text-center mt-2'>
              We’ll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              className='mt-6 bg-mainColor-200 p-6 rounded-lg shadow-lg'
            >
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Your Name'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Your Email'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-semibold'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                  placeholder='Your Message'
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-mainColor-800 text-white px-4 py-2 rounded hover:bg-mainColor-900 transition'
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </section>

      {/* Contact Address */}
      <section
        id='contact__address'
        className='mt-4 h-auto lg:h-[50vh] my-8 flex flex-col lg:flex-row justify-between'
      >
        {/* Contact Details */}
        <div className='w-full lg:w-1/3 bg-mainColor2-50 text-black items-center  py-6 lg:py-16 px-8 text-center'>
          <h2 className='text-3xl font-semibold'>Contact Information</h2>
          <p className='mt-4 '>📍{hotelInfo.address}</p>
          <p className=''>📞 +84 {hotelInfo.phoneNumber}</p>
          <p className=''>✉️ contact@levi.com</p>
        </div>

        {/* Google Map */}
        <div className='w-full h-[60vh] lg:w-2/3 lg:h-auto'>
          <iframe
            className='w-full h-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.508074992505!2d106.65522497451708!3d10.772344259270039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1746676686932!5m2!1svi!2s'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </section>
      {/* <section className=" bg-green-400 py-16 px-8 mt-[8rem] mb-[10rem] flex items-center justify-center">
        <div className=" text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 italic">
            "Không chỉ là trải nghiệm, mà còn là kiến thức và kinh nghiệm."
          </p>
          <p className="text-lg text-gray-500 mt-4">
            — Thái Công không nói thế
          </p>
        </div>
      </section> */}
    </div>
  )
}

export default ContactPage
