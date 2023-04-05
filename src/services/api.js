import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
})

export const queryClientOptions = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
}

export default api