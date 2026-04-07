import type { TimeframeId } from "@/shared/configs/timeframes";
import type { TimeframeProps } from "./TimeframeSelection.interface";
import styles from "./TimeframeSelection.module.scss";
import cx from "classix";

export default function TimeframeSelection({ sellected, timeframes, onTimeframeChange, className, ...props }: TimeframeProps) {
    return (
        <div className={cx(styles.container, className)} {...props}>
            {
                Object.entries(timeframes).map(([id, label]) => 
                    <div
                        key={id}
                        className={cx(styles.timeframe, sellected === id && styles.sellected)}
                        onClick={() => {
                            if (onTimeframeChange) onTimeframeChange(id as TimeframeId);
                        }}>
                        {label}
                    </div>
                )
            }
        </div>
    );
}