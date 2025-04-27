import { ChevronRight, Clock3Icon, MinusIcon } from 'lucide-react'
import { FaClock, FaDoorClosed } from 'react-icons/fa'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'

const data = [
  {
    thumbnail: 'https://img.freepik.com/premium-vector/hotel-logo-icon-vector-hotel-logo-silhouette-building-vector-illustration_1199258-5038.jpg',
    checkInDate: 'Thur, Dec 8',
    checkInTime: '12:00pm',
    checkOutDate: 'Fri, Dec 9',
    checkOutTime: '11:30am',
    roomNo: 'On arrival'
  },
  {
    thumbnail: 'https://img.freepik.com/premium-vector/hotel-logo-icon-vector-hotel-logo-silhouette-building-vector-illustration_1199258-5038.jpg',
    checkInDate: 'Thur, Dec 8',
    checkInTime: '12:00pm',
    checkOutDate: 'Fri, Dec 9',
    checkOutTime: '11:30am',
    roomNo: 'On arrival'
  },
  {
    thumbnail: 'https://img.freepik.com/premium-vector/hotel-logo-icon-vector-hotel-logo-silhouette-building-vector-illustration_1199258-5038.jpg',
    checkInDate: 'Thur, Dec 8',
    checkInTime: '12:00pm',
    checkOutDate: 'Fri, Dec 9',
    checkOutTime: '11:30am',
    roomNo: 'On arrival'
  }
]
function HistoryTab() {
  return (
    <div>
      <div className='font-bold text-2xl mb-4'>Bookings History</div>
      <div className="space-y-6">
        {data.map((d, idx) => (
          <div key={idx} className='flex items-center justify-between bg-white px-4 py-6 rounded-xl drop-shadow-md'>
            <div className="flex items-center gap-6">
              <div className='border border-gray-200 rounded-md p-1'>
                <img src={d.thumbnail} alt="" className='size-20' />
              </div>

              <div className='flex items-center gap-2'>
                <div>
                  <div className='text-muted-foreground mb-1'>Check In</div>
                  <div className='font-semibold leading-none text-lg'>{d.checkInDate}</div>
                </div>
                <MinusIcon />
                <div>
                  <div className='text-muted-foreground mb-1'>Check Out</div>
                  <div className='font-semibold leading-none text-lg'>{d.checkOutDate}</div>
                </div>
              </div>

              <Separator orientation="vertical" className='h-10' />

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <div className='bg-gray-100 rounded-sm p-2'>
                    <FaClock size={20} className='text-mainColor-500'/>
                  </div>
                  <div>
                    <div className='text-muted-foreground text-sm mb-0.5'>Check In Time</div>
                    <div className="font-medium leading-none">{d.checkInTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className='bg-gray-100 rounded-sm p-2'>
                    <FaClock size={20} className='text-mainColor-500'/>
                  </div>
                  <div>
                    <div className='text-muted-foreground text-sm mb-0.5'>Check Out Time</div>
                    <div className="font-medium leading-none">{d.checkOutTime}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-start">
                <div className='bg-gray-100 rounded-sm p-2'>
                  <FaDoorClosed size={20} className='text-mainColor-500'/>
                </div>
                <div>
                  <div className='text-muted-foreground text-sm mb-0.5'>Room No.</div>
                  <div className="font-medium leading-none">{d.roomNo}</div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Button className='bg-mainColor-400 text-gray-800 hover:bg-mainColor-500'>Download Ticket</Button>
              <Button variant='outline' className='border border-mainColor-400'><ChevronRight /></Button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HistoryTab