import { combineReducers } from "@reduxjs/toolkit";
import cryptoGraphReducer from "./cryptoGraphSlice";

const dashboardReducer = combineReducers({
    cryptoGraph: cryptoGraphReducer
});

export * from "./cryptoGraphSlice";
export default dashboardReducer;