import styles from "./Dashboard.module.scss";
import CryptoGraph from "@widgets/CryptoGraph/CryptoGraph";
import CoinsTable from "@widgets/CoinsTable/CoinsTable";
import Header from "@widgets/Header/Header";

export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <Header />
            <div className={styles.dashboard}>
                <CryptoGraph />
                <CoinsTable />
            </div>
        </div>
    );
}