import type { Chart } from "@/shared/domain/coinChart.adapter";

function floorToStep(t: number, step: number) {
    return Math.floor(t / step) * step;
}

function findClosest(data: Chart[], target: number): Chart {
    return data.reduce((prev, curr) =>
        Math.abs(curr.time - target) < Math.abs(prev.time - target)
            ? curr
            : prev
    );
}

export default function getNiceTicks(data: Chart[], timeframe: number): number[] {
    if (data.length <= 1) return data.map(d => d.time);

    let step: number;

    if (timeframe === 1) step = 1000 * 60 * 60 * 4; // 4h
    else if (timeframe === 7) step = 1000 * 60 * 60 * 24; // 1d
    else step = 1000 * 60 * 60 * 24 * 7; // 7d

    const start = data[0].time;
    const end = data[data.length - 1].time;

    let t = floorToStep(start, step);

    const result: number[] = [];

    while (t <= end) {
        const closest = findClosest(data, t);
        result.push(closest.time);
        t += step;
    }

    const last = data[data.length - 1].time;
    if (!result.includes(last)) {
        result.push(last);
    }

    // убрать дубликаты
    return Array.from(new Set(result));
}