import { ScrollRestoration, useParams } from 'react-router-dom'
import { useGroup } from '../hooks'
import GroupDetailTaxonList from './GroupDetailTaxonList';

function GroupDetail() {
  let { id } : { id?: ImagoGroupId} = useParams();

  const { isPending, error, data: group, isFetching } = useGroup('imago', id);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Grupp {group.id} - <small>{group.description}</small></h1>
      <GroupDetailTaxonList group={group}></GroupDetailTaxonList>
      {isFetching && <div>Updating...</div>}
      <ScrollRestoration></ScrollRestoration>
    </div>
  )
}

export default GroupDetail
