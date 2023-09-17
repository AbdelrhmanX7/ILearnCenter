import axios from 'axios'

const userService = {
  getUser: async (userId: number) => {
    try {
      const response = await axios.get(`/api/users/${userId}`)
      return response.data
    } catch (error) {
      throw error
    }
  },
  // ... أخرى خدمات المستخدم
}

export default userService
