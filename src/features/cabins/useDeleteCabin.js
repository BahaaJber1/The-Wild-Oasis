import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";


export function useDeleteCabin() {

    const queryClient = useQueryClient();

    //This function used to manipulate the data
    const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success("Cabin successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeleting, deleteCabin };
}