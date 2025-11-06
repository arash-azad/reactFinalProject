import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export default function useGetAllProducts() {
  const queryFn = async () => {
    return await api.get("products");
  };

  return useQuery({
    queryFn,
    queryKey: ["ALL_PRODUCTS"],
  });
}
