import { useQuery } from '@tanstack/react-query'
import { getTaxons } from '../api.ts'

function useTaxons(groupId?: GroupId, filterFn?: (_: Taxon) => boolean) {
    return useQuery({
        queryKey: ['taxons'],
        queryFn: getTaxons,
        staleTime: Infinity,
        select: (data) => {
            if (groupId !== undefined) {
                data = data.filter((item) => item.group.includes(groupId))
                if (data.length === 0) {
                    throw new Error('Inga taxons med detta grupp id')
                }
            }

            if (filterFn !== undefined) {
                data = data.filter(filterFn)
            }

            return data
        },
    })
}

export default useTaxons
