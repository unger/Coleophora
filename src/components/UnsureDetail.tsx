import { useParams } from 'react-router-dom'
import { usePhotos } from '../hooks'
import PhotoItem from './PhotoItem';
import PhotoDescription from './PhotoDescription';

function UnsureDetail() {
  let { slug } = useParams();

  const { isPending, error, data, isFetching } = usePhotos('imago', undefined, slug, true);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  if (data.length === 0) return 'Inga bilder hittade';

  return (
    <div>
      <h1>{data[0].name}? <small><em>{data[0].latin}?</em></small></h1>
      <div className='large-thumbnails'>
        {
          data.map((item: TaxonPhoto) => {
            return <div key={item.bildId}>
              <PhotoItem src={item.image}></PhotoItem>
              <PhotoDescription photo={item}></PhotoDescription>
            </div>
          })
        }
      </div>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default UnsureDetail
