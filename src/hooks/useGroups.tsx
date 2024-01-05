import { useQuery } from '@tanstack/react-query'
import { getGroups } from '../api.ts'

function useGroups() {
    return useQuery({ queryKey: ['groups'], queryFn: getGroups, staleTime: Infinity });
}

export default useGroups;