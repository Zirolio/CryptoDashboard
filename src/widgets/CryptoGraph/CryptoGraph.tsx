import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from "./CryptoGraph.module.scss";
import { useCoinChart } from "@entities/coins/model/useCoinChart";
import { useAppSelector } from "@store/store";
import cx from "classix";
import { ToolTip } from "./ToolTip/ToolTip";
import getNiceTicks from "@/shared/util/getNiceTicks";
import { normalizeChartData } from "@/shared/util/normalizeChartData";

export default function CryptoGraph() {
    const { coin, timeframe } = useAppSelector(state => state.dashboard.cryptoGraph);
    const { data: chart } = useCoinChart(coin, Number(timeframe));

    const normalizedChart = normalizeChartData(chart ?? [], Number(timeframe));

    const formatTime = (t: number, days: number) => {
        const date = new Date(t);

        if (days === 1) {
            return date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
        }

        if (days === 7) {
            return date.toLocaleDateString([], {
                weekday: "short",
            });
        }

        return date.toLocaleDateString([], {
            day: "2-digit",
            month: "short",
        });
    };

    return (
        <div className={styles.container}>
            <ResponsiveContainer height="100%" width="100%" className={cx(styles.graph)}>
                <AreaChart data={normalizedChart}>
                    <defs>
                        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="time"
                        tickFormatter={(t) => formatTime(t, Number(timeframe))}
                        ticks={getNiceTicks(normalizedChart, Number(timeframe))}
                        />
                    <YAxis />
                    <Tooltip
                        content={ToolTip}
                        cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
                        />
                    <Area
                        animationDuration={350}
                        type="monotone"
                        dataKey="price"
                        stroke="#3b82f6"
                        fill="url(#priceGradient)"
                        strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}