import { useParams } from 'react-router-dom'
import { usePhotos } from '../hooks'
import PhotoList from '../components/PhotoList'

function UnsureDetail() {
    const { slug } = useParams()

    const { isPending, error, data, isFetching } = usePhotos('imago', undefined, slug, true)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    if (data.length === 0) return 'Inga bilder hittade'

    return (
        <div>
            <h1>
                {data[0].name}?{' '}
                <small>
                    <em>{data[0].latin}?</em>
                </small>
            </h1>

            <PhotoList headline="Imago" slug={slug!} stage={'imago'} inData={data}></PhotoList>

            {isFetching && <div>Updating...</div>}
        </div>
    )
}

export default UnsureDetail
