import { useQuery } from '@tanstack/react-query'
import { getTaxons } from '../api.ts'

function useTaxons() {
    return useQuery({ queryKey: ['taxons'], queryFn: getTaxons, staleTime: Infinity });
}

export default useTaxons;