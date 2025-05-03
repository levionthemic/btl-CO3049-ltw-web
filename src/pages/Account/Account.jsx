import { CheckIcon, Edit3Icon, UploadCloudIcon } from 'lucide-react'
import sampleImg from '~/assets/carousel_2.jpg'
import sampleAvatar from '~/assets/bg-auth.jpg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import AccountTab from './Tabs/AccountTab'
import HistoryTab from './Tabs/HistoryTab'
import PaymentTab from './Tabs/PaymentTab'
import { useAuth } from '~/contexts/AuthContext'
import { useState } from 'react'
import { updateUserAPI } from '~/apis'
import { toast } from 'sonner'
import { API_ROOT } from '~/utils/constants'

function Account() {
  const { currentUser, setUser } = useAuth()

  const [avatarFile, setAvatarFile] = useState(null)
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState(null)

  const handleInputAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarPreviewUrl(imageUrl)
      setAvatarFile(file)
    }
  }

  const handleUploadAvatar = () => {
    const data = new FormData()
    data.append('avatar', avatarFile)
    data.append('id', currentUser.id)

    toast.promise(
      updateUserAPI(data),
      {
        loading: 'Uploading avatar...',
        success: (res) => {
          if (!res.error) {
            setUser(res.data.data)
            setAvatarFile(null)
            return 'Update successful!'
          }
        }
      }
    )
  }

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
              <div className="relative w-fit mb-4 bg-white rounded-full">
                <img src={avatarPreviewUrl || API_ROOT + currentUser?.avatar} alt="" className='size-24 rounded-full object-cover border-[3px] border-mainColor1-600' />
                <div className='absolute bottom-0 right-0'>
                  <input type="file" name="" id="upload-avatar" className='hidden' onChange={handleInputAvatarChange} />
                  {avatarFile
                    ? <div className='p-1 rounded-full text-white bg-mainColor-600 cursor-pointer hover:bg-mainColor-800 hover:duration-300 hover:ease-in-out transition-all' onClick={handleUploadAvatar}><CheckIcon size={20} /></div>
                    : <label htmlFor="upload-avatar" className='block p-1 rounded-full bg-mainColor1-600 cursor-pointer hover:bg-mainColor1-800 hover:duration-300 hover:ease-in-out transition-all'><Edit3Icon size={20} /></label>
                  }

                </div>
              </div>
              <div className="font-semibold text-xl">{currentUser.name}</div>
              <div className="">{currentUser.email}</div>
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