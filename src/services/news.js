import api from "./api";

export const getNewsByMainCtg = async (category, locale = 'ru') => {
    try {
        const {data} = await api.get(`/news/published?lang=${locale}&mainCategoryId=${category}`)
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

export const getLastNews = async (locale = 'ru', limit = 10) => {
    try {
        const {data} = await api.get(`/news/last-news?state=published&lang=${locale}&page=1&limit=${limit}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getNewsByCtg = async (id) => {
    try {
        const {data} = await api.get(`/news/published?categoryId=${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
}