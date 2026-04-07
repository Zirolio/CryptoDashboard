import { getCoinChart } from "@/shared/api/coinChart";
import { adaptCoinChart } from "@/shared/domain/coinChart.adapter";
import { useQuery } from "@tanstack/react-query"

export const useCoinChart = (id: string, days: number) => {
    return useQuery({
        queryKey: ["coinChart", id, days],
        queryFn: () => getCoinChart(id, days),

        select: adaptCoinChart,

        enabled: !!id,
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        retry: false
    });
}