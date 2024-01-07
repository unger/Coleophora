import { useParams } from 'react-router-dom'
import { useTaxon } from '../hooks'
import ImagoPhotoList from './ImagoPhotoList';
import CasePhotoList from './CasePhotoList';

function TaxonDetail() {
  let { slug } = useParams();

  const { isPending, error, data: taxon, isFetching } = useTaxon(slug);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{taxon.name} <small><em>{taxon.latin}</em> {taxon.auctor}</small></h1>

      <ImagoPhotoList taxon={taxon}></ImagoPhotoList>
      <CasePhotoList taxon={taxon}></CasePhotoList>

      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default TaxonDetail
