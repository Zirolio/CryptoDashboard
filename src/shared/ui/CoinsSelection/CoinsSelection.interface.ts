import type { HTMLAttributes } from "react";

export interface CoinSelectionProps extends HTMLAttributes<HTMLDivElement> {
    defaultValue: string;
    onCoinChange?: (coin: string) => void;
}