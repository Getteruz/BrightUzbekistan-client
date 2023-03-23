import axios from "axios";
import { QueryClient } from "react-query";
import { getUser } from "utils/userDetails";

const { token } = getUser()

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
})

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })

export default api