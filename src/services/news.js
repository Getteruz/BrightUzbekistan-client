import api from "./api";

export const getNewsByMainCtg = async (category, locale = 'ru', limit = 5) => {
    try {
        const {data} = await api.get(`/news/published?lang=${locale}&mainCategoryId=${category}&limit=${limit}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getNewsById = async (id, locale = 'ru') => {
    try {
        const {data} = await api.get(`/single-news/${id}?lang=${locale}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getLastNews = async (locale = 'ru', limit) => {
    try {
        const {data} = await api.get(`/news/last-news?state=published&lang=${locale}&page=1${limit ? `&limit=${limit}` : ''}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getNewsByCtg = async (id, locale = 'ru') => {
    try {
        const {data} = await api.get(`/news/published?categoryId=${id}&lang=${locale}`)
        return data
    } catch (error) {
        console.log(error);
    }
}