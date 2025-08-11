import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getBooking } from "../../services/apiBookings";

export function useBooking() {
    const { bookingId } = useParams();

    // custom hook from react query we gonna provide object with 2 things
    // 1.querykey = will uniqeuly Identify the query needs to be an array
    // 2. the function that's gonna fetch the data from the api and needs to return a promise

    const {
        isLoading,
        data: booking,
        error,
    } = useQuery({
        queryKey: ["booking", bookingId],
        queryFn: () => getBooking(bookingId),
        retry: false,
    });

    return { isLoading, booking, error };
}