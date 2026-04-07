export const TIMEFRAMES = {
    "1": "1D",
    "7": "7D",
    "31": "1M",
    "356": "1Y"
} as const;

export type TimeframeId = keyof typeof TIMEFRAMES;