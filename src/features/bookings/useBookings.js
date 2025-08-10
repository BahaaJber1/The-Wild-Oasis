import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
    // custom hook from react query we gonna provide object with 2 things
    // 1.querykey = will uniqeuly Identify the query needs to be an array
    // 2. the function that's gonna fetch the data from the api and needs to return a promise

    const {
        isLoading,
        data: bookings,
        error,
    } = useQuery({
        queryKey: ["bookings"],
        queryFn: getBookings,
    });

    return { isLoading, bookings, error };
}