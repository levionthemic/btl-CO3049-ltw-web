import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getRoomsAPI } from '~/apis'
import { API_ROOT, DEFAULT_ROOM_NUMBER } from '~/utils/constants'
import { getTodayDate } from '~/utils/helpers'

function ListPage() {
  const [rooms, setRooms] = useState([])
  const [currentRooms, setCurrentRooms] = useState([])
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('')
  const [sort, setSort] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(3000)
  const [fromRating, setFromRating] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [roomNum, setRoomNum] = useState(0)
  const [maxRoomNum, setMaxRoomNum] = useState(0)

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
    if (fromRating) newParams.set('fromRating', fromRating)
    else newParams.delete('fromRating')
    if (sort) newParams.set('sort', sort)
    else newParams.delete('sort')
    navigate(`?${newParams.toString()}`, { replace: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let params = '?'
    if (checkin) params += `&checkin=${checkin}`
    if (checkout) params += `&checkout=${checkout}`
    if (guests) params += `&guests=${guests}`
    navigate('/rooms' + params)
  }

  const handleLoadMore = () => {
    setRoomNum((prev) =>
      prev + DEFAULT_ROOM_NUMBER <= maxRoomNum
        ? prev + DEFAULT_ROOM_NUMBER
        : maxRoomNum
    )
  }

  const handleViewRoom = (id) => (e) => {
    e.preventDefault()
    let params = '?'
    if (checkin) params += `&checkin=${checkin}`
    if (checkout) params += `&checkout=${checkout}`
    if (guests) params += `&guests=${guests}`
    navigate(`/rooms/detail/${id}` + params)
  }

  useEffect(() => {
    const checkinParam = searchParams.get('checkin')
    const checkoutParam = searchParams.get('checkout')
    const guestsParam = searchParams.get('guests')
    const minPriceParam = searchParams.get('minPrice')
    const maxPriceParam = searchParams.get('maxPrice')
    const fromRatingParam = searchParams.get('fromRating')
    const sortParam = searchParams.get('sort')
    let params = {}

    if (checkinParam) setCheckin(checkinParam)
    if (checkoutParam) setCheckout(checkoutParam)
    if (guestsParam) {
      setGuests(guestsParam)
      params.guests = guestsParam
    }
    if (minPriceParam) params.minPrice = minPriceParam
    if (maxPriceParam) params.maxPrice = maxPriceParam
    if (fromRatingParam) params.fromRating = fromRatingParam
    if (sortParam) params.sort = sortParam

    getRoomsAPI(params).then((res) => {
      setMaxRoomNum(res.data.data.length)
      setRooms(res.data.data)
      setRoomNum(
        res.data.data.length < DEFAULT_ROOM_NUMBER
          ? res.data.data.length
          : DEFAULT_ROOM_NUMBER
      )
    })
  }, [searchParams])

  useEffect(() => {
    setCurrentRooms(rooms.slice(0, roomNum))
  }, [roomNum, rooms])

  return (
    <div className='min-h-screen w-full bg-gray-50 font-sans relative'>
      {/* Booking Form */}
      <div className='flex items-center justify-center mt-3 mb-10'>
        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-xl rounded-2xl p-6 md:p-10 w-[95%] md:w-[90%] max-w-6xl'
        >
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='checkin'
                className='font-semibold text-mainColor-700'
              >
                Check in
              </label>
              <input
                type='date'
                id='checkin'
                value={checkin}
                max={checkout}
                min={getTodayDate()}
                onChange={(e) => setCheckin(e.target.value)}
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 text-mainColor-800'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='checkout'
                className='font-semibold text-mainColor-700'
              >
                Check out
              </label>
              <input
                type='date'
                id='checkout'
                value={checkout}
                min={checkin}
                onChange={(e) => setCheckout(e.target.value)}
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 text-mainColor-800'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='room-type'
                className='font-semibold text-mainColor-700'
              >
                Rooms & Guests
              </label>
              <select
                id='room-type'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 text-mainColor-800'
              >
                <option value='' disabled>
                  --Select number of guests--
                </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Guest{i + 1 > 1 && 's'}
                  </option>
                ))}
              </select>
            </div>
            <button
              type='submit'
              className='bg-mainColor-500 text-white px-4 py-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 transition-all'
            >
              Show Rooms
            </button>
          </div>
        </form>
      </div>

      {/* Filter & Room List */}
      <form
        onSubmit={handleFilter}
        className='flex flex-col md:flex-row justify-center w-[95%] md:w-[80%] mx-auto mb-20'
      >
        {/* Sidebar Filter */}
        <div className='md:w-[28%] p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200'>
          <h2 className='text-xl md:text-2xl text-mainColor-500 font-bold mb-4'>
            Filters
          </h2>
          {/* Price Filter */}
          <div className='mb-6'>
            <p className='font-semibold text-mainColor-600 mb-2'>Price Range</p>
            <div className='text-sm text-mainColor-600 mb-1'>
              From: ${minPrice}
            </div>
            <input
              type='range'
              min='0'
              max='3000'
              value={minPrice}
              onChange={handleMinChange}
              className='w-full mb-2 accent-mainColor-600'
            />
            <input
              type='range'
              min='0'
              max='3000'
              value={maxPrice}
              onChange={handleMaxChange}
              className='w-full accent-mainColor-600'
            />
            <div className='text-sm text-mainColor-600'>To: ${maxPrice}</div>
          </div>
          {/* Rating Filter */}
          <div className='mb-6'>
            <p className='font-semibold text-mainColor-600 mb-2'>Rating</p>
            <div className='flex flex-wrap gap-3'>
              {['0', '1', '2', '3', '4'].map((r) => (
                <div key={r}>
                  <input
                    type='radio'
                    id={`rating-${r}`}
                    name='rating'
                    value={r}
                    onChange={(e) => setFromRating(e.target.value)}
                    className='sr-only peer'
                  />
                  <label
                    htmlFor={`rating-${r}`}
                    className='px-3 py-2 bg-mainColor-100 border rounded cursor-pointer text-sm peer-checked:bg-mainColor-600 peer-checked:text-white hover:bg-mainColor-300 transition-all'
                  >
                    {r}+
                  </label>
                </div>
              ))}
            </div>
            <div className='mt-6'>
              <p className='font-semibold text-mainColor-600 mb-2'>Sort by</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className='w-full px-2 py-1 bg-mainColor-100 text-mainColor-900 border rounded-md'
              >
                <option value='' disabled>
                  --Select a sort option--
                </option>
                <option value='dsc-rating'>Rating: High to Low</option>
                <option value='asc-rating'>Rating: Low to High</option>
                <option value='dsc-price'>Price: High to Low</option>
                <option value='asc-price'>Price: Low to High</option>
              </select>
            </div>
          </div>
          <button
            type='submit'
            className='text-white font-bold bg-mainColor-500 w-full py-2 rounded-lg mt-3 hover:bg-mainColor-800 transition-all'
          >
            Done
          </button>
        </div>

        {/* Room List */}
        <div className='md:flex-1 p-4 md:p-6'>
          <h2 className='text-md md:text-lg font-semibold text-mainColor-500 mb-4'>
            Showing {roomNum} of {maxRoomNum} rooms
          </h2>
          <div className='space-y-4'>
            {currentRooms.map((room) => (
              <div
                key={room.id}
                className='bg-white shadow p-4 rounded-lg flex flex-col md:flex-row gap-4'
              >
                <img
                  src={API_ROOT + room.image_url}
                  alt={room.name}
                  className='w-full md:w-48 h-32 object-cover rounded'
                />
                <div className='flex-1'>
                  <h3 className='font-semibold text-lg mb-1'>{room.name}</h3>
                  <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
                    <span className='bg-mainColor-100 font-semibold text-mainColor-700 px-2 py-1 rounded'>
                      {room.rating}
                    </span>
                    <span>Very Good</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between items-end'>
                  <p className='text-right text-sm text-gray-500'>
                    starting from <br />
                    <span className='text-mainColor1-700 text-lg font-semibold'>
                      ${room.price_per_night}/night
                    </span>
                    <br />
                    excl. tax
                  </p>
                  <button
                    onClick={handleViewRoom(room.id)}
                    className='bg-mainColor-500 text-white px-4 py-2 rounded hover:bg-mainColor-800 transition-all mt-2'
                  >
                    View Room
                  </button>
                </div>
              </div>
            ))}
          </div>
          {roomNum < maxRoomNum && (
            <div
              onClick={handleLoadMore}
              className='text-center mt-6 cursor-pointer bg-mainColor-400 text-white text-lg font-semibold py-2 rounded hover:bg-mainColor-800 transition-all'
            >
              Load More
            </div>
          )}
        </div>
      </form>

      {/* Newsletter */}
      <div className='flex items-center justify-center mb-20'>
        <div className='w-[95%] md:w-[60%] px-6 py-10 md:px-10 md:py-16 bg-mainColor-200 flex flex-col md:flex-row items-center justify-center rounded-xl gap-6 shadow-md'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-2 text-mainColor-700'>
              Subscribe Newsletter
            </h2>
            <p className='text-sm text-gray-600'>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
          </div>
          <form className='flex flex-col md:flex-row gap-2 w-full md:w-auto'>
            <input
              type='email'
              placeholder='Your email'
              className='border !border-mainColor-600 outline-mainColor-600 rounded-md p-2 text-mainColor-800 w-full md:w-auto'
            />
            <button
              type='button'
              className='bg-mainColor-600 text-white px-4 py-2 rounded hover:bg-mainColor-800 transition-all'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ListPage
