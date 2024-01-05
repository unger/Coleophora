import { useParams } from 'react-router-dom'
import useTaxons from '../hooks/useTaxons'
import ImagoPhotoList from './ImagoPhotoList';
import CasePhotoList from './CasePhotoList';

function TaxonDetail() {
  let { slug } = useParams();

  const { isPending, error, data, isFetching } = useTaxons();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var taxon = data.find(item => item.slug === slug);

  if (taxon === undefined) return <div>Taxon not found!</div>

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
