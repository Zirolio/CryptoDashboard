import { api } from "./client";
import type { CoinApi } from "./types";

export const getCoin = async(id: string): Promise<CoinApi> => {
    const { data } = await api.get(`/coins/${id}`);
    return data;
};