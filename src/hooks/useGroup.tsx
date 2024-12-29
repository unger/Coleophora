import { useQuery } from "@tanstack/react-query";
import { getGroups, getCaseGroups } from "../api.ts";

function useGroup(stage: Stage, groupId?: GroupId) {
    switch (stage) {
        case "imago":
            return useQuery({
                queryKey: ["groups"],
                queryFn: getGroups,
                staleTime: Infinity,
                select: (data) => {
                    const filteredResult = data.filter((item) => item.id === groupId);
                    if (filteredResult.length === 0) {
                        throw new Error("Ingen grupp med detta id");
                    }

                    return filteredResult[0];
                },
            });
        case "case":
            return useQuery({
                queryKey: ["case-groups"],
                queryFn: getCaseGroups,
                staleTime: Infinity,
                select: (data) => {
                    const filteredResult = data.filter((item) => item.id === groupId);
                    if (filteredResult.length === 0) {
                        throw new Error("Ingen grupp med detta id");
                    }

                    return filteredResult[0];
                },
            });

        case "egg":
            throw new Error("Stadie egg not implemented");
    }
}

export default useGroup;
