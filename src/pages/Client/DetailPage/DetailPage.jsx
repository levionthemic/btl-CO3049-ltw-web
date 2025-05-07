import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { bookRoomAPI, getRoomDetailAPI, getRoomsAPI, sendReviewRoomAPI } from '~/apis'
import { useAuth } from '~/contexts/AuthContext'
import { AMENITIES, API_ROOT, DEFAULT_ROOM_NUMBER } from '~/utils/constants'
import Swal from 'sweetalert2'
import { countDays, getTodayDate } from '~/utils/helpers'
import { Star } from 'lucide-react'

import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'


function DetailPage() {
  const dialogCloseRef = useRef(null)
  const amenities = AMENITIES
  const { currentUser, setUser } = useAuth()
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [room, setRoom] = useState({})
  const [maxRoomNum, setMaxRoomNum] = useState(0)
  const [roomNum, setRoomNum] = useState(DEFAULT_ROOM_NUMBER)
  const [roomsList, setRoomsList] = useState([])
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [guests, setGuests] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const params = {}
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewContent, setReviewContent] = useState('')

  const handleBooking = (e) => {
    e.preventDefault()
    if (!checkin || !checkout || !guests) {
      Swal.fire({
        title: 'Oops...',
        text: 'Please Fill All Fields!',
        icon: 'error',
        confirmButtonText: 'Try again'
      })
      return
    }
    const totalPrice = countDays(checkin, checkout) * room?.price_per_night
    const bookingData = {
      user_id : currentUser?.id,
      room_id: id,
      check_in_date: checkin,
      check_out_date: checkout,
      guests_count:guests,
      total_price: totalPrice,
      status: 'pending'
    }
    bookRoomAPI(bookingData).then(
      (res) => {
        if (res.status === 200) {
          Swal.fire({
            title: 'Booking Successful',
            text: 'Your reservation has been confirmed!',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          })
        } else {
          Swal.fire({
            title: 'Oops...',
            text: 'Failed to book this Room!',
            icon: 'error',
            confirmButtonText: 'Try again'
          })
        }
      }
    )
  }

  const handleViewRoom = (id) => (e) => {
    e.preventDefault()
    let params = '?'
    if (checkin) params += `&checkin=${checkin}`
    if (checkout) params += `&checkout=${checkout}`
    if (guests) params += `&guests=${guests}`
    if (checkin || checkout || guests) {
      navigate(`/rooms/detail/${id}`+ params)
    } else {
      navigate(`/rooms/detail/${id}`)
    }
  }

  const handleLoadMore = (e) => {
    e.preventDefault()
    setRoomNum((prev) => {
      if (prev + DEFAULT_ROOM_NUMBER <= maxRoomNum) {
        return prev + DEFAULT_ROOM_NUMBER
      } else {
        return maxRoomNum
      }
    })
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    const reviewData = {
      user_id : currentUser?.id,
      room_id : id,
      content: reviewContent,
      rating: rating
    }
    sendReviewRoomAPI(reviewData).then((res) => {
      if (res.status === 200) {
        setComments((prevComments) => [res.data.data, ...prevComments])
        dialogCloseRef.current?.click()
      } else {
        Swal.fire({
          title: 'Oops...',
          text: 'Failed to send Review!',
          icon: 'error',
          confirmButtonText: 'Try again'
        })
      }
    })
  }

  useEffect(() => {
    const checkinParam = searchParams.get('checkin')
    const checkoutParam = searchParams.get('checkout')
    const guestsParam = searchParams.get('guests')

    if (checkinParam) setCheckin(checkinParam)
    if (checkoutParam) setCheckout(checkoutParam)
    if (guestsParam) {
      setGuests(guestsParam)
      params.guests = guestsParam
    }

    getRoomDetailAPI(id).then((res) => {
      if (res.status === 200) {
        setRoom(res.data.data.room)
        setComments(res.data.data.comments.reverse())
      } else {
        console.error('Failed to fetch room details')
      }
    })
    getRoomsAPI(params).then((res) => {
      if (res.status === 200) {
        setMaxRoomNum(res.data.data.length)
        setRoomsList(res.data.data.slice(0, roomNum))
      } else {
        console.error('Failed to fetch all rooms')
      }
    })
  }, [roomNum])

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      {/* Hotel Title & Price */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-mainColor-600">{room.name}</h1>
          <p className="text-sm text-gray-600"> 4.2 rating • 370+ reviews</p>
        </div>
        <div className="text-right flex flex-col items-center">
          <p className="text-3xl font-bold text-mainColor1-900">${room.price_per_night}<span className="text-lg font-normal">/night</span></p>
          <p className='text-xl font-semibold text-mainColor1-500'>Max Guests: {room.max_guests}</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full h-[550px]">
        <img className="col-span-2 rounded-lg object-cover w-full h-full" src={API_ROOT + room.image_url} alt="" />
      </div>

      {/* Booking Form */}
      <div className="flex items-center justify-center !mt-10 !mb-10">
        <form onSubmit={handleBooking} className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-6xl">
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="checkin" className='font-semibold text-mainColor-700'>Check in</label>
              <input
                type="date"
                id='checkin'
                name='checkin'
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                min = {getTodayDate()}
                max={checkout || undefined}
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
                min={checkin || undefined}
                className='border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 placeholder:!text-mainColor-200 text-mainColor-800'/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="room-type" className='font-semibold text-mainColor-700'>Guests</label>
              <select
                id='room-type'
                name='room-type'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="border !border-mainColor-600 hover:!border-2 hover:!border-mainColor-700 outline-mainColor-600 rounded-md p-2 text-mainColor-800">
                <option value="" disabled selected className='text-sm'>--Select number of guests--</option>
                {Array.from({ length: room.max_guests }, (_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1} Guest{index !== 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            <button type='submit' className='bg-mainColor-400 text-white px-4 rounded w-full hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-4'>Book Rooms</button>
          </div>
        </form>
      </div>

      {/* Overview */}
      <div className='!mb-10'>
        <h2 className="text-3xl font-semibold mb-2 text-mainColor-600">Description</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {room.description}
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
        <h2 className="text-3xl font-semibold mb-2 text-mainColor-600">Available Rooms</h2>
        <div className="space-y-4">
          {roomsList.map((room) => (
            room.id != id && <div key={room.id} className="flex justify-between items-center border rounded-lg p-4">
              <p className=" text-2xl text-mainColor-400 font-semibold">{room.name} <span className="text-sm text-mainColor1-400">(Max Guests: {room.max_guests})</span> </p>
              <div className="text-right">
                <p className="text-lg text-mainColor1-800 font-semibold">${room.price_per_night}<span className="text-sm">/night</span></p>
                <button onClick={handleViewRoom(room.id)} className='bg-mainColor-400 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>View</button>
              </div>
            </div>
          ))}
          {roomNum < maxRoomNum && <div onClick={handleLoadMore} className='flex justify-center cursor-pointer bg-mainColor-400 text-white px-4 rounded-sm w-full hover:bg-mainColor-800  hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2 mt-4'>
            Load More
          </div>}
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
            <div className="text-4xl font-bold">{room.rating}</div>
            <div className="font-medium text-lg">Very good</div>
            <p className="text-sm text-gray-500">{comments?.length} verified reviews</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button className='bg-mainColor-400 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>
      Give your review
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-mainColor-600">Review</DialogTitle>
                <DialogDescription>
            Give your feedback about our service
                </DialogDescription>
              </DialogHeader>

              {/* Rating stars */}
              <div className="flex flex-col mb-1">
                <div className='text-lg font-semibold mb-1 text-mainColor1-700'>Rating</div>
                <div className='flex space-x-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      onClick={() => setRating(index + 1)}
                      onMouseEnter={() => setHover(index + 1)}
                      onMouseLeave={() => setHover(0)}
                      className={`cursor-pointer w-6 h-6 transition-colors duration-200 ${
                        (hover || rating) > index ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>

              </div>

              <div className="flex items-center space-x-3">
                <textarea
                  id="text"
                  placeholder="Your review..."
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  className='w-full border-2 px-2 py-2 focus:outline-2 focus:outline-mainColor-800 text-mainColor-700'
                />
              </div>
              <DialogFooter className="sm:justify-start">
                <button type='submit' onClick={handleSubmitReview} className='bg-mainColor-600 text-white px-4 rounded hover:bg-mainColor-800 hover:scale-105 hover:drop-shadow-lg hover:duration-300 hover:ease-in-out transition-all py-2'>Send</button>
                <DialogClose asChild>
                  <Button ref={dialogCloseRef} type="button" variant="secondary">
              Close
                  </Button>
                </DialogClose>

              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="divide-y mt-6">
          {comments.map((comment) => (
            <div key={comment.id} className="py-4 flex items-start gap-4">
              <img
                src={API_ROOT + comment.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold text-sm">
                  <span className="text-gray-600 font-semibold text-lg">  {comment.name}</span> | {comment.rating}⭐
                </div>
                <p className="text-gray-700 text-sm">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
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