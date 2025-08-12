import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    // 1. Filter 
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

    // 2. Sort
    const sortByRow = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortByRow.split("-");
    const sortBy = { field, direction };

    // 3. Pagination
    const page = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));


    // custom hook from react query we gonna provide object with 2 things
    // 1.querykey = will uniqeuly Identify the query needs to be an array
    // 2. the function that's gonna fetch the data from the api and needs to return a promise

    // Query
    const {
        isPending,
        data: { data: bookings, count } = {},
        error,
    } = useQuery({
        queryKey: ["bookings", filter, sortBy, page], // to solve the problem of react query to refetch the data whenever the filter change "like a dependency"
        queryFn: () => getBookings({ filter, sortBy, page }),
    });

    // Pre-fetching
    const pageCount = Math.ceil(count / PAGE_SIZE);
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page + 1], // to solve the problem of react query to refetch the data whenever the filter change "like a dependency"
            queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
        })

    if (page > pageCount)
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page + 1], // to solve the problem of react query to refetch the data whenever the filter change "like a dependency"
            queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
        })

    return { isPending, bookings, error, count };
}