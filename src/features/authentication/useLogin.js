import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user); // allow us to set data to the cache
            navigate("/dashboard");
        },
        onError: (err) => {
            toast.error(err.message);
        }
    });

    return { login, isPending };
}