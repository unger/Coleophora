import { usePhotos } from '../hooks'
import PhotoDescription from './PhotoDescription';
import PhotoItem from './PhotoItem';

function CasePhotoList({ taxon }: { taxon: Taxon }) {

  const { isPending, error, data, isFetching } = usePhotos('case', undefined, taxon.slug);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h2>Säck - <small>({data.length} bild{data.length !== 1 && 'er'})</small></h2>
      <div className='small-thumbnails'>
        {
          data.length === 0
            ? <div className='placeholder'>Ingen bild</div>
            : data.map((item: TaxonPhoto) => {
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

export default CasePhotoList
