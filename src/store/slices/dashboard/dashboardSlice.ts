import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TimeframeId } from "@/shared/configs/timeframes";
import { loadFromStorage } from "@shared/lib/storage";
import { LOCAL_STORAGE_KEY } from "@app/config/constants";

interface DashboardState {
    coin: string;
    timeframe: TimeframeId;
}

const initialState: DashboardState = loadFromStorage(LOCAL_STORAGE_KEY) ?? {
    coin: "bitcoin",
    timeframe: "1"
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDashboardCoin: (state, action: PayloadAction<string>) => {
            state.coin = action.payload ?? state.coin;
        },
        setDashboardTimeframe: (state, action: PayloadAction<TimeframeId>) => {
            state.timeframe = action.payload;
        }
    }
});

export const { setDashboardCoin, setDashboardTimeframe } = dashboardSlice.actions;
export default dashboardSlice.reducer;