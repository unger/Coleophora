import { useParams } from 'react-router-dom';
import { useGroup } from '../hooks';
import CaseGroupDetailPhotos from './CaseGroupDetailPhotos';

function CaseGroupDetail() {
  let { id }: { id? : CaseGroupId} = useParams();

  const { isPending, error, data: group, isFetching } = useGroup('case', id);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{group.name} <small>{group.description}</small></h1>
      <CaseGroupDetailPhotos groupId={group.id}></CaseGroupDetailPhotos>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default CaseGroupDetail
