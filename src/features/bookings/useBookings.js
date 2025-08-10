import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams] = useSearchParams();

    // 1. Filter 
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

    // 2. Sort
    const sortByRow = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortByRow.split("-");
    const sortBy = { field, direction };


    // custom hook from react query we gonna provide object with 2 things
    // 1.querykey = will uniqeuly Identify the query needs to be an array
    // 2. the function that's gonna fetch the data from the api and needs to return a promise

    const {
        isLoading,
        data: bookings,
        error,
    } = useQuery({
        queryKey: ["bookings", filter, sortBy], // to solve the problem of react query to refetch the data whenever the filter change "like a dependency"
        queryFn: () => getBookings({ filter, sortBy }),
    });

    return { isLoading, bookings, error };
}