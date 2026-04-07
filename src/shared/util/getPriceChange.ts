export default function getPriceChange(v: number) {
    return `${v > 0 ? "+" : v < 0 ? "-" : ""}${Math.abs(v).toFixed(2)}%`;
}