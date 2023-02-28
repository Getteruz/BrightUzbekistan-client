import axios from "axios";
import { getUser } from "utils/userDetails";

const { token } = getUser()

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: `Bareer ${token}`
    }
})

export default api