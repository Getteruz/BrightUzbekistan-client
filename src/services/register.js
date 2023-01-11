import api from './api'

export const register = async ({ body }) => {
    const { data: user } = await api.post('api/local/register', body)
    return user
}

export const login = async (body) => {
    const { data: user } = await api.post('api/local', body)
    return user
}