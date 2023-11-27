import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9f979ae9-140f-49cf-b8c0-3b0a0d62a108"
    },
    withCredentials: true
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
    },

    getProfile(id) {
        return instance.get(`profile/${id}`)
          .then(response => response.data)
    },

    postFollow(id) {
        return instance.post(`follow/${id}`, {})
          .then(response => response.data)
    },

    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
          .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
          .then(response => response.data)
    },
}