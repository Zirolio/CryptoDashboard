import type { Chart } from "@/shared/domain/coinChart.adapter";

function eraseSeconds(t: number) {
    return Math.floor(t / (60 * 1000)) * (60 * 1000);
}

function snapToStep(t: number, step: number, threshold: number) {
    const snapped = Math.round(t / step) * step;

    if (Math.abs(t - snapped) <= threshold) return snapped;
    else return eraseSeconds(t);
}

export function normalizeChartData(data: Chart[], timeframe: number): Chart[] {
    let step: number;
    let threshold: number;

    if (timeframe === 1) {
        step = 1000 * 60 * 60;        // 1h
        threshold = 1000 * 60 * 1;    // 1m
    } else if (timeframe === 7) {
        step = 1000 * 60 * 60 * 24;   // 1d
        threshold = 1000 * 60 * 30;   // 30m
    } else {
        step = 1000 * 60 * 60 * 24;
        threshold = 1000 * 60 * 30;
    }

    return data.map(d => ({
        ...d,
        time: snapToStep(d.time, step, threshold)
    }));
}