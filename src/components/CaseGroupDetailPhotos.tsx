import { Link } from 'react-router-dom';
import { useCasePhotos } from '../hooks'
import PhotoItem from './PhotoItem';
import { reduceBy } from '../helpers'

function CaseGroupDetailPhotos({ groupId }: { groupId : string }) {
  const { isPending, error, data, isFetching } = useCasePhotos();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var filteredData = data.filter((item: TaxonPhoto) => item.group.includes(groupId));

  return (
    <div>
      <div className='small-thumbnails'>
        {
          reduceBy(filteredData, item => item.slug)
          .map((item: TaxonPhoto) => {
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
