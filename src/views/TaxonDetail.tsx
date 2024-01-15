import { useParams } from 'react-router-dom'
import { useTaxon } from '../hooks'
import PhotoList from '../components/PhotoList';

function TaxonDetail() {
  let { slug } = useParams();

  const { isPending, error, data: taxon, isFetching } = useTaxon(slug);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{taxon.name} <small><em>{taxon.latin}</em> {taxon.auctor}</small></h1>

      <PhotoList taxon={taxon} stage={'imago'}></PhotoList>
      <PhotoList taxon={taxon} stage={'case'}></PhotoList>

      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default TaxonDetail
