import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;