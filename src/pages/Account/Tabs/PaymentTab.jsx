import { FaCcVisa, FaPlus, FaTrash } from 'react-icons/fa'

function PaymentTab() {
  return (
    <div>
      <div className='font-bold text-2xl mb-4'>Payment methods</div>

      <div className='bg-white rounded-xl p-6 flex items-center gap-6'>
        <div className='relative bg-[#92D5C6] rounded-2xl p-6 w-80 h-48 text-black shadow-lg'>
          {/* Nút xóa */}
          <button className='absolute top-4 right-4 bg-black bg-opacity-20 p-1 rounded'>
            <FaTrash className='text-black' />
          </button>

          {/* Số thẻ */}
          <div className='text-2xl font-bold tracking-widest mb-8'>
            **** **** ****
            <br />
            4321
          </div>

          {/* Valid thru + Logo Visa */}
          <div className='flex justify-between items-end absolute bottom-4 left-6 right-6'>
            <div>
              <p className='text-xs text-black/70'>Valid Thru</p>
              <p className='text-lg font-bold'>02/27</p>
            </div>
            <FaCcVisa className='text-3xl' />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center w-80 h-48 rounded-2xl border-2 border-dashed border-[#92D5C6] cursor-pointer hover:bg-[#92d5c620] transition'>
          <div className='flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#92D5C6] mb-4'>
            <FaPlus className='text-[#92D5C6]' />
          </div>
          <p className='text-gray-700 text-sm'>Add a new card</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentTab
