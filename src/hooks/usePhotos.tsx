import { useQuery } from "@tanstack/react-query";
import { getImagoPhotos, getCasePhotos } from "../api.ts";
import { reduceBy } from "../helpers";

function usePhotos(
  stage: Stage,
  groupId?: GroupId,
  slug?: string,
  unsure?: boolean,
  reduceByFn?: (item: TaxonPhoto) => string
) {
  function selectItems(data: TaxonPhoto[]): TaxonPhoto[] {
    if (groupId) {
      data = data.filter((item) => item.group.includes(groupId));
    }

    if (slug) {
      data = data.filter((item) => item.slug === slug);
    }

    if (unsure != undefined) {
      data = data.filter((item) => item.unsure === unsure);
    }

    if (reduceByFn) {
      data = reduceBy(data, reduceByFn);
    }

    return data;
  }

  switch (stage) {
    case "imago":
      return useQuery({
        queryKey: ["imago-photos"],
        queryFn: getImagoPhotos,
        staleTime: Infinity,
        select: selectItems,
      });
    case "case":
      return useQuery({
        queryKey: ["case-photos"],
        queryFn: getCasePhotos,
        staleTime: Infinity,
        select: selectItems,
      });
    case "egg":
      throw new Error("Stage egg not implemented");
  }
}

export default usePhotos;
