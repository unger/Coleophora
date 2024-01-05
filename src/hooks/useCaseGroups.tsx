import { useQuery } from '@tanstack/react-query'
import { getCaseGroups } from '../api.ts'

function useCaseGroups() {
    return useQuery({ queryKey: ['case-groups'], queryFn: getCaseGroups, staleTime: Infinity });
}

export default useCaseGroups;