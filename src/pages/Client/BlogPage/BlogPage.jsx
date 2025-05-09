import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAllNewsAPI, searchNewsAPI } from '~/apis/index.js'
import { toast } from 'sonner'
import { API_ROOT } from '~/utils/constants'

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const loadNews = async () => {
    try {
      setLoading(true)
      const res = await fetchAllNewsAPI()
      setNews(res.data.data)
    } catch (err) {
      console.error(err)
      toast.error('Không thể tải bài viết')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e) => {
    const keyword = e.target.value
    setSearchTerm(keyword)

    if (keyword.trim() === '') {
      loadNews()
      return
    }

    try {
      const res = await searchNewsAPI(keyword)
      setNews(res.data.data)
    } catch (err) {
      console.error(err)
      toast.error('Lỗi khi tìm kiếm bài viết')
    }
  }

  const handleNavigate = (id) => {
    navigate(`/blog/${id}`)
  }

  useEffect(() => {
    loadNews()
  }, [])

  return (
    <div className='container mx-auto px-4 py-10'>
      <h1 className='text-4xl font-bold text-mainColor-400 text-center mb-8'>
        Có gì mới hôm nay?
      </h1>

      <div className='mb-6 flex justify-center'>
        <input
          type='text'
          placeholder='Tìm kiếm bài viết...'
          className='border border-gray-300 rounded px-4 py-2 w-full md:w-1/2'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <p className='text-center text-gray-500'>Đang tải bài viết...</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {news.length > 0 ? (
            news.map((news) => (
              <div
                key={news.id}
                className='bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer'
                onClick={() => handleNavigate(news.id)}
              >
                {news.image && (
                  <img
                    src={news.image.startsWith('/uploads/') ? `${API_ROOT}${news.image}` : news.image}
                    alt={news.title}
                    className='w-full h-48 object-cover'
                    onError={(e) => {
                      console.log('Image load error:', e.target.src)
                      e.target.src = '/path/to/fallback-image.jpg' // Fallback image
                    }}
                  />
                )}
                <div className='p-4'>
                  <h2 className='text-xl font-semibold mb-2'>{news.title}</h2>
                  <p className='text-gray-600 text-sm'>
                    {news.description ||
                      news.content?.substring(0, 100) + '...'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500 col-span-full'>
              Không tìm thấy bài viết nào.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default BlogPage