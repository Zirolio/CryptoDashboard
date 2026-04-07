import { getCoins } from "@/shared/api/coins"
import { useQuery } from "@tanstack/react-query"

export const useCoins = () => {
    return useQuery({
        queryKey: ["coins"],
        queryFn: getCoins,

        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,

        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,

        retry: 1,
    })
}