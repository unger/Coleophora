import { useParams } from 'react-router-dom';
import { useCaseGroups } from '../hooks';
import CaseGroupDetailPhotos from './CaseGroupDetailPhotos';

function CaseGroupDetail() {
  let { id } = useParams();

  const { isPending, error, data, isFetching } = useCaseGroups();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var group = data.find((item: TaxonGroup) => item.id == id);

  if (group === undefined) return 'Group not found';

  return (
    <div>
      <h1>{group.name} <small>{group.description}</small></h1>
      <CaseGroupDetailPhotos groupId={group.id}></CaseGroupDetailPhotos>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default CaseGroupDetail
