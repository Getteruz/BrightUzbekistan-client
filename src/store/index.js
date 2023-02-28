import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { alertReducers } from "./Alert";
import { audioReducers } from "./Audio";

const rootReducer = combineReducers({
    alert: alertReducers,
    audio: audioReducers
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})