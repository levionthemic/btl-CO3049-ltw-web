import { Edit3Icon, UploadCloudIcon } from 'lucide-react'
import sampleImg from '~/assets/carousel_2.jpg'
import sampleAvatar from '~/assets/bg-auth.jpg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import AccountTab from './Tabs/AccountTab'
import HistoryTab from './Tabs/HistoryTab'
import PaymentTab from './Tabs/PaymentTab'

function Account() {
  return (
    <div className="bg-gray-100/50 py-12">
      <div className='container mx-auto'>
        <div className="mb-44">
          <div className="relative">
            <img src={sampleImg} alt="" className='w-full h-52 object-cover rounded-lg' />
            <div className="">
              <input id='upload-cover' type="file" className='hidden'/>
              <label htmlFor='upload-cover' className='cursor-pointer absolute bottom-3 right-3 bg-mainColor-400 py-1 px-2 flex items-center gap-2 rounded-lg hover:bg-mainColor-600 hover:duration-300 hover:ease-in-out transition-all'><UploadCloudIcon />Upload new cover</label>
            </div>
            <div className="flex flex-col items-center w-fit absolute left-1/2 -translate-x-1/2 -bottom-32">
              <div className="relative w-fit mb-4">
                <img src={sampleAvatar} alt="" className='size-24 rounded-full object-cover border-[3px] border-mainColor1-600' />
                <div className='absolute bottom-0 right-0'>
                  <input type="file" name="" id="upload-avatar" className='hidden'/>
                  <label htmlFor="upload-avatar" className='block p-1 rounded-full bg-mainColor1-600 cursor-pointer hover:bg-mainColor1-800 hover:duration-300 hover:ease-in-out transition-all'><Edit3Icon size={20} /></label>
                </div>
              </div>
              <div className="font-semibold text-xl">Ho Tran Ngoc Liem</div>
              <div className="">example@gmail.com</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-2 h-fit bg-white mb-6 drop-shadow-sm">
            <TabsTrigger className='mt-1 data-[state=active]:border-b-2 data-[state=active]:border-mainColor-600 data-[state=active]:shadow-none data-[state=active]:rounded-none text-md' value="account">Account</TabsTrigger>
            <TabsTrigger className='my-1 data-[state=active]:border-b-2 data-[state=active]:border-mainColor-600 data-[state=active]:shadow-none data-[state=active]:rounded-none text-md' value="history">History</TabsTrigger>
            <TabsTrigger className='my-1 data-[state=active]:border-b-2 data-[state=active]:border-mainColor-600 data-[state=active]:shadow-none data-[state=active]:rounded-none text-md' value="payment">Payment methods</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <AccountTab />
          </TabsContent>
          <TabsContent value="history">
            <HistoryTab />
          </TabsContent>
          <TabsContent value="payment">
            <PaymentTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>

  )
}

export default Account