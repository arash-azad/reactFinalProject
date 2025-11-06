import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

export default function usePostLogin() {
    const queryClient = useQueryClient()

  async function mutationFn({ username, password }) {

    return api.post("auth/login", {
      test: "test",
    });
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["ALL_PRODUCTS"] });

    },
    onError: () => {},
  });
}
