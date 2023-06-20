import api from "./api";

export const getNewsByMainCtg = async (category, locale = 'ru', limit = 5) => {
    try {
        const {data} = await api.get(`/news/published?lang=${locale}&mainCategoryId=${category}&limit=${limit}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getNewsById = async (id, locale = '') => {
    try {
        const {data} = await api.get(`/single-news/${id}${locale ? `?lang=${locale}` : ''}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getLastNews = async (locale = 'ru', limit, page = 1) => {
    try {
        const {data} = await api.get(`/news/last-news?state=published&lang=${locale}&page=${page}${limit ? `&limit=${limit}` : ''}`)
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

export const getAllNews = async() => {
    try {
        const {data} = await api.get(`/news/published?limit=50`)
        return data
    } catch (error) {
        console.log(error)
    }
}