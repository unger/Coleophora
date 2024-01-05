import { useParams } from 'react-router-dom'
import { useImagoPhotos } from '../hooks'
import PhotoItem from './PhotoItem';
import PhotoDescription from './PhotoDescription';

function UnsureDetail() {
  let { slug } = useParams();

  const { isPending, error, data, isFetching } = useImagoPhotos();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var filteredData = data.filter((item: TaxonPhoto) => item.slug === slug);

  if (filteredData.length === 0) return 'Inga bilder hittade';

  return (
    <div>
      <h1>{filteredData[0].name}? <small><em>{filteredData[0].latin}?</em></small></h1>
      <div className='large-thumbnails'>
        {
          filteredData
          .map((item: TaxonPhoto) => {
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
