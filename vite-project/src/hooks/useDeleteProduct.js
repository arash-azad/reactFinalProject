import api from "../api/api";
import { QueryClient, useMutation } from "@tanstack/react-query";
export default function useDeleteProduct(){
    async function mutationFn(productId){
        return await api.delete(`products/${productId}`);
    }
    return useMutation({
        mutationFn,
        onSuccess:()=>{},
        onError:()=>{},
    });
}