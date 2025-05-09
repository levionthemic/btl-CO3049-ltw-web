import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  fetchNewsDetailAPI,
  fetchCommentsByNewsAPI,
  createCommentAPI
} from '~/apis/index.js'
import { toast } from 'sonner'
import { API_ROOT } from '~/utils/constants'

function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [replyTo, setReplyTo] = useState(null) // id của comment đang trả lời
  const [loading, setLoading] = useState(true)

  const loadPost = async () => {
    try {
      const res = await fetchNewsDetailAPI(id)
      setPost(res.data.data)
    } catch (err) {
      toast.error('Không tìm thấy bài viết')
    }
  }

  const loadComments = async () => {
    try {
      const res = await fetchCommentsByNewsAPI(id)
      setComments(res.data.data)
    } catch (err) {
      toast.error('Lỗi tải bình luận')
    }
  }

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return

    try {
      const res = await createCommentAPI(id, {
        user_id: 1, // tạm thời gán cứng, bạn nên lấy từ auth context
        content: newComment,
        parent_id: replyTo // null nếu là bình luận gốc
      })
      console.log('API response:', res.data) // Ghi log để kiểm tra
      if (res.data.status === 'success') {
        setNewComment('')
        setReplyTo(null)
        loadComments()
        toast.success('Đã gửi bình luận')
      } else {
        throw new Error('Phản hồi API không thành công')
      }
    } catch (err) {
      console.error('Error in handleCommentSubmit:', err)
      toast.error('Gửi bình luận thất bại')
    }
  }

  useEffect(() => {
    setLoading(true)
    Promise.all([loadPost(), loadComments()]).finally(() =>
      setLoading(false)
    )
  }, [id])

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">Đang tải...</div>
    )
  }

  if (!post) {
    return (
      <div className="text-center py-10 text-red-500">
        Bài viết không tồn tại.
      </div>
    )
  }

  const rootComments = comments.filter((c) => !c.parent_id)
  const repliesByParentId = comments.reduce((acc, c) => {
    if (c.parent_id) {
      if (!acc[c.parent_id]) acc[c.parent_id] = []
      acc[c.parent_id].push(c)
    }
    return acc
  }, {})

  const renderReplies = (parentId) => {
    const replies = repliesByParentId[parentId] || []
    return replies.map((reply) => (
      <div key={reply.id} className="ml-6 mt-2 border-l pl-4">
        <p className="text-sm font-medium text-mainColor-400">
          {reply.name || `Người dùng #${reply.user_id}`}
        </p>
        <p>{reply.content}</p>
      </div>
    ))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-mainColor-400 mb-4">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image.startsWith('/uploads/') ? `${API_ROOT}${post.image}` : post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
          onError={(e) => {
            console.log('Image load error:', e.target.src)
            e.target.src = '/images/fallback.jpg' // Fallback image
          }}
        />
      )}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>

      {/* BÌNH LUẬN */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Bình luận</h2>

        {rootComments.length === 0 && (
          <p className="text-gray-500">Chưa có bình luận nào.</p>
        )}

        {rootComments.map((cmt) => (
          <div key={cmt.id} className="mb-4 border-b pb-2">
            <p className="font-semibold text-sm text-mainColor-400">
              {cmt.name || `Người dùng #${cmt.user_id}`}
            </p>
            <p>{cmt.content}</p>

            <button
              onClick={() => {
                setReplyTo(cmt.id)
                setNewComment('')
              }}
              className="text-sm text-blue-500 hover:underline mt-1"
            >
              Phản hồi
            </button>

            {renderReplies(cmt.id)}
          </div>
        ))}

        {/* Form gửi bình luận */}
        <div className="mt-6">
          {replyTo && (
            <p className="mb-2 text-sm text-gray-500">
              Đang trả lời bình luận #{replyTo}{' '}
              <button
                onClick={() => setReplyTo(null)}
                className="text-red-500 ml-2 text-xs"
              >
                Huỷ
              </button>
            </p>
          )}
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết bình luận của bạn..."
            className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
            rows={4}
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-mainColor-400 hover:bg-mainColor-500 text-white px-4 py-2 rounded"
          >
            Gửi bình luận
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostDetail