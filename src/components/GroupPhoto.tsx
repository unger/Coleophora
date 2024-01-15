import { Link } from 'react-router-dom';
import { usePhotos } from '../hooks'
import PhotoItem from './PhotoItem';

function GroupPhoto({ taxon, group }: { taxon: Taxon, group: TaxonGroup }) {

    const { isPending, error, data, isFetching } = usePhotos(group.stage, group.id, taxon.slug, false);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    var firstImage = data.length > 0
        ? data[0]
        : undefined;

    return (
        <div>
            <Link to={`/taxon/${taxon.slug}`}>
                <PhotoItem src={firstImage?.image}></PhotoItem>
            </Link>
            <p className='text-center'>
                {taxon.redlist !== undefined && <span className='redlist'>{taxon.redlist}</span>}
                <b>{taxon.name}</b> <i>{taxon.latin}</i>
            </p>
            {isFetching && <div>Updating...</div>}
        </div>
    )
}

export default GroupPhoto
