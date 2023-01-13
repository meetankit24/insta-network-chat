import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile').token)}`
    }
    return req;
})
export const getUser = (userId) => API.get(`/user/${userId}`)

export const getAllUser = () => API.get('/user')

export const updateUser = (userId, data) => API.put(`/user/${userId}`, data);

export const followUser = (userId, data) => API.put(`/user/${userId}/follow`, data);

export const unFollowUser = (userId, data) => API.put(`/user/${userId}/unfollow`, data);
