import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
    // custom hook from react query we gonna provide object with 2 things
    // 1.querykey = will uniqeuly Identify the query needs to be an array
    // 2. the function that's gonna fetch the data from the api and needs to return a promise
    
    const {
        isPending,
        data: cabins,
        error,
    } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
    });

    return { isPending, cabins, error };
}