import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const {actions: audioActions, reducer: audioReducers} = createSlice({
    name: 'audio',
    initialState,
    reducers: {
        addAudio: (state, {payload}) => {
            state?.forEach(({id, audio}) => id !== payload?.id && audio?.pause())
            const prevAudio = JSON.parse(JSON.stringify(state))?.find(audio => audio.id === payload.id)
            if(prevAudio){
                return state
            } else {
                state.push(payload)
            }
        },
        removeAudio: (state, {payload}) => {
            return state.filter(audio => audio.id !== payload.id)
        }
    }
})