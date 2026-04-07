import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TimeframeId } from "@/shared/configs/timeframes";

interface CryptoGraphState {
    coin: string;
    timeframe: TimeframeId;
}

const initialState: CryptoGraphState = {
    coin: "bitcoin",
    timeframe: "1"
};

const cryptoGraphSlice = createSlice({
    name: "lobby",
    initialState,
    reducers: {
        setCryptoGraphCoin: (state, action: PayloadAction<string>) => {
            state.coin = action.payload ?? state.coin;
        },
        setCryptoGraphTimeframe: (state, action: PayloadAction<TimeframeId>) => {
            state.timeframe = action.payload;
        }
    }
});

export const { setCryptoGraphCoin, setCryptoGraphTimeframe } = cryptoGraphSlice.actions;
export default cryptoGraphSlice.reducer;