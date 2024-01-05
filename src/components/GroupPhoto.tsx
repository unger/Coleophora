import { Link } from 'react-router-dom';
import useImagoPhotos from '../hooks/useImagoPhotos'
import PhotoItem from './PhotoItem';

function GroupPhoto({ taxon, groupId }: { taxon: Taxon, groupId: string }) {

    const { isPending, error, data, isFetching } = useImagoPhotos();

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    var firstImage = data.find((item: TaxonPhoto) => 
        item.latin === taxon.latin
        && !item.unsure        
        && item.group.includes(groupId));

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
