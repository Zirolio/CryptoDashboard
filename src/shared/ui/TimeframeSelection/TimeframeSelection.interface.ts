import type { TimeframeId } from "@/shared/configs/timeframes";
import type { HTMLAttributes } from "react";

export interface TimeframeProps extends HTMLAttributes<HTMLDivElement> {
    sellected: TimeframeId;
    timeframes: Record<TimeframeId, string>;
    onTimeframeChange?: (tfKey: TimeframeId) => void;
}