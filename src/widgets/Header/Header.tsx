import CoinsSelection from "@/shared/ui/CoinsSelection/CoinsSelection";
import TimeframeSelection from "@/shared/ui/TimeframeSelection/TimeframeSelection";
import { TIMEFRAMES } from "@/shared/configs/timeframes";
import { setCryptoGraphCoin, setCryptoGraphTimeframe } from "@store/slices/dashboard";
import { useAppDispatch, useAppSelector } from "@store/store";
import styles from "./Header.module.scss";
import { useCoin } from "@entities/coins/model/useCoin";
import Skeleton from "react-loading-skeleton";
import cx from "classix";
import getPriceChange from "@/shared/util/getPriceChange";

export default function Header() {
    const { coin, timeframe } = useAppSelector(state => state.dashboard.cryptoGraph);
    const dispatch = useAppDispatch();

    const { data, isLoading } = useCoin(coin);

    const priceChange = data?.price_change_percentage_24h;

    return (<div className={styles.container}>
        <span className={styles.title}>Dashboard</span>

        <div className={styles.settingsContainer}>
            <div className={styles.coinInfoContainer}>
                <span className={cx(
                    styles.priceChange,
                    typeof priceChange === "number" && priceChange < 0 && styles.negative,
                    typeof priceChange === "number" && priceChange > 0 && styles.positive)}>
                    { isLoading || !priceChange
                        ? <Skeleton width={20} baseColor="var(--color-surface-2)" highlightColor="var(--color-surface-3)" />
                        : getPriceChange(priceChange) }
                </span>
                <span className={styles.price}>
                    { isLoading
                        ? <Skeleton width={80} baseColor="var(--color-surface-2)" highlightColor="var(--color-surface-3)" />
                        : `$${data?.current_price}` }
                </span>
            </div>
            
            <div className={styles.settings}>
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
        </div>
    </div>)
}