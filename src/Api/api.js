import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "3e590a45-8f63-45a3-a303-faffb020dba6"}
})


export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data
        })
  },
  follow(userId) {
    return instanse.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instanse.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
  }
}


export const profileAPI = {

  getProfile(userId) {
    return instanse.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instanse.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instanse.put(`profile/status/`, {status: status})
  }
}

export const authAPI = {
  me() {
    return instanse.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instanse.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instanse.delete(`auth/login`)
  }
}





