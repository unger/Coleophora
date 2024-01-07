import { useQuery } from '@tanstack/react-query'
import { getTaxons } from '../api.ts'

function useTaxons(groupId?: GroupId) {
    return useQuery(
        { 
            queryKey: ['taxons'], 
            queryFn: getTaxons, 
            staleTime: Infinity,
            select: data => {
                if (groupId === undefined) return data;

                var filteredResult = data.filter(item => item.group.includes(groupId));
                if (filteredResult.length === 0) {
                    throw new Error("Inga taxons med detta grupp id");
                }

                return filteredResult;
            }            
        });
}

export default useTaxons;