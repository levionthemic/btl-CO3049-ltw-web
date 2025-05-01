import { Edit2Icon, PlusCircleIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { useAuth } from '~/contexts/AuthContext'
import { cloneDeep } from 'lodash'
import { useState } from 'react'
import { toast } from 'sonner'
import { updateUserAPI } from '~/apis'


function AccountTab() {
  const { currentUser, setUser } = useAuth()

  const data = [
    {
      label: 'Name',
      content: currentUser?.name,
      field: 'name'
    },
    {
      label: 'Email',
      content: currentUser?.email,
      isEmail: true,
      field: 'email'
    },
    {
      label: 'Password',
      content: '**********',
      field: 'password'
    },
    {
      label: 'Phone number',
      content: currentUser?.phone || 'Not Available',
      field: 'phone'
    },
    {
      label: 'Address',
      content: currentUser?.address || 'Not Available',
      field: 'address'
    },
    {
      label: 'Date of birth',
      content: currentUser?.date_of_birth || '01-01-1992',
      field: 'date_of_birth'
    }
  ]

  const [userInfo, setUserInfo] = useState(currentUser)

  const handleChangeInput = (e) => {
    const newUserInfo = cloneDeep(userInfo)
    newUserInfo[e.target.id] = e.target.value
    setUserInfo(newUserInfo)
  }

  const handleUpdateProfile = () => {
    setUser(userInfo)
    toast.promise(
      updateUserAPI(userInfo),
      {
        loading: 'Updating...',
        success: (res) => {
          if (!res.error) {
            return 'Update successful!'
          }
        }
      }
    )
  }


  return (
    <div>
      <div className='font-bold text-2xl mb-4'>Account</div>
      <div className="bg-white px-4 py-4 rounded-md">
        {data.map((d, idx) => (
          <div key={idx} className='flex items-center justify-between mb-3'>
            <div className="">
              <div className="text-muted-foreground text-sm mb-1">{d.label}</div>
              <div className="font-bold text-lg leading-none">{d.content}</div>
            </div>
            <div className="flex items-center gap-2">
              {d.isEmail &&
                <Button variant='outline' className='border border-mainColor-600 p-2 hover:bg-mainColor-100'>
                  <PlusCircleIcon />
                  Add another email
                </Button>
              }

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='outline' className='border border-mainColor-600 p-2 hover:bg-mainColor-100'>
                    <Edit2Icon />
                Change
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        {d?.label}
                      </Label>
                      <Input
                        id={d.field}
                        value={userInfo[d.field] || ''}
                        onChange={handleChangeInput}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose>
                      <Button onClick={handleUpdateProfile}>Save changes</Button>

                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountTab