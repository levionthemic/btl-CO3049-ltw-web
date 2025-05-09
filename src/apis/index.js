import { toast } from 'sonner'
import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '~/utils/constants'

/**
 * Test API
 * @author levi
 */
export const testAPI = async () => {
  return await authorizedAxiosInstance.get(`${API_ROOT}/api/test`)
}

/**
 * Auth APIs
 * @author taiki and levi
 */
export const loginUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/auth/login`,
    data
  )
  return response
}

export const logoutUserAPI = async (showToast = true) => {
  const response = await authorizedAxiosInstance.delete(
    `${API_ROOT}/api/auth/logout`
  )
  if (showToast) {
    toast.success('Logout successfully!')
  }
  return response
}

export const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/auth/register`,
    data
  )
  return response
}

export const refreshTokenAPI = async () => {
  const response = await authorizedAxiosInstance.get(
    `${API_ROOT}/api/auth/refresh-token`
  )
  return response
}

export const forgotPasswordAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/auth/forgot-password`,
    data
  )
  return response
}

export const verifyCodeAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/auth/verify-code`,
    data
  )
  return response
}

export const resetPasswordAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/auth/reset-password`,
    data
  )
  return response
}

/**
 * Room APIs
 * @author taiki
 */
export const getRoomsAPI = async (params) => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/api/rooms`, {
    params
  })
  return response
}

export const getRoomDetailAPI = async (roomId) => {
  const response = await authorizedAxiosInstance.get(
    `${API_ROOT}/api/rooms/detail/${roomId}`
  )
  return response
}

export const bookRoomAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/rooms/booking`,
    data
  )
  return response
}

export const sendReviewRoomAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/rooms/send-review`,
    data
  )
  return response
}

export const getAllBookingAPI = async (userId) => {
  const response = await authorizedAxiosInstance.get(
    `${API_ROOT}/api/rooms/get-booking/${userId}`
  )
  return response
}
/**
 * FAQ APIs
 * @author levi
 */
export const fetchAllFaqsAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/api/faq`)
  return response
}

/**
 * User APIs
 * @author levi
 */
export const updateUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(
    `${API_ROOT}/api/user/update`,
    data
  )
  return response
}
