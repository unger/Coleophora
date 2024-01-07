import { Link } from 'react-router-dom';
import { usePhotos } from '../hooks'
import PhotoItem from './PhotoItem';

function CaseGroupDetailPhotos({ groupId }: { groupId : GroupId }) {
  const { isPending, error, data, isFetching } = usePhotos('case', groupId, undefined, undefined, (item: TaxonPhoto) => item.slug);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <div className='small-thumbnails'>
        {
          data.map((item: TaxonPhoto) => {
            return <div key={item.bildId}>
              <Link to={`/taxon/${item.slug}`}>
                <PhotoItem src={item.image}></PhotoItem>
              </Link>
              <p className='text-center'>
                <b>{item.name}{item.unsure && '?'}</b> <i>{item.latin}{item.unsure && '?'}</i>
              </p>
            </div>
          })
        }
      </div>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default CaseGroupDetailPhotos
