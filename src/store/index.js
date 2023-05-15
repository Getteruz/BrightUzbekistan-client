import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { adsReducers } from "./Ads";
import { alertReducers } from "./Alert";
import { audioReducers } from "./Audio";

const rootReducer = combineReducers({
    alert: alertReducers,
    audio: audioReducers,
    ads: adsReducers
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})