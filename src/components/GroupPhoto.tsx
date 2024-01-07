import { Link } from 'react-router-dom';
import { usePhotos } from '../hooks'
import PhotoItem from './PhotoItem';

function GroupPhoto({ taxon, groupId }: { taxon: Taxon, groupId: GroupId }) {

    const { isPending, error, data, isFetching } = usePhotos('imago', groupId, taxon.slug, false);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    var firstImage = data.length > 0
        ? data[0]
        : undefined;

    return (
        <div>
            <Link to={`/taxon/${taxon.slug}`}>
                <PhotoItem src={taxon.image || firstImage?.image}></PhotoItem>
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
