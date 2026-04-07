import { useCoins } from "@entities/coins/model/useCoins";
import styles from "./CoinsTable.module.scss";
import TableRow from "./TableRow/TableRow";
import { TableRowSkeleton } from "./TableRow/TableRowSceleton";

export default function CoinsTable() {
    const { data = [], isLoading } = useCoins();

    const content = data.length ? data.map(c => {
        const priceChange = Number(c.price_change_percentage_24h?.toFixed(2) ?? 0);
        return <TableRow key={c.id} coin={c.symbol.toUpperCase()} price={`$${c.current_price}`} priceChange={priceChange} />
    }) : undefined;

    return <div className={styles.container}>
        <TableRow coin="Coin" price="Price" priceChange="24h" isCaption />
        {
            isLoading ? Array.from({ length: 10 }).map((_, i) => <TableRowSkeleton key={i} />)
                : content?.length ? content
                    : <div className={styles.noContent}>No coins found</div>
        }
    </div>
}