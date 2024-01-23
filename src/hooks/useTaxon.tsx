import { useQuery } from "@tanstack/react-query";
import { getTaxons } from "../api.ts";

function useTaxon(slug?: string) {
  return useQuery({
    queryKey: ["taxons"],
    queryFn: getTaxons,
    staleTime: Infinity,
    select: (data) => {
      const filteredResult = data.filter((item) => item.slug === slug);
      if (filteredResult.length === 0) {
        throw new Error("Ingen art med detta id");
      }

      return filteredResult[0];
    },
  });
}

export default useTaxon;
