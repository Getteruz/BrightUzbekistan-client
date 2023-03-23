import api from "./api";

export const getCategories = async() => {
    try {
        const {data} = await api.get('/category')
        return data
    } catch (error) {
        
    }
}