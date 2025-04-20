import axios from "axios";

const api = axios.create({
    baseURL: 'https://fraudi-backend.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api