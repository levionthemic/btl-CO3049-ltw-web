import room1Image from '~/assets/room1.jpg'
import room2Image from '~/assets/room2.jpg'
import room3Image from '~/assets/room3.jpg'
import room4Image from '~/assets/room4.jpg'

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
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans relative">
      <div className="flex items-center justify-center mt-3 mb-10">
        <form className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-6xl">
          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="destination" className='font-semibold text-mainColor-700'>Destination</label>
              <input
                type='text'
                id='destination'
                name='destination'
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'
                placeholder="Enter Destination"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="checkin" className='font-semibold text-mainColor-700'>Check in</label>
              <input type="date" id='checkin' name='checkin' className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="checkout" className='font-semibold text-mainColor-700'>Check out</label>
              <input type="date" id='checkout' name='checkout' className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="room-type" className='font-semibold text-mainColor-700'>Rooms & Guests</label>
              <select id='room-type' name='room-type' className="border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 text-mainColor-800">
                <option value="1r2g">1 Room, 2 Guests</option>
                <option value="1r3g">1 Room, 3 Guests</option>
                <option value="1r4g">1 Room, 4 Guests</option>
              </select>
            </div>
            <button type='submit' className='bg-mainColor-500 text-white px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-4'>Show Places</button>
          </div>
        </form>
      </div>

      <div className="flex justify-center min-h-screen bg-gray-50 w-[80%] mx-auto mb-20">
        {/* Sidebar Filter */}
        <div className="w-[28%] bg-white p-6 border-r border-gray-200">
          <h2 className="text-2xl text-mainColor-500 font-bold mb-4">Filters</h2>

          {/* Price Range */}
          <div className="mb-6">
            <p className="font-semibold text-mainColor-600 mb-1">Price</p>
            <input type="range" min="0" max="3000" className="w-full mt-2 accent-mainColor-600 bg-mainColor-300" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$0</span>
              <span>$3000</span>
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <p className="font-semibold text-mainColor-600 mb-2">Rating</p>
            <div className="flex items-center justify-center gap-2">
              {['0+', '1+', '2+', '3+', '4+'].map((r) => (
                <div key={r}>
                  <input
                    type="radio"
                    id={`rating-${r}`}
                    name="rating"
                    value={r}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={`rating-${r}`}
                    className="px-3 py-2 flex items-center justify-center border rounded text-sm cursor-pointer
                   peer-checked:bg-mainColor-600 peer-checked:text-white hover:bg-mainColor-200 hover:text-mainColor-900 transition-all duration-300 hover:ease-in-out"
                  >
                    {r}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Freebies */}
          <div className="mb-6">
            <p className="font-medium mb-2">Freebies</p>
            {['Free breakfast', 'Free parking', 'Free internet', 'Free airport shuttle', 'Free cancellation'].map(
              (f, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <label className="text-sm">{f}</label>
                </div>
              )
            )}
          </div>

          {/* Amenities */}
          <div>
            <p className="font-medium mb-2">Amenities</p>
            {['24hr front desk', 'Air-conditioned', 'Fitness', 'Pool'].map((a, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input type="checkbox" />
                <label className="text-sm">{a}</label>
              </div>
            ))}
            <button className="text-white font-bold bg-mainColor-600 w-full py-2 rounded-lg text-xl mt-3 hover:scale-105 hover:bg-mainColor-800 hover:ease-in-out duration-300 transition-all">Done</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-mainColor-500">Showing 4 of 257 places</h2>
            </div>
            <div className='flex gap-2 items-center'>
              <p className='font-semibold text-mainColor-700'>Sort by:</p>
              <select className="px-3 py-1 bg-mainColor-100 text-mainColor-900 border rounded-md outline-none hover:bg-mainColor-300 hover:font-semibold hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all">
                <option value="dsc-rating">Rating: High to Low</option>
                <option value="asc-rating">Rating: Low to High</option>
                <option value="dsc-price">Price: High to Low</option>
                <option value="asc-price">Price: Low to High</option>
              </select>
            </div>

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
      </div>

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