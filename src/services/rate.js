import api from "./api"

 export const getRate = async () => {
    try {
        const res = await api.get('/currency')
        return res?.data
    } catch (error) {
        console.log(error)
    }
 }