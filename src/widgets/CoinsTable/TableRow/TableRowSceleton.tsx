import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./TableRow.module.scss";

export function TableRowSkeleton() {
    return (
        <div className={styles.tableRow}>
            <span className={styles.symbol}>
                <Skeleton width={80} baseColor="var(--color-surface-2)" highlightColor="var(--color-surface-3)" />
            </span>

            <span className={styles.price}>
                <Skeleton width={60} baseColor="var(--color-surface-2)" highlightColor="var(--color-surface-3)" />
            </span>

            <span className={styles.priceChange}>
                <Skeleton width={40} baseColor="var(--color-surface-2)" highlightColor="var(--color-surface-3)" />
            </span>
        </div>
    );
}