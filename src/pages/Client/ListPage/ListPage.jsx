import { useEffect, useState } from 'react'

import room1Image from '~/assets/room1.jpg'
import room2Image from '~/assets/room2.jpg'
import room3Image from '~/assets/room3.jpg'
import room4Image from '~/assets/room4.jpg'
import { useNavigate, useSearchParams } from 'react-router-dom'


const hotels = [
  {
    id: 1,
    name: 'CVK Park Bosphorus Hotel Istanbul',
    rating: 4.2,
    reviews: 371,
    price: 240,
    image: room1Image
  },
  {
    id: 2,
    name: 'Eresin Hotels Sultanahmet - Boutique Class',
    rating: 4.2,
    reviews: 54,
    price: 104,
    image: room2Image
  },
  {
    id: 3,
    name: 'Eresin Hotels Sultanahmet - Boutique Class',
    rating: 4.2,
    reviews: 54,
    price: 104,
    image: room3Image
  },
  {
    id: 4,
    name: 'Eresin Hotels Sultanahmet - Boutique Class',
    rating: 4.2,
    reviews: 54,
    price: 104,
    image: room4Image
  }
]
function ListPage() {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(3000)
  const [fromRating, setFromRating] = useState('')
  const [sort, setSort] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const checkinParam = searchParams.get('checkin')
    const checkoutParam = searchParams.get('checkout')
    const guestsParam = searchParams.get('guests')

    if (checkinParam) setCheckin(checkinParam)
    if (checkoutParam) setCheckout(checkoutParam)
    if (guestsParam) setGuests(guestsParam)
  }, [searchParams])

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value)
    if (value <= maxPrice) setMinPrice(value)
  }

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value)
    if (value >= minPrice) setMaxPrice(value)
  }

  const handleFilter = (e) => {
    e.preventDefault()

    const newParams = new URLSearchParams(searchParams)
    newParams.set('minPrice', minPrice)
    newParams.set('maxPrice', maxPrice)
    if (fromRating) {
      newParams.set('fromRating', fromRating)
    } else {
      newParams.delete('fromRating')
    }

    if (sort) {
      newParams.set('sort', sort)
    } else {
      newParams.delete('sort')
    }
    navigate(`?${newParams.toString()}`, { replace: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (checkin && checkout && guests) {
      navigate(`/rooms?checkin=${checkin}&checkout=${checkout}&guests=${guests}`, { replace: true })
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans relative">
      <div className="flex items-center justify-center mt-3 mb-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-6xl">
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
              <label htmlFor="room-type" className='font-semibold text-mainColor-700'>Rooms & Guests</label>
              <select
                id='room-type'
                name='room-type'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
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

      <form onSubmit={handleFilter} className="flex justify-center min-h-screen bg-gray-50 w-[80%] mx-auto mb-20">
        {/* Sidebar Filter */}
        <div className="w-[28%] bg-white p-6 border-r border-gray-200">
          <h2 className="text-2xl text-mainColor-500 font-bold mb-4">Filters</h2>

          {/* Price Range */}
          <div className="mb-6">
            <p className="font-semibold text-mainColor-600 mb-2">Price Range</p>
            <div className="flex justify-between text-sm text-mainColor-600 mb-1">
              <span>From: ${minPrice}</span>
              <span></span>
            </div>

            {/* Min Price */}
            <input
              type="range"
              min="0"
              max="3000"
              value={minPrice}
              onChange={handleMinChange}
              className="w-full mb-2 accent-mainColor-600"
            />

            {/* Max Price */}
            <input
              type="range"
              min="0"
              max="3000"
              value={maxPrice}
              onChange={handleMaxChange}
              className="w-full accent-mainColor-600"
            />
            <div className="flex justify-between text-sm text-mainColor-600 mb-1">
              <span></span>
              <span>To: ${maxPrice}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <p className="font-semibold text-mainColor-600 mb-2">Rating</p>
            <div className="flex items-center justify-center gap-2">
              {['0', '1', '2', '3', '4'].map((r) => (
                <div key={r}>
                  <input
                    type="radio"
                    id={`rating-${r}`}
                    name="rating"
                    value={r}
                    onChange={(e) => setFromRating(e.target.value)}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={`rating-${r}`}
                    className="px-3 py-2 flex items-center justify-center border rounded text-sm cursor-pointer
                   peer-checked:bg-mainColor-600 peer-checked:text-white hover:bg-mainColor-200 hover:text-mainColor-900 transition-all duration-300 hover:ease-in-out"
                  >
                    {r}+
                  </label>
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-2 mt-10'>
              <p className="font-semibold text-mainColor-600 mb-1">Sort by</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-2 py-1 bg-mainColor-100 text-mainColor-900 border rounded-md outline-none hover:bg-mainColor-400 hover:font-semibold hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all">
                <option value="" disabled selected className='text-sm'>--Select a sort option--</option>
                <option value="dsc-rating">Rating: High to Low</option>
                <option value="asc-rating">Rating: Low to High</option>
                <option value="dsc-price">Price: High to Low</option>
                <option value="asc-price">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Freebies */}
          {/* <div className="mb-6">
            <p className="font-medium mb-2">Freebies</p>
            {['Free breakfast', 'Free parking', 'Free internet', 'Free airport shuttle', 'Free cancellation'].map(
              (f, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label className="text-sm">{f}</label>
                </div>
              )
            )}
          </div> */}

          {/* Amenities */}
          {/* <div>
            <p className="font-medium mb-2">Amenities</p>
            {['24hr front desk', 'Air-conditioned', 'Fitness', 'Pool'].map((a, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input type="checkbox" />
                <label className="text-sm">{a}</label>
              </div>
            ))}
          </div> */}

          <button type='submit' className="text-white font-bold bg-mainColor-600 w-full py-2 rounded-lg text-xl mt-3 hover:scale-105 hover:bg-mainColor-800 hover:ease-in-out duration-300 transition-all">Done</button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className='mb-3'>
            <h2 className="text-lg font-semibold text-mainColor-500">Showing 4 of 257 places</h2>
          </div>


          {/* Hotel Listings */}
          <div className="space-y-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white shadow p-4 rounded-lg flex gap-4">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-48 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <span className="bg-mainColor-100 font-semibold text-mainColor-700 px-2 py-1 rounded">{hotel.rating}</span>
                    <span>Very Good {hotel.reviews} reviews</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <p className="text-right text-sm text-gray-500">
                  starting from <br />
                    <span className="text-mainColor1-700 text-lg font-semibold">
                    ${hotel.price}/night
                    </span>
                    <br /> excl. tax
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button className='bg-mainColor-600 text-white px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>
                    View Place
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='bg-mainColor-600 text-white px-4 rounded-sm w-full hover:bg-mainColor-800  hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2 mt-4'>
          Load More
          </button>
        </div>
      </form>

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

export default ListPage