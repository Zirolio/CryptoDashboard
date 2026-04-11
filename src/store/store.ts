import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { saveToStorage } from "@shared/lib/storage";
import { LOCAL_STORAGE_KEY } from "@app/config/constants";

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer
    }
});

store.subscribe(() => {
    try {
        const state = store.getState().dashboard;
        saveToStorage(LOCAL_STORAGE_KEY, state);
    } catch (error) {
        console.error("Failed to load state:", error);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;