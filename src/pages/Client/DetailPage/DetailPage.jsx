import detailRoomImage from '~/assets/detailRoom.jpg'

function DetailPage() {
  const amenities = ['Near park', 'Near theater', 'Near Hotel', 'Clean Hotel']
  const rooms = [
    { title: 'Superior room - Double bed or 2 twin beds', price: 240 },
    { title: 'Superior room - City view - 1 double bed or 2 twin beds', price: 280 },
    { title: 'Superior room - City view - 2 twin beds', price: 320 },
    { title: 'Superior room - City view - 1 double bed or 2 twin beds', price: 350 }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      {/* Hotel Title & Price */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">CVK Park Bosphorus Hotel Istanbul</h1>
          <p className="text-sm text-gray-600"> 4.2 rating • 370+ reviews</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-red-500">$240<span className="text-sm font-normal">/night</span></p>
          <button className='bg-mainColor-600 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>Book now</button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full h-[550px]">
        <img className="col-span-2 rounded-lg object-cover w-full h-full" src={detailRoomImage} alt="Main hotel" />
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Located in Taksim, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has fresh views of the shores of the historic Dolmabahçe Hotel. This
          hotel offers luxury services and modern amenities for both business and leisure travelers. With elegant interiors, panoramic Bosphorus views,
          and easy access to cultural landmarks, your stay here will be both luxurious and convenient.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="p-4 bg-mainColor-200 text-center rounded-lg w-24">
            <p className="text-lg font-bold">4.2</p>
            <p className="text-xs">Very good</p>
          </div>
          {amenities.map((item, i) => (
            <div key={i} className="border px-4 py-2 rounded text-sm text-gray-600 flex items-center gap-2">
              <span>🏨</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Available Rooms */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Available Rooms</h2>
        <div className="space-y-4">
          {rooms.map((room, idx) => (
            <div key={idx} className="flex justify-between items-center border rounded-lg p-4">
              <p className="text-mainColor-600 font-semibold">{room.title}</p>
              <div className="text-right">
                <p className="text-md font-semibold">${room.price}<span className="text-sm">/night</span></p>
                <button className='bg-mainColor-600 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="!my-10">
        <h2 className="text-xl font-semibold mb-4 text-mainColor-700">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-gray-700">
          <div className="flex items-center gap-2"><span>🏊</span> Outdoor pool</div>
          <div className="flex items-center gap-2"><span>🏋️</span> Fitness center</div>
          <div className="flex items-center gap-2"><span>🏠</span> Indoor pool</div>
          <div className="flex items-center gap-2"><span>🍷</span> Bar/Lounge</div>
          <div className="flex items-center gap-2"><span>💆</span> Spa and wellness center</div>
          <div className="flex items-center gap-2"><span>📶</span> Free Wi-Fi</div>
          <div className="flex items-center gap-2"><span>🍽️</span> Restaurant</div>
          <div className="flex items-center gap-2"><span>☕</span> Tea/coffee machine</div>
          <div className="flex items-center gap-2"><span>🛎️</span> Room service</div>
        </div>
      </div>

      <div className="!mt-20">
        <h2 className="text-xl font-semibold text-mainColor-700 mb-4">Reviews</h2>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold">4.2</div>
            <div className="font-medium text-lg">Very good</div>
            <p className="text-sm text-gray-500">371 verified reviews</p>
          </div>
          <button className='bg-mainColor-600 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>
      Give your review
          </button>
        </div>

        <div className="divide-y mt-6">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="py-4 flex items-start gap-4">
              <img
                src={`https://i.pravatar.cc/40?img=${idx + 1}`}
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold text-sm">
            5.0 Amazing <span className="text-gray-600 font-normal">| Omar Siphron</span>
                </div>
                <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
          🚩
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 text-sm mt-6">
          <button className="text-gray-400 hover:text-black">&lt;</button>
          <span>1 of 40</span>
          <button className="text-gray-400 hover:text-black">&gt;</button>
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

export default DetailPage