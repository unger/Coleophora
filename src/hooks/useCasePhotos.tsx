import { useQuery } from '@tanstack/react-query'
import { getCasePhotos } from '../api.ts'

function useCasePhotos() {
    return useQuery({ queryKey: ['case-photos'], queryFn: getCasePhotos, staleTime: Infinity });
}

export default useCasePhotos;