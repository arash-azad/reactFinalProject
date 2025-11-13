import api from "../api/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

export default function usePutEditProduct(){
    async function mutationFn({
        title,
        id,
        price
    }){
        return await api.put(`products/${id}`, { title, price });

    }
    return useMutation({
        mutationFn,
    });
}