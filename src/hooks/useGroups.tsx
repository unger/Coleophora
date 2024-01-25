import { useQuery } from "@tanstack/react-query";
import { getGroups, getCaseGroups } from "../api.ts";

function useGroups(stage: Stage) {
    switch (stage) {
        case "imago":
            return useQuery({
                queryKey: ["groups"],
                queryFn: getGroups,
                staleTime: Infinity,
            });
        case "case":
            return useQuery({
                queryKey: ["case-groups"],
                queryFn: getCaseGroups,
                staleTime: Infinity,
            });
        case "egg":
            throw new Error("Stadie egg not implemented");
    }
}

export default useGroups;
