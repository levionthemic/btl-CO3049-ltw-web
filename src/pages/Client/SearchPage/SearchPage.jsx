import backgroundImage from '~/assets/background.jpg'
import sydneyImage from '~/assets/sydney.jpg'
import istanbulImage from '~/assets/istanbul.jpg'
import bakuImage from '~/assets/baku.jpg'
import maleImage from '~/assets/male.jpg'
import parisImage from '~/assets/paris.jpg'
import melbourneImage from '~/assets/melbourne.jpg'
import londonImage from '~/assets/london.jpg'
import columbiaImage from '~/assets/columbia.jpg'
import srilanka1Image from '~/assets/srilanka1.jpg'
import srilanka2Image from '~/assets/srilanka2.jpg'
import srilanka3Image from '~/assets/srilanka3.jpg'
import srilanka4Image from '~/assets/srilanka4.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const places = [
  { name: 'Istanbul, Turkey', image: istanbulImage },
  { name: 'Sydney, Australia', image: sydneyImage },
  { name: 'Baku, Azerbaijan', image: bakuImage },
  { name: 'Malé, Maldives', image: maleImage }
]

const cities = [
  { name: 'Melbourne', image: melbourneImage, price: 700 },
  { name: 'Paris', image: parisImage, price: 600 },
  { name: 'London', image: londonImage, price: 800 },
  { name: 'Columbia', image: columbiaImage, price: 900 }
]

const sriLankaImages = [
  srilanka1Image,
  srilanka2Image,
  srilanka3Image,
  srilanka4Image
]

function SearchPage() {
  const navigate = useNavigate()

  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    if (!checkin || !checkout || !guests) {
      alert('Please fill in all fields')
      return
    }

    // Navigate to the list page with query parameters
    navigate(`/rooms?checkin=${checkin}&checkout=${checkout}&guests=${guests}`)
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header with background image */}
      <div className="relative h-[500px] w-full">
        <img
          src={backgroundImage} // Replace with actual image path
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 text-white">
          <h1 className="text-4xl font-bold max-w-[600px] leading-tight">
            Make your travel wishlist, we&apos;ll do the rest
          </h1>
          <p className="mt-2 text-lg">Special offers to suit your plan</p>
        </div>

        {/* Search box */}
        <form onSubmit={handleSubmit} className="absolute bottom-[-110px] left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-2xl p-10 w-[80%] max-w-6xl">
          <p className="font-semibold text-2xl text-mainColor-700 mb-4">Where are you flying?</p>
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="checkin" className='font-semibold text-mainColor-700'>Check in</label>
              <input
                type="date"
                id='checkin'
                name='checkin'
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="checkout" className='font-semibold text-mainColor-700'>Check out</label>
              <input
                type="date"
                id='checkout'
                name='checkout'
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="room-type" className='font-semibold text-mainColor-700'>Guests</label>
              <select
                id='room-type'
                name='room-type'
                value={guests}
                onChange={e => setGuests(e.target.value)}
                className="border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 text-mainColor-800">
                <option value="" disabled selected className='text-sm'>--Select number of guests--</option>
                <option value="1"> 1 Guest</option>
                <option value="2"> 2 Guests</option>
                <option value="3"> 3 Guests</option>
                <option value="4"> 4 Guests</option>
                <option value="5"> 5 Guests</option>
                <option value="6"> 6 Guests</option>
                <option value="7"> 7 Guests</option>
                <option value="8"> 8 Guests</option>
                <option value="9"> 9 Guests</option>
                <option value="10"> 10 Guests</option>
              </select>
            </div>
            <button type='submit' className='bg-mainColor-500 text-white px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-4'>Show Places</button>
          </div>
        </form>
      </div>

      {/* Recent Searches */}
      <div className="mt-40 px-10 flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-semibold text-mainColor-500 mb-10">Your recent searches</h2>
        <div className="flex items-center justify-start gap-20">
          {places.map((place, index) => (
            <div key={index} className="flex flex-col justify-center bg-white rounded-lg shadow p-3 items-center cursor-pointer hover:scale-105 hover:duration-300 hover:ease-in-out transition-all hover:drop-shadow-lg">
              <img
                src={place.image} // Replace with actual images
                alt={place.name}
                className="!aspect-square h-32 object-cover rounded-md mb-2"
              />
              <p className="font-medium text-mainColor-500">{place.name}</p>
              <p className="text-sm text-gray-500">325 places</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Travel Deals */}
      <div className="mt-20 px-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-mainColor-500">Fall into travel</h2>
          <button className="text-md text-mainColor1-500 hover:text-mainColor1-700 hover:scale-105 hover:duration-300 hover:ease-in-out transition-all">See All</button>
        </div>
        <p className="text-gray-600 mb-6">Going somewhere to celebrate this season? Whether you&apos;re going home or somewhere to roam, we&apos;ve got the travel tools to get you to your destination.</p>
        <div className="grid grid-cols-4 gap-8">
          {cities.map((city, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={city.image} alt={city.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <p className="font-semibold text-mainColor-600 mb-1">{city.name}</p>
                <p className="text-sm text-gray-500 mb-1">$ {city.price}</p>
                <button className='bg-mainColor-500 text-white px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>Book a Hotel</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Destination Section */}
      <div className="mt-20 px-10 mb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-mainColor-500">Fall into travel</h2>
          <button className="text-md text-mainColor1-500 hover:text-mainColor1-700 hover:scale-105 hover:duration-300 hover:ease-in-out transition-all">See All</button>
        </div>
        <p className="text-gray-600 mb-6">Going somewhere to celebrate this season? Whether you&apos;re going home or somewhere to roam, we&apos;ve got the travel tools to get you to your destination.</p>
        <div className="flex items-center justify-stretch gap-4 h-[400px]">
          <div className="w-[45%] h-full bg-mainColor-200 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-mainColor-700">Backpacking Sri Lanka</h3>
              <p className="mt-2 text-sm text-gray-700">
                Traveling is an investment in the life, not just a long holiday. Find the most interesting places, live with locals and feel the culture deeply.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm bg-white text-green-700 px-3 py-1 rounded-full">From $700</span>
              <button className='bg-mainColor-600 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>Book Flight</button>
            </div>
          </div>
          <div className='w-[55%] grid grid-cols-2 items-center gap-3 h-full'>
            {sriLankaImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Sri Lanka"
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className='flex items-center justify-center mb-20'>
        <div className="w-[60%] px-10 py-16 bg-mainColor-200 flex flex-col md:flex-row items-center justify-center rounded-xl gap-6 shadow-md">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-2 text-mainColor-700">Subscribe Newsletter</h2>
            <p className="text-sm text-gray-600">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'
            />
            <button type='submit' className='bg-mainColor-600 text-white px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>Subscribe</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SearchPage