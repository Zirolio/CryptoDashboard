import CoinsSelection from "@/shared/ui/CoinsSelection/CoinsSelection";
import styles from "./CryptoGraphHeader.module.scss";
import TimeframeSelection from "@/shared/ui/TimeframeSelection/TimeframeSelection";
import { TIMEFRAMES } from "@/shared/configs/timeframes";
import { useAppDispatch, useAppSelector } from "@store/store";
import { setCryptoGraphCoin, setCryptoGraphTimeframe } from "@store/slices/dashboard";

export default function CryptoGraphHeader() {
    const { coin, timeframe } = useAppSelector(state => state.dashboard.cryptoGraph);
    const dispatch = useAppDispatch();

    return <div className={styles.container}>
        <TimeframeSelection
            className={styles.timeframeSelection}
            sellected={timeframe}
            timeframes={TIMEFRAMES}
            onTimeframeChange={(id) => dispatch(setCryptoGraphTimeframe(id))}
            />
        <CoinsSelection
            className={styles.soinsSelection}
            defaultValue={coin}
            onCoinChange={(coin) => dispatch(setCryptoGraphCoin(coin))}
            />
    </div>
} 