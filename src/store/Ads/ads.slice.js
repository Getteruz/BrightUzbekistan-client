import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const { actions: adsActions, reducer: adsReducers } = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        addAds: (state, { payload }) => {
            state.push(payload)
        }
    }
})