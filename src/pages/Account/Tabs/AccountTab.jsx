import { Edit2Icon, PlusCircleIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'

const data = [
  {
    label: 'Name',
    content: 'John Doe'
  },
  {
    label: 'Email',
    content: 'john.doe@gmail.com',
    isEmail: true
  },
  {
    label: 'Password',
    content: '**********'
  },
  {
    label: 'Phone number',
    content: '+1 000-000-0000'
  },
  {
    label: 'Address',
    content: 'St 32 main downtown, Los Angeles, California, USA'
  },
  {
    label: 'Date of birth',
    content: '01-01-1992'
  }
]
function AccountTab() {
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
              <Button variant='outline' className='border border-mainColor-600 p-2 hover:bg-mainColor-100'>
                <Edit2Icon />
                Change
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountTab