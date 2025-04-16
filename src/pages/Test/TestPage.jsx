import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TestPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost/public/api/settings/latest')
      .then((response) => {
        setData(response.data)
        alert('Data fetched successfully!' + JSON.stringify(response.data))
      })
      .catch((error) => {
        alert(error.response.data)
        console.log(error.response.data)
      })
  }, [])

  return (
    <div>
      {data ? (
        <p style={{ fontSize: '18px', color: 'blue' }}>
          Name: {data.name}, Value: {data.value}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
