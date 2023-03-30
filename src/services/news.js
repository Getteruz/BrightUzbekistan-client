import { log } from "console";
import api from "./api";

export const getNewsByMainCtg = async (category, locale = 'ru') => {
    try {
        const {data} = await api.get(`/news/published?lang=${locale}&mainCategoryId=${category}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getNewsById = async (id, locale) => {
    try {
        const {data} = await api.get(`/single-news/${id}?lang=${locale}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getLastNews = async () => {
    try {
        const {data} = await api.get('/news/published?categoryId=')
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