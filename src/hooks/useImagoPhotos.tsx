import { useQuery } from '@tanstack/react-query'
import { getImagoPhotos } from '../api.ts'

function useImagoPhotos() {
    return useQuery({ queryKey: ['imago-photos'], queryFn: getImagoPhotos, staleTime: Infinity });
}

export default useImagoPhotos;