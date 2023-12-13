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
        console.log("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(id)
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

export const profileAPI = {

    getProfile(id) {
        return instance.get(`profile/${id}`)
          .then(response => response.data)
    },
    getProfileStatus(id) {
        return instance.get(`/profile/status/${id}`)
          .then(response => response.data)
    },

    setProfileStatus(status) {
        return instance.put(`/profile/status/`, {status})
          .then(response => response.data)
    },
}


export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
          .then(response => response.data)
    },

    login(email, password, rememberMe=false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
          .then(response => response.data)
    },
    logout() {
        return instance.delete(`/auth/login`)
          .then(response => response.data)
    }
}