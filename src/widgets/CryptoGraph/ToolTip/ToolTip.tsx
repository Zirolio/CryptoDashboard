import type { TooltipContentProps } from "recharts";
import "./ToolTip.modulea.scss";

export function ToolTip({ active, payload, label }: TooltipContentProps) {
    if (!active || !payload?.length) return null;

    const price = payload[0].value;

    return (
        <div className="tooltip">
            <div className="tooltip-date">
                {new Date(label!).toLocaleString([], {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                })}
            </div>

            <div className="tooltip-price">
                ${typeof price === "number" ? price.toFixed(2) : 0}
            </div>
        </div>
    );
}