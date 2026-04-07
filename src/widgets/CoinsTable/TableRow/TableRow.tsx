import cx from "classix";
import type { TableRowProps } from "./TableRow.interface";
import styles from "./TableRow.module.scss";
import getPriceChange from "@/shared/util/getPriceChange";

export default function TableRow({ coin, price, priceChange, isCaption }: TableRowProps) {
    const changeStr = typeof priceChange === "number" ? getPriceChange(priceChange) : priceChange;

    return <div className={cx(styles.tableRow, isCaption && styles.caption)}>
        <span className={styles.symbol}>{coin}</span>
        <span className={styles.price}>{price}</span>
        <span className={cx(
            styles.priceChange,
            typeof priceChange === "number" && priceChange < 0 && styles.negative,
            typeof priceChange === "number" && priceChange > 0 && styles.positive
        )}>{changeStr}</span>
    </div>
}