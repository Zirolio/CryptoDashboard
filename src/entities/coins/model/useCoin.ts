import { getCoin } from "@/shared/api/coin";
import { adaptCoin } from "@/shared/domain/coin.adapter";
import { useQuery } from "@tanstack/react-query"

export const useCoin = (id: string) => {
    return useQuery({
        queryKey: ["coin", id],
        queryFn: () => getCoin(id),
        select: adaptCoin
    });
}