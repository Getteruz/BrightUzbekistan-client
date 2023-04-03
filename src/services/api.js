import axios from "axios";

const api = axios.create({
    baseURL: "https://api.bright.getter.uz"
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