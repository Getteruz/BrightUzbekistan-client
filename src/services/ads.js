import api from "./api"

export const getAds = async (type = '') => {
    try {
        const res = await api.get(`/advertisement/${type}`)
        return res?.data
    } catch (error) {
        console.log(error)
    }
}

export const adsViewed = async (id = '') => {
    try {
        const res = await api.get(`/advertisement/incr-count/${id}`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}

export const adsClicked = async (id = '') => {
    try {
        const res = await api.get(`/advertisement/click/${id}`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryAds = async () => {
    try {
        const res = await api.get('/advertisement/category')
        return res?.data
    } catch (error) {
        console.log(error);
    }
}