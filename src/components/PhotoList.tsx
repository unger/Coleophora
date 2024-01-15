import { usePhotos } from '../hooks'
import PhotoDescription from './PhotoDescription';
import PhotoItem from './PhotoItem';

function PhotoList({ taxon, stage }: { taxon: Taxon, stage: Stage }) {

  const { isPending, error, data, isFetching } = usePhotos(stage, undefined, taxon.slug, false);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h2>Imago - <small>({data.length} bild{data.length !== 1 && 'er'})</small></h2>
      <div className='large-thumbnails'>
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

export default PhotoList
