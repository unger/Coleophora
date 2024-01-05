import useImagoPhotos from '../hooks/useImagoPhotos'
import PhotoDescription from './PhotoDescription';
import PhotoItem from './PhotoItem';

function ImagoPhotoList({taxon} : {taxon: Taxon}) {

  const { isPending, error, data, isFetching } = useImagoPhotos();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var filteredData = data.filter((item: TaxonPhoto) => item.slug === taxon.slug);

  return (
    <div>
      <h2>Imago - <small>({filteredData.length} bild{filteredData.length !== 1 && 'er'})</small></h2>
      <div className='large-thumbnails'>
        {
          filteredData.length === 0
          ? <div className='placeholder'>Ingen bild</div>
          : filteredData
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

export default ImagoPhotoList
