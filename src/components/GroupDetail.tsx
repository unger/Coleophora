import { useParams } from 'react-router-dom'
import useGroups from '../hooks/useGroups'
import GroupDetailTaxonList from './GroupDetailTaxonList';

function GroupDetail() {
  let { id } = useParams();

  const { isPending, error, data, isFetching } = useGroups();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  var group = data.find(item => item.id == id);

  if (group === undefined) return "Invalid group";

  return (
    <div>
      <h1>Grupp {group.id} - <small>{group.description}</small></h1>
      <GroupDetailTaxonList group={group}></GroupDetailTaxonList>
      {isFetching && <div>Updating...</div>}
    </div>
  )
}

export default GroupDetail
